/**
 * Permainan Family 100 - Backend Google Apps Script (GAS)
 * Database menggunakan Google Sheets (otomatis dibuat & diisi 11 soal contoh).
 */

const SHEET_NAME = 'Pertanyaan';

function getSeedQuestions_() {
  return [
    {
      id: 1,
      question: 'Selain Ms. Power BI, apa tools analisis data yang populer digunakan?',
      is_example: true,
      answers: [
        { text: 'TABLEAU', points: 100 },
        { text: 'LOOKER', points: 90 },
        { text: 'EXCEL', points: 80 },
        { text: 'GOOGLESHEET', points: 70 },
        { text: 'PYTHON', points: 60 },
        { text: 'R', points: 50 },
        { text: 'SQL', points: 40 },
        { text: 'APACHE SPARK', points: 30 }
      ]
    },
    {
      id: 2,
      question: 'Selain Bar Chart, apa grafik yang paling populer digunakan?',
      is_example: true,
      answers: [
        { text: 'LINE', points: 100 },
        { text: 'PIE', points: 90 },
        { text: 'TABLE', points: 80 },
        { text: 'SCATTER', points: 70 },
        { text: 'WATERFALL', points: 60 },
        { text: 'HISTOGRAM', points: 50 },
        { text: 'MAP', points: 40 },
        { text: 'GANTT', points: 30 }
      ]
    },
    {
      id: 3,
      question: 'Selain rumus SUM, apa rumus yang sering digunakan di Excel?',
      is_example: true,
      answers: [
        { text: 'AVERAGE', points: 100 },
        { text: 'VLOOKUP', points: 90 },
        { text: 'HLOOKUP', points: 80 },
        { text: 'IF', points: 70 },
        { text: 'MAX', points: 60 },
        { text: 'MIN', points: 50 },
        { text: 'COUNT', points: 40 },
        { text: 'INDEX', points: 30 }
      ]
    },
    {
      id: 4,
      question: 'Selain Excel, apa connector data yang ada di Power BI?',
      is_example: true,
      answers: [
        { text: 'PDF', points: 100 },
        { text: 'CSV', points: 90 },
        { text: 'WEB', points: 80 },
        { text: 'FOLDER', points: 70 },
        { text: 'ORACLE', points: 60 },
        { text: 'SQL SERVER', points: 50 },
        { text: 'SHAREPOINT', points: 40 },
        { text: 'SAP', points: 30 }
      ]
    },
    {
      id: 5,
      question: 'Apa Yang Dilakukan Anak Saat Ketahuan Berbohong…..?',
      is_example: true,
      answers: [
        { text: 'MINTA MAAF', points: 100 },
        { text: 'MENANGIS', points: 90 },
        { text: 'CENGENGESAN', points: 80 },
        { text: 'MALU', points: 70 },
        { text: 'GUGUP', points: 60 },
        { text: 'MENCARI ALASAN', points: 50 },
        { text: 'PURA PURA LUPA', points: 40 },
        { text: 'DIAM', points: 30 }
      ]
    },
    {
      id: 6,
      question: 'Apa Yang Dilakukan Orang Ketika Ada Masalah',
      is_example: true,
      answers: [
        { text: 'MENANGIS', points: 100 },
        { text: 'MELAMUN', points: 90 },
        { text: 'MINTA BANTUAN', points: 80 },
        { text: 'BERDOA', points: 70 },
        { text: 'MENCARI SOLUSI', points: 60 },
        { text: 'CURHAT', points: 50 },
        { text: 'MARAH-MARAH', points: 40 },
        { text: 'JALAN-JALAN', points: 30 }
      ]
    },
    {
      id: 7,
      question: 'Apa yang membuat orang dijauhi',
      is_example: true,
      answers: [
        { text: 'BAU', points: 100 },
        { text: 'NYEBELIN', points: 90 },
        { text: 'SOMBONG', points: 80 },
        { text: 'SUKA PINJAM DUIT', points: 70 },
        { text: 'KASAR', points: 60 },
        { text: 'TIDAK DIPERCAYA', points: 50 },
        { text: 'JAHAT', points: 40 },
        { text: 'EGOIS', points: 30 }
      ]
    },
    {
      id: 8,
      question: 'Apa permainan tradisional yang dilakukan sambil nyanyi?',
      is_example: true,
      answers: [
        { text: 'ULAR NAGA', points: 100 },
        { text: 'AMPAR AMPAR PISANG', points: 90 },
        { text: 'CUBLEK CUBLEK SUWENG', points: 80 },
        { text: 'DOMIKADO', points: 70 }
      ]
    },
    {
      id: 9,
      question: 'Apa kata Belanda yang digunakan orang Indonesia?',
      is_example: true,
      answers: [
        { text: 'BRUG', points: 100 },
        { text: 'GORDIJN', points: 90 },
        { text: 'HANDDOEK', points: 80 },
        { text: 'SPOOR', points: 70 },
        { text: 'GRATIS', points: 60 }
      ]
    },
    {
      id: 10,
      question: 'Apa nama bunga yang suka dijadikan nama jalan?',
      is_example: true,
      answers: [
        { text: 'BUGENVIL', points: 100 },
        { text: 'KAMBOJA', points: 90 },
        { text: 'KENANGA', points: 80 },
        { text: 'LILY', points: 70 },
        { text: 'ANGGREK', points: 60 },
        { text: 'MAWAR', points: 50 },
        { text: 'AZALEA', points: 40 }
      ]
    },
    {
      id: 11,
      question: 'Apa yang orang lakukan ketika banyak uang?',
      is_example: true,
      answers: [
        { text: 'MEMBELI PROPERTY', points: 100 },
        { text: 'MEMBELI EMAS', points: 90 },
        { text: 'MEMBELI KENDARAAN', points: 80 },
        { text: 'BERLIBUR', points: 70 },
        { text: 'MENABUNG', points: 60 }
      ]
    },
    {
      question: 'Sebutkan format file yang paling sering dipakai untuk bertukar data!',
      is_example: true,
      answers: [
        { text: 'CSV', points: 100 },
        { text: 'EXCEL / XLSX', points: 90 },
        { text: 'JSON', points: 80 },
        { text: 'PDF', points: 70 },
        { text: 'XML', points: 60 },
        { text: 'PARQUET', points: 50 },
        { text: 'TXT', points: 40 },
        { text: 'SQL', points: 30 }
      ]
    },
    {
      question: 'Apa penyebab laporan atau data sering terlambat dikirim ke pusat?',
      is_example: true,
      answers: [
        { text: 'PROSES MANUAL', points: 100 },
        { text: 'FORMAT BERBEDA', points: 90 },
        { text: 'REVISI DATA', points: 80 },
        { text: 'KONEKSI INTERNET', points: 70 },
        { text: 'LUPA', points: 60 },
        { text: 'SISTEM ERROR', points: 50 },
        { text: 'MENUNGGU APPROVAL', points: 40 },
        { text: 'FILE TERLALU BESAR', points: 30 }
      ]
    },
    {
      question: 'Apa saja dimensi atau istilah penting dalam Data Quality (Mutu Data)?',
      is_example: true,
      answers: [
        { text: 'LENGKAP / COMPLETENESS', points: 100 },
        { text: 'AKURAT / ACCURACY', points: 90 },
        { text: 'KONSISTEN / CONSISTENCY', points: 80 },
        { text: 'TEPAT WAKTU / TIMELINESS', points: 70 },
        { text: 'TIDAK DUPLIKAT / UNIQUENESS', points: 60 },
        { text: 'VALID', points: 50 }
      ]
    },
    {
      question: 'Aplikasi apa yang paling sering dipakai tim untuk kolaborasi kerja & kirim data?',
      is_example: true,
      answers: [
        { text: 'WHATSAPP', points: 100 },
        { text: 'EMAIL', points: 90 },
        { text: 'GOOGLE DRIVE', points: 80 },
        { text: 'ZOOM / MEET', points: 70 },
        { text: 'EXCEL / SPREADSHEET', points: 60 },
        { text: 'SLACK / TEAMS', points: 50 },
        { text: 'TRELLO / NOTION', points: 40 },
        { text: 'GITHUB', points: 30 }
      ]
    },
    {
      question: 'Apa yang biasa dilakukan pegawai kantor saat sistem atau server tiba-tiba down?',
      is_example: true,
      answers: [
        { text: 'LAPOR IT', points: 100 },
        { text: 'REFRESH BERKALI-KALI', points: 90 },
        { text: 'NGOPI / ISTIRAHAT', points: 80 },
        { text: 'PANIK', points: 70 },
        { text: 'TANYA TEMAN SEBELAH', points: 60 },
        { text: 'RESTART LAPTOP', points: 50 },
        { text: 'MAIN HP', points: 40 },
        { text: 'PULANG', points: 30 }
      ]
    },
    {
      question: 'Apa yang paling sering membuat orang terlambat berangkat kerja atau acara?',
      is_example: true,
      answers: [
        { text: 'MACET', points: 100 },
        { text: 'BANGUN KESIANGAN', points: 90 },
        { text: 'HUJAN', points: 80 },
        { text: 'ANTRE KAMAR MANDI', points: 70 },
        { text: 'CARI KUNCI / BARANG', points: 60 },
        { text: 'BAN BOCOR', points: 50 },
        { text: 'DANDAN LAMA', points: 40 },
        { text: 'SARAPAN', points: 30 }
      ]
    },
    {
      question: 'Benda apa yang wajib dibawa saat bepergian keluar rumah, selain dompet?',
      is_example: true,
      answers: [
        { text: 'HP / HANDPHONE', points: 100 },
        { text: 'KUNCI', points: 90 },
        { text: 'POWERBANK / CHARGER', points: 80 },
        { text: 'TISU', points: 70 },
        { text: 'EARPHONE', points: 60 },
        { text: 'PAYUNG', points: 50 },
        { text: 'BOTOL MINUM', points: 40 },
        { text: 'PARFUM', points: 30 }
      ]
    },
    {
      question: 'Menu sarapan pagi apa yang paling populer di Indonesia?',
      is_example: true,
      answers: [
        { text: 'NASI GORENG', points: 100 },
        { text: 'BUBUR AYAM', points: 90 },
        { text: 'NASI UDUK', points: 80 },
        { text: 'ROTI', points: 70 },
        { text: 'LONTONG SAYUR', points: 60 },
        { text: 'GORENGAN', points: 50 },
        { text: 'MI INSTAN', points: 40 },
        { text: 'TELUR', points: 30 }
      ]
    },
    {
      question: 'Apa yang pertama kali dilakukan orang begitu bangun tidur di pagi hari?',
      is_example: true,
      answers: [
        { text: 'CEK HP', points: 100 },
        { text: 'MINUM AIR', points: 90 },
        { text: 'KE KAMAR MANDI', points: 80 },
        { text: 'MATIKAN ALARM', points: 70 },
        { text: 'BERDOA', points: 60 },
        { text: 'NGUMPULIN NYAWA', points: 50 },
        { text: 'CUCI MUKA', points: 40 },
        { text: 'TARIK SELIMUT LAGI', points: 30 }
      ]
    },
    {
      question: 'Alasan apa yang sering dipakai saat lupa membalas chat atau pesan?',
      is_example: true,
      answers: [
        { text: 'KETIDURAN', points: 100 },
        { text: 'SIBUK KERJA', points: 90 },
        { text: 'TIDAK ADA SINYAL', points: 80 },
        { text: 'SUDAH BALAS DI HATI', points: 70 },
        { text: 'BATERAI HABIS', points: 60 },
        { text: 'TIDAK BUKA HP', points: 50 },
        { text: 'TENGGELAM', points: 40 },
        { text: 'LUPA', points: 30 }
      ]
    }
  ];
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = ['ID', 'Pertanyaan', 'Contoh'];
    for (let i = 1; i <= 8; i++) {
      headers.push('Jawaban_' + i, 'Poin_' + i);
    }
    sheet.appendRow(headers);
    seedSheet_(sheet);
  } else if (sheet.getLastRow() <= 1) {
    seedSheet_(sheet);
  }
  return sheet;
}

function seedSheet_(sheet) {
  const seeds = getSeedQuestions_();
  seeds.forEach(function (q) {
    const row = [q.id, q.question, q.is_example ? 1 : 0];
    for (let i = 0; i < 8; i++) {
      const ans = q.answers[i];
      row.push(ans ? ans.text : '', ans ? ans.points : '');
    }
    sheet.appendRow(row);
  });
}

function setupDatabase() {
  getOrCreateSheet_();
}

function listQuestions_() {
  const sheet = getOrCreateSheet_();
  const values = sheet.getDataRange().getValues();
  const result = [];
  for (let r = 1; r < values.length; r++) {
    const row = values[r];
    if (!row[1]) continue;
    const answers = [];
    for (let i = 0; i < 8; i++) {
      const text = String(row[3 + i * 2] || '').trim();
      const points = Number(row[4 + i * 2] || 0);
      if (text && points > 0) {
        answers.push({
          id: Number(row[0]) * 100 + (i + 1),
          answer_text: text.toUpperCase(),
          points: points,
          sort_order: i + 1
        });
      }
    }
    result.push({
      id: Number(row[0]),
      question: String(row[1]),
      is_example: Number(row[2]) === 1,
      answers: answers
    });
  }
  return result;
}

function normalizeText_(text) {
  return String(text || '')
    .toUpperCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getSynonymGroups_() {
  return [
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
    ['SPOOR', 'SEPUR', 'KERETA']
  ];
}

function expandVariants_(normText) {
function stripPrefix_(normText) {
  return normText.replace(/\b(MENG|MEM|MEN|ME|BER)([A-Z]{3,})/g, '$2');
}

function expandVariants_(normText) {
  const variants = [normText];
  const stripped = stripPrefix_(normText);
  if (stripped && stripped !== normText) variants.push(stripped);

  const groups = getSynonymGroups_();
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    if (group.indexOf(normText) !== -1 || group.indexOf(stripped) !== -1) {
      for (let k = 0; k < group.length; k++) {
        if (variants.indexOf(group[k]) === -1) variants.push(group[k]);
      }
    }
  }
  return variants;
}

function matchScore_(normAnswer, normGuess) {
  if (normAnswer === normGuess) return 4;
  if (stripPrefix_(normAnswer) === stripPrefix_(normGuess)) return 3;

  const ansVariants = expandVariants_(normAnswer);
  const guessVariants = expandVariants_(normGuess);
  for (let i = 0; i < ansVariants.length; i++) {
    if (guessVariants.indexOf(ansVariants[i]) !== -1) return 2;
  }

  if (normGuess.length <= 2 || normAnswer.length <= 2) {
    return normAnswer.split(' ').indexOf(normGuess) !== -1 ? 2 : 0;
  }
  if (Math.min(normAnswer.length, normGuess.length) >= 4 &&
      (normAnswer.indexOf(normGuess) !== -1 || normGuess.indexOf(normAnswer) !== -1)) {
    return 1;
  }
  return 0;
}

function checkAnswer_(questionId, guess, revealedIds) {
  const questions = listQuestions_();
  const q = questions.find(function (item) { return Number(item.id) === Number(questionId); });
  if (!q) return { ok: false, error: 'Pertanyaan tidak ditemukan.' };

  const normGuess = normalizeText_(guess);
  if (!normGuess) return { ok: true, found: false, empty: true };

  const revealedSet = {};
  (revealedIds || []).forEach(function (id) { revealedSet[Number(id)] = true; });

  const candidates = [];
  for (let i = 0; i < q.answers.length; i++) {
    const ans = q.answers[i];
    const score = matchScore_(normalizeText_(ans.answer_text), normGuess);
    if (score > 0) {
      candidates.push({ ans: ans, score: score, revealed: Boolean(revealedSet[Number(ans.id)]) });
    }
  }
  if (candidates.length === 0) return { ok: true, found: false };

  let maxScore = 0;
  candidates.forEach(function (c) { if (c.score > maxScore) maxScore = c.score; });
  const top = candidates.filter(function (c) { return c.score === maxScore; });
  const unrevealed = top.find(function (c) { return !c.revealed; });
  if (unrevealed) {
    return { ok: true, found: true, already_revealed: false, answer: unrevealed.ans };
  }
  return { ok: true, found: true, already_revealed: true, answer: top[0].ans };
}

function storeQuestion_(questionText, answers) {
  const cleanQ = String(questionText || '').trim();
  if (!cleanQ || cleanQ.length > 255) {
    return { ok: false, error: 'Pertanyaan wajib diisi (maksimal 255 karakter).' };
  }
  if (!Array.isArray(answers) || answers.length < 1 || answers.length > 8) {
    return { ok: false, error: 'Minimal 1 dan maksimal 8 jawaban.' };
  }

  const sheet = getOrCreateSheet_();
  const values = sheet.getDataRange().getValues();
  let maxId = 0;
  for (let r = 1; r < values.length; r++) {
    maxId = Math.max(maxId, Number(values[r][0]) || 0);
  }
  const newId = maxId + 1;
  const row = [newId, cleanQ, 0];
  for (let i = 0; i < 8; i++) {
    const item = answers[i];
    if (item && String(item.text || '').trim()) {
      row.push(String(item.text).trim().toUpperCase(), Number(item.points) || 10);
    } else {
      row.push('', '');
    }
  }
  sheet.appendRow(row);
  return { ok: true, message: 'Pertanyaan berhasil ditambahkan.', id: newId };
}

function deleteQuestion_(id) {
  const sheet = getOrCreateSheet_();
  const values = sheet.getDataRange().getValues();
  for (let r = 1; r < values.length; r++) {
    if (Number(values[r][0]) === Number(id)) {
      sheet.deleteRow(r + 1);
      return { ok: true, message: 'Pertanyaan berhasil dihapus.' };
    }
  }
  return { ok: false, error: 'Pertanyaan tidak ditemukan.' };
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function sanitizeRoom_(room) {
  const clean = String(room || 'F100').toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 24);
  return clean || 'F100';
}

function syncPull_(room) {
  const key = 'live_' + sanitizeRoom_(room);
  const raw = CacheService.getScriptCache().get(key);
  if (!raw) return { ok: true, state: null };
  try {
    return { ok: true, state: JSON.parse(raw) };
  } catch (err) {
    return { ok: true, state: null };
  }
}

function syncPush_(room, state) {
  if (!state || typeof state !== 'object') {
    return { ok: false, error: 'State live tidak valid.' };
  }
  const key = 'live_' + sanitizeRoom_(room);
  CacheService.getScriptCache().put(key, JSON.stringify(state), 21600);
  return { ok: true };
}

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) ? String(e.parameter.action) : 'questions';
  if (action === 'questions') {
    return jsonOut_({ ok: true, data: listQuestions_() });
  }
  if (action === 'sync_pull') {
    return jsonOut_(syncPull_(e.parameter.room));
  }
  return jsonOut_({ ok: false, error: 'Aksi tidak dikenal.' });
}

function doPost(e) {
  let body = {};
  try {
    body = JSON.parse((e && e.postData && e.postData.contents) ? e.postData.contents : '{}');
  } catch (err) {
    return jsonOut_({ ok: false, error: 'Format JSON tidak valid.' });
  }

  const action = String(body.action || '');
  if (action === 'check') {
    return jsonOut_(checkAnswer_(body.question_id, body.guess, body.revealed_ids));
  }
  if (action === 'store') {
    return jsonOut_(storeQuestion_(body.question, body.answers));
  }
  if (action === 'delete') {
    return jsonOut_(deleteQuestion_(body.id));
  }
  if (action === 'sync_push') {
    return jsonOut_(syncPush_(body.room, body.state));
  }
  return jsonOut_({ ok: false, error: 'Aksi POST tidak dikenal.' });
}
