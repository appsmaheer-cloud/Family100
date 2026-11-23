(() => {
    'use strict';

    const STORAGE_KEY = 'quiz_studio_scoreboard_v1';
    const WIN_NAME_PREFIX = '__QS_BOARD__:';

    const TEAM_THEMES = [
        { color: 'red', icon: '🔥', defaultName: 'Tim Merah' },
        { color: 'blue', icon: '⚡', defaultName: 'Tim Biru' },
        { color: 'gold', icon: '👑', defaultName: 'Tim Emas' },
        { color: 'emerald', icon: '🦁', defaultName: 'Tim Hijau' },
        { color: 'purple', icon: '🚀', defaultName: 'Tim Ungu' },
        { color: 'cyan', icon: '💎', defaultName: 'Tim Cyan' },
        { color: 'rose', icon: '🦅', defaultName: 'Tim Pink' },
        { color: 'indigo', icon: '🌟', defaultName: 'Tim Indigo' },
    ];

    let lastObservedAt = 0;

    function createDefaultTeams() {
        return [
            { name: 'Tim Merah', score: 0, color: 'red', icon: '🔥' },
            { name: 'Tim Biru', score: 0, color: 'blue', icon: '⚡' },
            { name: 'Tim Emas', score: 0, color: 'gold', icon: '👑' },
        ];
    }

    function sanitizeState(raw) {
        if (!raw || !Array.isArray(raw.teams) || raw.teams.length === 0) {
            return {
                teams: createDefaultTeams(),
                activeTeam: 0,
                updatedAt: 0,
            };
        }

        const teams = raw.teams.slice(0, 8).map((t, idx) => {
            const theme = TEAM_THEMES[idx % TEAM_THEMES.length];
            const validColor = TEAM_THEMES.some((th) => th.color === t?.color) ? t.color : theme.color;
            const numScore = Number(t?.score);
            return {
                name: typeof t?.name === 'string' ? t.name.slice(0, 20) : theme.defaultName,
                score: Number.isFinite(numScore) ? Math.max(0, Math.round(numScore)) : 0,
                color: validColor,
                icon: typeof t?.icon === 'string' && t.icon ? t.icon : theme.icon,
            };
        });

        const rawActive = Number(raw.activeTeam);
        const activeTeam = Number.isInteger(rawActive) && rawActive >= 0 && rawActive < teams.length ? rawActive : 0;
        const updatedAt = Number.isFinite(Number(raw.updatedAt)) ? Number(raw.updatedAt) : 0;
        return { teams, activeTeam, updatedAt };
    }

    function readRaw(str) {
        if (!str) return null;
        try {
            const parsed = JSON.parse(str);
            if (!parsed || !Array.isArray(parsed.teams) || parsed.teams.length === 0) return null;
            return sanitizeState(parsed);
        } catch (e) {
            return null;
        }
    }

    function load() {
        let fromLs = null;
        let fromWin = null;

        try {
            fromLs = readRaw(window.localStorage.getItem(STORAGE_KEY));
        } catch (e) { /* Abaikan jika akses storage dibatasi */ }

        try {
            if (typeof window.name === 'string' && window.name.startsWith(WIN_NAME_PREFIX)) {
                fromWin = readRaw(window.name.slice(WIN_NAME_PREFIX.length));
            }
        } catch (e) { /* Abaikan */ }

        let chosen = null;
        if (fromLs && fromWin) {
            chosen = fromWin.updatedAt > fromLs.updatedAt ? fromWin : fromLs;
        } else {
            chosen = fromLs || fromWin;
        }

        if (!chosen) {
            chosen = { teams: createDefaultTeams(), activeTeam: 0, updatedAt: 0 };
        }
        lastObservedAt = chosen.updatedAt;
        return chosen;
    }

    function save(teams, activeTeam, customUpdatedAt) {
        const updatedAt = Number.isFinite(Number(customUpdatedAt))
            ? Number(customUpdatedAt)
            : Math.max(Date.now(), lastObservedAt + 1);
        const normalized = sanitizeState({ teams, activeTeam, updatedAt });
        lastObservedAt = normalized.updatedAt;
        const serialized = JSON.stringify(normalized);

        try {
            window.localStorage.setItem(STORAGE_KEY, serialized);
        } catch (e) { /* Abaikan */ }

        try {
            if (!window.name || window.name.startsWith(WIN_NAME_PREFIX)) {
                window.name = WIN_NAME_PREFIX + serialized;
            }
        } catch (e) { /* Abaikan */ }

        return normalized;
    }

    function resetScores() {
        const cur = load();
        const resetTeams = cur.teams.map((t) => ({ ...t, score: 0 }));
        return save(resetTeams, cur.activeTeam);
    }

    function subscribe(onUpdate) {
        if (typeof onUpdate !== 'function') return () => {};
        const checkAndNotify = (force = false) => {
            const prevAt = lastObservedAt;
            const fresh = load();
            if (force || fresh.updatedAt !== prevAt) {
                onUpdate(fresh);
            }
        };
        const onStorage = (e) => {
            if (!e || e.key === null || e.key === STORAGE_KEY) checkAndNotify(true);
        };
        const onPageShow = (e) => {
            if (e && e.persisted) checkAndNotify(false);
        };
        const onVisibility = () => {
            if (document.visibilityState === 'visible') checkAndNotify(false);
        };
        window.addEventListener('storage', onStorage);
        window.addEventListener('pageshow', onPageShow);
        document.addEventListener('visibilitychange', onVisibility);
        return () => {
            window.removeEventListener('storage', onStorage);
            window.removeEventListener('pageshow', onPageShow);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }

    window.QuizScoreboard = Object.freeze({
        STORAGE_KEY,
        TEAM_THEMES,
        createDefaultTeams,
        load,
        save,
        resetScores,
        subscribe,
    });
})();
