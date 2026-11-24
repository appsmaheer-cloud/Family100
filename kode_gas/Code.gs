/**
 * Permainan Family 100 - Backend Google Apps Script (GAS)
 * Database menggunakan Google Sheets (otomatis dibuat & diisi 11 soal contoh).
 */

const SHEET_NAME = 'Pertanyaan';

function getSeedQuestions_() {
  return [
  {
    "id": 1,
    "question": "Selain Ms. Power BI, apa tools analisis data yang populer digunakan?",
    "is_example": true,
    "answers": [
      {
        "text": "TABLEAU",
        "points": 100
      },
      {
        "text": "LOOKER",
        "points": 90
      },
      {
        "text": "EXCEL",
        "points": 80
      },
      {
        "text": "GOOGLESHEET",
        "points": 70
      },
      {
        "text": "PYTHON",
        "points": 60
      },
      {
        "text": "R",
        "points": 50
      },
      {
        "text": "SQL",
        "points": 40
      },
      {
        "text": "APACHE SPARK",
        "points": 30
      }
    ]
  },
  {
    "id": 2,
    "question": "Selain Bar Chart, apa grafik yang paling populer digunakan?",
    "is_example": true,
    "answers": [
      {
        "text": "LINE",
        "points": 100
      },
      {
        "text": "PIE",
        "points": 90
      },
      {
        "text": "TABLE",
        "points": 80
      },
      {
        "text": "SCATTER",
        "points": 70
      },
      {
        "text": "WATERFALL",
        "points": 60
      },
      {
        "text": "HISTOGRAM",
        "points": 50
      },
      {
        "text": "MAP",
        "points": 40
      },
      {
        "text": "GANTT",
        "points": 30
      }
    ]
  },
  {
    "id": 3,
    "question": "Selain rumus SUM, apa rumus yang sering digunakan di Excel?",
    "is_example": true,
    "answers": [
      {
        "text": "AVERAGE",
        "points": 100
      },
      {
        "text": "VLOOKUP",
        "points": 90
      },
      {
        "text": "HLOOKUP",
        "points": 80
      },
      {
        "text": "IF",
        "points": 70
      },
      {
        "text": "MAX",
        "points": 60
      },
      {
        "text": "MIN",
        "points": 50
      },
      {
        "text": "COUNT",
        "points": 40
      },
      {
        "text": "INDEX",
        "points": 30
      }
    ]
  },
  {
    "id": 4,
    "question": "Selain Excel, apa connector data yang ada di Power BI?",
    "is_example": true,
    "answers": [
      {
        "text": "PDF",
        "points": 100
      },
      {
        "text": "CSV",
        "points": 90
      },
      {
        "text": "WEB",
        "points": 80
      },
      {
        "text": "FOLDER",
        "points": 70
      },
      {
        "text": "ORACLE",
        "points": 60
      },
      {
        "text": "SQL SERVER",
        "points": 50
      },
      {
        "text": "SHAREPOINT",
        "points": 40
      },
      {
        "text": "SAP",
        "points": 30
      }
    ]
  },
  {
    "id": 5,
    "question": "Apa Yang Dilakukan Anak Saat Ketahuan Berbohong…..?",
    "is_example": true,
    "answers": [
      {
        "text": "MINTA MAAF",
        "points": 100
      },
      {
        "text": "MENANGIS",
        "points": 90
      },
      {
        "text": "CENGENGESAN",
        "points": 80
      },
      {
        "text": "MALU",
        "points": 70
      },
      {
        "text": "GUGUP",
        "points": 60
      },
      {
        "text": "MENCARI ALASAN",
        "points": 50
      },
      {
        "text": "PURA PURA LUPA",
        "points": 40
      },
      {
        "text": "DIAM",
        "points": 30
      }
    ]
  },
  {
    "id": 6,
    "question": "Apa Yang Dilakukan Orang Ketika Ada Masalah",
    "is_example": true,
    "answers": [
      {
        "text": "MENANGIS",
        "points": 100
      },
      {
        "text": "MELAMUN",
        "points": 90
      },
      {
        "text": "MINTA BANTUAN",
        "points": 80
      },
      {
        "text": "BERDOA",
        "points": 70
      },
      {
        "text": "MENCARI SOLUSI",
        "points": 60
      },
      {
        "text": "CURHAT",
        "points": 50
      },
      {
        "text": "MARAH-MARAH",
        "points": 40
      },
      {
        "text": "JALAN-JALAN",
        "points": 30
      }
    ]
  },
  {
    "id": 7,
    "question": "Apa yang membuat orang dijauhi",
    "is_example": true,
    "answers": [
      {
        "text": "BAU",
        "points": 100
      },
      {
        "text": "NYEBELIN",
        "points": 90
      },
      {
        "text": "SOMBONG",
        "points": 80
      },
      {
        "text": "SUKA PINJAM DUIT",
        "points": 70
      },
      {
        "text": "KASAR",
        "points": 60
      },
      {
        "text": "TIDAK DIPERCAYA",
        "points": 50
      },
      {
        "text": "JAHAT",
        "points": 40
      },
      {
        "text": "EGOIS",
        "points": 30
      }
    ]
  },
  {
    "id": 8,
    "question": "Apa permainan tradisional yang dilakukan sambil nyanyi?",
    "is_example": true,
    "answers": [
      {
        "text": "ULAR NAGA",
        "points": 100
      },
      {
        "text": "AMPAR AMPAR PISANG",
        "points": 90
      },
      {
        "text": "CUBLEK CUBLEK SUWENG",
        "points": 80
      },
      {
        "text": "DOMIKADO",
        "points": 70
      }
    ]
  },
  {
    "id": 9,
    "question": "Apa kata Belanda yang digunakan orang Indonesia?",
    "is_example": true,
    "answers": [
      {
        "text": "BRUG",
        "points": 100
      },
      {
        "text": "GORDIJN",
        "points": 90
      },
      {
        "text": "HANDDOEK",
        "points": 80
      },
      {
        "text": "SPOOR",
        "points": 70
      },
      {
        "text": "GRATIS",
        "points": 60
      }
    ]
  },
  {
    "id": 10,
    "question": "Apa nama bunga yang suka dijadikan nama jalan?",
    "is_example": true,
    "answers": [
      {
        "text": "BUGENVIL",
        "points": 100
      },
      {
        "text": "KAMBOJA",
        "points": 90
      },
      {
        "text": "KENANGA",
        "points": 80
      },
      {
        "text": "LILY",
        "points": 70
      },
      {
        "text": "ANGGREK",
        "points": 60
      },
      {
        "text": "MAWAR",
        "points": 50
      },
      {
        "text": "AZALEA",
        "points": 40
      }
    ]
  },
  {
    "id": 11,
    "question": "Apa yang orang lakukan ketika banyak uang?",
    "is_example": true,
    "answers": [
      {
        "text": "MEMBELI PROPERTY",
        "points": 100
      },
      {
        "text": "MEMBELI EMAS",
        "points": 90
      },
      {
        "text": "MEMBELI KENDARAAN",
        "points": 80
      },
      {
        "text": "BERLIBUR",
        "points": 70
      },
      {
        "text": "MENABUNG",
        "points": 60
      }
    ]
  },
  {
    "question": "Sebutkan format file yang paling sering dipakai untuk bertukar data!",
    "is_example": true,
    "answers": [
      {
        "text": "CSV",
        "points": 100
      },
      {
        "text": "EXCEL / XLSX",
        "points": 90
      },
      {
        "text": "JSON",
        "points": 80
      },
      {
        "text": "PDF",
        "points": 70
      },
      {
        "text": "XML",
        "points": 60
      },
      {
        "text": "PARQUET",
        "points": 50
      },
      {
        "text": "TXT",
        "points": 40
      },
      {
        "text": "SQL",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa penyebab laporan atau data sering terlambat dikirim ke pusat?",
    "is_example": true,
    "answers": [
      {
        "text": "PROSES MANUAL",
        "points": 100
      },
      {
        "text": "FORMAT BERBEDA",
        "points": 90
      },
      {
        "text": "REVISI DATA",
        "points": 80
      },
      {
        "text": "KONEKSI INTERNET",
        "points": 70
      },
      {
        "text": "LUPA",
        "points": 60
      },
      {
        "text": "SISTEM ERROR",
        "points": 50
      },
      {
        "text": "MENUNGGU APPROVAL",
        "points": 40
      },
      {
        "text": "FILE TERLALU BESAR",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa saja dimensi atau istilah penting dalam Data Quality (Mutu Data)?",
    "is_example": true,
    "answers": [
      {
        "text": "LENGKAP / COMPLETENESS",
        "points": 100
      },
      {
        "text": "AKURAT / ACCURACY",
        "points": 90
      },
      {
        "text": "KONSISTEN / CONSISTENCY",
        "points": 80
      },
      {
        "text": "TEPAT WAKTU / TIMELINESS",
        "points": 70
      },
      {
        "text": "TIDAK DUPLIKAT / UNIQUENESS",
        "points": 60
      },
      {
        "text": "VALID",
        "points": 50
      }
    ]
  },
  {
    "question": "Aplikasi apa yang paling sering dipakai tim untuk kolaborasi kerja & kirim data?",
    "is_example": true,
    "answers": [
      {
        "text": "WHATSAPP",
        "points": 100
      },
      {
        "text": "EMAIL",
        "points": 90
      },
      {
        "text": "GOOGLE DRIVE",
        "points": 80
      },
      {
        "text": "ZOOM / MEET",
        "points": 70
      },
      {
        "text": "EXCEL / SPREADSHEET",
        "points": 60
      },
      {
        "text": "SLACK / TEAMS",
        "points": 50
      },
      {
        "text": "TRELLO / NOTION",
        "points": 40
      },
      {
        "text": "GITHUB",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa yang biasa dilakukan pegawai kantor saat sistem atau server tiba-tiba down?",
    "is_example": true,
    "answers": [
      {
        "text": "LAPOR IT",
        "points": 100
      },
      {
        "text": "REFRESH BERKALI-KALI",
        "points": 90
      },
      {
        "text": "NGOPI / ISTIRAHAT",
        "points": 80
      },
      {
        "text": "PANIK",
        "points": 70
      },
      {
        "text": "TANYA TEMAN SEBELAH",
        "points": 60
      },
      {
        "text": "RESTART LAPTOP",
        "points": 50
      },
      {
        "text": "MAIN HP",
        "points": 40
      },
      {
        "text": "PULANG",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa yang paling sering membuat orang terlambat berangkat kerja atau acara?",
    "is_example": true,
    "answers": [
      {
        "text": "MACET",
        "points": 100
      },
      {
        "text": "BANGUN KESIANGAN",
        "points": 90
      },
      {
        "text": "HUJAN",
        "points": 80
      },
      {
        "text": "ANTRE KAMAR MANDI",
        "points": 70
      },
      {
        "text": "CARI KUNCI / BARANG",
        "points": 60
      },
      {
        "text": "BAN BOCOR",
        "points": 50
      },
      {
        "text": "DANDAN LAMA",
        "points": 40
      },
      {
        "text": "SARAPAN",
        "points": 30
      }
    ]
  },
  {
    "question": "Benda apa yang wajib dibawa saat bepergian keluar rumah, selain dompet?",
    "is_example": true,
    "answers": [
      {
        "text": "HP / HANDPHONE",
        "points": 100
      },
      {
        "text": "KUNCI",
        "points": 90
      },
      {
        "text": "POWERBANK / CHARGER",
        "points": 80
      },
      {
        "text": "TISU",
        "points": 70
      },
      {
        "text": "EARPHONE",
        "points": 60
      },
      {
        "text": "PAYUNG",
        "points": 50
      },
      {
        "text": "BOTOL MINUM",
        "points": 40
      },
      {
        "text": "PARFUM",
        "points": 30
      }
    ]
  },
  {
    "question": "Menu sarapan pagi apa yang paling populer di Indonesia?",
    "is_example": true,
    "answers": [
      {
        "text": "NASI GORENG",
        "points": 100
      },
      {
        "text": "BUBUR AYAM",
        "points": 90
      },
      {
        "text": "NASI UDUK",
        "points": 80
      },
      {
        "text": "ROTI",
        "points": 70
      },
      {
        "text": "LONTONG SAYUR",
        "points": 60
      },
      {
        "text": "GORENGAN",
        "points": 50
      },
      {
        "text": "MI INSTAN",
        "points": 40
      },
      {
        "text": "TELUR",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa yang pertama kali dilakukan orang begitu bangun tidur di pagi hari?",
    "is_example": true,
    "answers": [
      {
        "text": "CEK HP",
        "points": 100
      },
      {
        "text": "MINUM AIR",
        "points": 90
      },
      {
        "text": "KE KAMAR MANDI",
        "points": 80
      },
      {
        "text": "MATIKAN ALARM",
        "points": 70
      },
      {
        "text": "BERDOA",
        "points": 60
      },
      {
        "text": "NGUMPULIN NYAWA",
        "points": 50
      },
      {
        "text": "CUCI MUKA",
        "points": 40
      },
      {
        "text": "TARIK SELIMUT LAGI",
        "points": 30
      }
    ]
  },
  {
    "question": "Alasan apa yang sering dipakai saat lupa membalas chat atau pesan?",
    "is_example": true,
    "answers": [
      {
        "text": "KETIDURAN",
        "points": 100
      },
      {
        "text": "SIBUK KERJA",
        "points": 90
      },
      {
        "text": "TIDAK ADA SINYAL",
        "points": 80
      },
      {
        "text": "SUDAH BALAS DI HATI",
        "points": 70
      },
      {
        "text": "BATERAI HABIS",
        "points": 60
      },
      {
        "text": "TIDAK BUKA HP",
        "points": 50
      },
      {
        "text": "TENGGELAM",
        "points": 40
      },
      {
        "text": "LUPA",
        "points": 30
      }
    ]
  },
  {
    "question": "Alasan paling sering dipakai bapak-bapak saat pulang telat ke rumah?",
    "is_example": true,
    "answers": [
      {
        "text": "MACET DI JALAN",
        "points": 100
      },
      {
        "text": "LEMBUR KANTOR",
        "points": 90
      },
      {
        "text": "BAN BOCOR",
        "points": 80
      },
      {
        "text": "NGOPI / NONTON BOLA",
        "points": 70
      },
      {
        "text": "RAPAT MENDADAK",
        "points": 60
      },
      {
        "text": "BATERAI HP HABIS",
        "points": 50
      },
      {
        "text": "BELI TITIPAN ISTRI",
        "points": 40
      },
      {
        "text": "KETIDURAN",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa yang langsung dilakukan suami saat istri tiba-tiba diam dan cemberut?",
    "is_example": true,
    "answers": [
      {
        "text": "TANYA KENAPA",
        "points": 100
      },
      {
        "text": "MINTA MAAF",
        "points": 90
      },
      {
        "text": "BELIKAN MAKANAN",
        "points": 80
      },
      {
        "text": "TRANSFER UANG",
        "points": 70
      },
      {
        "text": "IKUT DIAM",
        "points": 60
      },
      {
        "text": "RAYU / GOMBAL",
        "points": 50
      },
      {
        "text": "CUCI PIRING",
        "points": 40
      },
      {
        "text": "KABUR KELUAR",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa yang paling bikin karyawan semangat selain tanggal gajian?",
    "is_example": true,
    "answers": [
      {
        "text": "MAKAN GRATIS / TRAKTIRAN",
        "points": 100
      },
      {
        "text": "TANGGAL MERAH / LIBUR",
        "points": 90
      },
      {
        "text": "PULANG CEPAT",
        "points": 80
      },
      {
        "text": "BONUS / THR",
        "points": 70
      },
      {
        "text": "BOS TIDAK MASUK",
        "points": 60
      },
      {
        "text": "WFH",
        "points": 50
      },
      {
        "text": "RAPAT DIBATALKAN",
        "points": 40
      },
      {
        "text": "KOPI GRATIS",
        "points": 30
      }
    ]
  },
  {
    "question": "Hal yang sering dilakukan saat meeting di kantor terasa membosankan?",
    "is_example": true,
    "answers": [
      {
        "text": "MAIN HP / SCROLL SOSMED",
        "points": 100
      },
      {
        "text": "NGANTUK / MENGUAP",
        "points": 90
      },
      {
        "text": "CORAT-CORET BUKU",
        "points": 80
      },
      {
        "text": "MENGHAYAL",
        "points": 70
      },
      {
        "text": "PURA-PURA CATAT",
        "points": 60
      },
      {
        "text": "NYEMIL / MINUM KOPI",
        "points": 50
      },
      {
        "text": "MATIKAN KAMERA",
        "points": 40
      },
      {
        "text": "IZIN KE TOILET",
        "points": 30
      }
    ]
  },
  {
    "question": "Konten apa yang paling sering muncul di FYP TikTok atau Reels Instagram?",
    "is_example": true,
    "answers": [
      {
        "text": "JOGET / DANCE",
        "points": 100
      },
      {
        "text": "KULINER / MUKBANG",
        "points": 90
      },
      {
        "text": "KOMEDI / PRANK",
        "points": 80
      },
      {
        "text": "REVIEW BARANG",
        "points": 70
      },
      {
        "text": "DRAMA / CURHAT",
        "points": 60
      },
      {
        "text": "KUCING LUCU",
        "points": 50
      },
      {
        "text": "TIPS / TUTORIAL",
        "points": 40
      },
      {
        "text": "PODCAST",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa yang dilakukan orang sebelum menyantap makanan enak di kafe?",
    "is_example": true,
    "answers": [
      {
        "text": "FOTO / VIDEO DULU",
        "points": 100
      },
      {
        "text": "BERDOA",
        "points": 90
      },
      {
        "text": "UPLOAD STORY",
        "points": 80
      },
      {
        "text": "CARI ANGLE BAGUS",
        "points": 70
      },
      {
        "text": "CUCI TANGAN",
        "points": 60
      },
      {
        "text": "COBAIN KUAHNYA",
        "points": 50
      },
      {
        "text": "TAG TEMAN",
        "points": 40
      },
      {
        "text": "MINTA SENDOK",
        "points": 30
      }
    ]
  },
  {
    "question": "Istilah bahasa gaul apa yang paling sering dipakai anak muda zaman sekarang?",
    "is_example": true,
    "answers": [
      {
        "text": "OVERTHINKING / GALAU",
        "points": 100
      },
      {
        "text": "HEALING",
        "points": 90
      },
      {
        "text": "FOMO",
        "points": 80
      },
      {
        "text": "RED FLAG / GREEN FLAG",
        "points": 70
      },
      {
        "text": "SLAY",
        "points": 60
      },
      {
        "text": "BESTIE",
        "points": 50
      },
      {
        "text": "VIBE",
        "points": 40
      },
      {
        "text": "GHOSTING",
        "points": 30
      }
    ]
  },
  {
    "question": "Benda apa yang wajib ada di meja kerja atau tas anak muda di kantor?",
    "is_example": true,
    "answers": [
      {
        "text": "ES KOPI SUSU",
        "points": 100
      },
      {
        "text": "TWS / EARPHONE",
        "points": 90
      },
      {
        "text": "TUMBLER",
        "points": 80
      },
      {
        "text": "LAPTOP / IPAD",
        "points": 70
      },
      {
        "text": "CHARGER / POWERBANK",
        "points": 60
      },
      {
        "text": "LIP BALM / SKINCARE",
        "points": 50
      },
      {
        "text": "STIKER LUCU",
        "points": 40
      },
      {
        "text": "KIPAS MINI",
        "points": 30
      }
    ]
  },
  {
    "question": "Apa yang paling sering dikeluhkan pekerja usia 30-an?",
    "is_example": true,
    "answers": [
      {
        "text": "SAKIT PINGGUNG / ENCOK",
        "points": 100
      },
      {
        "text": "CICILAN / KPR",
        "points": 90
      },
      {
        "text": "CAPEK KERJA",
        "points": 80
      },
      {
        "text": "HARGA RUMAH MAHAL",
        "points": 70
      },
      {
        "text": "SUSAH TIDUR",
        "points": 60
      },
      {
        "text": "RAMBUT RONTOK / UBAN",
        "points": 50
      },
      {
        "text": "KURANG LIBURAN",
        "points": 40
      },
      {
        "text": "ASAM LAMBUNG",
        "points": 30
      }
    ]
  },
  {
    "question": "Kebiasaan khas orang tua saat memakai grup WhatsApp keluarga?",
    "is_example": true,
    "answers": [
      {
        "text": "KIRIM STIKER SELAMAT PAGI",
        "points": 100
      },
      {
        "text": "FORWARD BROADCAST / HOAX",
        "points": 90
      },
      {
        "text": "NGETIK HURUF KAPITAL",
        "points": 80
      },
      {
        "text": "KIRIM FOTO BUNGA / KOPI",
        "points": 70
      },
      {
        "text": "TYPO / SALAH KIRIM",
        "points": 60
      },
      {
        "text": "VOICE NOTE PANJANG",
        "points": 50
      },
      {
        "text": "BALAS JEMPOL",
        "points": 40
      },
      {
        "text": "KIRIM VIDEO CERAMAH",
        "points": 30
      }
    ]
  },
  {
    "question": "Di rumah makan Padang, selain pakai sendok atau tangan, hal apa yang pasti dipakai orang saat makan?",
    "is_example": true,
    "answers": [
      {
        "text": "TENAGA",
        "points": 100
      },
      {
        "text": "MULUT",
        "points": 90
      },
      {
        "text": "GIGI",
        "points": 80
      },
      {
        "text": "UANG",
        "points": 70
      },
      {
        "text": "LAPAR",
        "points": 60
      },
      {
        "text": "PIRING",
        "points": 50
      },
      {
        "text": "KURSI",
        "points": 40
      },
      {
        "text": "DOA",
        "points": 30
      }
    ]
  },
  {
    "question": "Jika tengah malam sakit gigi dan semua dokter gigi sudah tutup, hal atau benda apa yang langsung dicari orang?",
    "is_example": true,
    "answers": [
      {
        "text": "KASUR",
        "points": 100
      },
      {
        "text": "OBAT",
        "points": 90
      },
      {
        "text": "AIR GARAM",
        "points": 80
      },
      {
        "text": "BANTAL",
        "points": 70
      },
      {
        "text": "KACA CERMIN",
        "points": 60
      },
      {
        "text": "DOA",
        "points": 50
      },
      {
        "text": "IGD RUMAH SAKIT",
        "points": 40
      },
      {
        "text": "HP",
        "points": 30
      }
    ]
  },
  {
    "question": "Saat lima pelanggan masuk bersamaan ke tempat cukur yang tukangnya cuma satu, dengan cara apa rambut mereka dipotong?",
    "is_example": true,
    "answers": [
      {
        "text": "GANTIAN",
        "points": 100
      },
      {
        "text": "SATU PER SATU",
        "points": 90
      },
      {
        "text": "ANTRE",
        "points": 80
      },
      {
        "text": "GUNTING",
        "points": 70
      },
      {
        "text": "MESIN CUKUR",
        "points": 60
      },
      {
        "text": "SISIR",
        "points": 50
      },
      {
        "text": "PELAN-PELAN",
        "points": 40
      },
      {
        "text": "SABAR",
        "points": 30
      }
    ]
  },
  {
    "question": "Selain dari awan mendung, dari manakah atau kapankah air hujan itu biasanya turun ke bumi?",
    "is_example": true,
    "answers": [
      {
        "text": "DARI MAGHRIB",
        "points": 100
      },
      {
        "text": "DARI LANGIT",
        "points": 90
      },
      {
        "text": "DARI ATAS",
        "points": 80
      },
      {
        "text": "MUSIM HUJAN",
        "points": 70
      },
      {
        "text": "SORE HARI",
        "points": 60
      },
      {
        "text": "GERIMIS",
        "points": 50
      },
      {
        "text": "MALAM HARI",
        "points": 40
      }
    ]
  },
  {
    "question": "Apa yang paling cepat terjadi jika sebuah sepeda motor nekat masuk ke jalan tol lalu mogok di jalur cepat?",
    "is_example": true,
    "answers": [
      {
        "text": "DITILANG",
        "points": 100
      },
      {
        "text": "VIRAL",
        "points": 90
      },
      {
        "text": "DISURUH KELUAR",
        "points": 80
      },
      {
        "text": "DIDEREK",
        "points": 70
      },
      {
        "text": "DIDORONG PETUGAS",
        "points": 60
      },
      {
        "text": "DENDA",
        "points": 50
      },
      {
        "text": "MALU",
        "points": 40
      }
    ]
  },
  {
    "question": "Hal apa yang mutlak harus dilakukan seseorang lebih dulu sebelum ia bisa bangun tidur?",
    "is_example": true,
    "answers": [
      {
        "text": "TIDUR",
        "points": 100
      },
      {
        "text": "MEREM",
        "points": 90
      },
      {
        "text": "BARING",
        "points": 80
      },
      {
        "text": "MATIKAN LAMPU",
        "points": 70
      },
      {
        "text": "NGANTUK",
        "points": 60
      },
      {
        "text": "DOA",
        "points": 50
      },
      {
        "text": "PASANG ALARM",
        "points": 40
      }
    ]
  },
  {
    "question": "Sehebat apa pun dokter bedah di rumah sakit terbaik, orang seperti apa yang pasti ditolak untuk dioperasi?",
    "is_example": true,
    "answers": [
      {
        "text": "ORANG SEHAT",
        "points": 100
      },
      {
        "text": "TIDAK PUNYA UANG",
        "points": 90
      },
      {
        "text": "SUDAH MENINGGAL",
        "points": 80
      },
      {
        "text": "TIDAK SETUJU",
        "points": 70
      },
      {
        "text": "KELUARGA SENDIRI",
        "points": 60
      },
      {
        "text": "KABUR",
        "points": 50
      },
      {
        "text": "SALAH KAMAR",
        "points": 40
      }
    ]
  },
  {
    "question": "Dalam pertandingan basket atau sepak bola resmi, kenapa semua pemain berlari berebut satu bola yang sama?",
    "is_example": true,
    "answers": [
      {
        "text": "INGIN MENANG",
        "points": 100
      },
      {
        "text": "BOLANYA CUMA SATU",
        "points": 90
      },
      {
        "text": "ATURAN MAIN",
        "points": 80
      },
      {
        "text": "CETAK POIN",
        "points": 70
      },
      {
        "text": "TAKUT KALAH",
        "points": 60
      },
      {
        "text": "DIBAYAR",
        "points": 50
      },
      {
        "text": "KURANG MODAL BELI BOLA",
        "points": 40
      }
    ]
  },
  {
    "question": "Apa yang sebaiknya dilakukan seorang tamu jika sudah menginap di rumah orang lain lebih dari 2x24 jam?",
    "is_example": true,
    "answers": [
      {
        "text": "PAMIT",
        "points": 100
      },
      {
        "text": "LAPOR RT",
        "points": 90
      },
      {
        "text": "BANTU PEKERJAAN RUMAH",
        "points": 80
      },
      {
        "text": "BAWA MAKANAN",
        "points": 70
      },
      {
        "text": "JANGAN MEREPOTKAN",
        "points": 60
      },
      {
        "text": "BERTERIMA KASIH",
        "points": 50
      },
      {
        "text": "PINDAH HOTEL",
        "points": 40
      }
    ]
  },
  {
    "question": "Saat diajak makan lalu seseorang menjawab \"Terserah\", makanan atau keputusan apa yang akhirnya paling sering dipilih?",
    "is_example": true,
    "answers": [
      {
        "text": "NASI PADANG",
        "points": 100
      },
      {
        "text": "PULANG",
        "points": 90
      },
      {
        "text": "BAKSO",
        "points": 80
      },
      {
        "text": "AYAM GEPREK",
        "points": 70
      },
      {
        "text": "MIE AYAM",
        "points": 60
      },
      {
        "text": "PECEL LELE",
        "points": 50
      },
      {
        "text": "SATE",
        "points": 40
      },
      {
        "text": "TIDAK JADI MAKAN",
        "points": 30
      }
    ]
  },
  {
    "question": "Benda kecil seperti gunting kuku atau charger selalu hilang saat dicari buru-buru, tapi langsung ketemu begitu kita...",
    "is_example": true,
    "answers": [
      {
        "text": "BERHENTI MENCARI",
        "points": 100
      },
      {
        "text": "BELI BARU",
        "points": 90
      },
      {
        "text": "PASRAH",
        "points": 80
      },
      {
        "text": "TANYA IBU",
        "points": 70
      },
      {
        "text": "SUDAH TELAT",
        "points": 60
      },
      {
        "text": "BERESKAN KAMAR",
        "points": 50
      },
      {
        "text": "TIDAK BUTUH LAGI",
        "points": 40
      }
    ]
  },
  {
    "question": "Dalam lomba balap lari, jika kamu berhasil menyalip pelari di posisi nomor 2, apa saja fakta yang langsung terjadi?",
    "is_example": true,
    "answers": [
      {
        "text": "JADI NOMOR DUA",
        "points": 100
      },
      {
        "text": "MASIH ADA JUARA SATU",
        "points": 90
      },
      {
        "text": "DISALIP JADI NOMOR TIGA",
        "points": 80
      },
      {
        "text": "BELUM MENANG",
        "points": 70
      },
      {
        "text": "HARUS KEJAR LAGI",
        "points": 60
      },
      {
        "text": "CAPEK",
        "points": 50
      }
    ]
  },
  {
    "question": "Supaya tidak kalah start saat lomba balap karung dimulai, hal pertama apa yang wajib dilakukan peserta di garis start?",
    "is_example": true,
    "answers": [
      {
        "text": "BERDIRI",
        "points": 100
      },
      {
        "text": "MASUK KARUNG",
        "points": 90
      },
      {
        "text": "PEGANG KARUNG",
        "points": 80
      },
      {
        "text": "DENGAR PELUIT",
        "points": 70
      },
      {
        "text": "SIAP LOMPAT",
        "points": 60
      },
      {
        "text": "DOA",
        "points": 50
      },
      {
        "text": "LEPAS SANDAL",
        "points": 40
      }
    ]
  },
  {
    "question": "Antara 10 kg kapas dan 10 kg besi yang dijatuhkan dari ketinggian ke atas kaki, fakta apa saja yang benar?",
    "is_example": true,
    "answers": [
      {
        "text": "BERATNYA SAMA",
        "points": 100
      },
      {
        "text": "BESI LEBIH SAKIT",
        "points": 90
      },
      {
        "text": "KAPAS LEBIH EMPUK",
        "points": 80
      },
      {
        "text": "UKURAN KAPAS BESAR",
        "points": 70
      },
      {
        "text": "BESI JATUH CEPAT",
        "points": 60
      },
      {
        "text": "MENGHINDAR",
        "points": 50
      }
    ]
  },
  {
    "question": "Sebutkan hal yang anehnya justru semakin sering dibagi atau dikeluarkan, malah terasa semakin bertambah!",
    "is_example": true,
    "answers": [
      {
        "text": "ILMU",
        "points": 100
      },
      {
        "text": "SEDEKAH",
        "points": 90
      },
      {
        "text": "SENYUM",
        "points": 80
      },
      {
        "text": "PENGALAMAN",
        "points": 70
      },
      {
        "text": "TEMAN",
        "points": 60
      },
      {
        "text": "KEBAHAGIAAN",
        "points": 50
      },
      {
        "text": "UTANG",
        "points": 40
      }
    ]
  },
  {
    "question": "Hal apa yang paling sering ditunggu dan dijanjikan orang, tapi anehnya tidak pernah benar-benar terasa datang sebagai hari ini?",
    "is_example": true,
    "answers": [
      {
        "text": "HARI ESOK",
        "points": 100
      },
      {
        "text": "DIET",
        "points": 90
      },
      {
        "text": "GAJIAN",
        "points": 80
      },
      {
        "text": "MASA DEPAN",
        "points": 70
      },
      {
        "text": "JANJI MANIS",
        "points": 60
      },
      {
        "text": "LIBUR PANJANG",
        "points": 50
      },
      {
        "text": "TOBAT MALAS",
        "points": 40
      }
    ]
  },
  {
    "question": "Tebakan kalender yang sering mengecoh: Di antara 12 bulan dalam setahun, bulan apa saja yang memiliki 28 hari?",
    "is_example": true,
    "answers": [
      {
        "text": "SEMUA BULAN",
        "points": 100
      },
      {
        "text": "FEBRUARI",
        "points": 90
      },
      {
        "text": "JANUARI",
        "points": 80
      },
      {
        "text": "DESEMBER",
        "points": 70
      },
      {
        "text": "DUA BELAS BULAN",
        "points": 60
      },
      {
        "text": "SETIAP BULAN",
        "points": 50
      }
    ]
  },
  {
    "question": "Benda sehari-hari apa yang punya bagian mirip organ tubuh manusia (seperti gigi, mata, kaki, atau leher), padahal benda mati?",
    "is_example": true,
    "answers": [
      {
        "text": "SISIR",
        "points": 100
      },
      {
        "text": "JARUM",
        "points": 90
      },
      {
        "text": "MEJA KURSI",
        "points": 80
      },
      {
        "text": "BOTOL",
        "points": 70
      },
      {
        "text": "GERGAJI",
        "points": 60
      },
      {
        "text": "KUPING PANCI",
        "points": 50
      },
      {
        "text": "DAUN PINTU",
        "points": 40
      },
      {
        "text": "RESLETING",
        "points": 30
      }
    ]
  },
  {
    "question": "Saat malam-malam listrik rumah tiba-tiba padam total, hal pertama apa yang refleks langsung dilakukan orang?",
    "is_example": true,
    "answers": [
      {
        "text": "CEK HP",
        "points": 100
      },
      {
        "text": "CEK METERAN LISTRIK",
        "points": 90
      },
      {
        "text": "INTIP TETANGGA",
        "points": 80
      },
      {
        "text": "TERIAK MATI LAMPU",
        "points": 70
      },
      {
        "text": "NYALAKAN SENTER",
        "points": 60
      },
      {
        "text": "CARI LILIN",
        "points": 50
      },
      {
        "text": "CEK WIFI",
        "points": 40
      },
      {
        "text": "TIDUR",
        "points": 30
      }
    ]
  },
  {
    "question": "Tulisan apa yang paling sering diklaim \"Sudah Saya Baca\", padahal hampir semua orang langsung melewatinya begitu saja?",
    "is_example": true,
    "answers": [
      {
        "text": "SYARAT DAN KETENTUAN",
        "points": 100
      },
      {
        "text": "BUKU PANDUAN",
        "points": 90
      },
      {
        "text": "ATURAN GARANSI",
        "points": 80
      },
      {
        "text": "KEBIJAKAN PRIVASI",
        "points": 70
      },
      {
        "text": "DILARANG PARKIR",
        "points": 60
      },
      {
        "text": "ATURAN KOMPLEK",
        "points": 50
      },
      {
        "text": "KEMASAN OBAT",
        "points": 40
      }
    ]
  },
  {
    "question": "Menurut pengamatan lucu, orang yang langsung memilih \"Sahabat Sejati\" ketimbang uang Rp 1 miliar biasanya kenapa?",
    "is_example": true,
    "answers": [
      {
        "text": "SUDAH KAYA",
        "points": 100
      },
      {
        "text": "PURA-PURA BIJAK",
        "points": 90
      },
      {
        "text": "MASIH NGANTUK",
        "points": 80
      },
      {
        "text": "LAGI BANYAK MASALAH",
        "points": 70
      },
      {
        "text": "GURU MOTIVASI",
        "points": 60
      },
      {
        "text": "BARU GAJIAN",
        "points": 50
      },
      {
        "text": "TAKUT DIHUJAT",
        "points": 40
      }
    ]
  },
  {
    "question": "Bukan karena pekerjaan menumpuk, akting apa yang paling sering dipakai pegawai agar terlihat sangat sibuk di kantor?",
    "is_example": true,
    "answers": [
      {
        "text": "JALAN CEPAT BAWA KERTAS",
        "points": 100
      },
      {
        "text": "DAHI BERKERUT",
        "points": 90
      },
      {
        "text": "BUKA BANYAK TAB",
        "points": 80
      },
      {
        "text": "PAKAI EARPHONE",
        "points": 70
      },
      {
        "text": "NGETIK CEPAT",
        "points": 60
      },
      {
        "text": "TELPONAN MONDAR-MANDIR",
        "points": 50
      },
      {
        "text": "MINUM KOPI SERIUS",
        "points": 40
      },
      {
        "text": "MEJA BERANTAKAN",
        "points": 30
      }
    ]
  },
  {
    "question": "Hal apa yang awalnya dikira gratis atau hemat, tapi ujung-ujungnya malah bikin keluar uang lebih banyak?",
    "is_example": true,
    "answers": [
      {
        "text": "PARKIR GRATIS",
        "points": 100
      },
      {
        "text": "CUMA LIHAT-LIHAT",
        "points": 90
      },
      {
        "text": "ONGKIR MINIMAL BELANJA",
        "points": 80
      },
      {
        "text": "KONDANGAN",
        "points": 70
      },
      {
        "text": "COBA GRATIS",
        "points": 60
      },
      {
        "text": "TRIAL APLIKASI",
        "points": 50
      },
      {
        "text": "DISKON BESAR",
        "points": 40
      }
    ]
  },
  {
    "question": "Saat ketahuan memejamkan mata di meja kerja oleh atasan, alasan kreatif apa yang langsung diucapkan karyawan?",
    "is_example": true,
    "answers": [
      {
        "text": "LAGI BERPIKIR KERAS",
        "points": 100
      },
      {
        "text": "MATA PEDIH",
        "points": 90
      },
      {
        "text": "LAGI BERDOA",
        "points": 80
      },
      {
        "text": "PUSING",
        "points": 70
      },
      {
        "text": "TUNGGU LOADING",
        "points": 60
      },
      {
        "text": "ISTIRAHAT MATA",
        "points": 50
      },
      {
        "text": "MENGHAFAL DATA",
        "points": 40
      }
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
    ['SPOOR', 'SEPUR', 'KERETA'],
    ['TENAGA', 'ENERGI', 'OTOT', 'DAYA', 'KEKUATAN'],
    ['KASUR', 'TEMPAT TIDUR', 'RANJANG', 'SPRINGBED'],
    ['GANTIAN', 'BERGANTIAN', 'GILIRAN'],
    ['ANTRE', 'ANTRI', 'MENUNGGU GILIRAN'],
    ['DARI MAGHRIB', 'MAGHRIB', 'MAGRIB', 'WAKTU MAGHRIB'],
    ['DITILANG', 'TILANG', 'KENA TILANG', 'RAZIA', 'POLISI'],
    ['MEREM', 'PEJAMKAN MATA', 'TUTUP MATA'],
    ['ORANG SEHAT', 'SEHAT', 'TIDAK SAKIT', 'BUGAR', 'WARAS'],
    ['PAMIT', 'MINTA IZIN PULANG', 'PAMITAN'],
    ['SEMUA BULAN', 'SEMUA', 'TIAP BULAN', 'BULAN APA SAJA'],
    ['SYARAT DAN KETENTUAN', 'SYARAT KETENTUAN', 'TERMS', 'TNC', 'TOS'],
    ['BERHENTI MENCARI', 'BERHENTI CARI', 'STOP CARI', 'MENYERAH'],
    ['SUDAH KAYA', 'ORANG KAYA', 'KAYA RAYA', 'KAYA'],
    ['JADI NOMOR DUA', 'NOMOR DUA', 'POSISI DUA', 'POSISI 2', 'KE 2', 'NO 2'],
    ['LAGI BERPIKIR KERAS', 'BERPIKIR', 'MIKIR', 'KONSENTRASI', 'RENUNG', 'MERENUNG']
  ];
}

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
