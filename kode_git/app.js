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
        ['MELAMUN', 'NGELAMUN', 'LAMUN', 'BENGONG', 'TERMENUNG', 'MELONGO', 'MENGKHAYAL'],
        ['DIAM', 'DIEM', 'BUNGKAM', 'PENDIAM', 'MENENG'],
        ['TIDUR', 'BOBOK', 'KETIDURAN', 'NGOROK', 'TERLELAP'],
        ['MAKAN', 'SANTAP', 'JAJAN', 'NGEMIL', 'KULINER'],
        ['MINUM', 'NGOPI', 'NGETEH', 'HAUS'],
        ['HANDPHONE', 'HP', 'PONSEL', 'GADGET', 'GAWAI', 'SMARTPHONE'],
        ['UANG', 'DUIT', 'CUAN', 'RUPIAH', 'DANA'],
        ['SENANG', 'BAHAGIA', 'GEMBIRA', 'HAPPY', 'CERIA'],
        ['CAPEK', 'LELAH', 'LETIH', 'PENAT', 'LESU'],
        ['MALU', 'MINDER', 'SUNGKAN', 'SEGAN'],
        ['TAKUT', 'NGEPER', 'CIUT', 'KHAWATIR', 'CEMES'],
        ['BEKERJA', 'KERJA', 'NGANTOR', 'KANTOR', 'DINAS'],
        ['TERLAMBAT', 'TELAT', 'NGARET'],
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

    function stripPrefix(normText) {
        return normText.replace(/\b(MENG|MEM|MEN|ME|BER)([A-Z]{3,})/g, '$2');
    }

    function expandVariants(normText) {
        const variants = new Set([normText]);
        const stripped = stripPrefix(normText);
        if (stripped && stripped !== normText) variants.add(stripped);
        for (const group of SYNONYM_GROUPS) {
            if (group.some((t) => normText === t || stripped === t)) {
                group.forEach((t) => variants.add(t));
            }
        }
        return Array.from(variants);
    }

    function matchScore(normAnswer, normGuess) {
        if (normAnswer === normGuess) return 4;
        const ansStem = stripPrefix(normAnswer);
        const guessStem = stripPrefix(normGuess);
        if (ansStem === guessStem) return 3;

        const ansVariants = expandVariants(normAnswer);
        const guessVariants = expandVariants(normGuess);
        for (const av of ansVariants) {
            if (guessVariants.includes(av)) return 2;
        }

        if (normGuess.length <= 2 || normAnswer.length <= 2) {
            return normAnswer.split(' ').includes(normGuess) ? 2 : 0;
        }
        if (Math.min(normAnswer.length, normGuess.length) >= 4 &&
            (normAnswer.includes(normGuess) || normGuess.includes(normAnswer))) {
            return 1;
        }
        return 0;
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
        svg.setAttribute('viewBox', '0 0 220 78');
        svg.setAttribute('class', 'contestants-svg');
        svg.setAttribute('aria-hidden', 'true');

        const defs = document.createElementNS(ns, 'defs');
        defs.innerHTML = `
            <linearGradient id="f100BotHead" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#FFFFFF"/>
                <stop offset="55%" stop-color="#E2E8F0"/>
                <stop offset="100%" stop-color="#94A3B8"/>
            </linearGradient>
            <linearGradient id="f100BotVisor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0F172A"/>
                <stop offset="100%" stop-color="#1E293B"/>
            </linearGradient>
        `;
        svg.appendChild(defs);

        const robots = [
            { cx: 26, dy: 5, scale: 0.9, cls: 'person person-l2', shirt: 'shirt-a' },
            { cx: 68, dy: 2, scale: 0.95, cls: 'person person-l1', shirt: 'shirt-b' },
            { cx: 110, dy: -2, scale: 1.02, cls: 'person person-center', shirt: 'shirt-a' },
            { cx: 152, dy: 2, scale: 0.95, cls: 'person person-r1', shirt: 'shirt-b' },
            { cx: 194, dy: 5, scale: 0.9, cls: 'person person-r2', shirt: 'shirt-a' },
        ];

        robots.forEach((p, idx) => {
            const g = document.createElementNS(ns, 'g');
            g.setAttribute('class', p.cls);
            g.setAttribute('transform', `translate(${p.cx}, ${p.dy}) scale(${p.scale}) translate(${-p.cx}, 0)`);
            g.style.setProperty('--bot-delay', `${(idx * 0.07).toFixed(2)}s`);

            // Antena & lampu
            const ant = document.createElementNS(ns, 'line');
            ant.setAttribute('x1', String(p.cx));
            ant.setAttribute('y1', '5');
            ant.setAttribute('x2', String(p.cx));
            ant.setAttribute('y2', '12');
            ant.setAttribute('class', 'robot-antenna');

            const bulb = document.createElementNS(ns, 'circle');
            bulb.setAttribute('cx', String(p.cx));
            bulb.setAttribute('cy', '4');
            bulb.setAttribute('r', '2.8');
            bulb.setAttribute('class', 'robot-bulb');

            // Ear pods kiri & kanan
            const earL = document.createElementNS(ns, 'rect');
            earL.setAttribute('x', String(p.cx - 16));
            earL.setAttribute('y', '18');
            earL.setAttribute('width', '4');
            earL.setAttribute('height', '9');
            earL.setAttribute('rx', '2');
            earL.setAttribute('class', 'robot-ear');

            const earR = document.createElementNS(ns, 'rect');
            earR.setAttribute('x', String(p.cx + 12));
            earR.setAttribute('y', '18');
            earR.setAttribute('width', '4');
            earR.setAttribute('height', '9');
            earR.setAttribute('rx', '2');
            earR.setAttribute('class', 'robot-ear');

            // Kepala 3D lucu membulat
            const head = document.createElementNS(ns, 'rect');
            head.setAttribute('x', String(p.cx - 14));
            head.setAttribute('y', '11');
            head.setAttribute('width', '28');
            head.setAttribute('height', '23');
            head.setAttribute('rx', '9');
            head.setAttribute('class', 'robot-head');

            // Kilau atas kepala
            const headShine = document.createElementNS(ns, 'path');
            headShine.setAttribute('d', `M${p.cx - 8} 13.5 Q${p.cx} 11.5 ${p.cx + 8} 13.5`);
            headShine.setAttribute('class', 'robot-shine');

            // Visor kaca gelap
            const visor = document.createElementNS(ns, 'rect');
            visor.setAttribute('x', String(p.cx - 11));
            visor.setAttribute('y', '15.5');
            visor.setAttribute('width', '22');
            visor.setAttribute('height', '14');
            visor.setAttribute('rx', '5.5');
            visor.setAttribute('class', 'robot-visor');

            // Pipi merona lucu
            const blushL = document.createElementNS(ns, 'ellipse');
            blushL.setAttribute('cx', String(p.cx - 7.5));
            blushL.setAttribute('cy', '25.2');
            blushL.setAttribute('rx', '2.2');
            blushL.setAttribute('ry', '1.2');
            blushL.setAttribute('class', 'robot-blush');

            const blushR = document.createElementNS(ns, 'ellipse');
            blushR.setAttribute('cx', String(p.cx + 7.5));
            blushR.setAttribute('cy', '25.2');
            blushR.setAttribute('rx', '2.2');
            blushR.setAttribute('ry', '1.2');
            blushR.setAttribute('class', 'robot-blush');

            // Ekspresi 1: Normal / Idle (mata bulat bersinar + senyum kecil)
            const exprIdle = document.createElementNS(ns, 'g');
            exprIdle.setAttribute('class', 'expr expr-idle');
            exprIdle.innerHTML = `
                <circle cx="${p.cx - 4.8}" cy="21.5" r="2.3" class="robot-eye"/>
                <circle cx="${p.cx + 4.8}" cy="21.5" r="2.3" class="robot-eye"/>
                <circle cx="${p.cx - 5.5}" cy="20.7" r="0.85" class="robot-eye-sparkle"/>
                <circle cx="${p.cx + 4.1}" cy="20.7" r="0.85" class="robot-eye-sparkle"/>
                <path d="M${p.cx - 3} 26 Q${p.cx} 28.2 ${p.cx + 3} 26" class="robot-mouth"/>
            `;

            // Ekspresi 2: Senang / Sorak (^ ^ + ketawa lebar)
            const exprHappy = document.createElementNS(ns, 'g');
            exprHappy.setAttribute('class', 'expr expr-happy');
            exprHappy.innerHTML = `
                <path d="M${p.cx - 7.2} 22.2 Q${p.cx - 4.8} 18.8 ${p.cx - 2.4} 22.2" class="robot-eye-arc"/>
                <path d="M${p.cx + 2.4} 22.2 Q${p.cx + 4.8} 18.8 ${p.cx + 7.2} 22.2" class="robot-eye-arc"/>
                <path d="M${p.cx - 4} 24.8 Q${p.cx} 29.2 ${p.cx + 4} 24.8 Z" class="robot-mouth-open"/>
            `;

            // Ekspresi 3: Sedih (mata T_T + air mata + cemberut)
            const exprSad = document.createElementNS(ns, 'g');
            exprSad.setAttribute('class', 'expr expr-sad');
            exprSad.innerHTML = `
                <path d="M${p.cx - 7.2} 20.5 Q${p.cx - 4.8} 22.5 ${p.cx - 2.4} 21.5" class="robot-eye-sad"/>
                <path d="M${p.cx + 2.4} 21.5 Q${p.cx + 4.8} 22.5 ${p.cx + 7.2} 20.5" class="robot-eye-sad"/>
                <circle cx="${p.cx - 6.5}" cy="24.2" r="1.1" class="robot-tear"/>
                <circle cx="${p.cx + 6.5}" cy="24.2" r="1.1" class="robot-tear"/>
                <path d="M${p.cx - 3.2} 27.5 Q${p.cx} 25 ${p.cx + 3.2} 27.5" class="robot-mouth-sad"/>
            `;

            // Ekspresi 4: Salah / Kaget (X X + mulut O)
            const exprShock = document.createElementNS(ns, 'g');
            exprShock.setAttribute('class', 'expr expr-shock');
            exprShock.innerHTML = `
                <path d="M${p.cx - 6.8} 19.6 L${p.cx - 2.8} 23.2 M${p.cx - 2.8} 19.6 L${p.cx - 6.8} 23.2" class="robot-eye-x"/>
                <path d="M${p.cx + 2.8} 19.6 L${p.cx + 6.8} 23.2 M${p.cx + 6.8} 19.6 L${p.cx + 2.8} 23.2" class="robot-eye-x"/>
                <ellipse cx="${p.cx}" cy="26.5" rx="2.4" ry="1.8" class="robot-mouth-shock"/>
            `;

            // Leher & Badan 3D
            const neck = document.createElementNS(ns, 'rect');
            neck.setAttribute('x', String(p.cx - 3.5));
            neck.setAttribute('y', '33.5');
            neck.setAttribute('width', '7');
            neck.setAttribute('height', '4');
            neck.setAttribute('class', 'robot-neck');

            const body = document.createElementNS(ns, 'path');
            body.setAttribute('d', `M${p.cx - 14} 78 L${p.cx - 11.5} 39 C${p.cx - 11.5} 36, ${p.cx + 11.5} 36, ${p.cx + 11.5} 39 L${p.cx + 14} 78 Z`);
            body.setAttribute('class', `person-body ${p.shirt}`);

            const core = document.createElementNS(ns, 'circle');
            core.setAttribute('cx', String(p.cx));
            core.setAttribute('cy', '49');
            core.setAttribute('r', '2.8');
            core.setAttribute('class', 'robot-core');

            const armL = document.createElementNS(ns, 'path');
            armL.setAttribute('d', `M${p.cx - 11.5} 42 Q${p.cx - 17} 48 ${p.cx - 15.5} 55`);
            armL.setAttribute('class', 'robot-arm robot-arm-l');

            const armR = document.createElementNS(ns, 'path');
            armR.setAttribute('d', `M${p.cx + 11.5} 42 Q${p.cx + 17} 48 ${p.cx + 15.5} 55`);
            armR.setAttribute('class', 'robot-arm robot-arm-r');

            g.append(ant, bulb, earL, earR, neck, armL, armR, body, core, head, headShine, visor, blushL, blushR, exprIdle, exprHappy, exprSad, exprShock);
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

    let reactionTimer = null;

    function triggerTeamReactions(type) {
        if (!el.teamsContainer) return;
        const units = el.teamsContainer.querySelectorAll('.podium-unit');
        if (reactionTimer) {
            clearTimeout(reactionTimer);
            reactionTimer = null;
        }
        units.forEach((unit) => {
            unit.classList.remove('celebrate', 'sad', 'sad-wrong');
            const oldReact = unit.querySelector('.react-bubble');
            if (oldReact) oldReact.remove();

            const teamIdx = Number(unit.dataset.team);
            const isAct = teamIdx === state.activeTeam;
            const crew = unit.querySelector('.podium-contestants');

            const isHappy = (type === 'correct' && isAct) || (type === 'wrong' && !isAct);
            const isSad = type === 'correct' && !isAct;
            const isShock = type === 'wrong' && isAct;

            if (isHappy) {
                unit.classList.add('celebrate');
            } else if (isSad) {
                unit.classList.add('sad');
            } else if (isShock) {
                unit.classList.add('sad-wrong');
            }

            if (crew && (isHappy || isSad || isShock)) {
                const rb = document.createElement('span');
                rb.className = `react-bubble ${isHappy ? 'react-happy' : 'react-sad'}`;
                rb.textContent = isHappy ? (type === 'wrong' ? '😆🎉' : '😄🎉') : (isShock ? '😵❌' : '😢');
                crew.appendChild(rb);
            }
        });

        reactionTimer = setTimeout(() => {
            units.forEach((unit) => {
                unit.classList.remove('celebrate', 'sad', 'sad-wrong');
                const oldReact = unit.querySelector('.react-bubble');
                if (oldReact) oldReact.remove();
            });
            reactionTimer = null;
        }, 2300);
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
        triggerTeamReactions('wrong');
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
        triggerTeamReactions('correct');
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
        // Cek langsung secara lokal (0ms) bila daftar jawaban sudah termuat agar tidak menunggu 5 detik ke GAS
        if (Array.isArray(q.answers) && q.answers.length > 0) {
            const normGuess = normalizeText(guess);
            if (!normGuess) return { ok: true, found: false, empty: true };

            const candidates = [];
            for (const ans of q.answers) {
                const score = matchScore(normalizeText(ans.answer_text), normGuess);
                if (score > 0) {
                    candidates.push({ ans, score, revealed: state.revealedIds.has(Number(ans.id)) });
                }
            }
            if (candidates.length === 0) return { ok: true, found: false };

            const maxScore = Math.max(...candidates.map((c) => c.score));
            const top = candidates.filter((c) => c.score === maxScore);
            const unrevealed = top.find((c) => !c.revealed);
            if (unrevealed) {
                return { ok: true, found: true, already_revealed: false, answer: unrevealed.ans };
            }
            return { ok: true, found: true, already_revealed: true, answer: top[0].ans };
        }

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
        return { ok: true, found: false };
    }

    async function handleCheckAnswer(e) {
        e.preventDefault();
        if (state.isChecking) return;
        const q = currentQuestion();
        if (!q) return;
        const guess = el.input.value.trim();
        if (!guess) {
            setFeedback('Ketik jawaban terlebih dahulu.', 'err');
            return;
        }

        const submitBtn = document.getElementById('btn-submit');
        state.isChecking = true;
        if (submitBtn) submitBtn.disabled = true;

        try {
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
                syncPushIfHost('correct', `Benar! "${data.answer.answer_text}" (+${data.answer.points} untuk ${teamName})`, 'ok');
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
                syncPushIfHost('wrong', `TETOT! "${guess}" tidak ada di papan jawaban!`, 'err');
            }
            el.input.value = '';
            el.input.focus();
        } finally {
            state.isChecking = false;
            if (submitBtn) submitBtn.disabled = false;
        }
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

    const liveSync = {
        mode: 'off', // 'off' | 'host' | 'display'
        room: 'F100',
        lastVersion: 0,
        lastEventTs: 0,
        pollTimer: null,
        lastFeedbackText: '',
        lastFeedbackType: '',
    };

    function sanitizeLiveRoom(raw) {
        const clean = String(raw || 'F100').toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 24);
        return clean || 'F100';
    }

    function updateLiveHpUrl() {
        const urlInput = document.getElementById('live-hp-url');
        const roomInput = document.getElementById('live-room-input');
        const btnLive = document.getElementById('btn-live');
        const statusEl = document.getElementById('live-status-text');
        const room = sanitizeLiveRoom(roomInput ? roomInput.value : liveSync.room);
        liveSync.room = room;
        if (urlInput) {
            const u = new URL(window.location.href.split('?')[0]);
            u.searchParams.set('room', room);
            u.searchParams.set('mode', 'host');
            if (state.gasUrl) u.searchParams.set('gasUrl', state.gasUrl);
            urlInput.value = u.toString();
        }
        if (btnLive) {
            btnLive.classList.toggle('live-active', liveSync.mode !== 'off');
            btnLive.textContent = liveSync.mode === 'host'
                ? `📱 HP (${room})`
                : liveSync.mode === 'display'
                    ? `🖥️ TV (${room})`
                    : '📡 Live';
        }
        if (statusEl) {
            statusEl.textContent = liveSync.mode === 'host'
                ? `Status: 🟢 Remote HP aktif di room ${room}`
                : liveSync.mode === 'display'
                    ? `Status: 🟢 Layar Desktop mendengarkan room ${room}`
                    : 'Status: Belum terhubung ke room live.';
            statusEl.className = liveSync.mode === 'off' ? 'feedback-msg' : 'feedback-msg ok';
        }
    }

    function buildLivePayload(eventType = 'update', fbText = '', fbType = '') {
        const now = Date.now();
        const historyItems = el.guessHistory
            ? Array.from(el.guessHistory.children).slice(0, 8).map((li) => ({
                text: li.textContent || '',
                hit: li.classList.contains('hit'),
            }))
            : [];
        return {
            version: now,
            currentIndex: state.currentIndex,
            revealedIds: Array.from(state.revealedIds),
            strikes: state.strikes,
            teams: state.teams,
            activeTeam: state.activeTeam,
            hostSpeech: el.hostSpeech ? el.hostSpeech.textContent : '',
            feedback: { text: fbText, type: fbType },
            history: historyItems,
            event: { type: eventType, ts: now },
        };
    }

    async function syncPushIfHost(eventType = 'update', fbText = '', fbType = '') {
        if (liveSync.mode !== 'host' || !state.gasUrl) return;
        const payload = buildLivePayload(eventType, fbText, fbType);
        liveSync.lastVersion = Math.max(payload.version, liveSync.lastVersion + 1);
        payload.version = liveSync.lastVersion;
        try {
            const res = await fetch(state.gasUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    action: 'sync_push',
                    room: liveSync.room,
                    state: payload,
                }),
            });
            const data = await res.json();
            if (!data.ok) {
                const statusEl = document.getElementById('live-status-text');
                if (statusEl) {
                    statusEl.textContent = `GAS belum mendukung Live Sync (${data.error || 'update & deploy ulang Code.gs'}).`;
                    statusEl.className = 'feedback-msg err';
                }
            }
        } catch (err) {
            const statusEl = document.getElementById('live-status-text');
            if (statusEl) {
                statusEl.textContent = 'Gagal menghubungi GAS untuk sinkronisasi live.';
                statusEl.className = 'feedback-msg err';
            }
        }
    }

    function applyLiveState(remote) {
        if (!remote || !remote.version || remote.version <= liveSync.lastVersion) return;
        liveSync.lastVersion = remote.version;

        if (typeof remote.currentIndex === 'number' && state.questions[remote.currentIndex]) {
            state.currentIndex = remote.currentIndex;
            if (el.select) el.select.value = String(remote.currentIndex);
        }
        state.revealedIds = new Set((remote.revealedIds || []).map(Number));
        state.strikes = Number(remote.strikes || 0);
        if (Array.isArray(remote.teams) && remote.teams.length > 0) {
            state.teams = remote.teams;
        }
        state.activeTeam = Number(remote.activeTeam || 0);
        renderBoard();

        if (el.hostSpeech && remote.hostSpeech) {
            el.hostSpeech.textContent = remote.hostSpeech;
        }
        if (remote.feedback && remote.feedback.text) {
            setFeedback(remote.feedback.text, remote.feedback.type || '');
        }
        if (el.guessHistory && Array.isArray(remote.history)) {
            el.guessHistory.textContent = '';
            remote.history.forEach((h) => {
                const li = document.createElement('li');
                li.className = h.hit ? 'hit' : 'miss';
                li.textContent = h.text;
                el.guessHistory.appendChild(li);
            });
        }

        if (remote.event && remote.event.ts && remote.event.ts > liveSync.lastEventTs) {
            liveSync.lastEventTs = remote.event.ts;
            if (remote.event.type === 'correct') {
                playCorrectSound();
                spawnConfetti();
                triggerScorePop();
            } else if (remote.event.type === 'wrong') {
                triggerWrongEffect();
            }
        }
    }

    async function pollLiveDisplay() {
        if (liveSync.mode !== 'display' || !state.gasUrl) return;
        try {
            const sep = state.gasUrl.includes('?') ? '&' : '?';
            const res = await fetch(`${state.gasUrl}${sep}action=sync_pull&room=${encodeURIComponent(liveSync.room)}&_t=${Date.now()}`);
            const data = await res.json();
            if (data && data.ok && data.state) {
                applyLiveState(data.state);
            } else if (data && !data.ok) {
                const statusEl = document.getElementById('live-status-text');
                if (statusEl) {
                    statusEl.textContent = `GAS belum update: ${data.error || 'Deploy ulang Code.gs (New version)'}`;
                    statusEl.className = 'feedback-msg err';
                }
            }
        } catch (err) {
            // Abaikan error polling sesaat
        }
    }

    function setLiveMode(mode) {
        if (liveSync.pollTimer) {
            clearInterval(liveSync.pollTimer);
            liveSync.pollTimer = null;
        }
        if (mode !== 'off' && !state.gasUrl) {
            const statusEl = document.getElementById('live-status-text');
            if (statusEl) {
                statusEl.textContent = 'Isi URL GAS terlebih dahulu agar HP dan Desktop bisa terhubung online.';
                statusEl.className = 'feedback-msg err';
            }
            return;
        }
        liveSync.mode = mode;
        const roomInput = document.getElementById('live-room-input');
        liveSync.room = sanitizeLiveRoom(roomInput ? roomInput.value : liveSync.room);
        if (mode === 'display') {
            liveSync.lastVersion = 0;
            liveSync.lastEventTs = 0;
        }
        updateLiveHpUrl();
        if (mode === 'display') {
            pollLiveDisplay();
            liveSync.pollTimer = setInterval(pollLiveDisplay, 1200);
        } else if (mode === 'host') {
            syncPushIfHost('update');
        }
    }

    function initLiveSyncUI() {
        const btnLive = document.getElementById('btn-live');
        const liveModal = document.getElementById('live-modal');
        const btnCloseLive = document.getElementById('btn-close-live');
        const roomInput = document.getElementById('live-room-input');
        const btnRand = document.getElementById('btn-live-rand');
        const btnDisplay = document.getElementById('btn-live-display');
        const btnHost = document.getElementById('btn-live-host');
        const btnStop = document.getElementById('btn-live-stop');
        const btnCopy = document.getElementById('btn-copy-live-url');

        if (btnLive && liveModal) {
            btnLive.addEventListener('click', () => {
                updateLiveHpUrl();
                liveModal.hidden = false;
            });
        }
        const btnStartLive = document.getElementById('btn-start-live');
        if (btnStartLive && liveModal) {
            btnStartLive.addEventListener('click', () => {
                if (el.startOverlay) el.startOverlay.classList.add('hidden');
                updateLiveHpUrl();
                liveModal.hidden = false;
            });
        }
        if (btnCloseLive && liveModal) {
            btnCloseLive.addEventListener('click', () => { liveModal.hidden = true; });
        }
        if (roomInput) {
            roomInput.addEventListener('input', updateLiveHpUrl);
        }
        if (btnRand && roomInput) {
            btnRand.addEventListener('click', () => {
                const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
                let code = '';
                for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
                roomInput.value = code;
                updateLiveHpUrl();
            });
        }
        if (btnDisplay) btnDisplay.addEventListener('click', () => { setLiveMode('display'); if (liveModal) liveModal.hidden = true; });
        if (btnHost) btnHost.addEventListener('click', () => { setLiveMode('host'); if (liveModal) liveModal.hidden = true; });
        if (btnStop) btnStop.addEventListener('click', () => { setLiveMode('off'); });
        if (btnCopy) {
            btnCopy.addEventListener('click', () => {
                const urlEl = document.getElementById('live-hp-url');
                if (!urlEl) return;
                urlEl.select();
                navigator.clipboard?.writeText(urlEl.value).catch(() => {});
                btnCopy.textContent = 'Tersalin!';
                setTimeout(() => { btnCopy.textContent = 'Salin'; }, 1500);
            });
        }

        const params = new URLSearchParams(window.location.search);
        const urlRoom = params.get('room');
        const urlMode = params.get('mode');
        if (urlRoom && roomInput) roomInput.value = sanitizeLiveRoom(urlRoom);
        if (urlMode === 'host' || urlMode === 'display') {
            setLiveMode(urlMode);
            if (el.startOverlay) el.startOverlay.classList.add('hidden');
        } else {
            updateLiveHpUrl();
        }
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
            syncPushIfHost('reset');
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
            syncPushIfHost('reset');
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

        function applyTheme(theme) {
            const root = document.documentElement;
            root.setAttribute('data-theme', theme);
            const isLight = theme === 'light';
            if (el.btnTheme) {
                el.btnTheme.textContent = isLight ? '🌙' : '☀️';
                el.btnTheme.setAttribute('aria-pressed', String(isLight));
                el.btnTheme.title = isLight ? 'Beralih ke Tema Gelap Studio' : 'Beralih ke Tema PPT Data Exchange';
            }
            const btnStartTheme = document.getElementById('btn-start-theme');
            if (btnStartTheme) {
                btnStartTheme.textContent = isLight ? '🌙 Mode Studio Gelap' : '☀️ Mode PPT Data Exchange';
                btnStartTheme.title = isLight ? 'Beralih ke tema studio gelap' : 'Beralih ke tema PPT Data Exchange';
            }
            try {
                localStorage.setItem('family100_theme', theme);
            } catch (e) {}
        }

        const savedTheme = (function () {
            try { return localStorage.getItem('family100_theme'); } catch (e) { return null; }
        })() || 'light';
        applyTheme(savedTheme);

        if (el.btnTheme) {
            el.btnTheme.addEventListener('click', () => {
                const cur = document.documentElement.getAttribute('data-theme') || 'light';
                applyTheme(cur === 'light' ? 'studio' : 'light');
            });
        }

        const btnStartTheme = document.getElementById('btn-start-theme');
        if (btnStartTheme) {
            btnStartTheme.addEventListener('click', () => {
                const cur = document.documentElement.getAttribute('data-theme') || 'light';
                applyTheme(cur === 'light' ? 'studio' : 'light');
            });
        }

        window.addEventListener('keydown', (e) => {
            if (el.startOverlay && !el.startOverlay.classList.contains('hidden')) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (el.btnStartGame) el.btnStartGame.click();
                }
            }
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
            syncPushIfHost('correct', 'Semua jawaban telah dibuka.', 'ok');
        });
        el.btnResetRound.addEventListener('click', () => {
            resetRound();
            syncPushIfHost('reset');
        });
        el.btnResetScores.addEventListener('click', () => {
            state.teams.forEach((t) => { t.score = 0; });
            renderTeamScores();
            setFeedback('Skor semua tim direset ke 0.', 'ok');
            syncPushIfHost('update', 'Skor semua tim direset ke 0.', 'ok');
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
                syncPushIfHost('update', `${theme.icon} Tim ${nextNum} ditambahkan.`, 'ok');
            });
        }
        el.btnTetot.addEventListener('click', () => {
            state.strikes = Math.min(3, state.strikes + 1);
            renderBoard();
            triggerWrongEffect();
            setFeedback(`TETOT! Kesalahan ${getTeamName(state.activeTeam)} (${state.strikes}/3)`, 'err');
            syncPushIfHost('wrong', `TETOT! Kesalahan ${getTeamName(state.activeTeam)} (${state.strikes}/3)`, 'err');
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
                syncPushIfHost('update');
                return;
            }
            const card = e.target.closest('.podium-unit');
            if (!card) return;
            state.activeTeam = Number(card.dataset.team) || 0;
            renderTeamScores();
            syncPushIfHost('update');
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
            if (e.target && e.target.dataset && e.target.dataset.closeLive === 'true') {
                const liveModal = document.getElementById('live-modal');
                if (liveModal) liveModal.hidden = true;
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                el.modal.hidden = true;
                el.gasModal.hidden = true;
                const liveModal = document.getElementById('live-modal');
                if (liveModal) liveModal.hidden = true;
            }
        });

        el.btnAddAnswerRow.addEventListener('click', () => {
            const nextPts = Math.max(10, 100 - el.newAnswersList.children.length * 10);
            addAnswerInputRow(nextPts);
        });
        el.addQuestionForm.addEventListener('submit', handleAddQuestion);
        initLiveSyncUI();
    }

    init();
})();
