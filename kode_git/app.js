(() => {
    'use strict';

    const EXAMPLE_QUESTIONS = [
        {
            id: 1,
            question: 'Selain Ms. Power BI, apa tools analisis data yang populer digunakan?',
            is_example: true,
            answers: [
                { id: 101, answer_text: 'TABLEAU', points: 100 },
                { id: 102, answer_text: 'LOOKER', points: 90 },
                { id: 103, answer_text: 'EXCEL', points: 80 },
                { id: 104, answer_text: 'GOOGLESHEET', points: 70 },
                { id: 105, answer_text: 'PYTHON', points: 60 },
                { id: 106, answer_text: 'R', points: 50 },
                { id: 107, answer_text: 'SQL', points: 40 },
                { id: 108, answer_text: 'APACHE SPARK', points: 30 },
            ],
        },
        {
            id: 2,
            question: 'Selain Bar Chart, apa grafik yang paling populer digunakan?',
            is_example: true,
            answers: [
                { id: 201, answer_text: 'LINE', points: 100 },
                { id: 202, answer_text: 'PIE', points: 90 },
                { id: 203, answer_text: 'TABLE', points: 80 },
                { id: 204, answer_text: 'SCATTER', points: 70 },
                { id: 205, answer_text: 'WATERFALL', points: 60 },
                { id: 206, answer_text: 'HISTOGRAM', points: 50 },
                { id: 207, answer_text: 'MAP', points: 40 },
                { id: 208, answer_text: 'GANTT', points: 30 },
            ],
        },
        {
            id: 3,
            question: 'Selain rumus SUM, apa rumus yang sering digunakan di Excel?',
            is_example: true,
            answers: [
                { id: 301, answer_text: 'AVERAGE', points: 100 },
                { id: 302, answer_text: 'VLOOKUP', points: 90 },
                { id: 303, answer_text: 'HLOOKUP', points: 80 },
                { id: 304, answer_text: 'IF', points: 70 },
                { id: 305, answer_text: 'MAX', points: 60 },
                { id: 306, answer_text: 'MIN', points: 50 },
                { id: 307, answer_text: 'COUNT', points: 40 },
                { id: 308, answer_text: 'INDEX', points: 30 },
            ],
        },
        {
            id: 4,
            question: 'Selain Excel, apa connector data yang ada di Power BI?',
            is_example: true,
            answers: [
                { id: 401, answer_text: 'PDF', points: 100 },
                { id: 402, answer_text: 'CSV', points: 90 },
                { id: 403, answer_text: 'WEB', points: 80 },
                { id: 404, answer_text: 'FOLDER', points: 70 },
                { id: 405, answer_text: 'ORACLE', points: 60 },
                { id: 406, answer_text: 'SQL SERVER', points: 50 },
                { id: 407, answer_text: 'SHAREPOINT', points: 40 },
                { id: 408, answer_text: 'SAP', points: 30 },
            ],
        },
        {
            id: 5,
            question: 'Apa Yang Dilakukan Anak Saat Ketahuan Berbohong…..?',
            is_example: true,
            answers: [
                { id: 501, answer_text: 'MINTA MAAF', points: 100 },
                { id: 502, answer_text: 'MENANGIS', points: 90 },
                { id: 503, answer_text: 'CENGENGESAN', points: 80 },
                { id: 504, answer_text: 'MALU', points: 70 },
                { id: 505, answer_text: 'GUGUP', points: 60 },
                { id: 506, answer_text: 'MENCARI ALASAN', points: 50 },
                { id: 507, answer_text: 'PURA PURA LUPA', points: 40 },
                { id: 508, answer_text: 'DIAM', points: 30 },
            ],
        },
        {
            id: 6,
            question: 'Apa Yang Dilakukan Orang Ketika Ada Masalah',
            is_example: true,
            answers: [
                { id: 601, answer_text: 'MENANGIS', points: 100 },
                { id: 602, answer_text: 'MELAMUN', points: 90 },
                { id: 603, answer_text: 'MINTA BANTUAN', points: 80 },
                { id: 604, answer_text: 'BERDOA', points: 70 },
                { id: 605, answer_text: 'MENCARI SOLUSI', points: 60 },
                { id: 606, answer_text: 'CURHAT', points: 50 },
                { id: 607, answer_text: 'MARAH-MARAH', points: 40 },
                { id: 608, answer_text: 'JALAN-JALAN', points: 30 },
            ],
        },
        {
            id: 7,
            question: 'Apa yang membuat orang dijauhi',
            is_example: true,
            answers: [
                { id: 701, answer_text: 'BAU', points: 100 },
                { id: 702, answer_text: 'NYEBELIN', points: 90 },
                { id: 703, answer_text: 'SOMBONG', points: 80 },
                { id: 704, answer_text: 'SUKA PINJAM DUIT', points: 70 },
                { id: 705, answer_text: 'KASAR', points: 60 },
                { id: 706, answer_text: 'TIDAK DIPERCAYA', points: 50 },
                { id: 707, answer_text: 'JAHAT', points: 40 },
                { id: 708, answer_text: 'EGOIS', points: 30 },
            ],
        },
        {
            id: 8,
            question: 'Apa permainan tradisional yang dilakukan sambil nyanyi?',
            is_example: true,
            answers: [
                { id: 801, answer_text: 'ULAR NAGA', points: 100 },
                { id: 802, answer_text: 'AMPAR AMPAR PISANG', points: 90 },
                { id: 803, answer_text: 'CUBLEK CUBLEK SUWENG', points: 80 },
                { id: 804, answer_text: 'DOMIKADO', points: 70 },
            ],
        },
        {
            id: 9,
            question: 'Apa kata Belanda yang digunakan orang Indonesia?',
            is_example: true,
            answers: [
                { id: 901, answer_text: 'BRUG', points: 100 },
                { id: 902, answer_text: 'GORDIJN', points: 90 },
                { id: 903, answer_text: 'HANDDOEK', points: 80 },
                { id: 904, answer_text: 'SPOOR', points: 70 },
                { id: 905, answer_text: 'GRATIS', points: 60 },
            ],
        },
        {
            id: 10,
            question: 'Apa nama bunga yang suka dijadikan nama jalan?',
            is_example: true,
            answers: [
                { id: 1001, answer_text: 'BUGENVIL', points: 100 },
                { id: 1002, answer_text: 'KAMBOJA', points: 90 },
                { id: 1003, answer_text: 'KENANGA', points: 80 },
                { id: 1004, answer_text: 'LILY', points: 70 },
                { id: 1005, answer_text: 'ANGGREK', points: 60 },
                { id: 1006, answer_text: 'MAWAR', points: 50 },
                { id: 1007, answer_text: 'AZALEA', points: 40 },
            ],
        },
        {
            id: 11,
            question: 'Apa yang orang lakukan ketika banyak uang?',
            is_example: true,
            answers: [
                { id: 1101, answer_text: 'MEMBELI PROPERTY', points: 100 },
                { id: 1102, answer_text: 'MEMBELI EMAS', points: 90 },
                { id: 1103, answer_text: 'MEMBELI KENDARAAN', points: 80 },
                { id: 1104, answer_text: 'BERLIBUR', points: 70 },
                { id: 1105, answer_text: 'MENABUNG', points: 60 },
            ],
        },
    ];

    const STORAGE_KEY_QUESTIONS = 'family100_gas_local_questions_v1';
    const STORAGE_KEY_GAS_URL = 'family100_gas_webapp_url';
    const DEFAULT_GAS_URL = 'https://script.google.com/macros/s/AKfycbyrbhRx6eGu2xma2SGsiYpbKQhHX23AC9GvPj3BVDacwwQUTD16viQcZNPP5NncZ2gRzw/exec';

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

    const state = {
        gasUrl: localStorage.getItem(STORAGE_KEY_GAS_URL) || DEFAULT_GAS_URL,
        questions: [],
        currentIndex: 0,
        revealedIds: new Set(),
        teams: [
            { name: 'Tim Merah', score: 0, color: 'red', icon: '🔥' },
            { name: 'Tim Biru', score: 0, color: 'blue', icon: '⚡' },
            { name: 'Tim Emas', score: 0, color: 'gold', icon: '👑' },
        ],
        activeTeam: 0,
        strikes: 0,
        soundEnabled: true,
        audioCtx: null,
    };

    const el = {
        modeIndicator: document.getElementById('mode-indicator'),
        select: document.getElementById('question-select'),
        btnRandom: document.getElementById('btn-random'),
        btnManage: document.getElementById('btn-manage'),
        btnGasConfig: document.getElementById('btn-gas-config'),
        btnSound: document.getElementById('btn-sound'),
        btnFullscreen: document.getElementById('btn-fullscreen'),
        btnTheme: document.getElementById('btn-theme'),
        startOverlay: document.getElementById('start-overlay'),
        btnStartGame: document.getElementById('btn-start-game'),
        confettiLayer: document.getElementById('confetti-layer'),
        activeTurnLabel: document.getElementById('active-turn-label'),
        hostSpeech: document.getElementById('host-speech'),
        studioAudience: document.getElementById('studio-audience'),
        qNumber: document.getElementById('question-number'),
        qText: document.getElementById('question-text'),
        board: document.getElementById('answer-board'),
        form: document.getElementById('answer-form'),
        input: document.getElementById('answer-input'),
        feedback: document.getElementById('feedback-msg'),
        teamsContainer: document.getElementById('studio-arena'),
        teamsLeft: document.getElementById('teams-left'),
        teamsRight: document.getElementById('teams-right'),
        btnAddTeam: document.getElementById('btn-add-team'),
        btnTetot: document.getElementById('btn-tetot'),
        revealedCount: document.getElementById('revealed-count'),
        strikes: document.getElementById('strike-indicators'),
        history: document.getElementById('guess-history'),
        btnRevealAll: document.getElementById('btn-reveal-all'),
        btnResetRound: document.getElementById('btn-reset-round'),
        btnResetScores: document.getElementById('btn-reset-scores'),
        wrongOverlay: document.getElementById('wrong-overlay'),
        gasModal: document.getElementById('gas-modal'),
        gasConfigForm: document.getElementById('gas-config-form'),
        gasUrlInput: document.getElementById('gas-url-input'),
        modal: document.getElementById('manage-modal'),
        addQuestionForm: document.getElementById('add-question-form'),
        newQuestionText: document.getElementById('new-question-text'),
        newAnswersList: document.getElementById('new-answers-list'),
        btnAddAnswerRow: document.getElementById('btn-add-answer-row'),
        savedQuestionsList: document.getElementById('saved-questions-list'),
    };

    function getAudioCtx() {
        if (!state.audioCtx) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (Ctx) state.audioCtx = new Ctx();
        }
        if (state.audioCtx && state.audioCtx.state === 'suspended') {
            state.audioCtx.resume().catch(() => {});
        }
        return state.audioCtx;
    }

    function playStartFanfare() {
        if (!state.soundEnabled) return;
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        [392.0, 523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            gain.gain.setValueAtTime(0.22, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.32);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.34);
        });
    }

    function playCorrectSound() {
        if (!state.soundEnabled) return;
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = idx < 3 ? 'triangle' : 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.055);
            gain.gain.setValueAtTime(0.24, now + idx * 0.055);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.055 + 0.42);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.055);
            osc.stop(now + idx * 0.055 + 0.44);
        });

        const bufferSize = Math.floor(ctx.sampleRate * 0.65);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.25));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1400;
        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.14, now + 0.12);
        nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.72);
        noise.connect(filter);
        filter.connect(nGain);
        nGain.connect(ctx.destination);
        noise.start(now + 0.12);
    }

    function playWrongSound() {
        if (!state.soundEnabled) return;
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        [
            { freq: 195, start: 0, dur: 0.15 },
            { freq: 118, start: 0.17, dur: 0.52 },
        ].forEach((tone) => {
            [0, 4].forEach((detune) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = detune === 0 ? 'sawtooth' : 'square';
                osc.frequency.setValueAtTime(tone.freq + detune, now + tone.start);
                gain.gain.setValueAtTime(0.22, now + tone.start);
                gain.gain.exponentialRampToValueAtTime(0.001, now + tone.start + tone.dur);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + tone.start);
                osc.stop(now + tone.start + tone.dur + 0.02);
            });
        });
    }

    function normalizeText(text) {
        return String(text || '')
            .toUpperCase()
            .trim()
            .replace(/[^\p{L}\p{N}\s]/gu, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    const SYNONYM_GROUPS = [
        ['MENANGIS', 'NANGIS', 'MEWEK', 'BERSEDIH', 'SEDIH'],
        ['MINTA MAAF', 'MEMINTA MAAF', 'MOHON MAAF', 'MAAF', 'AMPUN'],
        ['MINTA BANTUAN', 'MINTA TOLONG', 'TOLONG', 'BANTUAN', 'MEMBANTU'],
        ['BERDOA', 'DOA', 'SHOLAT', 'SALAT', 'SEMBAHYANG', 'IBADAH', 'BERIBADAH'],
        ['MENCARI SOLUSI', 'CARI SOLUSI', 'SOLUSI', 'PENYELESAIAN', 'JALAN KELUAR'],
        ['CURHAT', 'CERITA', 'BERCERITA', 'NGOBROL', 'SHARING'],
        ['MARAH MARAH', 'MARAH', 'NGAMUK', 'EMOSI', 'KESAL', 'MENGAMUK'],
        ['JALAN JALAN', 'LIBURAN', 'PIKNIK', 'HEALING', 'REFRESHING', 'REKREASI', 'TRAVELING', 'BERLIBUR'],
        ['MELAMUN', 'NGELAMUN', 'LAMUN', 'TERMENUNG', 'MELONGO'],
        ['DIAM', 'DIEM', 'BUNGKAM', 'PENDIAM', 'MENENG'],
        ['CENGENGESAN', 'KETAWA', 'TERTAWA', 'NYENGIR', 'SENYUM', 'CEKIKIKAN'],
        ['GUGUP', 'GROGI', 'NERVOUS', 'PANIK', 'GEMETAR'],
        ['MENCARI ALASAN', 'CARI ALASAN', 'NGELES', 'ALASAN', 'BERDALIH'],
        ['PURA PURA LUPA', 'LUPA', 'NGAKU LUPA', 'TIDAK INGAT'],
        ['BAU', 'BAU BADAN', 'KETEK', 'BUSUK', 'APEK'],
        ['NYEBELIN', 'MENYEBALKAN', 'SEBEL', 'RESE', 'MENJENGKELKAN'],
        ['SOMBONG', 'ANGKUH', 'CONGKAK', 'BELAGU', 'AROGAN', 'SONGONG'],
        ['SUKA PINJAM DUIT', 'PINJAM DUIT', 'PINJAM UANG', 'NGUTANG', 'HUTANG', 'UTANG', 'MINJAM DUIT'],
        ['KASAR', 'GALAK', 'TIDAK SOPAN'],
        ['TIDAK DIPERCAYA', 'PEMBOHONG', 'PENGKHIANAT', 'BOHONG'],
        ['JAHAT', 'KEJAM', 'LICIK', 'NAKAL'],
        ['EGOIS', 'SERAKAH', 'PELIT', 'KIKIR', 'MAU MENANG SENDIRI'],
        ['MEMBELI PROPERTY', 'BELI PROPERTY', 'PROPERTI', 'RUMAH', 'TANAH', 'APARTEMEN', 'RUKO', 'BELI RUMAH'],
        ['MEMBELI EMAS', 'BELI EMAS', 'EMAS', 'LOGAM MULIA', 'PERHIASAN', 'ANTAM'],
        ['MEMBELI KENDARAAN', 'BELI KENDARAAN', 'MOBIL', 'MOTOR', 'BELI MOBIL', 'BELI MOTOR'],
        ['MENABUNG', 'NABUNG', 'TABUNGAN', 'INVESTASI', 'DEPOSITO', 'SIMPAN UANG'],
        ['GOOGLESHEET', 'GOOGLE SHEET', 'GOOGLE SHEETS', 'SPREADSHEET', 'GSHEET'],
        ['SQL SERVER', 'MSSQL', 'SQLSERVER'],
        ['APACHE SPARK', 'SPARK', 'PYSPARK'],
        ['GRATIS', 'FREE', 'CUMA CUMA'],
        ['BRUG', 'JEMBATAN'],
        ['GORDIJN', 'GORDEN', 'HORDENG', 'TIRAI'],
        ['HANDDOEK', 'HANDUK'],
        ['SPOOR', 'SEPUR', 'KERETA'],
    ];

    function expandVariants(normText) {
        const variants = new Set([normText]);
        const stripped = normText.replace(/\b(MENG|MEM|MEN|ME|BER)([A-Z]{3,})/g, '$2');
        if (stripped && stripped !== normText) variants.add(stripped);
        for (const group of SYNONYM_GROUPS) {
            if (group.some((t) => normText === t || (normText.length >= 4 && t.includes(normText)))) {
                group.forEach((t) => variants.add(t));
            }
        }
        return Array.from(variants);
    }

    function isMatch(normAnswer, normGuess) {
        const ansVariants = expandVariants(normAnswer);
        const guessVariants = expandVariants(normGuess);
        for (const av of ansVariants) {
            for (const gv of guessVariants) {
                if (av === gv) return true;
                if (av.length <= 2 || gv.length <= 2) {
                    if (av.split(' ').includes(gv)) return true;
                    continue;
                }
                if (av.includes(gv) || gv.includes(av)) return true;
            }
        }
        return false;
    }

    function loadLocalQuestions() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_QUESTIONS);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
        } catch (_) {}
        return structuredClone(EXAMPLE_QUESTIONS);
    }

    function saveLocalQuestions() {
        localStorage.setItem(STORAGE_KEY_QUESTIONS, JSON.stringify(state.questions));
    }

    async function loadQuestions() {
        if (state.gasUrl) {
            el.modeIndicator.textContent = 'Terhubung ke Google Apps Script (Sheets)';
            try {
                const url = `${state.gasUrl}?action=questions`;
                const res = await fetch(url);
                const data = await res.json();
                if (data.ok && Array.isArray(data.data)) {
                    state.questions = data.data;
                    populateSelect();
                    resetRound();
                    return;
                }
            } catch (_) {
                el.modeIndicator.textContent = 'Gagal konek GAS — memakai data contoh lokal';
            }
        } else {
            el.modeIndicator.textContent = 'Mode Contoh Lokal (Siap GitHub Pages & GAS)';
        }
        state.questions = loadLocalQuestions();
        populateSelect();
        resetRound();
    }

    function currentQuestion() {
        return state.questions[state.currentIndex] || null;
    }

    function populateSelect() {
        el.select.textContent = '';
        state.questions.forEach((q, idx) => {
            const opt = document.createElement('option');
            opt.value = String(idx);
            const prefix = q.is_example ? '[Contoh] ' : '';
            opt.textContent = `${idx + 1}. ${prefix}${q.question}`;
            el.select.appendChild(opt);
        });
        el.select.value = String(state.currentIndex);
    }

    function renderBoard() {
        const q = currentQuestion();
        el.board.textContent = '';
        if (!q) {
            el.qNumber.textContent = 'Kosong';
            el.qText.textContent = 'Belum ada pertanyaan.';
            el.revealedCount.textContent = '0 / 0';
            return;
        }

        el.qNumber.textContent = `Soal #${state.currentIndex + 1}${q.is_example ? ' (Contoh)' : ''}`;
        el.qText.textContent = q.question;

        const answers = Array.isArray(q.answers) ? q.answers : [];
        answers.forEach((ans, idx) => {
            const isRevealed = state.revealedIds.has(Number(ans.id));
            const row = document.createElement('div');
            row.className = isRevealed ? 'answer-slot revealed' : 'answer-slot';

            const num = document.createElement('div');
            num.className = 'slot-num';
            num.textContent = String(idx + 1);

            const txt = document.createElement('div');
            txt.className = isRevealed ? 'slot-text' : 'slot-text hidden-mask';
            txt.textContent = isRevealed ? ans.answer_text : '• • • • • • • •';

            const pts = document.createElement('div');
            pts.className = 'slot-points';
            pts.textContent = String(ans.points);

            row.append(num, txt, pts);
            el.board.appendChild(row);
        });

        el.revealedCount.textContent = `${state.revealedIds.size} / ${answers.length}`;
        renderTeamScores();
        const boxes = el.strikes.querySelectorAll('.strike-box');
        boxes.forEach((box, idx) => box.classList.toggle('active', idx < state.strikes));
    }

    function getTeamName(index) {
        const team = state.teams[index];
        return (team && team.name.trim()) ? team.name.trim() : `Tim ${index + 1}`;
    }

    function createContestantsSvg() {
        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('viewBox', '0 0 150 64');
        svg.setAttribute('class', 'contestants-svg');
        svg.setAttribute('aria-hidden', 'true');

        const robots = [
            { cx: 34, cls: 'person person-left', shirt: 'shirt-a' },
            { cx: 75, cls: 'person person-center', shirt: 'shirt-b' },
            { cx: 116, cls: 'person person-right', shirt: 'shirt-a' },
        ];

        robots.forEach((p) => {
            const g = document.createElementNS(ns, 'g');
            g.setAttribute('class', p.cls);

            const ant = document.createElementNS(ns, 'line');
            ant.setAttribute('x1', String(p.cx));
            ant.setAttribute('y1', '4');
            ant.setAttribute('x2', String(p.cx));
            ant.setAttribute('y2', '11');
            ant.setAttribute('class', 'robot-antenna');

            const bulb = document.createElementNS(ns, 'circle');
            bulb.setAttribute('cx', String(p.cx));
            bulb.setAttribute('cy', '3.5');
            bulb.setAttribute('r', '2.5');
            bulb.setAttribute('class', 'robot-bulb');

            const head = document.createElementNS(ns, 'rect');
            head.setAttribute('x', String(p.cx - 12));
            head.setAttribute('y', '11');
            head.setAttribute('width', '24');
            head.setAttribute('height', '19');
            head.setAttribute('rx', '6');
            head.setAttribute('class', 'robot-head');

            const visor = document.createElementNS(ns, 'rect');
            visor.setAttribute('x', String(p.cx - 9));
            visor.setAttribute('y', '16');
            visor.setAttribute('width', '18');
            visor.setAttribute('height', '8');
            visor.setAttribute('rx', '4');
            visor.setAttribute('class', 'robot-visor');

            const eyeL = document.createElementNS(ns, 'circle');
            eyeL.setAttribute('cx', String(p.cx - 4));
            eyeL.setAttribute('cy', '20');
            eyeL.setAttribute('r', '1.8');
            eyeL.setAttribute('class', 'robot-eye');

            const eyeR = document.createElementNS(ns, 'circle');
            eyeR.setAttribute('cx', String(p.cx + 4));
            eyeR.setAttribute('cy', '20');
            eyeR.setAttribute('r', '1.8');
            eyeR.setAttribute('class', 'robot-eye');

            const body = document.createElementNS(ns, 'path');
            body.setAttribute('d', `M${p.cx - 15} 64 L${p.cx - 12} 34 C${p.cx - 12} 32, ${p.cx + 12} 32, ${p.cx + 12} 34 L${p.cx + 15} 64 Z`);
            body.setAttribute('class', `person-body ${p.shirt}`);

            const armL = document.createElementNS(ns, 'path');
            armL.setAttribute('d', `M${p.cx - 12} 38 L${p.cx - 21} 49`);
            armL.setAttribute('class', 'robot-arm robot-arm-l');

            const armR = document.createElementNS(ns, 'path');
            armR.setAttribute('d', `M${p.cx + 12} 38 L${p.cx + 21} 49`);
            armR.setAttribute('class', 'robot-arm robot-arm-r');

            g.append(ant, bulb, head, visor, eyeL, eyeR, armL, armR, body);
            svg.appendChild(g);
        });

        return svg;
    }

    function renderTeamScores() {
        if (!el.teamsLeft || !el.teamsRight) return;
        const sortedIndices = state.teams.map((_, i) => i).sort((a, b) => state.teams[b].score - state.teams[a].score);
        el.teamsLeft.textContent = '';
        el.teamsRight.textContent = '';

        state.teams.forEach((team, idx) => {
            const isAct = idx === state.activeTeam;
            const unit = document.createElement('div');
            unit.className = `podium-unit podium-${team.color}${isAct ? ' active' : ''}`;
            unit.dataset.team = String(idx);
            unit.setAttribute('role', 'button');
            unit.setAttribute('tabindex', '0');
            unit.setAttribute('aria-pressed', String(isAct));

            const crew = document.createElement('div');
            crew.className = 'podium-contestants';
            if (isAct) {
                const bubble = document.createElement('span');
                bubble.className = 'discuss-bubble';
                bubble.textContent = '💬';
                crew.appendChild(bubble);
            }
            crew.appendChild(createContestantsSvg());

            const desk = document.createElement('div');
            desk.className = 'podium-3d-body';

            const topCounter = document.createElement('div');
            topCounter.className = 'podium-desk-top';

            const buzzer = document.createElement('div');
            buzzer.className = 'podium-buzzer';
            buzzer.setAttribute('aria-hidden', 'true');
            topCounter.appendChild(buzzer);

            const rank = document.createElement('span');
            rank.className = 'podium-rank';
            rank.textContent = `#${sortedIndices.indexOf(idx) + 1}`;

            if (state.teams.length > 1) {
                const btnRemove = document.createElement('button');
                btnRemove.type = 'button';
                btnRemove.className = 'podium-remove';
                btnRemove.dataset.removeTeam = String(idx);
                btnRemove.title = 'Hapus tim';
                btnRemove.setAttribute('aria-label', `Hapus ${team.name}`);
                btnRemove.textContent = '×';
                desk.appendChild(btnRemove);
            }

            const scoreEl = document.createElement('div');
            scoreEl.className = 'podium-score';
            scoreEl.id = `team-score-${idx}`;
            scoreEl.textContent = String(team.score);

            const pedestal = document.createElement('div');
            pedestal.className = 'podium-pedestal';

            const iconSpan = document.createElement('span');
            iconSpan.className = 'team-icon';
            iconSpan.textContent = team.icon || '🔥';

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.className = 'team-name-input';
            nameInput.value = team.name;
            nameInput.maxLength = 20;
            nameInput.dataset.teamNameIdx = String(idx);
            nameInput.setAttribute('aria-label', `Nama Tim ${idx + 1}`);

            pedestal.append(iconSpan, nameInput);
            desk.append(topCounter, rank, scoreEl, pedestal);
            unit.append(crew, desk);

            if (idx % 2 === 0) {
                el.teamsLeft.appendChild(unit);
            } else {
                el.teamsRight.appendChild(unit);
            }
        });

        if (el.activeTurnLabel) {
            const activeIcon = state.teams[state.activeTeam]?.icon || '';
            el.activeTurnLabel.textContent = `Giliran Berdiskusi & Menjawab: ${activeIcon} ${getTeamName(state.activeTeam)}`;
        }
        if (el.btnAddTeam) {
            el.btnAddTeam.disabled = state.teams.length >= 8;
        }
    }

    function spawnConfetti() {
        if (!el.confettiLayer) return;
        const colors = ['#F5B700', '#10B981', '#E03C31', '#60A5FA', '#FFFFFF'];
        for (let i = 0; i < 28; i++) {
            const piece = document.createElement('span');
            piece.className = 'confetti-piece';
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.top = `${Math.random() * 15}%`;
            piece.style.backgroundColor = colors[i % colors.length];
            piece.style.animationDelay = `${Math.random() * 0.25}s`;
            el.confettiLayer.appendChild(piece);
            setTimeout(() => piece.remove(), 1400);
        }
    }

    function setFeedback(message, type) {
        el.feedback.textContent = message;
        el.feedback.className = `feedback-msg ${type || ''}`;
    }

    function addHistoryItem(text, isHit, points = 0) {
        const li = document.createElement('li');
        li.className = isHit ? 'hit' : 'miss';
        const label = document.createElement('span');
        label.textContent = text;
        const badge = document.createElement('strong');
        badge.textContent = isHit ? `+${points}` : '✕';
        li.append(label, badge);
        el.history.prepend(li);
    }

    function triggerWrongEffect() {
        playWrongSound();
        const xBox = el.wrongOverlay.querySelector('.wrong-x');
        if (xBox) {
            xBox.textContent = '✕'.repeat(Math.max(1, state.strikes));
        }
        el.wrongOverlay.classList.add('show');
        el.board.classList.remove('board-shake');
        void el.board.offsetWidth;
        el.board.classList.add('board-shake');
        setTimeout(() => el.wrongOverlay.classList.remove('show'), 750);
    }

    function setHostSpeech(text) {
        if (el.hostSpeech) {
            el.hostSpeech.textContent = text;
        }
    }

    function triggerScorePop() {
        const target = document.getElementById(`team-score-${state.activeTeam}`);
        if (target) {
            target.classList.remove('pop');
            void target.offsetWidth;
            target.classList.add('pop');
        }
        const unit = el.teamsContainer ? el.teamsContainer.querySelector(`.podium-unit[data-team="${state.activeTeam}"]`) : null;
        if (unit) {
            unit.classList.add('celebrate');
            setTimeout(() => unit.classList.remove('celebrate'), 1100);
        }
    }

    function resetRound() {
        state.revealedIds.clear();
        state.strikes = 0;
        el.history.textContent = '';
        setFeedback('', '');
        el.input.value = '';
        renderBoard();
        el.input.focus();
    }

    async function checkAnswerRemoteOrLocal(q, guess) {
        if (state.gasUrl) {
            const res = await fetch(state.gasUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    action: 'check',
                    question_id: q.id,
                    guess,
                    revealed_ids: Array.from(state.revealedIds),
                }),
            });
            return await res.json();
        }

        const normGuess = normalizeText(guess);
        if (!normGuess) return { ok: true, found: false, empty: true };

        let alreadyMatched = null;
        for (const ans of q.answers) {
            if (isMatch(normalizeText(ans.answer_text), normGuess)) {
                if (state.revealedIds.has(Number(ans.id))) {
                    alreadyMatched = ans;
                    continue;
                }
                return { ok: true, found: true, already_revealed: false, answer: ans };
            }
        }
        if (alreadyMatched) {
            return { ok: true, found: true, already_revealed: true, answer: alreadyMatched };
        }
        return { ok: true, found: false };
    }

    async function handleCheckAnswer(e) {
        e.preventDefault();
        const q = currentQuestion();
        if (!q) return;
        const guess = el.input.value.trim();
        if (!guess) {
            setFeedback('Ketik jawaban terlebih dahulu.', 'err');
            return;
        }

        const data = await checkAnswerRemoteOrLocal(q, guess);
        if (data.found && !data.already_revealed && data.answer) {
            const teamName = getTeamName(state.activeTeam);
            state.revealedIds.add(Number(data.answer.id));
            state.teams[state.activeTeam].score += Number(data.answer.points);
            playCorrectSound();
            spawnConfetti();
            renderBoard();
            triggerScorePop();
            addHistoryItem(`[${teamName}] ${data.answer.answer_text}`, true, data.answer.points);
            setFeedback(`Benar! "${data.answer.answer_text}" (+${data.answer.points} untuk ${teamName})`, 'ok');
            setHostSpeech(`Tepat sekali! ${data.answer.answer_text} (+${data.answer.points})!`);
        } else if (data.found && data.already_revealed) {
            setFeedback(`Jawaban "${data.answer.answer_text}" sudah terbuka sebelumnya.`, 'err');
        } else {
            const teamName = getTeamName(state.activeTeam);
            state.strikes = Math.min(3, state.strikes + 1);
            renderBoard();
            triggerWrongEffect();
            addHistoryItem(`[${teamName}] ${guess}`, false, 0);
            setFeedback(`TETOT! "${guess}" tidak ada di papan jawaban!`, 'err');
            setHostSpeech(`TETOT! Belum tepat, ayo diskusi lagi ${teamName}!`);
        }
        el.input.value = '';
        el.input.focus();
    }

    function addAnswerInputRow(defaultPoints = 100) {
        if (el.newAnswersList.children.length >= 8) return;
        const row = document.createElement('div');
        row.className = 'answer-row-input';

        const txt = document.createElement('input');
        txt.type = 'text';
        txt.className = 'input-field';
        txt.placeholder = 'Teks jawaban';
        txt.maxLength = 100;
        txt.required = true;

        const pts = document.createElement('input');
        pts.type = 'number';
        pts.className = 'input-field';
        pts.min = '1';
        pts.max = '1000';
        pts.value = String(defaultPoints);
        pts.required = true;

        const rm = document.createElement('button');
        rm.type = 'button';
        rm.className = 'btn btn-danger btn-icon';
        rm.textContent = '✕';
        rm.addEventListener('click', () => {
            if (el.newAnswersList.children.length > 1) row.remove();
        });

        row.append(txt, pts, rm);
        el.newAnswersList.appendChild(row);
    }

    function renderSavedQuestionsList() {
        el.savedQuestionsList.textContent = '';
        state.questions.forEach((q, idx) => {
            const li = document.createElement('li');
            const left = document.createElement('div');
            const title = document.createElement('span');
            title.textContent = `${idx + 1}. ${q.question}`;
            left.appendChild(title);
            if (q.is_example) {
                const badge = document.createElement('span');
                badge.className = 'badge-example';
                badge.textContent = 'Contoh';
                left.appendChild(badge);
            }
            const btnDel = document.createElement('button');
            btnDel.type = 'button';
            btnDel.className = 'btn btn-danger btn-sm';
            btnDel.textContent = 'Hapus';
            btnDel.addEventListener('click', () => deleteQuestion(q.id));
            li.append(left, btnDel);
            el.savedQuestionsList.appendChild(li);
        });
    }

    async function handleAddQuestion(e) {
        e.preventDefault();
        const question = el.newQuestionText.value.trim();
        const rows = Array.from(el.newAnswersList.querySelectorAll('.answer-row-input'));
        const answers = rows.map((r) => {
            const inputs = r.querySelectorAll('input');
            return { text: inputs[0].value.trim(), points: Number(inputs[1].value) };
        }).filter((a) => a.text !== '');

        if (!question || answers.length === 0) return;

        if (state.gasUrl) {
            await fetch(state.gasUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ action: 'store', question, answers }),
            });
            await loadQuestions();
        } else {
            const maxId = state.questions.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0);
            const newId = maxId + 1;
            state.questions.push({
                id: newId,
                question,
                is_example: false,
                answers: answers.map((a, i) => ({
                    id: newId * 100 + i + 1,
                    answer_text: a.text.toUpperCase(),
                    points: a.points,
                })),
            });
            saveLocalQuestions();
            state.currentIndex = state.questions.length - 1;
            populateSelect();
            resetRound();
        }
        el.newQuestionText.value = '';
        el.newAnswersList.textContent = '';
        [100, 90, 80, 70].forEach((p) => addAnswerInputRow(p));
        el.modal.hidden = true;
    }

    async function deleteQuestion(id) {
        if (!confirm('Hapus pertanyaan ini?')) return;
        if (state.gasUrl) {
            await fetch(state.gasUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ action: 'delete', id }),
            });
            await loadQuestions();
        } else {
            state.questions = state.questions.filter((q) => Number(q.id) !== Number(id));
            saveLocalQuestions();
            state.currentIndex = Math.min(state.currentIndex, Math.max(0, state.questions.length - 1));
            populateSelect();
            resetRound();
        }
        renderSavedQuestionsList();
    }

    function init() {
        const params = new URLSearchParams(window.location.search);
        if (params.get('gasUrl')) {
            state.gasUrl = params.get('gasUrl');
            localStorage.setItem(STORAGE_KEY_GAS_URL, state.gasUrl);
        }

        [100, 90, 80, 70].forEach((p) => addAnswerInputRow(p));
        loadQuestions();

        el.select.addEventListener('change', (e) => {
            state.currentIndex = Number(e.target.value) || 0;
            resetRound();
        });

        el.btnRandom.addEventListener('click', () => {
            if (state.questions.length <= 1) return;
            let next = state.currentIndex;
            while (next === state.currentIndex) {
                next = Math.floor(Math.random() * state.questions.length);
            }
            state.currentIndex = next;
            el.select.value = String(next);
            resetRound();
        });

        el.btnSound.addEventListener('click', () => {
            state.soundEnabled = !state.soundEnabled;
            el.btnSound.textContent = state.soundEnabled ? '🔊' : '🔇';
            el.btnSound.setAttribute('aria-pressed', String(state.soundEnabled));
        });

        if (el.btnFullscreen) {
            el.btnFullscreen.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    document.exitFullscreen().catch(() => {});
                }
            });
        }

        if (el.btnStartGame && el.startOverlay) {
            el.btnStartGame.addEventListener('click', () => {
                el.startOverlay.classList.add('hidden');
                playStartFanfare();
                el.input.focus();
            });
        }

        if (el.teamsContainer) {
            el.teamsContainer.addEventListener('input', (e) => {
                if (e.target.classList.contains('team-name-input') && el.activeTurnLabel) {
                    el.activeTurnLabel.textContent = `Giliran Menjawab: ${getTeamName(state.activeTeam)}`;
                }
            });
        }

        el.btnTheme.addEventListener('click', () => {
            const root = document.documentElement;
            const isLight = root.getAttribute('data-theme') === 'light';
            root.setAttribute('data-theme', isLight ? 'studio' : 'light');
            el.btnTheme.textContent = isLight ? '☀️' : '🌙';
        });

        el.form.addEventListener('submit', handleCheckAnswer);
        el.btnRevealAll.addEventListener('click', () => {
            const q = currentQuestion();
            if (!q) return;
            q.answers.forEach((a) => state.revealedIds.add(Number(a.id)));
            playCorrectSound();
            spawnConfetti();
            renderBoard();
            setFeedback('Semua jawaban telah dibuka.', 'ok');
        });
        el.btnResetRound.addEventListener('click', resetRound);
        el.btnResetScores.addEventListener('click', () => {
            state.teams.forEach((t) => { t.score = 0; });
            renderTeamScores();
            setFeedback('Skor semua tim direset ke 0.', 'ok');
        });
        if (el.btnAddTeam) {
            el.btnAddTeam.addEventListener('click', () => {
                if (state.teams.length >= 8) return;
                const usedColors = new Set(state.teams.map((t) => t.color));
                const theme = TEAM_THEMES.find((th) => !usedColors.has(th.color)) || TEAM_THEMES[state.teams.length % TEAM_THEMES.length];
                const nextNum = state.teams.length + 1;
                state.teams.push({ name: `Tim ${nextNum}`, score: 0, color: theme.color, icon: theme.icon });
                state.activeTeam = state.teams.length - 1;
                renderTeamScores();
                setFeedback(`${theme.icon} Tim ${nextNum} ditambahkan.`, 'ok');
            });
        }
        el.btnTetot.addEventListener('click', () => {
            state.strikes = Math.min(3, state.strikes + 1);
            renderBoard();
            triggerWrongEffect();
            setFeedback(`TETOT! Kesalahan ${getTeamName(state.activeTeam)} (${state.strikes}/3)`, 'err');
        });
        el.teamsContainer.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('[data-remove-team]');
            if (removeBtn) {
                e.stopPropagation();
                if (state.teams.length <= 1) return;
                const remIdx = Number(removeBtn.dataset.removeTeam);
                state.teams.splice(remIdx, 1);
                if (state.activeTeam >= state.teams.length) {
                    state.activeTeam = state.teams.length - 1;
                }
                renderTeamScores();
                return;
            }
            const card = e.target.closest('.podium-unit');
            if (!card) return;
            state.activeTeam = Number(card.dataset.team) || 0;
            renderTeamScores();
            if (e.target.tagName !== 'INPUT') {
                el.input.focus();
            }
        });
        el.teamsContainer.addEventListener('input', (e) => {
            if (e.target.dataset && e.target.dataset.teamNameIdx !== undefined) {
                const idx = Number(e.target.dataset.teamNameIdx);
                if (state.teams[idx]) {
                    state.teams[idx].name = e.target.value;
                }
                if (el.activeTurnLabel) {
                    el.activeTurnLabel.textContent = `Giliran Menjawab: ${getTeamName(state.activeTeam)}`;
                }
            }
        });
        el.teamsContainer.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;
            if (e.key === 'Enter' || e.key === ' ') {
                const card = e.target.closest('.podium-unit');
                if (card) {
                    e.preventDefault();
                    state.activeTeam = Number(card.dataset.team) || 0;
                    renderTeamScores();
                }
            }
        });

        el.btnManage.addEventListener('click', () => {
            renderSavedQuestionsList();
            el.modal.hidden = false;
            el.newQuestionText.focus();
        });

        el.btnGasConfig.addEventListener('click', () => {
            el.gasUrlInput.value = state.gasUrl;
            el.gasModal.hidden = false;
            el.gasUrlInput.focus();
        });

        el.gasConfigForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            state.gasUrl = el.gasUrlInput.value.trim();
            if (state.gasUrl) {
                localStorage.setItem(STORAGE_KEY_GAS_URL, state.gasUrl);
            } else {
                localStorage.removeItem(STORAGE_KEY_GAS_URL);
            }
            el.gasModal.hidden = true;
            await loadQuestions();
        });

        document.addEventListener('click', (e) => {
            const closeTarget = e.target && e.target.dataset ? e.target.dataset.closeModal : null;
            if (closeTarget === 'manage') el.modal.hidden = true;
            if (closeTarget === 'gas') el.gasModal.hidden = true;
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                el.modal.hidden = true;
                el.gasModal.hidden = true;
            }
        });

        el.btnAddAnswerRow.addEventListener('click', () => {
            const nextPts = Math.max(10, 100 - el.newAnswersList.children.length * 10);
            addAnswerInputRow(nextPts);
        });
        el.addQuestionForm.addEventListener('submit', handleAddQuestion);
    }

    init();
})();
