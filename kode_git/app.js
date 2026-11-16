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

    const state = {
        gasUrl: localStorage.getItem(STORAGE_KEY_GAS_URL) || '',
        questions: [],
        currentIndex: 0,
        revealedIds: new Set(),
        score: 0,
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
        btnTheme: document.getElementById('btn-theme'),
        qNumber: document.getElementById('question-number'),
        qText: document.getElementById('question-text'),
        board: document.getElementById('answer-board'),
        form: document.getElementById('answer-form'),
        input: document.getElementById('answer-input'),
        feedback: document.getElementById('feedback-msg'),
        totalScore: document.getElementById('total-score'),
        revealedCount: document.getElementById('revealed-count'),
        strikes: document.getElementById('strike-indicators'),
        history: document.getElementById('guess-history'),
        btnRevealAll: document.getElementById('btn-reveal-all'),
        btnResetRound: document.getElementById('btn-reset-round'),
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

    function playCorrectSound() {
        if (!state.soundEnabled) return;
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);
            gain.gain.setValueAtTime(0.18, now + idx * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.26);
        });
    }

    function playWrongSound() {
        if (!state.soundEnabled) return;
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        [150, 115].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, now + idx * 0.14);
            gain.gain.setValueAtTime(0.2, now + idx * 0.14);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.14 + 0.28);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.14);
            osc.stop(now + idx * 0.14 + 0.3);
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

    function isMatch(normAnswer, normGuess) {
        if (normAnswer === normGuess) return true;
        if (normAnswer.length <= 2 || normGuess.length <= 2) {
            return normAnswer.split(' ').includes(normGuess);
        }
        return normAnswer.includes(normGuess) || normGuess.includes(normAnswer);
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
        answers.forEach((ans) => {
            const isRevealed = state.revealedIds.has(Number(ans.id));
            const row = document.createElement('div');
            row.className = isRevealed ? 'answer-slot revealed' : 'answer-slot';

            const pts = document.createElement('div');
            pts.className = 'slot-points';
            pts.textContent = String(ans.points);

            const txt = document.createElement('div');
            txt.className = isRevealed ? 'slot-text' : 'slot-text hidden-mask';
            txt.textContent = isRevealed ? ans.answer_text : '• • • • • • • •';

            const status = document.createElement('div');
            status.className = 'slot-status';
            status.textContent = isRevealed ? '✓' : '!';

            row.append(pts, txt, status);
            el.board.appendChild(row);
        });

        el.revealedCount.textContent = `${state.revealedIds.size} / ${answers.length}`;
        el.totalScore.textContent = String(state.score);
        const boxes = el.strikes.querySelectorAll('.strike-box');
        boxes.forEach((box, idx) => box.classList.toggle('active', idx < state.strikes));
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
        el.wrongOverlay.classList.add('show');
        el.board.classList.remove('board-shake');
        void el.board.offsetWidth;
        el.board.classList.add('board-shake');
        setTimeout(() => el.wrongOverlay.classList.remove('show'), 700);
    }

    function triggerScorePop() {
        el.totalScore.classList.remove('pop');
        void el.totalScore.offsetWidth;
        el.totalScore.classList.add('pop');
    }

    function resetRound() {
        state.revealedIds.clear();
        state.score = 0;
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
            state.revealedIds.add(Number(data.answer.id));
            state.score += Number(data.answer.points);
            playCorrectSound();
            renderBoard();
            triggerScorePop();
            addHistoryItem(data.answer.answer_text, true, data.answer.points);
            setFeedback(`Benar! "${data.answer.answer_text}" (+${data.answer.points} poin)`, 'ok');
        } else if (data.found && data.already_revealed) {
            setFeedback(`Jawaban "${data.answer.answer_text}" sudah terbuka sebelumnya.`, 'err');
        } else {
            state.strikes = Math.min(3, state.strikes + 1);
            renderBoard();
            triggerWrongEffect();
            addHistoryItem(guess, false, 0);
            setFeedback(`Maaf, "${guess}" tidak ada di papan jawaban!`, 'err');
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
            renderBoard();
            setFeedback('Semua jawaban telah dibuka.', 'ok');
        });
        el.btnResetRound.addEventListener('click', resetRound);

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
