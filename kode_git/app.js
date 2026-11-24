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
        {
            id: 12,
            question: 'Sebutkan format file yang paling sering dipakai untuk bertukar data!',
            is_example: true,
            answers: [
                { id: 1201, answer_text: 'CSV', points: 100 },
                { id: 1202, answer_text: 'EXCEL / XLSX', points: 90 },
                { id: 1203, answer_text: 'JSON', points: 80 },
                { id: 1204, answer_text: 'PDF', points: 70 },
                { id: 1205, answer_text: 'XML', points: 60 },
                { id: 1206, answer_text: 'PARQUET', points: 50 },
                { id: 1207, answer_text: 'TXT', points: 40 },
                { id: 1208, answer_text: 'SQL', points: 30 },
            ],
        },
        {
            id: 13,
            question: 'Apa penyebab laporan atau data sering terlambat dikirim ke pusat?',
            is_example: true,
            answers: [
                { id: 1301, answer_text: 'PROSES MANUAL', points: 100 },
                { id: 1302, answer_text: 'FORMAT BERBEDA', points: 90 },
                { id: 1303, answer_text: 'REVISI DATA', points: 80 },
                { id: 1304, answer_text: 'KONEKSI INTERNET', points: 70 },
                { id: 1305, answer_text: 'LUPA', points: 60 },
                { id: 1306, answer_text: 'SISTEM ERROR', points: 50 },
                { id: 1307, answer_text: 'MENUNGGU APPROVAL', points: 40 },
                { id: 1308, answer_text: 'FILE TERLALU BESAR', points: 30 },
            ],
        },
        {
            id: 14,
            question: 'Apa saja dimensi atau istilah penting dalam Data Quality (Mutu Data)?',
            is_example: true,
            answers: [
                { id: 1401, answer_text: 'LENGKAP / COMPLETENESS', points: 100 },
                { id: 1402, answer_text: 'AKURAT / ACCURACY', points: 90 },
                { id: 1403, answer_text: 'KONSISTEN / CONSISTENCY', points: 80 },
                { id: 1404, answer_text: 'TEPAT WAKTU / TIMELINESS', points: 70 },
                { id: 1405, answer_text: 'TIDAK DUPLIKAT / UNIQUENESS', points: 60 },
                { id: 1406, answer_text: 'VALID', points: 50 },
            ],
        },
        {
            id: 15,
            question: 'Aplikasi apa yang paling sering dipakai tim untuk kolaborasi kerja & kirim data?',
            is_example: true,
            answers: [
                { id: 1501, answer_text: 'WHATSAPP', points: 100 },
                { id: 1502, answer_text: 'EMAIL', points: 90 },
                { id: 1503, answer_text: 'GOOGLE DRIVE', points: 80 },
                { id: 1504, answer_text: 'ZOOM / MEET', points: 70 },
                { id: 1505, answer_text: 'EXCEL / SPREADSHEET', points: 60 },
                { id: 1506, answer_text: 'SLACK / TEAMS', points: 50 },
                { id: 1507, answer_text: 'TRELLO / NOTION', points: 40 },
                { id: 1508, answer_text: 'GITHUB', points: 30 },
            ],
        },
        {
            id: 16,
            question: 'Apa yang biasa dilakukan pegawai kantor saat sistem atau server tiba-tiba down?',
            is_example: true,
            answers: [
                { id: 1601, answer_text: 'LAPOR IT', points: 100 },
                { id: 1602, answer_text: 'REFRESH BERKALI-KALI', points: 90 },
                { id: 1603, answer_text: 'NGOPI / ISTIRAHAT', points: 80 },
                { id: 1604, answer_text: 'PANIK', points: 70 },
                { id: 1605, answer_text: 'TANYA TEMAN SEBELAH', points: 60 },
                { id: 1606, answer_text: 'RESTART LAPTOP', points: 50 },
                { id: 1607, answer_text: 'MAIN HP', points: 40 },
                { id: 1608, answer_text: 'PULANG', points: 30 },
            ],
        },
        {
            id: 17,
            question: 'Apa yang paling sering membuat orang terlambat berangkat kerja atau acara?',
            is_example: true,
            answers: [
                { id: 1701, answer_text: 'MACET', points: 100 },
                { id: 1702, answer_text: 'BANGUN KESIANGAN', points: 90 },
                { id: 1703, answer_text: 'HUJAN', points: 80 },
                { id: 1704, answer_text: 'ANTRE KAMAR MANDI', points: 70 },
                { id: 1705, answer_text: 'CARI KUNCI / BARANG', points: 60 },
                { id: 1706, answer_text: 'BAN BOCOR', points: 50 },
                { id: 1707, answer_text: 'DANDAN LAMA', points: 40 },
                { id: 1708, answer_text: 'SARAPAN', points: 30 },
            ],
        },
        {
            id: 18,
            question: 'Benda apa yang wajib dibawa saat bepergian keluar rumah, selain dompet?',
            is_example: true,
            answers: [
                { id: 1801, answer_text: 'HP / HANDPHONE', points: 100 },
                { id: 1802, answer_text: 'KUNCI', points: 90 },
                { id: 1803, answer_text: 'POWERBANK / CHARGER', points: 80 },
                { id: 1804, answer_text: 'TISU', points: 70 },
                { id: 1805, answer_text: 'EARPHONE', points: 60 },
                { id: 1806, answer_text: 'PAYUNG', points: 50 },
                { id: 1807, answer_text: 'BOTOL MINUM', points: 40 },
                { id: 1808, answer_text: 'PARFUM', points: 30 },
            ],
        },
        {
            id: 19,
            question: 'Menu sarapan pagi apa yang paling populer di Indonesia?',
            is_example: true,
            answers: [
                { id: 1901, answer_text: 'NASI GORENG', points: 100 },
                { id: 1902, answer_text: 'BUBUR AYAM', points: 90 },
                { id: 1903, answer_text: 'NASI UDUK', points: 80 },
                { id: 1904, answer_text: 'ROTI', points: 70 },
                { id: 1905, answer_text: 'LONTONG SAYUR', points: 60 },
                { id: 1906, answer_text: 'GORENGAN', points: 50 },
                { id: 1907, answer_text: 'MI INSTAN', points: 40 },
                { id: 1908, answer_text: 'TELUR', points: 30 },
            ],
        },
        {
            id: 20,
            question: 'Apa yang pertama kali dilakukan orang begitu bangun tidur di pagi hari?',
            is_example: true,
            answers: [
                { id: 2001, answer_text: 'CEK HP', points: 100 },
                { id: 2002, answer_text: 'MINUM AIR', points: 90 },
                { id: 2003, answer_text: 'KE KAMAR MANDI', points: 80 },
                { id: 2004, answer_text: 'MATIKAN ALARM', points: 70 },
                { id: 2005, answer_text: 'BERDOA', points: 60 },
                { id: 2006, answer_text: 'NGUMPULIN NYAWA', points: 50 },
                { id: 2007, answer_text: 'CUCI MUKA', points: 40 },
                { id: 2008, answer_text: 'TARIK SELIMUT LAGI', points: 30 },
            ],
        },
        {
            id: 21,
            question: 'Alasan apa yang sering dipakai saat lupa membalas chat atau pesan?',
            is_example: true,
            answers: [
                { id: 2101, answer_text: 'KETIDURAN', points: 100 },
                { id: 2102, answer_text: 'SIBUK KERJA', points: 90 },
                { id: 2103, answer_text: 'TIDAK ADA SINYAL', points: 80 },
                { id: 2104, answer_text: 'SUDAH BALAS DI HATI', points: 70 },
                { id: 2105, answer_text: 'BATERAI HABIS', points: 60 },
                { id: 2106, answer_text: 'TIDAK BUKA HP', points: 50 },
                { id: 2107, answer_text: 'TENGGELAM', points: 40 },
                { id: 2108, answer_text: 'LUPA', points: 30 },
            ],
        },
        {
            id: 22,
            category: 'Bapak-bapak',
            question: 'Alasan paling sering dipakai bapak-bapak saat pulang telat ke rumah?',
            is_example: true,
            answers: [
                { id: 2201, answer_text: 'MACET DI JALAN', points: 100 },
                { id: 2202, answer_text: 'LEMBUR KANTOR', points: 90 },
                { id: 2203, answer_text: 'BAN BOCOR', points: 80 },
                { id: 2204, answer_text: 'NGOPI / NONTON BOLA', points: 70 },
                { id: 2205, answer_text: 'RAPAT MENDADAK', points: 60 },
                { id: 2206, answer_text: 'BATERAI HP HABIS', points: 50 },
                { id: 2207, answer_text: 'BELI TITIPAN ISTRI', points: 40 },
                { id: 2208, answer_text: 'KETIDURAN', points: 30 },
            ],
        },
        {
            id: 23,
            category: 'Bapak-bapak',
            question: 'Apa yang langsung dilakukan suami saat istri tiba-tiba diam dan cemberut?',
            is_example: true,
            answers: [
                { id: 2301, answer_text: 'TANYA KENAPA', points: 100 },
                { id: 2302, answer_text: 'MINTA MAAF', points: 90 },
                { id: 2303, answer_text: 'BELIKAN MAKANAN', points: 80 },
                { id: 2304, answer_text: 'TRANSFER UANG', points: 70 },
                { id: 2305, answer_text: 'IKUT DIAM', points: 60 },
                { id: 2306, answer_text: 'RAYU / GOMBAL', points: 50 },
                { id: 2307, answer_text: 'CUCI PIRING', points: 40 },
                { id: 2308, answer_text: 'KABUR KELUAR', points: 30 },
            ],
        },
        {
            id: 24,
            category: 'Lingkungan Kantor',
            question: 'Apa yang paling bikin karyawan semangat selain tanggal gajian?',
            is_example: true,
            answers: [
                { id: 2401, answer_text: 'MAKAN GRATIS / TRAKTIRAN', points: 100 },
                { id: 2402, answer_text: 'TANGGAL MERAH / LIBUR', points: 90 },
                { id: 2403, answer_text: 'PULANG CEPAT', points: 80 },
                { id: 2404, answer_text: 'BONUS / THR', points: 70 },
                { id: 2405, answer_text: 'BOS TIDAK MASUK', points: 60 },
                { id: 2406, answer_text: 'WFH', points: 50 },
                { id: 2407, answer_text: 'RAPAT DIBATALKAN', points: 40 },
                { id: 2408, answer_text: 'KOPI GRATIS', points: 30 },
            ],
        },
        {
            id: 25,
            category: 'Lingkungan Kantor',
            question: 'Hal yang sering dilakukan saat meeting di kantor terasa membosankan?',
            is_example: true,
            answers: [
                { id: 2501, answer_text: 'MAIN HP / SCROLL SOSMED', points: 100 },
                { id: 2502, answer_text: 'NGANTUK / MENGUAP', points: 90 },
                { id: 2503, answer_text: 'CORAT-CORET BUKU', points: 80 },
                { id: 2504, answer_text: 'MENGHAYAL', points: 70 },
                { id: 2505, answer_text: 'PURA-PURA CATAT', points: 60 },
                { id: 2506, answer_text: 'NYEMIL / MINUM KOPI', points: 50 },
                { id: 2507, answer_text: 'MATIKAN KAMERA', points: 40 },
                { id: 2508, answer_text: 'IZIN KE TOILET', points: 30 },
            ],
        },
        {
            id: 26,
            category: 'Gen Z & Sosmed',
            question: 'Konten apa yang paling sering muncul di FYP TikTok atau Reels Instagram?',
            is_example: true,
            answers: [
                { id: 2601, answer_text: 'JOGET / DANCE', points: 100 },
                { id: 2602, answer_text: 'KULINER / MUKBANG', points: 90 },
                { id: 2603, answer_text: 'KOMEDI / PRANK', points: 80 },
                { id: 2604, answer_text: 'REVIEW BARANG', points: 70 },
                { id: 2605, answer_text: 'DRAMA / CURHAT', points: 60 },
                { id: 2606, answer_text: 'KUCING LUCU', points: 50 },
                { id: 2607, answer_text: 'TIPS / TUTORIAL', points: 40 },
                { id: 2608, answer_text: 'PODCAST', points: 30 },
            ],
        },
        {
            id: 27,
            category: 'Gen Z & Sosmed',
            question: 'Apa yang dilakukan orang sebelum menyantap makanan enak di kafe?',
            is_example: true,
            answers: [
                { id: 2701, answer_text: 'FOTO / VIDEO DULU', points: 100 },
                { id: 2702, answer_text: 'BERDOA', points: 90 },
                { id: 2703, answer_text: 'UPLOAD STORY', points: 80 },
                { id: 2704, answer_text: 'CARI ANGLE BAGUS', points: 70 },
                { id: 2705, answer_text: 'CUCI TANGAN', points: 60 },
                { id: 2706, answer_text: 'COBAIN KUAHNYA', points: 50 },
                { id: 2707, answer_text: 'TAG TEMAN', points: 40 },
                { id: 2708, answer_text: 'MINTA SENDOK', points: 30 },
            ],
        },
        {
            id: 28,
            category: 'Gen Z & Sosmed',
            question: 'Istilah bahasa gaul apa yang paling sering dipakai anak muda zaman sekarang?',
            is_example: true,
            answers: [
                { id: 2801, answer_text: 'OVERTHINKING / GALAU', points: 100 },
                { id: 2802, answer_text: 'HEALING', points: 90 },
                { id: 2803, answer_text: 'FOMO', points: 80 },
                { id: 2804, answer_text: 'RED FLAG / GREEN FLAG', points: 70 },
                { id: 2805, answer_text: 'SLAY', points: 60 },
                { id: 2806, answer_text: 'BESTIE', points: 50 },
                { id: 2807, answer_text: 'VIBE', points: 40 },
                { id: 2808, answer_text: 'GHOSTING', points: 30 },
            ],
        },
        {
            id: 29,
            category: 'Gen Z & Sosmed',
            question: 'Benda apa yang wajib ada di meja kerja atau tas anak muda di kantor?',
            is_example: true,
            answers: [
                { id: 2901, answer_text: 'ES KOPI SUSU', points: 100 },
                { id: 2902, answer_text: 'TWS / EARPHONE', points: 90 },
                { id: 2903, answer_text: 'TUMBLER', points: 80 },
                { id: 2904, answer_text: 'LAPTOP / IPAD', points: 70 },
                { id: 2905, answer_text: 'CHARGER / POWERBANK', points: 60 },
                { id: 2906, answer_text: 'LIP BALM / SKINCARE', points: 50 },
                { id: 2907, answer_text: 'STIKER LUCU', points: 40 },
                { id: 2908, answer_text: 'KIPAS MINI', points: 30 },
            ],
        },
        {
            id: 30,
            category: 'Milenial & Boomers',
            question: 'Apa yang paling sering dikeluhkan pekerja usia 30-an?',
            is_example: true,
            answers: [
                { id: 3001, answer_text: 'SAKIT PINGGUNG / ENCOK', points: 100 },
                { id: 3002, answer_text: 'CICILAN / KPR', points: 90 },
                { id: 3003, answer_text: 'CAPEK KERJA', points: 80 },
                { id: 3004, answer_text: 'HARGA RUMAH MAHAL', points: 70 },
                { id: 3005, answer_text: 'SUSAH TIDUR', points: 60 },
                { id: 3006, answer_text: 'RAMBUT RONTOK / UBAN', points: 50 },
                { id: 3007, answer_text: 'KURANG LIBURAN', points: 40 },
                { id: 3008, answer_text: 'ASAM LAMBUNG', points: 30 },
            ],
        },
        {
            id: 31,
            category: 'Milenial & Boomers',
            question: 'Kebiasaan khas orang tua saat memakai grup WhatsApp keluarga?',
            is_example: true,
            answers: [
                { id: 3101, answer_text: 'KIRIM STIKER SELAMAT PAGI', points: 100 },
                { id: 3102, answer_text: 'FORWARD BROADCAST / HOAX', points: 90 },
                { id: 3103, answer_text: 'NGETIK HURUF KAPITAL', points: 80 },
                { id: 3104, answer_text: 'KIRIM FOTO BUNGA / KOPI', points: 70 },
                { id: 3105, answer_text: 'TYPO / SALAH KIRIM', points: 60 },
                { id: 3106, answer_text: 'VOICE NOTE PANJANG', points: 50 },
                { id: 3107, answer_text: 'BALAS JEMPOL', points: 40 },
                { id: 3108, answer_text: 'KIRIM VIDEO CERAMAH', points: 30 },
            ],
        },
        {
            id: 32,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Pakai sendok atau nggak, makan nasi padang tetap butuh TENAGA, MULUT, GIGI, dan UANG buat bayar!',
            question: 'Di rumah makan Padang, selain pakai sendok atau tangan, hal apa yang pasti dipakai orang saat makan?',
            is_example: true,
            answers: [
                { id: 3201, answer_text: 'TENAGA', points: 100 },
                { id: 3202, answer_text: 'MULUT', points: 90 },
                { id: 3203, answer_text: 'GIGI', points: 80 },
                { id: 3204, answer_text: 'UANG', points: 70 },
                { id: 3205, answer_text: 'LAPAR', points: 60 },
                { id: 3206, answer_text: 'PIRING', points: 50 },
                { id: 3207, answer_text: 'KURSI', points: 40 },
                { id: 3208, answer_text: 'DOA', points: 30 },
            ],
        },
        {
            id: 33,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Tengah malam klinik dokter tutup, jadi selain obat atau air garam, ujung-ujungnya lari ke KASUR & BANTAL!',
            question: 'Jika tengah malam sakit gigi dan semua dokter gigi sudah tutup, hal atau benda apa yang langsung dicari orang?',
            is_example: true,
            answers: [
                { id: 3301, answer_text: 'KASUR', points: 100 },
                { id: 3302, answer_text: 'OBAT', points: 90 },
                { id: 3303, answer_text: 'AIR GARAM', points: 80 },
                { id: 3304, answer_text: 'BANTAL', points: 70 },
                { id: 3305, answer_text: 'KACA CERMIN', points: 60 },
                { id: 3306, answer_text: 'DOA', points: 50 },
                { id: 3307, answer_text: 'IGD RUMAH SAKIT', points: 40 },
                { id: 3308, answer_text: 'HP', points: 30 },
            ],
        },
        {
            id: 34,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Tukangnya cuma satu! Sebelum pegang gunting, lima pelanggan tentu dipotong GANTIAN / ANTRE satu per satu!',
            question: 'Saat lima pelanggan masuk bersamaan ke tempat cukur yang tukangnya cuma satu, dengan cara apa rambut mereka dipotong?',
            is_example: true,
            answers: [
                { id: 3401, answer_text: 'GANTIAN', points: 100 },
                { id: 3402, answer_text: 'SATU PER SATU', points: 90 },
                { id: 3403, answer_text: 'ANTRE', points: 80 },
                { id: 3404, answer_text: 'GUNTING', points: 70 },
                { id: 3405, answer_text: 'MESIN CUKUR', points: 60 },
                { id: 3406, answer_text: 'SISIR', points: 50 },
                { id: 3407, answer_text: 'PELAN-PELAN', points: 40 },
                { id: 3408, answer_text: 'SABAR', points: 30 },
            ],
        },
        {
            id: 35,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Sore hari pas Ashar masih mendung doang belum turun — baru mengguyur DARI MAGHRIB!',
            question: 'Selain dari awan mendung, dari manakah atau kapankah air hujan itu biasanya turun ke bumi?',
            is_example: true,
            answers: [
                { id: 3501, answer_text: 'DARI MAGHRIB', points: 100 },
                { id: 3502, answer_text: 'DARI LANGIT', points: 90 },
                { id: 3503, answer_text: 'DARI ATAS', points: 80 },
                { id: 3504, answer_text: 'MUSIM HUJAN', points: 70 },
                { id: 3505, answer_text: 'SORE HARI', points: 60 },
                { id: 3506, answer_text: 'GERIMIS', points: 50 },
                { id: 3507, answer_text: 'MALAM HARI', points: 40 },
            ],
        },
        {
            id: 36,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Motor dilarang masuk tol! Jadi kalau mogok di jalan tol bebas hambatan ya paling cepat langsung DITILANG!',
            question: 'Apa yang paling cepat terjadi jika sebuah sepeda motor nekat masuk ke jalan tol lalu mogok di jalur cepat?',
            is_example: true,
            answers: [
                { id: 3601, answer_text: 'DITILANG', points: 100 },
                { id: 3602, answer_text: 'VIRAL', points: 90 },
                { id: 3603, answer_text: 'DISURUH KELUAR', points: 80 },
                { id: 3604, answer_text: 'DIDEREK', points: 70 },
                { id: 3605, answer_text: 'DIDORONG PETUGAS', points: 60 },
                { id: 3606, answer_text: 'DENDA', points: 50 },
                { id: 3607, answer_text: 'MALU', points: 40 },
            ],
        },
        {
            id: 37,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Mana mungkin bisa bangun tidur kalau TIDUR dan MEREM dulu saja belum dilakukan?!',
            question: 'Hal apa yang mutlak harus dilakukan seseorang lebih dulu sebelum ia bisa bangun tidur?',
            is_example: true,
            answers: [
                { id: 3701, answer_text: 'TIDUR', points: 100 },
                { id: 3702, answer_text: 'MEREM', points: 90 },
                { id: 3703, answer_text: 'BARING', points: 80 },
                { id: 3704, answer_text: 'MATIKAN LAMPU', points: 70 },
                { id: 3705, answer_text: 'NGANTUK', points: 60 },
                { id: 3706, answer_text: 'DOA', points: 50 },
                { id: 3707, answer_text: 'PASANG ALARM', points: 40 },
            ],
        },
        {
            id: 38,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Dokter bedah terbaik sekalipun mustahil membedah ORANG SEHAT yang tidak sakit apa-apa!',
            question: 'Sehebat apa pun dokter bedah di rumah sakit terbaik, orang seperti apa yang pasti ditolak untuk dioperasi?',
            is_example: true,
            answers: [
                { id: 3801, answer_text: 'ORANG SEHAT', points: 100 },
                { id: 3802, answer_text: 'TIDAK PUNYA UANG', points: 90 },
                { id: 3803, answer_text: 'SUDAH MENINGGAL', points: 80 },
                { id: 3804, answer_text: 'TIDAK SETUJU', points: 70 },
                { id: 3805, answer_text: 'KELUARGA SENDIRI', points: 60 },
                { id: 3806, answer_text: 'KABUR', points: 50 },
                { id: 3807, answer_text: 'SALAH KAMAR', points: 40 },
            ],
        },
        {
            id: 39,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Selain mengejar kemenangan dan aturan main, alasan paling nyatanya karena BOLANYA CUMA SATU di lapangan!',
            question: 'Dalam pertandingan basket atau sepak bola resmi, kenapa semua pemain berlari berebut satu bola yang sama?',
            is_example: true,
            answers: [
                { id: 3901, answer_text: 'INGIN MENANG', points: 100 },
                { id: 3902, answer_text: 'BOLANYA CUMA SATU', points: 90 },
                { id: 3903, answer_text: 'ATURAN MAIN', points: 80 },
                { id: 3904, answer_text: 'CETAK POIN', points: 70 },
                { id: 3905, answer_text: 'TAKUT KALAH', points: 60 },
                { id: 3906, answer_text: 'DIBAYAR', points: 50 },
                { id: 3907, answer_text: 'KURANG MODAL BELI BOLA', points: 40 },
            ],
        },
        {
            id: 40,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Selain lapor RT 1x24 jam, tamu yang sudah lewat dua hari menginap sebaiknya sadar diri lalu PAMIT pulang!',
            question: 'Apa yang sebaiknya dilakukan seorang tamu jika sudah menginap di rumah orang lain lebih dari 2x24 jam?',
            is_example: true,
            answers: [
                { id: 4001, answer_text: 'PAMIT', points: 100 },
                { id: 4002, answer_text: 'LAPOR RT', points: 90 },
                { id: 4003, answer_text: 'BANTU PEKERJAAN RUMAH', points: 80 },
                { id: 4004, answer_text: 'BAWA MAKANAN', points: 70 },
                { id: 4005, answer_text: 'JANGAN MEREPOTKAN', points: 60 },
                { id: 4006, answer_text: 'BERTERIMA KASIH', points: 50 },
                { id: 4007, answer_text: 'PINDAH HOTEL', points: 40 },
            ],
        },
        {
            id: 41,
            category: 'Logika Belok (Cak Lontong)',
            logicNote: 'Kata "terserah" sering membingungkan semua orang — ujung-ujungnya kalau tidak NASI PADANG, ya PULANG saja!',
            question: 'Saat diajak makan lalu seseorang menjawab "Terserah", makanan atau keputusan apa yang akhirnya paling sering dipilih?',
            is_example: true,
            answers: [
                { id: 4101, answer_text: 'NASI PADANG', points: 100 },
                { id: 4102, answer_text: 'PULANG', points: 90 },
                { id: 4103, answer_text: 'BAKSO', points: 80 },
                { id: 4104, answer_text: 'AYAM GEPREK', points: 70 },
                { id: 4105, answer_text: 'MIE AYAM', points: 60 },
                { id: 4106, answer_text: 'PECEL LELE', points: 50 },
                { id: 4107, answer_text: 'SATE', points: 40 },
                { id: 4108, answer_text: 'TIDAK JADI MAKAN', points: 30 },
            ],
        },
        {
            id: 42,
            category: 'Asah Otak & Logika',
            logicNote: 'Hukum alam barang kecil: saat dicari panik menghilang, begitu BERHENTI MENCARI atau BELI BARU langsung muncul!',
            question: 'Benda kecil seperti gunting kuku atau charger selalu hilang saat dicari buru-buru, tapi langsung ketemu begitu kita...',
            is_example: true,
            answers: [
                { id: 4201, answer_text: 'BERHENTI MENCARI', points: 100 },
                { id: 4202, answer_text: 'BELI BARU', points: 90 },
                { id: 4203, answer_text: 'PASRAH', points: 80 },
                { id: 4204, answer_text: 'TANYA IBU', points: 70 },
                { id: 4205, answer_text: 'SUDAH TELAT', points: 60 },
                { id: 4206, answer_text: 'BERESKAN KAMAR', points: 50 },
                { id: 4207, answer_text: 'TIDAK BUTUH LAGI', points: 40 },
            ],
        },
        {
            id: 43,
            category: 'Asah Otak & Logika',
            logicNote: 'Menyalip posisi ke-2 artinya kita merebut posisi ke-2 — bukan langsung jadi juara 1!',
            question: 'Dalam lomba balap lari, jika kamu berhasil menyalip pelari di posisi nomor 2, apa saja fakta yang langsung terjadi?',
            is_example: true,
            answers: [
                { id: 4301, answer_text: 'JADI NOMOR DUA', points: 100 },
                { id: 4302, answer_text: 'MASIH ADA JUARA SATU', points: 90 },
                { id: 4303, answer_text: 'DISALIP JADI NOMOR TIGA', points: 80 },
                { id: 4304, answer_text: 'BELUM MENANG', points: 70 },
                { id: 4305, answer_text: 'HARUS KEJAR LAGI', points: 60 },
                { id: 4306, answer_text: 'CAPEK', points: 50 },
            ],
        },
        {
            id: 44,
            category: 'Asah Otak & Logika',
            logicNote: 'Kalau masih duduk lesehan di garis start gimana mau lompat? Wajib BERDIRI dan MASUK KARUNG dulu!',
            question: 'Supaya tidak kalah start saat lomba balap karung dimulai, hal pertama apa yang wajib dilakukan peserta di garis start?',
            is_example: true,
            answers: [
                { id: 4401, answer_text: 'BERDIRI', points: 100 },
                { id: 4402, answer_text: 'MASUK KARUNG', points: 90 },
                { id: 4403, answer_text: 'PEGANG KARUNG', points: 80 },
                { id: 4404, answer_text: 'DENGAR PELUIT', points: 70 },
                { id: 4405, answer_text: 'SIAP LOMPAT', points: 60 },
                { id: 4406, answer_text: 'DOA', points: 50 },
                { id: 4407, answer_text: 'LEPAS SANDAL', points: 40 },
            ],
        },
        {
            id: 45,
            category: 'Asah Otak & Logika',
            logicNote: 'Massa keduanya sama-sama 10 kg! Tapi kerapatan beda jauh sehingga yang kena besi jauh lebih sakit.',
            question: 'Antara 10 kg kapas dan 10 kg besi yang dijatuhkan dari ketinggian ke atas kaki, fakta apa saja yang benar?',
            is_example: true,
            answers: [
                { id: 4501, answer_text: 'BERATNYA SAMA', points: 100 },
                { id: 4502, answer_text: 'BESI LEBIH SAKIT', points: 90 },
                { id: 4503, answer_text: 'KAPAS LEBIH EMPUK', points: 80 },
                { id: 4504, answer_text: 'UKURAN KAPAS BESAR', points: 70 },
                { id: 4505, answer_text: 'BESI JATUH CEPAT', points: 60 },
                { id: 4506, answer_text: 'MENGHINDAR', points: 50 },
            ],
        },
        {
            id: 46,
            category: 'Asah Otak & Logika',
            logicNote: 'Ilmu, sedekah, dan senyum bertambah pahalanya — tapi hati-hati, UTANG juga bertambah kalau terus dipakai!',
            question: 'Sebutkan hal yang anehnya justru semakin sering dibagi atau dikeluarkan, malah terasa semakin bertambah!',
            is_example: true,
            answers: [
                { id: 4601, answer_text: 'ILMU', points: 100 },
                { id: 4602, answer_text: 'SEDEKAH', points: 90 },
                { id: 4603, answer_text: 'SENYUM', points: 80 },
                { id: 4604, answer_text: 'PENGALAMAN', points: 70 },
                { id: 4605, answer_text: 'TEMAN', points: 60 },
                { id: 4606, answer_text: 'KEBAHAGIAAN', points: 50 },
                { id: 4607, answer_text: 'UTANG', points: 40 },
            ],
        },
        {
            id: 47,
            category: 'Asah Otak & Logika',
            logicNote: 'Setiap hari berganti, "besok" tetap saja besok — termasuk rencana diet yang selalu dimulai besok!',
            question: 'Hal apa yang paling sering ditunggu dan dijanjikan orang, tapi anehnya tidak pernah benar-benar terasa datang sebagai hari ini?',
            is_example: true,
            answers: [
                { id: 4701, answer_text: 'HARI ESOK', points: 100 },
                { id: 4702, answer_text: 'DIET', points: 90 },
                { id: 4703, answer_text: 'GAJIAN', points: 80 },
                { id: 4704, answer_text: 'MASA DEPAN', points: 70 },
                { id: 4705, answer_text: 'JANJI MANIS', points: 60 },
                { id: 4706, answer_text: 'LIBUR PANJANG', points: 50 },
                { id: 4707, answer_text: 'TOBAT MALAS', points: 40 },
            ],
        },
        {
            id: 48,
            category: 'Asah Otak & Logika',
            logicNote: 'Bukan hanya Februari — SEMUA 12 BULAN dari Januari sampai Desember pasti punya tanggal 1 sampai 28!',
            question: 'Tebakan kalender yang sering mengecoh: Di antara 12 bulan dalam setahun, bulan apa saja yang memiliki 28 hari?',
            is_example: true,
            answers: [
                { id: 4801, answer_text: 'SEMUA BULAN', points: 100 },
                { id: 4802, answer_text: 'FEBRUARI', points: 90 },
                { id: 4803, answer_text: 'JANUARI', points: 80 },
                { id: 4804, answer_text: 'DESEMBER', points: 70 },
                { id: 4805, answer_text: 'DUA BELAS BULAN', points: 60 },
                { id: 4806, answer_text: 'SETIAP BULAN', points: 50 },
            ],
        },
        {
            id: 49,
            category: 'Asah Otak & Logika',
            logicNote: 'Sisir punya gigi, jarum punya mata, meja punya kaki, botol punya leher, sampai panci punya kuping!',
            question: 'Benda sehari-hari apa yang punya bagian mirip organ tubuh manusia (seperti gigi, mata, kaki, atau leher), padahal benda mati?',
            is_example: true,
            answers: [
                { id: 4901, answer_text: 'SISIR', points: 100 },
                { id: 4902, answer_text: 'JARUM', points: 90 },
                { id: 4903, answer_text: 'MEJA KURSI', points: 80 },
                { id: 4904, answer_text: 'BOTOL', points: 70 },
                { id: 4905, answer_text: 'GERGAJI', points: 60 },
                { id: 4906, answer_text: 'KUPING PANCI', points: 50 },
                { id: 4907, answer_text: 'DAUN PINTU', points: 40 },
                { id: 4908, answer_text: 'RESLETING', points: 30 },
            ],
        },
        {
            id: 50,
            category: 'Survei Kocak & Belok',
            logicNote: 'Setelah pegang HP, langkah paling legendaris warga +62 adalah INTIP TETANGGA buat memastikan bukan cuma token kita yang habis!',
            question: 'Saat malam-malam listrik rumah tiba-tiba padam total, hal pertama apa yang refleks langsung dilakukan orang?',
            is_example: true,
            answers: [
                { id: 5001, answer_text: 'CEK HP', points: 100 },
                { id: 5002, answer_text: 'CEK METERAN LISTRIK', points: 90 },
                { id: 5003, answer_text: 'INTIP TETANGGA', points: 80 },
                { id: 5004, answer_text: 'TERIAK MATI LAMPU', points: 70 },
                { id: 5005, answer_text: 'NYALAKAN SENTER', points: 60 },
                { id: 5006, answer_text: 'CARI LILIN', points: 50 },
                { id: 5007, answer_text: 'CEK WIFI', points: 40 },
                { id: 5008, answer_text: 'TIDUR', points: 30 },
            ],
        },
        {
            id: 51,
            category: 'Survei Kocak & Belok',
            logicNote: 'Centang "Saya telah membaca & menyetujui Syarat dan Ketentuan" adalah konspirasi klik tercepat di dunia digital!',
            question: 'Tulisan apa yang paling sering diklaim "Sudah Saya Baca", padahal hampir semua orang langsung melewatinya begitu saja?',
            is_example: true,
            answers: [
                { id: 5101, answer_text: 'SYARAT DAN KETENTUAN', points: 100 },
                { id: 5102, answer_text: 'BUKU PANDUAN', points: 90 },
                { id: 5103, answer_text: 'ATURAN GARANSI', points: 80 },
                { id: 5104, answer_text: 'KEBIJAKAN PRIVASI', points: 70 },
                { id: 5105, answer_text: 'DILARANG PARKIR', points: 60 },
                { id: 5106, answer_text: 'ATURAN KOMPLEK', points: 50 },
                { id: 5107, answer_text: 'KEMASAN OBAT', points: 40 },
            ],
        },
        {
            id: 52,
            category: 'Survei Kocak & Belok',
            logicNote: 'Bukan karena anti uang — biasanya yang menolak Rp 1 miliar tanpa berpikir itu memang saldonya SUDAH KAYA!',
            question: 'Menurut pengamatan lucu, orang yang langsung memilih "Sahabat Sejati" ketimbang uang Rp 1 miliar biasanya kenapa?',
            is_example: true,
            answers: [
                { id: 5201, answer_text: 'SUDAH KAYA', points: 100 },
                { id: 5202, answer_text: 'PURA-PURA BIJAK', points: 90 },
                { id: 5203, answer_text: 'MASIH NGANTUK', points: 80 },
                { id: 5204, answer_text: 'LAGI BANYAK MASALAH', points: 70 },
                { id: 5205, answer_text: 'GURU MOTIVASI', points: 60 },
                { id: 5206, answer_text: 'BARU GAJIAN', points: 50 },
                { id: 5207, answer_text: 'TAKUT DIHUJAT', points: 40 },
            ],
        },
        {
            id: 53,
            category: 'Survei Kocak & Belok',
            logicNote: 'Rumus terlihat super sibuk di kantor: jalan cepat bawa berkas + dahi berkerut menatap banyak tab terbuka!',
            question: 'Bukan karena pekerjaan menumpuk, akting apa yang paling sering dipakai pegawai agar terlihat sangat sibuk di kantor?',
            is_example: true,
            answers: [
                { id: 5301, answer_text: 'JALAN CEPAT BAWA KERTAS', points: 100 },
                { id: 5302, answer_text: 'DAHI BERKERUT', points: 90 },
                { id: 5303, answer_text: 'BUKA BANYAK TAB', points: 80 },
                { id: 5304, answer_text: 'PAKAI EARPHONE', points: 70 },
                { id: 5305, answer_text: 'NGETIK CEPAT', points: 60 },
                { id: 5306, answer_text: 'TELPONAN MONDAR-MANDIR', points: 50 },
                { id: 5307, answer_text: 'MINUM KOPI SERIUS', points: 40 },
                { id: 5308, answer_text: 'MEJA BERANTAKAN', points: 30 },
            ],
        },
        {
            id: 54,
            category: 'Survei Kocak & Belok',
            logicNote: 'Mulai dari tulisan "Parkir Gratis" berujung peluit tukang parkir, sampai niat "cuma lihat-lihat" berujung checkout!',
            question: 'Hal apa yang awalnya dikira gratis atau hemat, tapi ujung-ujungnya malah bikin keluar uang lebih banyak?',
            is_example: true,
            answers: [
                { id: 5401, answer_text: 'PARKIR GRATIS', points: 100 },
                { id: 5402, answer_text: 'CUMA LIHAT-LIHAT', points: 90 },
                { id: 5403, answer_text: 'ONGKIR MINIMAL BELANJA', points: 80 },
                { id: 5404, answer_text: 'KONDANGAN', points: 70 },
                { id: 5405, answer_text: 'COBA GRATIS', points: 60 },
                { id: 5406, answer_text: 'TRIAL APLIKASI', points: 50 },
                { id: 5407, answer_text: 'DISKON BESAR', points: 40 },
            ],
        },
        {
            id: 55,
            category: 'Survei Kocak & Belok',
            logicNote: 'Bukan tidur Pak — mata terpejam ini tanda sedang LAGI BERPIKIR KERAS memvisualisasikan strategi!',
            question: 'Saat ketahuan memejamkan mata di meja kerja oleh atasan, alasan kreatif apa yang langsung diucapkan karyawan?',
            is_example: true,
            answers: [
                { id: 5501, answer_text: 'LAGI BERPIKIR KERAS', points: 100 },
                { id: 5502, answer_text: 'MATA PEDIH', points: 90 },
                { id: 5503, answer_text: 'LAGI BERDOA', points: 80 },
                { id: 5504, answer_text: 'PUSING', points: 70 },
                { id: 5505, answer_text: 'TUNGGU LOADING', points: 60 },
                { id: 5506, answer_text: 'ISTIRAHAT MATA', points: 50 },
                { id: 5507, answer_text: 'MENGHAFAL DATA', points: 40 },
            ],
        },
    ];

    const STORAGE_KEY_QUESTIONS = 'family100_gas_local_questions_v4';
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

    const initialBoard = window.QuizScoreboard
        ? window.QuizScoreboard.load()
        : {
            teams: [
                { name: 'Tim Merah', score: 0, color: 'red', icon: '🔥' },
                { name: 'Tim Biru', score: 0, color: 'blue', icon: '⚡' },
                { name: 'Tim Emas', score: 0, color: 'gold', icon: '👑' },
            ],
            activeTeam: 0,
        };

    const state = {
        gasUrl: localStorage.getItem(STORAGE_KEY_GAS_URL) || DEFAULT_GAS_URL,
        questions: [],
        selectedCategory: 'ALL',
        currentIndex: 0,
        revealedIds: new Set(),
        slotClueTiers: {},
        hoveredSlotId: null,
        teams: initialBoard.teams,
        activeTeam: initialBoard.activeTeam,
        strikes: 0,
        soundEnabled: true,
        audioCtx: null,
    };

    function persistTeams() {
        if (!window.QuizScoreboard) return;
        const saved = window.QuizScoreboard.save(state.teams, state.activeTeam);
        state.teams = saved.teams;
        state.activeTeam = saved.activeTeam;
    }

    function syncTeamsFromShared() {
        if (!window.QuizScoreboard) return;
        const board = window.QuizScoreboard.load();
        state.teams = board.teams;
        state.activeTeam = board.activeTeam;
    }

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
        slotClueBar: document.getElementById('slot-clue-bar'),
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

    const SYNONYM_GROUPS = window.Family100Data
        ? window.Family100Data.SYNONYM_GROUPS
        : [];

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

        const guessTokens = normGuess.split(' ').filter(Boolean);
        for (const av of ansVariants) {
            const avTokens = av.split(' ').filter(Boolean);
            if (avTokens.length > 0 && avTokens.every((t) => guessTokens.includes(t))) {
                return 1;
            }
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

    function prioritizeQuestions(list) {
        const rankCat = {
            'Logika Belok (Cak Lontong)': 0,
            'Asah Otak & Logika': 1,
            'Survei Kocak & Belok': 2,
        };
        return [...list].sort((a, b) => {
            const ra = rankCat[getQuestionCategory(a)] ?? 9;
            const rb = rankCat[getQuestionCategory(b)] ?? 9;
            return ra - rb;
        });
    }

    async function loadQuestions() {
        if (state.gasUrl) {
            el.modeIndicator.textContent = 'Terhubung ke Google Apps Script (Sheets)';
            try {
                const url = `${state.gasUrl}?action=questions`;
                const res = await fetch(url);
                const data = await res.json();
                if (data.ok && Array.isArray(data.data)) {
                    const existing = new Set(data.data.map((q) => normalizeText(q.question)));
                    const extras = EXAMPLE_QUESTIONS.filter((q) => !existing.has(normalizeText(q.question)));
                    state.questions = prioritizeQuestions([...data.data, ...structuredClone(extras)]);
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
        state.questions = prioritizeQuestions(loadLocalQuestions());
        populateSelect();
        resetRound();
    }

    function currentQuestion() {
        return state.questions[state.currentIndex] || null;
    }

    function findExampleMeta(q) {
        if (!q) return null;
        const norm = normalizeText(q.question);
        return EXAMPLE_QUESTIONS.find((ex) => normalizeText(ex.question) === norm) || null;
    }

    function getQuestionCategory(q) {
        if (!q) return 'Umum';
        if (q.category) return q.category;
        const meta = findExampleMeta(q);
        if (meta && meta.category) return meta.category;
        const txt = String(q.question || '').toLowerCase();
        if (/power bi|excel|grafik|connector|format file|data quality/.test(txt)) return 'Data & Teknologi';
        if (/kolaborasi|server|terlambat dikirim|karyawan|meeting|kantor/.test(txt)) return 'Lingkungan Kantor';
        if (/bapak|suami|istri/.test(txt)) return 'Bapak-bapak';
        if (/tiktok|kafe|gaul|meja kerja|anak muda/.test(txt)) return 'Gen Z & Sosmed';
        if (/30-an|whatsapp keluarga|orang tua/.test(txt)) return 'Milenial & Boomers';
        return 'Kehidupan Sehari-hari';
    }

    function getQuestionLogicNote(q) {
        if (!q) return '';
        if (q.logicNote) return q.logicNote;
        return findExampleMeta(q)?.logicNote || '';
    }

    function getFilteredIndices() {
        const list = [];
        state.questions.forEach((q, idx) => {
            if (state.selectedCategory === 'ALL' || getQuestionCategory(q) === state.selectedCategory) {
                list.push(idx);
            }
        });
        return list;
    }

    function populateCategorySelect() {
        const catEl = document.getElementById('category-select');
        if (!catEl) return;
        const cats = new Set();
        state.questions.forEach((q) => cats.add(getQuestionCategory(q)));
        const preferredOrder = [
            'Logika Belok (Cak Lontong)',
            'Asah Otak & Logika',
            'Survei Kocak & Belok',
            'Data & Teknologi',
            'Lingkungan Kantor',
            'Kehidupan Sehari-hari',
            'Bapak-bapak',
            'Gen Z & Sosmed',
            'Milenial & Boomers',
        ];
        const orderedCats = Array.from(cats).sort((a, b) => {
            const ia = preferredOrder.indexOf(a);
            const ib = preferredOrder.indexOf(b);
            return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
        });
        const prev = state.selectedCategory || 'ALL';
        catEl.textContent = '';
        const allOpt = document.createElement('option');
        allOpt.value = 'ALL';
        allOpt.textContent = `Semua Kategori (${state.questions.length})`;
        catEl.appendChild(allOpt);
        orderedCats.forEach((c) => {
            const count = state.questions.filter((q) => getQuestionCategory(q) === c).length;
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = `${c} (${count})`;
            catEl.appendChild(opt);
        });
        catEl.value = cats.has(prev) ? prev : 'ALL';
        state.selectedCategory = catEl.value;
    }

    function populateSelect() {
        populateCategorySelect();
        el.select.textContent = '';
        const indices = getFilteredIndices();
        indices.forEach((idx, pos) => {
            const q = state.questions[idx];
            const opt = document.createElement('option');
            opt.value = String(idx);
            opt.textContent = `${pos + 1}. ${q.question}`;
            el.select.appendChild(opt);
        });
        if (indices.length > 0 && !indices.includes(state.currentIndex)) {
            state.currentIndex = indices[0];
        }
        el.select.value = String(state.currentIndex);
    }

    function getSlotClueText(q, ans, tier) {
        if (!q || !ans) return '';
        if (window.Family100Data && typeof window.Family100Data.getTieredClue === 'function') {
            return window.Family100Data.getTieredClue(q.id, ans.answer_text, ans.points, tier);
        }
        const cleanLen = String(ans.answer_text || '').replace(/\s+/g, '').length;
        return `💡 [Clue ${tier}/3] Jawaban bernilai ${ans.points} poin (${cleanLen} huruf)`;
    }

    function updateClueBar(q = currentQuestion()) {
        if (!el.slotClueBar) return;
        const answers = Array.isArray(q?.answers) ? q.answers : [];
        let targetAns = null;
        let targetIdx = -1;
        let displayTier = 0;

        if (state.hoveredSlotId !== null) {
            const hIdx = answers.findIndex((a) => Number(a.id) === Number(state.hoveredSlotId));
            if (hIdx !== -1 && !state.revealedIds.has(Number(answers[hIdx].id))) {
                targetAns = answers[hIdx];
                targetIdx = hIdx;
                displayTier = Number(state.slotClueTiers[Number(targetAns.id)] || 1);
            }
        }

        if (!targetAns) {
            for (let i = 0; i < answers.length; i++) {
                const a = answers[i];
                const id = Number(a.id);
                const t = Number(state.slotClueTiers[id] || 0);
                if (!state.revealedIds.has(id) && t > 0) {
                    targetAns = a;
                    targetIdx = i;
                    displayTier = t;
                    break;
                }
            }
        }

        if (targetAns && displayTier > 0) {
            el.slotClueBar.textContent = `#${targetIdx + 1}: ${getSlotClueText(q, targetAns, displayTier)}`;
            el.slotClueBar.classList.add('active');
        } else {
            el.slotClueBar.textContent = '💡 Arahkan ke kotak jawaban untuk lihat Clue bertingkat';
            el.slotClueBar.classList.remove('active');
        }
    }

    function syncSlotClueView(row, q, ans) {
        if (!row || !q || !ans) return;
        const ansId = Number(ans.id);
        const lockedTier = Number(state.slotClueTiers[ansId] || 0);
        const isHovering = Number(state.hoveredSlotId) === ansId;
        const displayTier = lockedTier > 0 ? lockedTier : (isHovering ? 1 : 0);

        row.classList.toggle('clue-hovered', isHovering);

        const txt = row.querySelector('.slot-text');
        if (txt) {
            if (displayTier > 0) {
                txt.className = 'slot-text slot-clue-preview';
                txt.textContent = getSlotClueText(q, ans, displayTier);
            } else {
                txt.className = 'slot-text hidden-mask';
                txt.textContent = '• • • • • • • •';
            }
        }

        const btn = row.querySelector('.slot-clue-btn');
        if (btn) {
            btn.classList.toggle('active', lockedTier > 0);
            if (lockedTier > 0) {
                btn.textContent = lockedTier < 3 ? `💡 ${lockedTier}/3 ▸` : '💡 3/3 ↺';
            } else if (isHovering) {
                btn.textContent = '💡 1/3 ▸';
            } else {
                btn.textContent = '💡 Clue';
            }
        }
    }

    function renderBoard() {
        const q = currentQuestion();
        el.board.textContent = '';
        if (!q) {
            el.qNumber.textContent = 'Kosong';
            el.qText.textContent = 'Belum ada pertanyaan.';
            el.revealedCount.textContent = '0 / 0';
            updateClueBar(null);
            return;
        }

        el.qNumber.textContent = `Soal #${state.currentIndex + 1}${q.is_example ? ' (Contoh)' : ''}`;
        el.qText.textContent = q.question;

        const answers = Array.isArray(q.answers) ? q.answers : [];
        answers.forEach((ans, idx) => {
            const ansId = Number(ans.id);
            const isRevealed = state.revealedIds.has(ansId);
            const row = document.createElement('div');
            row.className = isRevealed ? 'answer-slot revealed' : 'answer-slot';
            row.dataset.answerId = String(ans.id);

            const num = document.createElement('div');
            num.className = 'slot-num';
            num.textContent = String(idx + 1);

            const pts = document.createElement('div');
            pts.className = 'slot-points';
            pts.textContent = String(ans.points);

            if (isRevealed) {
                const txt = document.createElement('div');
                txt.className = 'slot-text';
                txt.textContent = ans.answer_text;
                row.append(num, txt, pts);
            } else {
                row.setAttribute('role', 'button');
                row.setAttribute('tabindex', '0');
                row.title = `Arahkan untuk Clue #${idx + 1} • Klik 💡 naikkan level • Klik baris buka jawaban`;

                const centerWrap = document.createElement('div');
                centerWrap.className = 'slot-center';

                const txt = document.createElement('div');
                txt.className = 'slot-text hidden-mask';
                txt.textContent = '• • • • • • • •';

                const clueBtn = document.createElement('button');
                clueBtn.type = 'button';
                clueBtn.className = 'slot-clue-btn';
                clueBtn.dataset.clueAnswerId = String(ans.id);
                clueBtn.title = 'Klik untuk tingkatkan Clue bertingkat (Level 1 → 2 → 3)';
                clueBtn.setAttribute('aria-label', `Clue bertingkat jawaban #${idx + 1}`);
                clueBtn.textContent = '💡 Clue';

                centerWrap.append(txt, clueBtn);
                row.append(num, centerWrap, pts);
                syncSlotClueView(row, q, ans);
            }

            el.board.appendChild(row);
        });

        el.revealedCount.textContent = `${state.revealedIds.size} / ${answers.length}`;
        updateClueBar(q);
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
        svg.setAttribute('viewBox', '0 0 220 82');
        svg.setAttribute('class', 'contestants-svg');
        svg.setAttribute('aria-hidden', 'true');

        const defs = document.createElementNS(ns, 'defs');
        defs.innerHTML = `
            <linearGradient id="f100LegoYellow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#FEF08A"/>
                <stop offset="55%" stop-color="#FACC15"/>
                <stop offset="100%" stop-color="#EAB308"/>
            </linearGradient>
        `;
        svg.appendChild(defs);

        const figures = [
            { cx: 26, dy: 5, scale: 0.9, cls: 'person person-l2', shirt: 'shirt-a', hair: 'neat', hairColor: '#1E293B' },
            { cx: 68, dy: 2, scale: 0.95, cls: 'person person-l1', shirt: 'shirt-b', hair: 'cap', hairColor: '#0284C7' },
            { cx: 110, dy: -2, scale: 1.02, cls: 'person person-center', shirt: 'shirt-a', hair: 'spiky', hairColor: '#0F172A' },
            { cx: 152, dy: 2, scale: 0.95, cls: 'person person-r1', shirt: 'shirt-b', hair: 'bob', hairColor: '#78350F' },
            { cx: 194, dy: 5, scale: 0.9, cls: 'person person-r2', shirt: 'shirt-a', hair: 'beanie', hairColor: '#D97706' },
        ];

        figures.forEach((p, idx) => {
            const outer = document.createElementNS(ns, 'g');
            outer.setAttribute('transform', `translate(${p.cx}, ${p.dy}) scale(${p.scale}) translate(${-p.cx}, 0)`);

            const g = document.createElementNS(ns, 'g');
            g.setAttribute('class', p.cls);
            g.style.setProperty('--bot-delay', `${(idx * 0.11).toFixed(2)}s`);

            // Pinggang & Kaki LEGO
            const legs = document.createElementNS(ns, 'rect');
            legs.setAttribute('x', String(p.cx - 12));
            legs.setAttribute('y', '67');
            legs.setAttribute('width', '24');
            legs.setAttribute('height', '15');
            legs.setAttribute('class', 'lego-legs');

            // Lengan Kiri Group (sendi bahu di cx-10, 38)
            const armGroupL = document.createElementNS(ns, 'g');
            armGroupL.setAttribute('class', 'lego-arm-group lego-arm-l');
            armGroupL.style.transformOrigin = `${p.cx - 10}px 38px`;

            const armL = document.createElementNS(ns, 'path');
            armL.setAttribute('d', `M${p.cx - 10} 38 L${p.cx - 16} 53`);
            armL.setAttribute('class', `lego-arm ${p.shirt}`);

            const clawL = document.createElementNS(ns, 'path');
            clawL.setAttribute('d', `M${p.cx - 17.5} 52 A2.8 2.8 0 1 0 ${p.cx - 14.5} 56`);
            clawL.setAttribute('class', 'lego-claw');
            armGroupL.append(armL, clawL);

            // Lengan Kanan Group (sendi bahu di cx+10, 38)
            const armGroupR = document.createElementNS(ns, 'g');
            armGroupR.setAttribute('class', 'lego-arm-group lego-arm-r');
            armGroupR.style.transformOrigin = `${p.cx + 10}px 38px`;

            const armR = document.createElementNS(ns, 'path');
            armR.setAttribute('d', `M${p.cx + 10} 38 L${p.cx + 16} 53`);
            armR.setAttribute('class', `lego-arm ${p.shirt}`);

            const clawR = document.createElementNS(ns, 'path');
            clawR.setAttribute('d', `M${p.cx + 14.5} 56 A2.8 2.8 0 1 0 ${p.cx + 17.5} 52`);
            clawR.setAttribute('class', 'lego-claw');
            armGroupR.append(armR, clawR);

            // Torso Trapezoid Khas LEGO
            const body = document.createElementNS(ns, 'path');
            body.setAttribute('d', `M${p.cx - 10} 36 L${p.cx + 10} 36 L${p.cx + 13} 67 L${p.cx - 13} 67 Z`);
            body.setAttribute('class', `person-body ${p.shirt}`);

            const collar = document.createElementNS(ns, 'path');
            collar.setAttribute('d', `M${p.cx - 5} 36 L${p.cx} 42 L${p.cx + 5} 36`);
            collar.setAttribute('class', 'lego-collar');

            // Leher LEGO
            const neck = document.createElementNS(ns, 'rect');
            neck.setAttribute('x', String(p.cx - 4));
            neck.setAttribute('y', '32');
            neck.setAttribute('width', '8');
            neck.setAttribute('height', '4');
            neck.setAttribute('class', 'lego-neck');

            // Kepala Group (sendi leher di cx, 32)
            const headGroup = document.createElementNS(ns, 'g');
            headGroup.setAttribute('class', 'lego-head-group');
            headGroup.style.transformOrigin = `${p.cx}px 32px`;

            const stud = document.createElementNS(ns, 'rect');
            stud.setAttribute('x', String(p.cx - 5));
            stud.setAttribute('y', '6');
            stud.setAttribute('width', '10');
            stud.setAttribute('height', '5');
            stud.setAttribute('rx', '1.5');
            stud.setAttribute('class', 'lego-stud');

            const head = document.createElementNS(ns, 'rect');
            head.setAttribute('x', String(p.cx - 11));
            head.setAttribute('y', '10.5');
            head.setAttribute('width', '22');
            head.setAttribute('height', '21.5');
            head.setAttribute('rx', '5.5');
            head.setAttribute('class', 'lego-head');

            const headShine = document.createElementNS(ns, 'path');
            headShine.setAttribute('d', `M${p.cx - 7} 13 L${p.cx - 7} 26`);
            headShine.setAttribute('class', 'lego-shine');

            const hair = document.createElementNS(ns, 'path');
            hair.setAttribute('fill', p.hairColor);
            hair.setAttribute('class', 'lego-hair');
            if (p.hair === 'cap') {
                hair.setAttribute('d', `M${p.cx - 12} 14 C${p.cx - 12} 6, ${p.cx + 12} 6, ${p.cx + 12} 14 L${p.cx + 17} 15 L${p.cx + 17} 17 L${p.cx - 12} 16 Z`);
            } else if (p.hair === 'spiky') {
                hair.setAttribute('d', `M${p.cx - 12} 15 L${p.cx - 10} 7 L${p.cx - 4} 10 L${p.cx} 5 L${p.cx + 5} 10 L${p.cx + 10} 7 L${p.cx + 12} 15 Z`);
            } else if (p.hair === 'bob') {
                hair.setAttribute('d', `M${p.cx - 12.5} 23 C${p.cx - 13} 7, ${p.cx + 13} 7, ${p.cx + 12.5} 23 L${p.cx + 10} 23 L${p.cx + 10} 14 L${p.cx - 10} 14 L${p.cx - 10} 23 Z`);
            } else if (p.hair === 'beanie') {
                hair.setAttribute('d', `M${p.cx - 11.5} 15 C${p.cx - 11} 7, ${p.cx + 11} 7, ${p.cx + 11.5} 15 Z`);
            } else {
                hair.setAttribute('d', `M${p.cx - 11.5} 15 C${p.cx - 11} 8, ${p.cx + 11} 8, ${p.cx + 11.5} 15 Q${p.cx} 12 ${p.cx - 11.5} 15 Z`);
            }

            const blushL = document.createElementNS(ns, 'ellipse');
            blushL.setAttribute('cx', String(p.cx - 6.8));
            blushL.setAttribute('cy', '24.2');
            blushL.setAttribute('rx', '2');
            blushL.setAttribute('ry', '1.1');
            blushL.setAttribute('class', 'lego-blush');

            const blushR = document.createElementNS(ns, 'ellipse');
            blushR.setAttribute('cx', String(p.cx + 6.8));
            blushR.setAttribute('cy', '24.2');
            blushR.setAttribute('rx', '2');
            blushR.setAttribute('ry', '1.1');
            blushR.setAttribute('class', 'lego-blush');

            // Ekspresi 1: Normal / Berdiskusi (mata berkedip + mulut berbicara)
            const exprIdle = document.createElementNS(ns, 'g');
            exprIdle.setAttribute('class', 'expr expr-idle');
            exprIdle.innerHTML = `
                <g class="lego-eyes-blink" style="transform-origin: ${p.cx}px 20.5px;">
                    <circle cx="${p.cx - 4.2}" cy="20.5" r="1.9" class="lego-eye"/>
                    <circle cx="${p.cx + 4.2}" cy="20.5" r="1.9" class="lego-eye"/>
                    <circle cx="${p.cx - 4.8}" cy="19.8" r="0.65" class="lego-eye-shine"/>
                    <circle cx="${p.cx + 3.6}" cy="19.8" r="0.65" class="lego-eye-shine"/>
                </g>
                <path d="M${p.cx - 3.5} 25.5 Q${p.cx} 28.5 ${p.cx + 3.5} 25.5" class="lego-mouth"/>
                <ellipse cx="${p.cx}" cy="26.4" rx="2.6" ry="1.8" class="lego-mouth-talk"/>
            `;

            // Ekspresi 2: Senang / Sorak
            const exprHappy = document.createElementNS(ns, 'g');
            exprHappy.setAttribute('class', 'expr expr-happy');
            exprHappy.innerHTML = `
                <path d="M${p.cx - 6.5} 21.2 Q${p.cx - 4.2} 17.8 ${p.cx - 1.9} 21.2" class="lego-eye-arc"/>
                <path d="M${p.cx + 1.9} 21.2 Q${p.cx + 4.2} 17.8 ${p.cx + 6.5} 21.2" class="lego-eye-arc"/>
                <path d="M${p.cx - 4.5} 24.5 Q${p.cx} 30 ${p.cx + 4.5} 24.5 Z" class="lego-mouth-open"/>
            `;

            // Ekspresi 3: Sedih
            const exprSad = document.createElementNS(ns, 'g');
            exprSad.setAttribute('class', 'expr expr-sad');
            exprSad.innerHTML = `
                <path d="M${p.cx - 6.5} 19.8 Q${p.cx - 4.2} 22 ${p.cx - 1.9} 20.8" class="lego-eye-sad"/>
                <path d="M${p.cx + 1.9} 20.8 Q${p.cx + 4.2} 22 ${p.cx + 6.5} 19.8" class="lego-eye-sad"/>
                <circle cx="${p.cx - 5.8}" cy="23.8" r="1.2" class="lego-tear"/>
                <circle cx="${p.cx + 5.8}" cy="23.8" r="1.2" class="lego-tear"/>
                <path d="M${p.cx - 3.5} 27.8 Q${p.cx} 24.8 ${p.cx + 3.5} 27.8" class="lego-mouth-sad"/>
            `;

            // Ekspresi 4: Salah / Kaget
            const exprShock = document.createElementNS(ns, 'g');
            exprShock.setAttribute('class', 'expr expr-shock');
            exprShock.innerHTML = `
                <path d="M${p.cx - 6} 18.8 L${p.cx - 2.4} 22.2 M${p.cx - 2.4} 18.8 L${p.cx - 6} 22.2" class="lego-eye-x"/>
                <path d="M${p.cx + 2.4} 18.8 L${p.cx + 6} 22.2 M${p.cx + 6} 18.8 L${p.cx + 2.4} 22.2" class="lego-eye-x"/>
                <ellipse cx="${p.cx}" cy="26.5" rx="2.3" ry="1.8" class="lego-mouth-shock"/>
            `;

            headGroup.append(stud, head, headShine, hair, blushL, blushR, exprIdle, exprHappy, exprSad, exprShock);
            g.append(neck, legs, armGroupL, armGroupR, body, collar, headGroup);
            outer.appendChild(g);
            svg.appendChild(outer);
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
                bubble.textContent = '💬 DISKUSI • MENJAWAB!';
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

        const leftCount = Math.ceil(state.teams.length / 2);
        const rightCount = Math.floor(state.teams.length / 2);
        el.teamsLeft.classList.toggle('many-teams', leftCount >= 3);
        el.teamsRight.classList.toggle('many-teams', rightCount >= 3);
        if (el.teamsContainer) {
            el.teamsContainer.classList.toggle('many-teams-arena', state.teams.length >= 5);
        }

        const activeTeamObj = state.teams[state.activeTeam];
        const activeColor = activeTeamObj?.color || 'blue';
        const turnBar = document.querySelector('.turn-bar');
        if (turnBar) turnBar.setAttribute('data-active-color', activeColor);
        if (el.form) el.form.setAttribute('data-active-color', activeColor);

        if (el.activeTurnLabel) {
            const activeIcon = activeTeamObj?.icon || '';
            el.activeTurnLabel.textContent = `Giliran Menjawab: ${activeIcon} ${getTeamName(state.activeTeam)}`;
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
        state.slotClueTiers = {};
        state.hoveredSlotId = null;
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

    function revealSingleSlot(answerId) {
        const q = currentQuestion();
        if (!q || !Array.isArray(q.answers)) return;
        const id = Number(answerId);
        if (state.revealedIds.has(id)) return;
        const ansIdx = q.answers.findIndex((a) => Number(a.id) === id);
        if (ansIdx === -1) return;
        const ans = q.answers[ansIdx];

        state.revealedIds.add(id);
        delete state.slotClueTiers[id];
        if (state.hoveredSlotId === id) state.hoveredSlotId = null;
        playCorrectSound();
        renderBoard();

        const msg = `👀 Hasil survei #${ansIdx + 1}: "${ans.answer_text}" (${ans.points} poin — dibuka untuk penonton)`;
        setFeedback(msg, 'ok');
        setHostSpeech(`Hasil survei nomor ${ansIdx + 1}: ${ans.answer_text}!`);
        addHistoryItem(`[Penonton] #${ansIdx + 1} ${ans.answer_text}`, true, ans.points);
        syncPushIfHost('reveal_slot', msg, 'ok');
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
                const hitId = Number(data.answer.id);
                state.revealedIds.add(hitId);
                delete state.slotClueTiers[hitId];
                if (state.hoveredSlotId === hitId) state.hoveredSlotId = null;
                state.teams[state.activeTeam].score += Number(data.answer.points);
                persistTeams();
                playCorrectSound();
                spawnConfetti();
                renderBoard();
                triggerScorePop();
                addHistoryItem(`[${teamName}] ${data.answer.answer_text}`, true, data.answer.points);
                const logicNote = state.revealedIds.size >= q.answers.length ? getQuestionLogicNote(q) : '';
                const speechText = logicNote
                    ? `Tuntas! ${logicNote}`
                    : `Tepat sekali! ${data.answer.answer_text} (+${data.answer.points})!`;
                setFeedback(`Benar! "${data.answer.answer_text}" (+${data.answer.points} untuk ${teamName})`, 'ok');
                setHostSpeech(speechText);
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
        persistTeams();
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
            } else if (remote.event.type === 'reveal_slot') {
                playCorrectSound();
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
        if (params.get('play') === '1' && el.startOverlay) {
            el.startOverlay.classList.add('hidden');
        }

        syncTeamsFromShared();
        if (window.QuizScoreboard) {
            window.QuizScoreboard.subscribe((board) => {
                if (liveSync.mode === 'display') return;
                state.teams = board.teams;
                state.activeTeam = board.activeTeam;
                renderTeamScores();
            });
        }

        [100, 90, 80, 70].forEach((p) => addAnswerInputRow(p));
        loadQuestions();

        el.select.addEventListener('change', (e) => {
            state.currentIndex = Number(e.target.value) || 0;
            resetRound();
            syncPushIfHost('reset');
        });

        const catSelect = document.getElementById('category-select');
        if (catSelect) {
            catSelect.addEventListener('change', (e) => {
                state.selectedCategory = e.target.value || 'ALL';
                populateSelect();
                resetRound();
                syncPushIfHost('reset');
            });
        }

        el.btnRandom.addEventListener('click', () => {
            const indices = getFilteredIndices();
            if (indices.length <= 1) return;
            let next = state.currentIndex;
            while (next === state.currentIndex) {
                next = indices[Math.floor(Math.random() * indices.length)];
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

        if (el.board) {
            let lastPointerType = 'mouse';
            const setHoveredSlot = (slot, isEntering) => {
                if (!slot) return;
                const ansId = Number(slot.dataset.answerId);
                const q = currentQuestion();
                const ans = q?.answers?.find((a) => Number(a.id) === ansId);
                if (isEntering) {
                    if (state.hoveredSlotId === ansId) return;
                    const prevId = state.hoveredSlotId;
                    state.hoveredSlotId = ansId;
                    if (prevId !== null && prevId !== ansId) {
                        const prevEl = el.board.querySelector(`.answer-slot[data-answer-id="${prevId}"]`);
                        const prevAns = q?.answers?.find((a) => Number(a.id) === prevId);
                        if (prevEl && q && prevAns) syncSlotClueView(prevEl, q, prevAns);
                    }
                    if (q && ans) syncSlotClueView(slot, q, ans);
                    updateClueBar(q);
                } else if (state.hoveredSlotId === ansId) {
                    state.hoveredSlotId = null;
                    if (q && ans) syncSlotClueView(slot, q, ans);
                    updateClueBar(q);
                }
            };
            el.board.addEventListener('pointerdown', (e) => {
                if (e.pointerType) lastPointerType = e.pointerType;
            });
            el.board.addEventListener('pointermove', (e) => {
                if (e.pointerType) lastPointerType = e.pointerType;
            });
            el.board.addEventListener('mouseover', (e) => {
                const slot = e.target.closest('.answer-slot:not(.revealed)');
                if (!slot || e.relatedTarget?.closest?.('.answer-slot') === slot) return;
                setHoveredSlot(slot, true);
            });
            el.board.addEventListener('mouseout', (e) => {
                const slot = e.target.closest('.answer-slot:not(.revealed)');
                if (!slot || e.relatedTarget?.closest?.('.answer-slot') === slot) return;
                setHoveredSlot(slot, false);
            });
            el.board.addEventListener('focusin', (e) => {
                const slot = e.target.closest('.answer-slot:not(.revealed)');
                if (slot) setHoveredSlot(slot, true);
            });
            el.board.addEventListener('focusout', (e) => {
                const slot = e.target.closest('.answer-slot:not(.revealed)');
                if (slot && !slot.contains(e.relatedTarget)) setHoveredSlot(slot, false);
            });
            el.board.addEventListener('click', (e) => {
                const clueBtn = e.target.closest('[data-clue-answer-id]');
                if (clueBtn) {
                    e.stopPropagation();
                    const ansId = Number(clueBtn.dataset.clueAnswerId);
                    const cur = Number(state.slotClueTiers[ansId] || 0);
                    const isHoverPreviewing = cur === 0 && lastPointerType === 'mouse' && Number(state.hoveredSlotId) === ansId && e.detail > 0;
                    const nextTier = isHoverPreviewing ? 2 : ((cur + 1) % 4);
                    state.slotClueTiers[ansId] = nextTier;
                    const slot = clueBtn.closest('.answer-slot:not(.revealed)');
                    const q = currentQuestion();
                    const ans = q?.answers?.find((a) => Number(a.id) === ansId);
                    if (slot && q && ans) {
                        syncSlotClueView(slot, q, ans);
                        updateClueBar(q);
                    }
                    return;
                }
                const slot = e.target.closest('.answer-slot:not(.revealed)');
                if (slot && slot.dataset.answerId) {
                    revealSingleSlot(slot.dataset.answerId);
                }
            });
            el.board.addEventListener('keydown', (e) => {
                if (e.target.closest('[data-clue-answer-id]')) return;
                if (e.key === 'Enter' || e.key === ' ') {
                    const slot = e.target.closest('.answer-slot:not(.revealed)');
                    if (slot && slot.dataset.answerId) {
                        e.preventDefault();
                        revealSingleSlot(slot.dataset.answerId);
                    }
                }
            });
        }

        el.form.addEventListener('submit', handleCheckAnswer);
        el.btnRevealAll.addEventListener('click', () => {
            const q = currentQuestion();
            if (!q) return;
            q.answers.forEach((a) => state.revealedIds.add(Number(a.id)));
            playCorrectSound();
            spawnConfetti();
            renderBoard();
            const logicNote = getQuestionLogicNote(q);
            setFeedback('Semua jawaban telah dibuka.', 'ok');
            if (logicNote) setHostSpeech(logicNote);
            syncPushIfHost('correct', 'Semua jawaban telah dibuka.', 'ok');
        });
        el.btnResetRound.addEventListener('click', () => {
            resetRound();
            syncPushIfHost('reset');
        });
        el.btnResetScores.addEventListener('click', () => {
            state.teams.forEach((t) => { t.score = 0; });
            persistTeams();
            renderTeamScores();
            setFeedback('Skor semua tim direset ke 0 (berlaku untuk semua game).', 'ok');
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
                persistTeams();
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
                persistTeams();
                renderTeamScores();
                syncPushIfHost('update');
                return;
            }
            const card = e.target.closest('.podium-unit');
            if (!card) return;
            state.activeTeam = Number(card.dataset.team) || 0;
            persistTeams();
            renderTeamScores();
            const activeUnit = el.teamsContainer.querySelector(`.podium-unit[data-team="${state.activeTeam}"]`);
            if (activeUnit) {
                activeUnit.classList.add('crew-interact');
                setTimeout(() => activeUnit.classList.remove('crew-interact'), 800);
                const phrases = ['💬 Rembukan dulu...', '🤔 Apa ya jawabannya?', '💡 Oiya ini pasti ada!', '🔥 Ayo gas jawab!', '🗣️ Diskusi cepat!'];
                const bubble = activeUnit.querySelector('.discuss-bubble');
                if (bubble) {
                    bubble.textContent = phrases[Math.floor(Math.random() * phrases.length)];
                }
            }
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
                    if (window.QuizScoreboard) {
                        window.QuizScoreboard.save(state.teams, state.activeTeam);
                    }
                }
                if (el.activeTurnLabel) {
                    const activeIcon = state.teams[state.activeTeam]?.icon || '';
                    el.activeTurnLabel.textContent = `Giliran Menjawab: ${activeIcon} ${getTeamName(state.activeTeam)}`;
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
                    persistTeams();
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
