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
    ['MELAMUN', 'NGELAMUN', 'LAMUN', 'BENGONG', 'TERMENUNG', 'MELONGO', 'TERDIAM', 'MENGKHAYAL'],
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
  const variants = [normText];
  const stripped = normText.replace(/\b(MENG|MEM|MEN|ME|BER)([A-Z]{3,})/g, '$2');
  if (stripped && stripped !== normText) variants.push(stripped);

  const groups = getSynonymGroups_();
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    for (let j = 0; j < group.length; j++) {
      const term = group[j];
      if (normText === term || (normText.length >= 4 && term.indexOf(normText) !== -1)) {
        for (let k = 0; k < group.length; k++) {
          if (variants.indexOf(group[k]) === -1) variants.push(group[k]);
        }
        break;
      }
    }
  }
  return variants;
}

function isMatch_(normAnswer, normGuess) {
  const ansVariants = expandVariants_(normAnswer);
  const guessVariants = expandVariants_(normGuess);
  for (let i = 0; i < ansVariants.length; i++) {
    const av = ansVariants[i];
    for (let j = 0; j < guessVariants.length; j++) {
      const gv = guessVariants[j];
      if (av === gv) return true;
      if (av.length <= 2 || gv.length <= 2) {
        if (av.split(' ').indexOf(gv) !== -1) return true;
        continue;
      }
      if (av.indexOf(gv) !== -1 || gv.indexOf(av) !== -1) return true;
    }
  }
  return false;
}

function checkAnswer_(questionId, guess, revealedIds) {
  const questions = listQuestions_();
  const q = questions.find(function (item) { return Number(item.id) === Number(questionId); });
  if (!q) return { ok: false, error: 'Pertanyaan tidak ditemukan.' };

  const normGuess = normalizeText_(guess);
  if (!normGuess) return { ok: true, found: false, empty: true };

  const revealedSet = {};
  (revealedIds || []).forEach(function (id) { revealedSet[Number(id)] = true; });

  let alreadyMatched = null;
  for (let i = 0; i < q.answers.length; i++) {
    const ans = q.answers[i];
    if (isMatch_(normalizeText_(ans.answer_text), normGuess)) {
      if (revealedSet[Number(ans.id)]) {
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

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) ? String(e.parameter.action) : 'questions';
  if (action === 'questions') {
    return jsonOut_({ ok: true, data: listQuestions_() });
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
  return jsonOut_({ ok: false, error: 'Aksi POST tidak dikenal.' });
}
