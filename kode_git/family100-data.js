(() => {
    'use strict';

    const SYNONYM_GROUPS = [
    [
        "TABLEAU",
        "TABLO",
        "TABLEU"
    ],
    [
        "LOOKER",
        "LOOKER STUDIO",
        "DATA STUDIO",
        "GDS"
    ],
    [
        "EXCEL",
        "MS EXCEL",
        "MICROSOFT EXCEL"
    ],
    [
        "GOOGLESHEET",
        "GOOGLE SHEET",
        "GOOGLE SHEETS",
        "SPREADSHEET",
        "GSHEET",
        "SHEETS"
    ],
    [
        "PYTHON",
        "PITON",
        "PY"
    ],
    [
        "R",
        "BAHASA R",
        "R STUDIO",
        "RSTUDIO"
    ],
    [
        "SQL",
        "MYSQL",
        "POSTGRESQL",
        "QUERY",
        "DATABASE SQL"
    ],
    [
        "APACHE SPARK",
        "SPARK",
        "PYSPARK"
    ],
    [
        "LINE",
        "LINE CHART",
        "GRAFIK GARIS",
        "GARIS"
    ],
    [
        "PIE",
        "PIE CHART",
        "GRAFIK LINGKARAN",
        "LINGKARAN",
        "DONUT CHART"
    ],
    [
        "TABLE",
        "TABEL",
        "TABLE CHART",
        "MATRIX"
    ],
    [
        "SCATTER",
        "SCATTER PLOT",
        "SCATTER CHART",
        "DIAGRAM PENCAR",
        "TITIK"
    ],
    [
        "WATERFALL",
        "WATERFALL CHART",
        "GRAFIK AIR TERJUN",
        "AIR TERJUN"
    ],
    [
        "HISTOGRAM",
        "HISTOGRAM CHART",
        "DISTRIBUSI FREKUENSI"
    ],
    [
        "MAP",
        "PETA",
        "MAP CHART",
        "GEO MAP",
        "FILLED MAP"
    ],
    [
        "GANTT",
        "GANTT CHART",
        "TIMELINE PROYEK",
        "JADWAL PROYEK"
    ],
    [
        "AVERAGE",
        "RATA RATA",
        "AVG",
        "MEAN"
    ],
    [
        "VLOOKUP",
        "V LOOKUP",
        "XLOOKUP"
    ],
    [
        "HLOOKUP",
        "H LOOKUP"
    ],
    [
        "IF",
        "FUNGSI IF",
        "RUMUS IF",
        "JIKA"
    ],
    [
        "MAX",
        "MAKSIMUM",
        "TERBESAR",
        "MAKS"
    ],
    [
        "MIN",
        "MINIMUM",
        "TERKECIL"
    ],
    [
        "COUNT",
        "COUNTIF",
        "COUNTA",
        "HITUNG SEL"
    ],
    [
        "INDEX",
        "INDEX MATCH",
        "INDEKS"
    ],
    [
        "PDF",
        "FILE PDF",
        "DOKUMEN PDF"
    ],
    [
        "CSV",
        "FILE CSV",
        "COMMA SEPARATED"
    ],
    [
        "WEB",
        "WEBSITE",
        "URL",
        "API WEB",
        "INTERNET"
    ],
    [
        "FOLDER",
        "DIREKTORI",
        "BANYAK FILE",
        "FOLDER KOMPUTER"
    ],
    [
        "ORACLE",
        "ORACLE DB",
        "ORACLE DATABASE"
    ],
    [
        "SQL SERVER",
        "MSSQL",
        "SQLSERVER",
        "MICROSOFT SQL SERVER"
    ],
    [
        "SHAREPOINT",
        "SHARE POINT",
        "ONEDRIVE SHAREPOINT"
    ],
    [
        "SAP",
        "SAP HANA",
        "SAP ERP",
        "SISTEM SAP"
    ],
    [
        "MINTA MAAF",
        "MEMINTA MAAF",
        "MOHON MAAF",
        "MAAF",
        "AMPUN",
        "SORRY"
    ],
    [
        "MENANGIS",
        "NANGIS",
        "MEWEK",
        "BERSEDIH",
        "SEDIH",
        "KELUAR AIR MATA"
    ],
    [
        "CENGENGESAN",
        "KETAWA",
        "TERTAWA",
        "NYENGIR",
        "SENYUM",
        "CEKIKIKAN",
        "MESEM MESEM"
    ],
    [
        "MALU",
        "MINDER",
        "SUNGKAN",
        "SEGAN",
        "SALAH TINGKAH",
        "SALTING"
    ],
    [
        "GUGUP",
        "GROGI",
        "NERVOUS",
        "PANIK",
        "GEMETAR",
        "GUGUPAN"
    ],
    [
        "MENCARI ALASAN",
        "CARI ALASAN",
        "NGELES",
        "ALASAN",
        "BERDALIH",
        "MENGELAK"
    ],
    [
        "PURA PURA LUPA",
        "LUPA",
        "NGAKU LUPA",
        "TIDAK INGAT",
        "BERPURA PURA LUPA"
    ],
    [
        "DIAM",
        "DIEM",
        "BUNGKAM",
        "PENDIAM",
        "MENENG",
        "MEMBISU",
        "MINGKEM"
    ],
    [
        "MELAMUN",
        "NGELAMUN",
        "LAMUN",
        "BENGONG",
        "TERMENUNG",
        "MELONGO",
        "MENGKHAYAL"
    ],
    [
        "MINTA BANTUAN",
        "MINTA TOLONG",
        "TOLONG",
        "BANTUAN",
        "MEMBANTU"
    ],
    [
        "BERDOA",
        "SHOLAT",
        "SALAT",
        "SEMBAHYANG",
        "IBADAH",
        "BERIBADAH",
        "PASRAH KE TUHAN"
    ],
    [
        "MENCARI SOLUSI",
        "CARI SOLUSI",
        "SOLUSI",
        "PENYELESAIAN",
        "JALAN KELUAR"
    ],
    [
        "CURHAT",
        "CERITA",
        "BERCERITA",
        "NGOBROL",
        "SHARING",
        "CERITA KE TEMAN"
    ],
    [
        "MARAH MARAH",
        "MARAH",
        "NGAMUK",
        "EMOSI",
        "KESAL",
        "MENGAMUK"
    ],
    [
        "JALAN JALAN",
        "LIBURAN",
        "PIKNIK",
        "HEALING",
        "REFRESHING",
        "REKREASI",
        "TRAVELING",
        "BERLIBUR"
    ],
    [
        "BAU",
        "BAU BADAN",
        "KETEK",
        "BUSUK",
        "APEK",
        "BAU MULUT"
    ],
    [
        "NYEBELIN",
        "MENYEBALKAN",
        "SEBEL",
        "RESE",
        "MENJENGKELKAN",
        "JUEDES"
    ],
    [
        "SOMBONG",
        "ANGKUH",
        "CONGKAK",
        "BELAGU",
        "AROGAN",
        "SONGONG",
        "PAMER"
    ],
    [
        "SUKA PINJAM DUIT",
        "PINJAM DUIT",
        "PINJAM UANG",
        "NGUTANG",
        "HUTANG",
        "MINJAM DUIT",
        "PINJOL TEMAN"
    ],
    [
        "KASAR",
        "GALAK",
        "TIDAK SOPAN",
        "KASAR MULUT"
    ],
    [
        "TIDAK DIPERCAYA",
        "PEMBOHONG",
        "PENGKHIANAT",
        "BOHONG",
        "MUNAFIK",
        "INGKAR JANJI"
    ],
    [
        "JAHAT",
        "KEJAM",
        "LICIK",
        "NAKAL",
        "JAHAT HATI"
    ],
    [
        "EGOIS",
        "SERAKAH",
        "PELIT",
        "KIKIR",
        "MAU MENANG SENDIRI"
    ],
    [
        "ULAR NAGA",
        "ULAR NAGA PANJANGNYA"
    ],
    [
        "AMPAR AMPAR PISANG",
        "AMPAR PISANG"
    ],
    [
        "CUBLEK CUBLEK SUWENG",
        "CUBLEK SUWENG"
    ],
    [
        "DOMIKADO",
        "DO MI KA DO",
        "DOMI KADO"
    ],
    [
        "BRUG",
        "JEMBATAN"
    ],
    [
        "GORDIJN",
        "GORDEN",
        "HORDENG",
        "TIRAI"
    ],
    [
        "HANDDOEK",
        "HANDUK"
    ],
    [
        "SPOOR",
        "SEPUR",
        "KERETA",
        "KERETA API",
        "REL"
    ],
    [
        "GRATIS",
        "FREE",
        "CUMA CUMA",
        "TANPA BAYAR"
    ],
    [
        "BUGENVIL",
        "BOUGENVILLE",
        "BOUGENVIL",
        "BUNGA KERTAS"
    ],
    [
        "KAMBOJA",
        "CAMBOJA",
        "PLUMERIA"
    ],
    [
        "KENANGA",
        "BUNGA KENANGA"
    ],
    [
        "LILY",
        "LILI",
        "BUNGA LILY",
        "BUNGA LILI"
    ],
    [
        "ANGGREK",
        "ORCHID",
        "BUNGA ANGGREK"
    ],
    [
        "MAWAR",
        "ROSE",
        "BUNGA MAWAR"
    ],
    [
        "AZALEA",
        "BUNGA AZALEA"
    ],
    [
        "MEMBELI PROPERTY",
        "BELI PROPERTY",
        "PROPERTI",
        "RUMAH",
        "TANAH",
        "APARTEMEN",
        "RUKO",
        "BELI RUMAH"
    ],
    [
        "MEMBELI EMAS",
        "BELI EMAS",
        "EMAS",
        "LOGAM MULIA",
        "PERHIASAN",
        "ANTAM"
    ],
    [
        "MEMBELI KENDARAAN",
        "BELI KENDARAAN",
        "MOBIL",
        "MOTOR",
        "BELI MOBIL",
        "BELI MOTOR"
    ],
    [
        "BERLIBUR",
        "LIBURAN MEWAH",
        "KE LUAR NEGERI",
        "HOLIDAY",
        "PESIAR"
    ],
    [
        "MENABUNG",
        "NABUNG",
        "TABUNGAN",
        "INVESTASI",
        "DEPOSITO",
        "SIMPAN UANG"
    ],
    [
        "EXCEL XLSX",
        "XLSX",
        "XLS",
        "WORKBOOK"
    ],
    [
        "JSON",
        "FILE JSON",
        "JAVASCRIPT OBJECT NOTATION"
    ],
    [
        "XML",
        "FILE XML",
        "MARKUP XML"
    ],
    [
        "PARQUET",
        "FILE PARQUET",
        "APACHE PARQUET"
    ],
    [
        "TXT",
        "TEXT",
        "PLAIN TEXT",
        "FILE TXT",
        "NOTEPAD"
    ],
    [
        "PROSES MANUAL",
        "MANUAL",
        "INPUT MANUAL",
        "REKAP MANUAL",
        "KERJA MANUAL"
    ],
    [
        "FORMAT BERBEDA",
        "BEDA FORMAT",
        "TIDAK SERAGAM",
        "TEMPLATE BEDA"
    ],
    [
        "REVISI DATA",
        "REVISI",
        "PERBAIKAN DATA",
        "SALAH INPUT",
        "DATA SALAH"
    ],
    [
        "KONEKSI INTERNET",
        "INTERNET LEMOT",
        "JARINGAN ERROR",
        "SINYAL JELEK",
        "WIFI LEMOT",
        "KONEKSI"
    ],
    [
        "LUPA",
        "KELUPAAN",
        "TERLEWAT",
        "LUPA KIRIM"
    ],
    [
        "SISTEM ERROR",
        "ERROR",
        "BUG",
        "APLIKASI DOWN",
        "SERVER DOWN",
        "SYSTEM ERROR"
    ],
    [
        "MENUNGGU APPROVAL",
        "APPROVAL",
        "TUNGGU ACC",
        "BELUM DI ACC",
        "TANDA TANGAN BOS"
    ],
    [
        "FILE TERLALU BESAR",
        "FILE BESAR",
        "UKURAN BESAR",
        "OVERSIZE",
        "KEBESARAN FILE"
    ],
    [
        "LENGKAP COMPLETENESS",
        "LENGKAP",
        "COMPLETENESS",
        "KELENGKAPAN"
    ],
    [
        "AKURAT ACCURACY",
        "AKURAT",
        "ACCURACY",
        "KEAKURATAN"
    ],
    [
        "KONSISTEN CONSISTENCY",
        "KONSISTEN",
        "CONSISTENCY",
        "KONSISTENSI"
    ],
    [
        "TEPAT WAKTU TIMELINESS",
        "TEPAT WAKTU",
        "TIMELINESS"
    ],
    [
        "TIDAK DUPLIKAT UNIQUENESS",
        "TIDAK DUPLIKAT",
        "UNIQUENESS",
        "UNIK",
        "ANTI DUPLIKAT"
    ],
    [
        "VALID",
        "VALIDITY",
        "VALIDITAS",
        "SAH"
    ],
    [
        "WHATSAPP",
        "WA",
        "WHATS APP"
    ],
    [
        "EMAIL",
        "GMAIL",
        "OUTLOOK",
        "SUREL",
        "E MAIL"
    ],
    [
        "GOOGLE DRIVE",
        "GDRIVE",
        "DRIVE",
        "CLOUD GOOGLE"
    ],
    [
        "ZOOM MEET",
        "ZOOM",
        "GOOGLE MEET",
        "GMEET",
        "VIDEO CALL"
    ],
    [
        "EXCEL SPREADSHEET",
        "MICROSOFT EXCEL",
        "SPREADSHEET ONLINE"
    ],
    [
        "SLACK TEAMS",
        "SLACK",
        "MICROSOFT TEAMS",
        "MS TEAMS"
    ],
    [
        "TRELLO NOTION",
        "TRELLO",
        "NOTION",
        "JIRA",
        "ASANA"
    ],
    [
        "GITHUB",
        "GIT",
        "GITLAB",
        "BITBUCKET"
    ],
    [
        "LAPOR IT",
        "PANGGIL IT",
        "HUBUNGI IT",
        "HELPDESK",
        "TIKET IT"
    ],
    [
        "REFRESH BERKALI KALI",
        "REFRESH",
        "F5",
        "RELOAD",
        "MUAT ULANG"
    ],
    [
        "NGOPI ISTIRAHAT",
        "NGOPI",
        "ISTIRAHAT",
        "BIKIN KOPI",
        "KE PANTRY"
    ],
    [
        "PANIK",
        "PANIK BANGET",
        "DEG DEGAN",
        "KAGET"
    ],
    [
        "TANYA TEMAN SEBELAH",
        "TANYA TEMAN",
        "NANYA TEMAN",
        "CEK TEMAN",
        "NGOBROL"
    ],
    [
        "RESTART LAPTOP",
        "RESTART",
        "REBOOT",
        "MATIKAN LAPTOP"
    ],
    [
        "MAIN HP",
        "BUKA HP",
        "SCROLL HP",
        "MAIN PONSEL"
    ],
    [
        "MACET",
        "KEMACETAN",
        "MACET TOTAL",
        "JALAN MACET"
    ],
    [
        "BANGUN KESIANGAN",
        "KESIANGAN",
        "TELAT BANGUN",
        "BANGUN TELAT"
    ],
    [
        "HUJAN",
        "HUJAN DERAS",
        "KEHUJANAN",
        "CUACA BURUK"
    ],
    [
        "ANTRE KAMAR MANDI",
        "ANTRI KAMAR MANDI",
        "KAMAR MANDI PENUH",
        "ANTRE MANDI",
        "ANTRI TOILET"
    ],
    [
        "CARI KUNCI BARANG",
        "CARI KUNCI",
        "BARANG HILANG",
        "KUNCI LUPA TARUH"
    ],
    [
        "BAN BOCOR",
        "BOCOR BAN",
        "BAN KEMPES",
        "TAMBAL BAN"
    ],
    [
        "DANDAN LAMA",
        "MAKE UP LAMA",
        "MILIH BAJU",
        "PERSIAPAN LAMA",
        "DANDAN"
    ],
    [
        "SARAPAN",
        "BELI SARAPAN",
        "MAKAN PAGI"
    ],
    [
        "HP HANDPHONE",
        "HANDPHONE",
        "HP",
        "PONSEL",
        "GADGET",
        "GAWAI",
        "SMARTPHONE"
    ],
    [
        "KUNCI",
        "KUNCI RUMAH",
        "KUNCI MOTOR",
        "KUNCI MOBIL"
    ],
    [
        "POWERBANK CHARGER",
        "POWERBANK",
        "CHARGER",
        "CASAN",
        "PB"
    ],
    [
        "TISU",
        "TISSUE",
        "TISU BASAH",
        "SAPU TANGAN"
    ],
    [
        "EARPHONE",
        "TWS",
        "HEADSET",
        "HEADPHONE",
        "AIRPODS"
    ],
    [
        "PAYUNG",
        "JAS HUJAN",
        "PAYUNG LIPAT"
    ],
    [
        "BOTOL MINUM",
        "TUMBLER",
        "AIR MINUM",
        "TEMPAT MINUM"
    ],
    [
        "PARFUM",
        "MINYAK WANGI",
        "PEWANGI",
        "COLOGNE"
    ],
    [
        "NASI GORENG",
        "NASGOR"
    ],
    [
        "BUBUR AYAM",
        "BURAYAM",
        "BUBUR"
    ],
    [
        "NASI UDUK",
        "NASDUK",
        "UDUK"
    ],
    [
        "ROTI",
        "ROTI BAKAR",
        "ROTI TAWAR",
        "SANDWICH"
    ],
    [
        "LONTONG SAYUR",
        "LONSAY",
        "KETUPAT SAYUR"
    ],
    [
        "GORENGAN",
        "BAKWAN",
        "RISOL",
        "TAHU TEMPE GORENG"
    ],
    [
        "MI INSTAN",
        "MIE INSTAN",
        "INDOMIE",
        "MIE REBUS",
        "MIE GORENG"
    ],
    [
        "TELUR",
        "TELOR",
        "TELUR DADAR",
        "TELUR CEPLOK",
        "TELUR REBUS"
    ],
    [
        "CEK HP",
        "LIHAT HP",
        "BUKA HP",
        "MAIN HP DULU",
        "CEK CHAT"
    ],
    [
        "MINUM AIR",
        "MINUM AIR PUTIH",
        "MINUM",
        "NGOPI",
        "NGETEH"
    ],
    [
        "KE KAMAR MANDI",
        "KE TOILET",
        "KENCING",
        "BUANG AIR",
        "WC"
    ],
    [
        "MATIKAN ALARM",
        "MATIIN ALARM",
        "SNOOZE ALARM",
        "ALARM"
    ],
    [
        "NGUMPULIN NYAWA",
        "KUMPULIN NYAWA",
        "DUDUK BENGONG",
        "SADARIN DIRI"
    ],
    [
        "CUCI MUKA",
        "BASUH MUKA",
        "RAUP MUKA"
    ],
    [
        "TARIK SELIMUT LAGI",
        "TIDUR LAGI",
        "TARIK SELIMUT",
        "SAMBUNG TIDUR"
    ],
    [
        "KETIDURAN",
        "TIDUR",
        "KETIDURAN BENERAN",
        "TERTIDUR"
    ],
    [
        "SIBUK KERJA",
        "SIBUK",
        "KERJAAN NUMPUK",
        "BANYAK KERJAAN",
        "LAGI MEETING"
    ],
    [
        "TIDAK ADA SINYAL",
        "SUSAH SINYAL",
        "SINYAL HILANG",
        "NO SIGNAL",
        "KUOTA HABIS"
    ],
    [
        "SUDAH BALAS DI HATI",
        "BALAS DALAM HATI",
        "SUDAH DIKETIK LUPA KIRIM",
        "BALES DI HATI"
    ],
    [
        "BATERAI HABIS",
        "LOWBAT",
        "BATRE HABIS",
        "HP MATI"
    ],
    [
        "TIDAK BUKA HP",
        "LUPA BUKA HP",
        "HP DI TAS",
        "SILENT"
    ],
    [
        "TENGGELAM",
        "KELELEP",
        "CHAT TENGGELAM",
        "TERTIMBUN"
    ],
    [
        "MACET DI JALAN",
        "MACET",
        "JALANAN MACET",
        "MACET PARAH"
    ],
    [
        "LEMBUR KANTOR",
        "LEMBUR",
        "OVERTIME",
        "BANYAK KERJAAN"
    ],
    [
        "NGOPI NONTON BOLA",
        "NONTON BOLA",
        "NOBAR",
        "NONGKRONG"
    ],
    [
        "RAPAT MENDADAK",
        "MEETING MENDADAK",
        "RAPAT SORE"
    ],
    [
        "BATERAI HP HABIS",
        "HP MATI",
        "LOWBAT"
    ],
    [
        "BELI TITIPAN ISTRI",
        "BELI MAKANAN",
        "BELI MARTABAT",
        "BELI MARTABAK",
        "BAWA OLEH OLEH"
    ],
    [
        "TANYA KENAPA",
        "NANYA KENAPA",
        "ADA APA",
        "TANYA SALAHNYA"
    ],
    [
        "BELIKAN MAKANAN",
        "BELI MAKANAN",
        "TRAKTIR MAKAN",
        "GOFOOD",
        "MARTABAK"
    ],
    [
        "TRANSFER UANG",
        "TRANSFER",
        "KASIH UANG",
        "KIRIM SALDO",
        "TF"
    ],
    [
        "IKUT DIAM",
        "DIEM JUGA",
        "SAMA SAMA DIAM",
        "MENENG"
    ],
    [
        "RAYU GOMBAL",
        "MERAYU",
        "GOMBALIN",
        "BUJUK"
    ],
    [
        "CUCI PIRING",
        "BERESIN RUMAH",
        "BANTU KERJAAN RUMAH",
        "NYAPU"
    ],
    [
        "KABUR KELUAR",
        "KABUR",
        "PERGI KELUAR",
        "KELUAR RUMAH"
    ],
    [
        "MAKAN GRATIS TRAKTIRAN",
        "MAKAN GRATIS",
        "TRAKTIRAN",
        "DITRAKTIR",
        "SYUKURAN"
    ],
    [
        "TANGGAL MERAH LIBUR",
        "TANGGAL MERAH",
        "LIBUR",
        "CUTI BERSAMA",
        "LONG WEEKEND"
    ],
    [
        "PULANG CEPAT",
        "BALIK CEPAT",
        "PULANG AWAL",
        "BUBAR CEPAT"
    ],
    [
        "BONUS THR",
        "BONUS",
        "THR",
        "INSENTIF",
        "TUNJANGAN"
    ],
    [
        "BOS TIDAK MASUK",
        "BOS CUTI",
        "ATASAN TIDAK MASUK",
        "BOS DINAS"
    ],
    [
        "WFH",
        "WORK FROM HOME",
        "KERJA DARI RUMAH",
        "HYBRID"
    ],
    [
        "RAPAT DIBATALKAN",
        "MEETING BATAL",
        "MEETING CANCEL",
        "TIDAK JADI RAPAT"
    ],
    [
        "KOPI GRATIS",
        "KOPI GRATISAN",
        "MINUMAN GRATIS"
    ],
    [
        "MAIN HP SCROLL SOSMED",
        "SCROLL SOSMED",
        "MAIN HP DI RAPAT",
        "BUKA SOSMED"
    ],
    [
        "NGANTUK MENGUAP",
        "MENGUAP",
        "HOAM",
        "MENGANTUK BERAT"
    ],
    [
        "CORAT CORET BUKU",
        "CORAT CORET",
        "GAMBAR GAMBAR",
        "DOODLE"
    ],
    [
        "MENGHAYAL",
        "KHAYAL",
        "MELAMUN DI RAPAT",
        "BENGONG"
    ],
    [
        "PURA PURA CATAT",
        "AKTING NYATAT",
        "PURA PURA NGETIK"
    ],
    [
        "NYEMIL MINUM KOPI",
        "NYEMIL",
        "NGEMIL",
        "MINUM KOPI"
    ],
    [
        "MATIKAN KAMERA",
        "OFF CAM",
        "MATIIN KAMERA",
        "CAMERA OFF"
    ],
    [
        "IZIN KE TOILET",
        "KE TOILET",
        "IZIN TOILET",
        "KE WC"
    ],
    [
        "JOGET DANCE",
        "JOGET",
        "DANCE",
        "CHALLENGE DANCE"
    ],
    [
        "KULINER MUKBANG",
        "KULINER",
        "MUKBANG",
        "MAKAN MAKAN",
        "FOOD VLOG"
    ],
    [
        "KOMEDI PRANK",
        "KOMEDI",
        "LUCU",
        "PRANK",
        "SKETSA"
    ],
    [
        "REVIEW BARANG",
        "REVIEW PRODUK",
        "RACUN SHOPEE",
        "UNBOXING"
    ],
    [
        "DRAMA CURHAT",
        "DRAMA",
        "CURHAT SOSMED",
        "SPILL TEA"
    ],
    [
        "KUCING LUCU",
        "KUCING",
        "ANABUL",
        "HEWAN LUCU",
        "KUCING OYEN"
    ],
    [
        "TIPS TUTORIAL",
        "TUTORIAL",
        "TIPS",
        "LIFE HACK",
        "EDUKASI"
    ],
    [
        "PODCAST",
        "PODKES",
        "OBROLAN PODCAST",
        "KLIP WAWANCARA"
    ],
    [
        "FOTO VIDEO DULU",
        "FOTO MAKANAN",
        "VIDEO DULU",
        "CEKREK"
    ],
    [
        "UPLOAD STORY",
        "POST STORY",
        "IG STORY",
        "UPDATE STATUS"
    ],
    [
        "CARI ANGLE BAGUS",
        "ATUR ANGLE",
        "CARI PENCAHAYAAN",
        "AESTHETIC"
    ],
    [
        "CUCI TANGAN",
        "HAND SANITIZER",
        "CUCI TANGAN DULU"
    ],
    [
        "COBAIN KUAHNYA",
        "ICIP RASA",
        "COBAIN RASA",
        "TES RASA"
    ],
    [
        "TAG TEMAN",
        "MENTION TEMAN",
        "TAG PACAR"
    ],
    [
        "MINTA SENDOK",
        "MINTA GARPU",
        "MINTA SAMBAL",
        "MINTA TISU"
    ],
    [
        "OVERTHINKING GALAU",
        "OVERTHINKING",
        "GALAU",
        "OVT"
    ],
    [
        "HEALING",
        "BUTUH HEALING",
        "REFRESHING JIWA"
    ],
    [
        "FOMO",
        "TAKUT KETINGGALAN TREN"
    ],
    [
        "RED FLAG GREEN FLAG",
        "RED FLAG",
        "GREEN FLAG"
    ],
    [
        "SLAY",
        "KEREN BANGET",
        "MEMUKAU"
    ],
    [
        "BESTIE",
        "SAHABAT",
        "SOHIB",
        "TEMAN DEKAT"
    ],
    [
        "VIBE",
        "VIBES",
        "AURA",
        "SUASANA"
    ],
    [
        "GHOSTING",
        "NGILANG TANPA KABAR",
        "DI GHOSTING"
    ],
    [
        "ES KOPI SUSU",
        "KOPI SUSU",
        "ES KOPI",
        "KOPI GULA AREN",
        "KOPI KENANGAN"
    ],
    [
        "TWS EARPHONE",
        "EARPHONE WIRELESS",
        "AIRPODS"
    ],
    [
        "TUMBLER",
        "BOTOL TUMBLER",
        "TEMPAT AIR"
    ],
    [
        "LAPTOP IPAD",
        "LAPTOP",
        "IPAD",
        "NOTEBOOK",
        "MACBOOK"
    ],
    [
        "CHARGER POWERBANK",
        "ADAPTOR CHARGER"
    ],
    [
        "LIP BALM SKINCARE",
        "LIP BALM",
        "SKINCARE",
        "SUNSCREEN",
        "LIPSTICK"
    ],
    [
        "STIKER LUCU",
        "STIKER",
        "TEMPELAN LUCU"
    ],
    [
        "KIPAS MINI",
        "KIPAS PORTABLE",
        "KIPAS ANGIN MINI"
    ],
    [
        "SAKIT PINGGUNG ENCOK",
        "SAKIT PINGGUNG",
        "ENCOK",
        "PEGEL LINU",
        "JOMPO"
    ],
    [
        "CICILAN KPR",
        "CICILAN",
        "KPR",
        "TAGIHAN BULANAN"
    ],
    [
        "CAPEK KERJA",
        "LELAH KERJA",
        "BURNOUT",
        "CAPEK BANGET"
    ],
    [
        "HARGA RUMAH MAHAL",
        "RUMAH MAHAL",
        "SUSAH BELI RUMAH"
    ],
    [
        "SUSAH TIDUR",
        "INSOMNIA",
        "TIDAK BISA TIDUR",
        "BEGADANG"
    ],
    [
        "RAMBUT RONTOK UBAN",
        "RAMBUT RONTOK",
        "UBAN",
        "BOTAK"
    ],
    [
        "KURANG LIBURAN",
        "KURANG PIKNIK",
        "BUTUH CUTI"
    ],
    [
        "ASAM LAMBUNG",
        "MAAG",
        "GERD",
        "PERUT PERIH"
    ],
    [
        "KIRIM STIKER SELAMAT PAGI",
        "STIKER SELAMAT PAGI",
        "GAMBAR SELAMAT PAGI",
        "UCAPAN PAGI"
    ],
    [
        "FORWARD BROADCAST HOAX",
        "FORWARD HOAX",
        "BROADCAST",
        "PESAN BERANTAI",
        "BERITA HOAX"
    ],
    [
        "NGETIK HURUF KAPITAL",
        "HURUF KAPITAL",
        "CAPS LOCK",
        "HURUF BESAR"
    ],
    [
        "KIRIM FOTO BUNGA KOPI",
        "FOTO BUNGA",
        "FOTO KOPI"
    ],
    [
        "TYPO SALAH KIRIM",
        "TYPO",
        "SALAH KETIK",
        "SALAH KIRIM"
    ],
    [
        "VOICE NOTE PANJANG",
        "VOICE NOTE",
        "VN PANJANG",
        "PESAN SUARA"
    ],
    [
        "BALAS JEMPOL",
        "EMOJI JEMPOL",
        "STIKER JEMPOL",
        "JEMPOL"
    ],
    [
        "KIRIM VIDEO CERAMAH",
        "VIDEO CERAMAH",
        "CERAMAH",
        "PENGAJIAN"
    ],
    [
        "TENAGA",
        "ENERGI",
        "OTOT",
        "DAYA",
        "KEKUATAN",
        "STAMINA"
    ],
    [
        "MULUT",
        "BIBIR",
        "RONGGA MULUT"
    ],
    [
        "GIGI",
        "NGUNYAH",
        "MENGUNYAH",
        "GERAHAM"
    ],
    [
        "UANG",
        "DUIT",
        "CUAN",
        "RUPIAH",
        "DANA",
        "BAYAR"
    ],
    [
        "LAPAR",
        "PERUT LAPAR",
        "LAPER",
        "KERONCONGAN"
    ],
    [
        "PIRING",
        "DAUN PISANG",
        "BUNGKUS",
        "KERTAS NASI"
    ],
    [
        "KURSI",
        "BANGKU",
        "TEMPAT DUDUK"
    ],
    [
        "DOA",
        "BERDOA",
        "DOA MAKAN",
        "BISMILLAH",
        "BACA DOA"
    ],
    [
        "KASUR",
        "TEMPAT TIDUR",
        "RANJANG",
        "SPRINGBED",
        "KAMAR TIDUR"
    ],
    [
        "OBAT",
        "PEREDA NYERI",
        "OBAT SAKIT GIGI",
        "PONSTAN",
        "PARASETAMOL",
        "ANTIBIOTIK"
    ],
    [
        "AIR GARAM",
        "KUMUR AIR GARAM",
        "GARAM"
    ],
    [
        "BANTAL",
        "GULING",
        "BANTAL GULING"
    ],
    [
        "KACA CERMIN",
        "CERMIN",
        "KACA",
        "NGACA"
    ],
    [
        "IGD RUMAH SAKIT",
        "IGD",
        "UGD",
        "RUMAH SAKIT",
        "UNIT GAWAT DARURAT"
    ],
    [
        "HP",
        "HANDPHONE",
        "PONSEL",
        "SMARTPHONE",
        "GADGET"
    ],
    [
        "GANTIAN",
        "BERGANTIAN",
        "GILIRAN",
        "BERANTAI"
    ],
    [
        "SATU PER SATU",
        "SATU SATU",
        "BERURUTAN",
        "BERGILIR"
    ],
    [
        "ANTRE",
        "ANTRI",
        "MENUNGGU GILIRAN",
        "ANTRIAN",
        "NUNGGU"
    ],
    [
        "GUNTING",
        "GUNTING RAMBUT",
        "ALAT POTONG"
    ],
    [
        "MESIN CUKUR",
        "CLIPPER",
        "SHAVER",
        "TRIMMER",
        "ALAT CUKUR LISTRIK"
    ],
    [
        "SISIR",
        "SISIR RAMBUT"
    ],
    [
        "PELAN PELAN",
        "HATI HATI",
        "PERLAHAN"
    ],
    [
        "SABAR",
        "TENANG",
        "BERSABAR"
    ],
    [
        "DARI MAGHRIB",
        "MAGHRIB",
        "MAGRIB",
        "WAKTU MAGHRIB",
        "SEHABIS ASHAR"
    ],
    [
        "DARI LANGIT",
        "LANGIT",
        "AWAN",
        "ATMOSFER"
    ],
    [
        "DARI ATAS",
        "ATAS",
        "ATAS KE BAWAH",
        "GRAVITASI"
    ],
    [
        "MUSIM HUJAN",
        "PENGHUJAN",
        "MUSIM PENGHUJAN"
    ],
    [
        "SORE HARI",
        "SORE",
        "PETANG"
    ],
    [
        "GERIMIS",
        "RINTIK RINTIK",
        "HUJAN RINTIK"
    ],
    [
        "MALAM HARI",
        "MALAM",
        "WAKTU MALAM"
    ],
    [
        "DITILANG",
        "TILANG",
        "KENA TILANG",
        "RAZIA",
        "POLISI"
    ],
    [
        "VIRAL",
        "DIREKAM",
        "MASUK SOSMED",
        "FYP",
        "RAME"
    ],
    [
        "DISURUH KELUAR",
        "PUTAR BALIK",
        "DIUSIR",
        "BALIK KANAN",
        "KELUAR TOL"
    ],
    [
        "DIDEREK",
        "DEREK",
        "DIANGKUT",
        "EVAKUASI"
    ],
    [
        "DIDORONG PETUGAS",
        "DORONG",
        "PETUGAS TOL",
        "BANTU PETUGAS"
    ],
    [
        "DENDA",
        "BAYAR DENDA",
        "SANKSI DENDA"
    ],
    [
        "TIDUR",
        "BOBOK",
        "TERLELAP",
        "NGOROK",
        "TIDUR DULU"
    ],
    [
        "MEREM",
        "PEJAMKAN MATA",
        "TUTUP MATA",
        "MEMEJAMKAN MATA"
    ],
    [
        "BARING",
        "BERBARING",
        "REBAHAN",
        "TIDURAN"
    ],
    [
        "MATIKAN LAMPU",
        "LAMPU MATI",
        "GELAP",
        "SAKLAR LAMPU"
    ],
    [
        "NGANTUK",
        "MENGANTUK",
        "KANTUK"
    ],
    [
        "PASANG ALARM",
        "ALARM",
        "SET ALARM"
    ],
    [
        "ORANG SEHAT",
        "SEHAT",
        "TIDAK SAKIT",
        "BUGAR",
        "WARAS"
    ],
    [
        "TIDAK PUNYA UANG",
        "NGGAK PUNYA DUIT",
        "MISKIN",
        "TAK ADA BIAYA",
        "BPJS MATI"
    ],
    [
        "SUDAH MENINGGAL",
        "MENINGGAL",
        "MATI",
        "JENAZAH",
        "MAYAT"
    ],
    [
        "TIDAK SETUJU",
        "MENOLAK",
        "TOLAK",
        "TIDAK IZIN",
        "NOLAK"
    ],
    [
        "KELUARGA SENDIRI",
        "ANAK SENDIRI",
        "ISTRI SENDIRI",
        "SAUDARA SENDIRI",
        "KERABAT"
    ],
    [
        "KABUR",
        "LARI",
        "MELARIKAN DIRI"
    ],
    [
        "SALAH KAMAR",
        "SALAH PASIEN",
        "KAMAR LAIN",
        "SALAH RUANG"
    ],
    [
        "INGIN MENANG",
        "MENANG",
        "JUARA",
        "CHAMPION",
        "RAIH JUARA"
    ],
    [
        "BOLANYA CUMA SATU",
        "BOLA SATU",
        "CUMA SATU BOLA",
        "BOLA TUNGGAL",
        "SATU BOLA"
    ],
    [
        "ATURAN MAIN",
        "ATURAN",
        "PERATURAN",
        "WASIT",
        "REGULASI"
    ],
    [
        "CETAK POIN",
        "GOL",
        "SKOR",
        "CETAK GOL",
        "MASUKIN BOLA"
    ],
    [
        "TAKUT KALAH",
        "KALAH",
        "DIOMELIN PELATIH",
        "MALU KALAH"
    ],
    [
        "DIBAYAR",
        "GAJI",
        "GAJI ATLET",
        "KONTRAK",
        "BONUS KLUB"
    ],
    [
        "KURANG MODAL BELI BOLA",
        "KURANG MODAL",
        "NGGAK MAMPU BELI BOLA",
        "IRIT"
    ],
    [
        "PAMIT",
        "MINTA IZIN PULANG",
        "PAMITAN",
        "IZIN PULANG"
    ],
    [
        "LAPOR RT",
        "LAPOR PAK RT",
        "LAPOR RW",
        "WAJIB LAPOR"
    ],
    [
        "BANTU PEKERJAAN RUMAH",
        "CUCI PIRING TAMU",
        "BERSIH BERSIH",
        "BANTU TUAN RUMAH"
    ],
    [
        "BAWA MAKANAN",
        "OLEH OLEH",
        "BUAH TANGAN",
        "TRAKTIR TUAN RUMAH"
    ],
    [
        "JANGAN MEREPOTKAN",
        "TAHU DIRI",
        "SADAR DIRI",
        "NGGAK REPOTIN"
    ],
    [
        "BERTERIMA KASIH",
        "TERIMA KASIH",
        "MAKASIH",
        "UCAP SYUKUR"
    ],
    [
        "PINDAH HOTEL",
        "HOTEL",
        "PENGINAPAN",
        "KOST HARIAN"
    ],
    [
        "NASI PADANG",
        "PADANG",
        "MASAKAN PADANG",
        "RENDANG"
    ],
    [
        "PULANG",
        "MASAK SENDIRI",
        "BALIK KE RUMAH"
    ],
    [
        "BAKSO",
        "MIE BAKSO",
        "BAKSO URAT"
    ],
    [
        "AYAM GEPREK",
        "GEPREK",
        "AYAM PENYET"
    ],
    [
        "MIE AYAM",
        "MI AYAM",
        "BAKMI"
    ],
    [
        "PECEL LELE",
        "LAMONGAN",
        "WARUNG TENDA",
        "LELE GORENG"
    ],
    [
        "SATE",
        "SATE AYAM",
        "SATE KAMBING",
        "SATE MADURA"
    ],
    [
        "TIDAK JADI MAKAN",
        "GA JADI MAKAN",
        "NGGAK JADI MAKAN",
        "BATAL MAKAN",
        "RIBUT"
    ],
    [
        "BERHENTI MENCARI",
        "BERHENTI CARI",
        "STOP CARI",
        "MENYERAH",
        "SUDAH TIDAK DICARI"
    ],
    [
        "BELI BARU",
        "SUDAH BELI",
        "BELI LAGI",
        "TOKO"
    ],
    [
        "PASRAH",
        "IKHLAS",
        "SUDAH PASRAH"
    ],
    [
        "TANYA IBU",
        "TANYA ISTRI",
        "TANYA MAMA",
        "TANYA EMAK",
        "MINTA CARIIN"
    ],
    [
        "SUDAH TELAT",
        "TELAT",
        "ACARA SELESAI",
        "SUDAH TERLANJUR"
    ],
    [
        "BERESKAN KAMAR",
        "BERESIN KAMAR",
        "RAPIKAN MEJA"
    ],
    [
        "TIDAK BUTUH LAGI",
        "NGGAK BUTUH",
        "GAK BUTUH",
        "TAK PERLU LAGI"
    ],
    [
        "JADI NOMOR DUA",
        "NOMOR DUA",
        "POSISI DUA",
        "POSISI 2",
        "KE 2",
        "NO 2",
        "URUTAN 2"
    ],
    [
        "MASIH ADA JUARA SATU",
        "JUARA SATU",
        "POSISI SATU",
        "MASIH ADA DI DEPAN"
    ],
    [
        "DISALIP JADI NOMOR TIGA",
        "NOMOR TIGA",
        "POSISI 3",
        "JADI KETIGA"
    ],
    [
        "BELUM MENANG",
        "BELUM JUARA",
        "TIDAK MENANG"
    ],
    [
        "HARUS KEJAR LAGI",
        "KEJAR NOMOR SATU",
        "LARI LEBIH CEPAT"
    ],
    [
        "CAPEK",
        "LELAH",
        "LETIH",
        "PENAT",
        "NGOS NGOSAN"
    ],
    [
        "BERDIRI",
        "TEGAK",
        "BERDIRI TEGAK"
    ],
    [
        "MASUK KARUNG",
        "MASUKIN KAKI",
        "PAKAI KARUNG"
    ],
    [
        "PEGANG KARUNG",
        "PEGANG UJUNG KARUNG",
        "TAHAN KARUNG"
    ],
    [
        "DENGAR PELUIT",
        "ABA ABA",
        "TUNGGU PELUIT",
        "DENGERIN ABA ABA"
    ],
    [
        "SIAP LOMPAT",
        "LOMPAT",
        "KUDA KUDA"
    ],
    [
        "LEPAS SANDAL",
        "COPOT SANDAL",
        "LEPAS SEPATU",
        "NYEKER"
    ],
    [
        "BERATNYA SAMA",
        "SAMA BERAT",
        "10 KG SAMA",
        "MASSANYA SAMA",
        "SAMA"
    ],
    [
        "BESI LEBIH SAKIT",
        "SAKIT BESI",
        "BESI KERAS",
        "LEBIH KERAS",
        "MEMAR"
    ],
    [
        "KAPAS LEBIH EMPUK",
        "EMPUK",
        "KAPAS LEMBUT",
        "TIDAK SAKIT"
    ],
    [
        "UKURAN KAPAS BESAR",
        "VOLUME KAPAS BESAR",
        "KARUNG BESAR",
        "LEBIH BESAR"
    ],
    [
        "BESI JATUH CEPAT",
        "JATUH CEPAT",
        "HAMBATAN UDARA"
    ],
    [
        "MENGHINDAR",
        "TARIK KAKI",
        "MINGGIR",
        "GHINDAR"
    ],
    [
        "ILMU",
        "PENGETAHUAN",
        "ILMU PENGETAHUAN",
        "KEAHLIAN"
    ],
    [
        "SEDEKAH",
        "AMAL",
        "INFAQ",
        "BERBAGI",
        "ZAKAT"
    ],
    [
        "SENYUM",
        "SENYUMAN",
        "RAMAH"
    ],
    [
        "PENGALAMAN",
        "JAM TERBANG",
        "WAWASAN"
    ],
    [
        "TEMAN",
        "RELASI",
        "SAHABAT",
        "KAWAN",
        "KENALAN"
    ],
    [
        "KEBAHAGIAAN",
        "BAHAGIA",
        "SUKACITA"
    ],
    [
        "UTANG",
        "HUTANG",
        "CICILAN",
        "PAYLATER",
        "TAGIHAN"
    ],
    [
        "HARI ESOK",
        "BESOK",
        "BESOK HARI",
        "ESOK"
    ],
    [
        "DIET",
        "MULAI DIET",
        "DIET BESOK",
        "OLAHRAGA BESOK"
    ],
    [
        "GAJIAN",
        "TANGGAL GAJIAN",
        "HARI GAJIAN"
    ],
    [
        "MASA DEPAN",
        "HARI DEPAN",
        "MASA NANTI"
    ],
    [
        "JANJI MANIS",
        "JANJI",
        "PHP",
        "HARAPAN PALSU"
    ],
    [
        "LIBUR PANJANG",
        "CUTI PANJANG",
        "LIBURAN BESAR"
    ],
    [
        "TOBAT MALAS",
        "MULAI RAJIN",
        "PERUBAHAN DIRI"
    ],
    [
        "SEMUA BULAN",
        "SEMUA",
        "TIAP BULAN",
        "BULAN APA SAJA",
        "SELURUH BULAN"
    ],
    [
        "FEBRUARI",
        "PEBRUARI",
        "BULAN DUA",
        "BULAN 2"
    ],
    [
        "JANUARI",
        "BULAN SATU",
        "BULAN PERTAMA"
    ],
    [
        "DESEMBER",
        "BULAN KEDUABELAS",
        "BULAN 12"
    ],
    [
        "DUA BELAS BULAN",
        "12 BULAN",
        "SETAHUN PENUH"
    ],
    [
        "SETIAP BULAN",
        "TIAP TIAP BULAN"
    ],
    [
        "JARUM",
        "JARUM JAHIT",
        "MATA JARUM"
    ],
    [
        "MEJA KURSI",
        "MEJA",
        "KURSI KAYU",
        "KAKI MEJA"
    ],
    [
        "BOTOL",
        "LEHER BOTOL",
        "BOTOL KACA"
    ],
    [
        "GERGAJI",
        "GIGI GERGAJI"
    ],
    [
        "KUPING PANCI",
        "PANCI",
        "GAGANG PANCI",
        "TELINGA PANCI"
    ],
    [
        "DAUN PINTU",
        "PINTU",
        "DAUN JENDELA"
    ],
    [
        "RESLETING",
        "RITSLETING",
        "ZIPPER",
        "GIGI RESLETING"
    ],
    [
        "CEK METERAN LISTRIK",
        "CEK MCB",
        "SEKRING",
        "TOKEN LISTRIK",
        "METERAN"
    ],
    [
        "INTIP TETANGGA",
        "LIHAT TETANGGA",
        "NGINTIP TETANGGA",
        "CEK TETANGGA"
    ],
    [
        "TERIAK MATI LAMPU",
        "MATI LAMPU",
        "MATI LISTRIK",
        "TERIAK"
    ],
    [
        "NYALAKAN SENTER",
        "SENTER",
        "FLASHLIGHT",
        "SENTER HP",
        "LAMPU HP"
    ],
    [
        "CARI LILIN",
        "LILIN",
        "LAMPU EMERGENCY",
        "KOREK API"
    ],
    [
        "CEK WIFI",
        "WIFI MATI",
        "PAKET DATA",
        "CEK KUOTA"
    ],
    [
        "SYARAT DAN KETENTUAN",
        "SYARAT KETENTUAN",
        "TERMS",
        "TNC",
        "TOS",
        "TERMS AND CONDITIONS"
    ],
    [
        "BUKU PANDUAN",
        "MANUAL BOOK",
        "BUKU MANUAL",
        "PETUNJUK PEMAKAIAN"
    ],
    [
        "ATURAN GARANSI",
        "KARTU GARANSI",
        "GARANSI"
    ],
    [
        "KEBIJAKAN PRIVASI",
        "PRIVACY POLICY",
        "COOKIE"
    ],
    [
        "DILARANG PARKIR",
        "RAMBU DILARANG PARKIR",
        "PARKIR SEMBARANGAN"
    ],
    [
        "ATURAN KOMPLEK",
        "PAPAN ATURAN",
        "TATA TERTIB"
    ],
    [
        "KEMASAN OBAT",
        "BROSUR OBAT",
        "ATURAN MINUM OBAT"
    ],
    [
        "SUDAH KAYA",
        "ORANG KAYA",
        "KAYA RAYA",
        "KAYA",
        "BANYAK DUIT"
    ],
    [
        "PURA PURA BIJAK",
        "PENCITRAAN",
        "BIJAK PALSU"
    ],
    [
        "MASIH NGANTUK",
        "NGANTUK BERAT",
        "SALAH DENGER"
    ],
    [
        "LAGI BANYAK MASALAH",
        "KESPIAN",
        "KESEPIAN",
        "BUTUH TEMAN"
    ],
    [
        "GURU MOTIVASI",
        "MOTIVATOR",
        "KATA MUTIARA"
    ],
    [
        "BARU GAJIAN",
        "TANGGAL MUDA",
        "MASIH ADA UANG"
    ],
    [
        "TAKUT DIHUJAT",
        "TAKUT DICAP MATRE",
        "JAGA IMAGE",
        "JAIM"
    ],
    [
        "JALAN CEPAT BAWA KERTAS",
        "JALAN CEPAT",
        "BAWA MAP",
        "BAWA KERTAS",
        "TERBURU BURU"
    ],
    [
        "DAHI BERKERUT",
        "MUKA SERIUS",
        "ALIS BERKERUT",
        "CEMBERUT SERIUS"
    ],
    [
        "BUKA BANYAK TAB",
        "BANYAK TAB",
        "ALT TAB",
        "LAYAR PENUH TAB"
    ],
    [
        "PAKAI EARPHONE",
        "PAKAI HEADSET",
        "EARPHONE KANTOR"
    ],
    [
        "NGETIK CEPAT",
        "MENGETIK CEPAT",
        "SUARA KEYBOARD"
    ],
    [
        "TELPONAN MONDAR MANDIR",
        "TELPONAN",
        "MONDAR MANDIR"
    ],
    [
        "MINUM KOPI SERIUS",
        "NGOPI SERIUS",
        "TAMPANG LELAH"
    ],
    [
        "MEJA BERANTAKAN",
        "MEJA PENUH",
        "TUMPUKAN BERKAS"
    ],
    [
        "PARKIR GRATIS",
        "BEBAS PARKIR",
        "TUKANG PARKIR",
        "BAYAR PARKIR"
    ],
    [
        "CUMA LIHAT LIHAT",
        "WINDOW SHOPPING",
        "CUCI MATA"
    ],
    [
        "ONGKIR MINIMAL BELANJA",
        "GRATIS ONGKIR",
        "MINIMAL BELANJA",
        "ONGKIR"
    ],
    [
        "KONDANGAN",
        "UNDANGAN NIKAH",
        "AMPLOP KONDANGAN"
    ],
    [
        "COBA GRATIS",
        "SAMPLE GRATIS",
        "CICIP GRATIS"
    ],
    [
        "TRIAL APLIKASI",
        "FREE TRIAL",
        "LANGGANAN OTOMATIS"
    ],
    [
        "DISKON BESAR",
        "DISKON",
        "PROMO BESAR",
        "SALE"
    ],
    [
        "LAGI BERPIKIR KERAS",
        "BERPIKIR",
        "MIKIR",
        "KONSENTRASI",
        "RENUNG",
        "MERENUNG",
        "VISUALISASI"
    ],
    [
        "MATA PEDIH",
        "KELILIPAN",
        "MATA KERING",
        "PERIH"
    ],
    [
        "LAGI BERDOA",
        "DOA DI MEJA",
        "KHUSYUK"
    ],
    [
        "PUSING",
        "SAKIT KEPALA",
        "MIGRAIN",
        "PUSING KEPALA"
    ],
    [
        "TUNGGU LOADING",
        "LOADING LAMA",
        "NUNGGU PROSES",
        "KOMPUTER LEMOT"
    ],
    [
        "ISTIRAHAT MATA",
        "REHAT MATA",
        "ISTIRAHATKAN MATA"
    ],
    [
        "MENGHAFAL DATA",
        "MENGHAFAL",
        "LATIHAN PRESENTASI"
    ]
];

    const ANSWER_CLUES = {
    "TABLEAU": [
        "Aplikasi BI populer berwarna biru-oranye ikon silang",
        "Tools visualisasi data enterprise milik Salesforce",
        "TABLO / TABLEU"
    ],
    "LOOKER": [
        "Platform BI berbasis cloud dari Google",
        "Dikenal dengan Looker Studio / Google Data Studio",
        "LOOKER STUDIO / DATA STUDIO"
    ],
    "EXCEL": [
        "Aplikasi pengolah angka legendaris di Windows/Mac",
        "Ikon hijau berhuruf X untuk tabel & rumus",
        "MS EXCEL / MICROSOFT EXCEL"
    ],
    "GOOGLESHEET": [
        "Spreadsheet gratis berbasis browser dari Google",
        "Kolaborasi tabel online real-time berwarna hijau",
        "GOOGLE SHEET / GOOGLE SHEETS"
    ],
    "PYTHON": [
        "Bahasa pemrograman berlogo dua ular",
        "Populer untuk Pandas, NumPy, dan Data Science",
        "PITON / PY"
    ],
    "R": [
        "Bahasa pemrograman statistik huruf tunggal",
        "Sering dipakai di RStudio untuk olah statistik",
        "BAHASA R / R STUDIO"
    ],
    "SQL": [
        "Bahasa kueri standar database relasional",
        "Memakai perintah SELECT, FROM, dan WHERE",
        "MYSQL / POSTGRESQL"
    ],
    "APACHE SPARK": [
        "Mesin pemrosesan Big Data super cepat",
        "Populer lewat PySpark untuk klaster terdistribusi",
        "SPARK / PYSPARK"
    ],
    "LINE": [
        "Grafik garis untuk melihat tren dari waktu ke waktu",
        "Menghubungkan titik data berurutan menjadi garis",
        "LINE CHART / GRAFIK GARIS"
    ],
    "PIE": [
        "Grafik lingkaran mirip potongan kue",
        "Menunjukkan proporsi atau persentase bagian dari 100%",
        "PIE CHART / GRAFIK LINGKARAN"
    ],
    "TABLE": [
        "Tampilan baris dan kolom berisi angka mentah",
        "Format matriks paling dasar untuk data detail",
        "TABEL / TABLE CHART"
    ],
    "SCATTER": [
        "Grafik titik-titik tersebar untuk cek korelasi",
        "Memetakan hubungan dua variabel di sumbu X dan Y",
        "SCATTER PLOT / SCATTER CHART"
    ],
    "WATERFALL": [
        "Grafik bertingkat seperti air terjun",
        "Menunjukkan kenaikan dan penurunan kumulatif nilai awal ke akhir",
        "WATERFALL CHART / GRAFIK AIR TERJUN"
    ],
    "HISTOGRAM": [
        "Grafik batang rapat untuk distribusi frekuensi",
        "Mengelompokkan rentang angka (bin) tanpa celah antar batang",
        "HISTOGRAM CHART / DISTRIBUSI FREKUENSI"
    ],
    "MAP": [
        "Visualisasi data berbasis peta geografis",
        "Menampilkan sebaran data per kota, provinsi, atau negara",
        "PETA / MAP CHART"
    ],
    "GANTT": [
        "Grafik batang horizontal untuk jadwal proyek",
        "Menampilkan tanggal mulai, durasi, dan progres tiap tugas",
        "GANTT CHART / TIMELINE PROYEK"
    ],
    "AVERAGE": [
        "Fungsi untuk menghitung nilai rata-rata",
        "Alternatif lebih singkat daripada SUM dibagi COUNT",
        "RATA RATA / AVG"
    ],
    "VLOOKUP": [
        "Rumus pencari data secara vertikal ke bawah",
        "Mencocokkan kunci dari kolom paling kiri tabel",
        "V LOOKUP / XLOOKUP"
    ],
    "HLOOKUP": [
        "Rumus pencari data secara horizontal ke kanan",
        "Kebalikan arah dari VLOOKUP (berdasarkan baris)",
        "H LOOKUP"
    ],
    "IF": [
        "Fungsi logika bercabang jika-maka",
        "Mengembalikan nilai A bila kondisi benar dan B bila salah",
        "FUNGSI IF / RUMUS IF"
    ],
    "MAX": [
        "Fungsi pencari angka paling tinggi dalam rentang",
        "Lawan kata dari MIN untuk nilai terbesar",
        "MAKSIMUM / TERBESAR"
    ],
    "MIN": [
        "Fungsi pencari angka paling rendah dalam rentang",
        "Lawan kata dari MAX untuk nilai terkecil",
        "MINIMUM / TERKECIL"
    ],
    "COUNT": [
        "Fungsi penghitung banyaknya sel berisi angka",
        "Sering dipakai bersama COUNTA atau COUNTIF",
        "COUNTIF / COUNTA"
    ],
    "INDEX": [
        "Fungsi pengambil nilai berdasarkan nomor baris & kolom",
        "Sering dipasangkan dengan fungsi MATCH",
        "INDEX MATCH / INDEKS"
    ],
    "PDF": [
        "Format dokumen portabel berikon merah",
        "Biasa berisi laporan cetak atau e-statement read-only",
        "FILE PDF / DOKUMEN PDF"
    ],
    "CSV": [
        "File teks data dengan pemisah tanda koma",
        "Singkatan dari Comma-Separated Values",
        "FILE CSV / COMMA SEPARATED"
    ],
    "WEB": [
        "Sumber data langsung dari tautan situs internet",
        "Menarik tabel HTML dari halaman URL web",
        "WEBSITE / URL"
    ],
    "FOLDER": [
        "Mengambil banyak file sekaligus dari satu direktori",
        "Menggabungkan file sejenis di satu folder komputer",
        "DIREKTORI / BANYAK FILE"
    ],
    "ORACLE": [
        "Database enterprise korporat berwarna merah",
        "Sistem manajemen basis data relasional skala besar",
        "ORACLE DB / ORACLE DATABASE"
    ],
    "SQL SERVER": [
        "Sistem database relasional buatan Microsoft",
        "Biasa diakses lewat SSMS / T-SQL",
        "MSSQL / SQLSERVER"
    ],
    "SHAREPOINT": [
        "Platform dokumen & intranet tim milik Microsoft 365",
        "Sering terhubung ke OneDrive dan Teams perusahaan",
        "SHARE POINT / ONEDRIVE SHAREPOINT"
    ],
    "SAP": [
        "Sistem ERP bisnis asal Jerman yang dipakai korporasi besar",
        "Mengelola modul keuangan, pengadaan, dan logistik (HANA/BW)",
        "SAP HANA / SAP ERP"
    ],
    "MINTA MAAF": [
        "Ucapan pengakuan salah dan memohon ampun",
        "Kalimat \"Maaf ya Ma/Pa, nggak diulangi lagi\"",
        "MEMINTA MAAF / MOHON MAAF"
    ],
    "MENANGIS": [
        "Air mata menetes deras karena takut dimarahi",
        "Suara sesenggukan saat kepergok salah",
        "NANGIS / MEWEK"
    ],
    "CENGENGESAN": [
        "Tersenyum kecut atau tertawa kikuk menutupi salah",
        "Ekspresi nyengir tanpa rasa berdosa",
        "KETAWA / TERTAWA"
    ],
    "MALU": [
        "Wajah memerah dan menunduk menahan rasa canggung",
        "Tak berani menatap mata orang tua/lawan bicara",
        "MINDER / SUNGKAN"
    ],
    "GUGUP": [
        "Bicara terbata-bata dan jantung berdebar kencang",
        "Reaksi panik dan salah tingkah saat ketahuan",
        "GROGI / NERVOUS"
    ],
    "MENCARI ALASAN": [
        "Mengarang cerita pembelaan agar tidak disalahkan",
        "Berusaha ngeles dan mencari pembenaran",
        "CARI ALASAN / NGELES"
    ],
    "PURA PURA LUPA": [
        "Mengaku tidak ingat sama sekali kejadian itu",
        "Berakting bingung seolah lupa ingatan",
        "LUPA / NGAKU LUPA"
    ],
    "DIAM": [
        "Membisu seribu bahasa tanpa sepatah kata pun",
        "Mengunci mulut agar masalah tidak melebar",
        "DIEM / BUNGKAM"
    ],
    "MELAMUN": [
        "Tatapan kosong memikirkan hal lain",
        "Pikiran melayang jauh entah ke mana",
        "NGELAMUN / LAMUN"
    ],
    "MINTA BANTUAN": [
        "Menghubungi keluarga atau teman untuk dibantu",
        "Tidak sungkan minta tolong mencarikan jalan",
        "MINTA TOLONG / TOLONG"
    ],
    "BERDOA": [
        "Memohon pertolongan dan ketenangan kepada Tuhan",
        "Mengangkat tangan memanjatkan doa terbaik",
        "SHOLAT / SALAT"
    ],
    "MENCARI SOLUSI": [
        "Berpikir rasional mencari jalan keluar terbaik",
        "Menganalisis akar masalah supaya cepat selesai",
        "CARI SOLUSI / SOLUSI"
    ],
    "CURHAT": [
        "Menceritakan isi hati ke sahabat terpercaya",
        "Biar beban hati terasa jauh lebih ringan setelah ngobrol",
        "CERITA / BERCERITA"
    ],
    "MARAH MARAH": [
        "Emosi meledak meluapkan rasa kesal",
        "Nada suara tinggi atau membanting barang",
        "MARAH / NGAMUK"
    ],
    "JALAN JALAN": [
        "Pergi keluar rumah menenangkan pikiran",
        "Mencari udara segar, liburan, atau healing sejenak",
        "LIBURAN / PIKNIK"
    ],
    "BAU": [
        "Masalah aroma tubuh yang mengganggu penciuman",
        "Lupa pakai deodoran atau jarang mandi",
        "BAU BADAN / KETEK"
    ],
    "NYEBELIN": [
        "Sikap atau ucapan yang bikin orang lain kesal",
        "Sering usil, nyinyir, atau cari gara-gara",
        "MENYEBALKAN / SEBEL"
    ],
    "SOMBONG": [
        "Merasa diri paling hebat dan meremehkan orang lain",
        "Suka pamer harta atau jabatan berlebihan",
        "ANGKUH / CONGKAK"
    ],
    "SUKA PINJAM DUIT": [
        "Kebiasaan meminjam uang tapi susah mengembalikan",
        "Teman yang muncul di chat pas akhir bulan saja",
        "PINJAM DUIT / PINJAM UANG"
    ],
    "KASAR": [
        "Perilaku atau ucapan yang menyakiti perasaan/fisik",
        "Tidak punya sopan santun dan suka membentak",
        "GALAK / TIDAK SOPAN"
    ],
    "TIDAK DIPERCAYA": [
        "Sering ingkar janji hingga hilang kepercayaan",
        "Dikenal suka berbohong atau bermuka dua",
        "PEMBOHONG / PENGKHIANAT"
    ],
    "JAHAT": [
        "Niat buruk atau suka mencelakai orang lain",
        "Karakter licik tanpa belas kasihan",
        "KEJAM / LICIK"
    ],
    "EGOIS": [
        "Hanya mementingkan diri sendiri tanpa peduli sekitar",
        "Mau menang sendiri dan pelit berbagi",
        "SERAKAH / PELIT"
    ],
    "ULAR NAGA": [
        "Anak-anak berbaris panjang melewati gerbang tangan",
        "Diakhiri lirik \"ular naga panjangnya bukan kepalang\"",
        "ULAR NAGA PANJANGNYA"
    ],
    "AMPAR AMPAR PISANG": [
        "Lagu daerah Kalimantan Selatan bertema buah kuning",
        "Sering dipakai permainan tepuk atau berbaris anak",
        "AMPAR PISANG"
    ],
    "CUBLEK CUBLEK SUWENG": [
        "Permainan tebak biji/kerikil di tangan asal Jawa",
        "Satu anak tengkurap menebak siapa yang menggenggam suweng",
        "CUBLEK SUWENG"
    ],
    "DOMIKADO": [
        "Permainan tepuk tangan melingkar berirama",
        "Liriknya \"domikado mikado eska eska do...\"",
        "DO MI KA DO / DOMI KADO"
    ],
    "BRUG": [
        "Kata serapan Belanda berarti jembatan penyeberangan",
        "Dipakai dalam nama tempat/bangunan tua seperti Braga/Brug",
        "JEMBATAN"
    ],
    "GORDIJN": [
        "Kata serapan Belanda untuk kain penutup jendela",
        "Dalam ejaan Indonesia ditulis gorden",
        "GORDEN / HORDENG"
    ],
    "HANDDOEK": [
        "Kata serapan Belanda untuk kain pengering badan",
        "Dalam ejaan Indonesia menjadi handuk",
        "HANDUK"
    ],
    "SPOOR": [
        "Kata serapan Belanda untuk rel atau kereta api",
        "Sering diucapkan sepur di Jawa",
        "SEPUR / KERETA"
    ],
    "GRATIS": [
        "Kata serapan Belanda berarti tidak perlu membayar",
        "Sama artinya dengan cuma-cuma atau free",
        "FREE / CUMA CUMA"
    ],
    "BUGENVIL": [
        "Bunga kertas berwarna ungu/merah muda cerah",
        "Tumbuh rimbun di pagar dan nama jalan perumahan",
        "BOUGENVILLE / BOUGENVIL"
    ],
    "KAMBOJA": [
        "Bunga harum putih-kuning identik dengan Bali/taman",
        "Sering menjadi nama jalan di kawasan permukiman",
        "CAMBOJA / PLUMERIA"
    ],
    "KENANGA": [
        "Bunga harum berwarna kuning kehijauan untuk wewangian",
        "Juga nama kawasan/jalan populer di kota Indonesia",
        "BUNGA KENANGA"
    ],
    "LILY": [
        "Bunga elegan berbentuk corong putih atau oranye",
        "Sering dipakai di klaster perumahan bernuansa bunga",
        "LILI / BUNGA LILY"
    ],
    "ANGGREK": [
        "Bunga hias eksotis yang populer dikoleksi (Orchid)",
        "Banyak menjadi nama jalan utama di kompleks & kota",
        "ORCHID / BUNGA ANGGREK"
    ],
    "MAWAR": [
        "Bunga berduri simbol kasih sayang",
        "Paling klasik dan umum dipakai sebagai nama jalan",
        "ROSE / BUNGA MAWAR"
    ],
    "AZALEA": [
        "Bunga semak berwarna merah muda cerah",
        "Kerap digunakan sebagai nama jalan klaster perumahan modern",
        "BUNGA AZALEA"
    ],
    "MEMBELI PROPERTY": [
        "Membeli aset tanah, rumah, ruko, atau apartemen",
        "Investasi jangka panjang berbentuk bangunan atau lahan",
        "BELI PROPERTY / PROPERTI"
    ],
    "MEMBELI EMAS": [
        "Membeli logam mulia batangan atau perhiasan",
        "Investasi anti-inflasi berwarna kuning berkilau",
        "BELI EMAS / EMAS"
    ],
    "MEMBELI KENDARAAN": [
        "Membeli mobil atau motor baru",
        "Upgrade alat transportasi di garasi rumah",
        "BELI KENDARAAN / MOBIL"
    ],
    "BERLIBUR": [
        "Jalan-jalan ke luar kota atau luar negeri",
        "Staycation, keliling dunia, atau liburan keluarga",
        "LIBURAN MEWAH / KE LUAR NEGERI"
    ],
    "MENABUNG": [
        "Menyimpan dan mengendapkan dana di rekening/deposito",
        "Berinvestasi agar uang berkembang aman",
        "NABUNG / TABUNGAN"
    ],
    "EXCEL XLSX": [
        "File spreadsheet Microsoft Excel modern",
        "Ekstensi 4 huruf berakhiran huruf X",
        "EXCEL / XLSX / XLSX"
    ],
    "JSON": [
        "Format pertukaran data ringan berpasangan key-value",
        "Memakai kurung kurawal { } dari JavaScript",
        "FILE JSON / JAVASCRIPT OBJECT NOTATION"
    ],
    "XML": [
        "Format data bertag buka-tutup mirip HTML",
        "Singkatan dari Extensible Markup Language",
        "FILE XML / MARKUP XML"
    ],
    "PARQUET": [
        "Format penyimpanan data kolumnar untuk Big Data",
        "Populer di Spark, Snowflake, dan Data Lake karena terkompresi",
        "FILE PARQUET / APACHE PARQUET"
    ],
    "TXT": [
        "Format file teks polos tanpa pemformatan",
        "Biasa dibuka dengan aplikasi Notepad",
        "TEXT / PLAIN TEXT"
    ],
    "PROSES MANUAL": [
        "Data masih diketik, disalin, atau diolah tangan satu-satu",
        "Belum terotomasi sehingga memakan waktu lama",
        "MANUAL / INPUT MANUAL"
    ],
    "FORMAT BERBEDA": [
        "Susunan kolom atau template tiap cabang tidak seragam",
        "Harus merapikan dan menyeragamkan header dulu",
        "BEDA FORMAT / TIDAK SERAGAM"
    ],
    "REVISI DATA": [
        "Angka sering berubah dan diperbaiki berkali-kali",
        "Harus cek ulang karena ada temuan ketidaksesuaian",
        "REVISI / PERBAIKAN DATA"
    ],
    "KONEKSI INTERNET": [
        "Jaringan Wi-Fi atau sinyal lemot / terputus",
        "Gagal upload karena bandwidth kantor bermasalah",
        "INTERNET LEMOT / JARINGAN ERROR"
    ],
    "LUPA": [
        "Faktor kelalaian manusia terlewat mengirim laporan",
        "Baru ingat setelah ditagih lewat chat atasan",
        "KELUPAAN / TERLEWAT"
    ],
    "SISTEM ERROR": [
        "Aplikasi pelaporan atau portal mengalami gangguan",
        "Server error, bug, atau website tidak bisa diakses",
        "ERROR / BUG"
    ],
    "MENUNGGU APPROVAL": [
        "Dokumen tertahan di meja tanda tangan atasan",
        "Sudah siap kirim tapi belum disetujui manajer",
        "APPROVAL / TUNGGU ACC"
    ],
    "FILE TERLALU BESAR": [
        "Ukuran lampiran melebihi batas kirim email/sistem",
        "Isinya ribuan baris atau gambar resolusi tinggi",
        "FILE BESAR / UKURAN BESAR"
    ],
    "LENGKAP COMPLETENESS": [
        "Seluruh kolom wajib terisi tanpa ada baris kosong/null",
        "Tidak ada data wajib yang terpotong atau hilang",
        "LENGKAP / COMPLETENESS / LENGKAP"
    ],
    "AKURAT ACCURACY": [
        "Nilai data benar sesuai fakta di lapangan",
        "Bebas dari salah ketik atau angka ngawur",
        "AKURAT / ACCURACY / AKURAT"
    ],
    "KONSISTEN CONSISTENCY": [
        "Format dan nilai sama di seluruh sistem/laporan",
        "Tanggal atau kode tidak berubah-ubah antar tabel",
        "KONSISTEN / CONSISTENCY / KONSISTEN"
    ],
    "TEPAT WAKTU TIMELINESS": [
        "Data tersedia tepat saat dibutuhkan sebelum deadline",
        "Tidak basi atau terlambat berhari-hari",
        "TEPAT WAKTU / TIMELINESS / TEPAT WAKTU"
    ],
    "TIDAK DUPLIKAT UNIQUENESS": [
        "Setiap entitas tercatat tunggal tanpa baris kembar",
        "NIK atau ID pelanggan tidak muncul dua kali",
        "TIDAK DUPLIKAT / UNIQUENESS / TIDAK DUPLIKAT"
    ],
    "VALID": [
        "Data memenuhi aturan, tipe angka/tanggal, dan format baku",
        "Contoh: email memakai @ atau tanggal tidak 31 Februari",
        "VALIDITY / VALIDITAS"
    ],
    "WHATSAPP": [
        "Aplikasi chat berlogo gagang telepon hijau",
        "Paling sering dipakai kirim pesan cepat & grup kantor",
        "WA / WHATS APP"
    ],
    "EMAIL": [
        "Surat elektronik formal kantor (Gmail / Outlook)",
        "Wajib dipakai untuk kirim dokumen & korespondensi resmi",
        "GMAIL / OUTLOOK"
    ],
    "GOOGLE DRIVE": [
        "Penyimpanan file awan berlogo segitiga tiga warna",
        "Sering dipakai menaruh tautan folder laporan tim",
        "GDRIVE / DRIVE"
    ],
    "ZOOM MEET": [
        "Aplikasi rapat tatap muka virtual via video",
        "Dipakai untuk presentasi layar dan rapat jarak jauh",
        "ZOOM / MEET / ZOOM"
    ],
    "EXCEL SPREADSHEET": [
        "Aplikasi lembar kerja tabel untuk olah & berbagi angka",
        "Kolom dan baris yang diedit bersama tim data",
        "EXCEL / SPREADSHEET / MICROSOFT EXCEL"
    ],
    "SLACK TEAMS": [
        "Aplikasi chat kerja berbasis channel & thread tim",
        "Populer di startup atau kantor pengguna Microsoft 365",
        "SLACK / TEAMS / SLACK"
    ],
    "TRELLO NOTION": [
        "Aplikasi papan kanban & catatan proyek tim",
        "Untuk melacak status to-do, doing, dan done",
        "TRELLO / NOTION / TRELLO"
    ],
    "GITHUB": [
        "Platform penyimpanan & kolaborasi kode programmer",
        "Berlogo siluet kucing-gurita (Octocat)",
        "GIT / GITLAB"
    ],
    "LAPOR IT": [
        "Menghubungi tim teknis / helpdesk kantor",
        "Minta teknisi mengecek jaringan atau server",
        "PANGGIL IT / HUBUNGI IT"
    ],
    "REFRESH BERKALI KALI": [
        "Menekan tombol F5 atau reload browser berulang kali",
        "Berharap halaman langsung menyala kembali",
        "REFRESH BERKALI-KALI / REFRESH"
    ],
    "NGOPI ISTIRAHAT": [
        "Pindah ke pantry menyeduh kopi atau ngeteh santai",
        "Memanfaatkan waktu sistem error untuk rehat sejenak",
        "NGOPI / ISTIRAHAT / NGOPI"
    ],
    "PANIK": [
        "Kelabakan takut pekerjaan atau data belum tersimpan",
        "Ekspresi tegang mengecek teman sekitar apakah sama error",
        "PANIK BANGET / DEG DEGAN"
    ],
    "TANYA TEMAN SEBELAH": [
        "Menoleh ke rekan meja sebelah: \"Punyaku error, punyamu aman?\"",
        "Memastikan gangguan menimpa semua orang bukan sendiri saja",
        "TANYA TEMAN / NANYA TEMAN"
    ],
    "RESTART LAPTOP": [
        "Mematikan lalu menyalakan ulang komputer kerja",
        "Langkah klasik IT: coba matikan dan nyalakan lagi",
        "RESTART / REBOOT"
    ],
    "MAIN HP": [
        "Mengeluarkan ponsel untuk cek chat atau media sosial",
        "Daripada diam memandangi layar loading",
        "BUKA HP / SCROLL HP"
    ],
    "MACET": [
        "Jalan raya penuh sesak kendaraan merayap",
        "Alasan paling klasik terlambat di jam berangkat kerja",
        "KEMACETAN / MACET TOTAL"
    ],
    "BANGUN KESIANGAN": [
        "Alarm berbunyi tapi malah dimatikan lalu tidur lagi",
        "Melek sudah siang mepet jam masuk",
        "KESIANGAN / TELAT BANGUN"
    ],
    "HUJAN": [
        "Cuaca turun air deras sehingga susah jalan cepat",
        "Jalan licin atau menunggu reda pakai jas hujan",
        "HUJAN DERAS / KEHUJANAN"
    ],
    "ANTRE KAMAR MANDI": [
        "Menunggu giliran anggota rumah lain selesai mandi",
        "Drama pagi hari di rumah atau kos dengan satu WC",
        "ANTRI KAMAR MANDI / KAMAR MANDI PENUH"
    ],
    "CARI KUNCI BARANG": [
        "Mutari rumah bingung mencari kunci motor atau dompet",
        "Benda kecil terselip saat sudah siap berangkat",
        "CARI KUNCI / BARANG / CARI KUNCI"
    ],
    "BAN BOCOR": [
        "Roda kendaraan kempis di tengah jalan butuh tambal",
        "Musibah mendadak saat mengejar waktu di jalan",
        "BOCOR BAN / BAN KEMPES"
    ],
    "DANDAN LAMA": [
        "Persiapan rias wajah dan pilih baju makan waktu panjang",
        "Bongkar lemari karena bingung mau pakai outfit apa",
        "MAKE UP LAMA / MILIH BAJU"
    ],
    "SARAPAN": [
        "Menyempatkan makan atau beli bubur pagi sebelum berangkat",
        "Antre beli nasi uduk dulu di pinggir jalan",
        "BELI SARAPAN / MAKAN PAGI"
    ],
    "HP HANDPHONE": [
        "Alat komunikasi pintar yang selalu di genggaman",
        "Sekaligus alat pembayaran QRIS, peta, dan kamera",
        "HP / HANDPHONE / HANDPHONE"
    ],
    "KUNCI": [
        "Alat pembuka pintu rumah dan starter motor/mobil",
        "Kalau tertinggal di dalam tidak bisa masuk rumah lagi",
        "KUNCI RUMAH / KUNCI MOTOR"
    ],
    "POWERBANK CHARGER": [
        "Penyelamat saat baterai ponsel sekarat di luar",
        "Baterai cadangan portabel dan kabel pengisi daya",
        "POWERBANK / CHARGER / POWERBANK"
    ],
    "TISU": [
        "Kertas halus pembersih wajah, tangan, atau tumpahan",
        "Andalan wajib di tas baik versi kering maupun basah",
        "TISSUE / TISU BASAH"
    ],
    "EARPHONE": [
        "Alat dengar audio agar suara tidak mengganggu sekitar",
        "Bisa kabel atau versi nirkabel TWS untuk dengar musik",
        "TWS / HEADSET"
    ],
    "PAYUNG": [
        "Pelindung lipat dari panas terik dan air hujan",
        "Benda penting di musim cuaca tak menentu",
        "JAS HUJAN / PAYUNG LIPAT"
    ],
    "BOTOL MINUM": [
        "Wadah air isi ulang ramah lingkungan",
        "Membawa air putih sendiri biar hemat dan tidak haus",
        "TUMBLER / AIR MINUM"
    ],
    "PARFUM": [
        "Cairan pewangi tubuh agar tetap segar seharian",
        "Ukuran saku atau botol travel anti bau keringat",
        "MINYAK WANGI / PEWANGI"
    ],
    "NASI GORENG": [
        "Nasi dimasak di wajan pakai kecap dan telur",
        "Menu klasik malam & pagi dengan kerupuk",
        "NASGOR"
    ],
    "BUBUR AYAM": [
        "Nasi lembek hangat bertabur suwiran ayam dan cakwe",
        "Sering memicu perdebatan tim diaduk vs tidak diaduk",
        "BURAYAM / BUBUR"
    ],
    "NASI UDUK": [
        "Nasi gurih dimasak santan dan daun salam",
        "Disajikan dengan orek tempe, bihun, dan sambal kacang",
        "NASDUK / UDUK"
    ],
    "ROTI": [
        "Makanan praktis panggang atau oles selai/cokelat",
        "Cocok untuk sarapan cepat sambil minum kopi/susu",
        "ROTI BAKAR / ROTI TAWAR"
    ],
    "LONTONG SAYUR": [
        "Potongan beras padat dalam daun disiram kuah santan labu",
        "Disajikan dengan telur balado dan kerupuk merah",
        "LONSAY / KETUPAT SAYUR"
    ],
    "GORENGAN": [
        "Tempe, tahu, bakwan, atau pisang berlapis tepung renyah",
        "Paling nikmat dimakan hangat dengan cabai rawit",
        "BAKWAN / RISOL"
    ],
    "MI INSTAN": [
        "Mi cepat saji berbungkus bumbu gurih",
        "Hanya butuh rebus 3 menit di panci air mendidih",
        "MIE INSTAN / INDOMIE"
    ],
    "TELUR": [
        "Sumber protein paling cepat digoreng ceplok atau dadar",
        "Bisa juga direbus setengah matang untuk energi pagi",
        "TELOR / TELUR DADAR"
    ],
    "CEK HP": [
        "Membuka layar ponsel mengecek notifikasi atau jam",
        "Kebiasaan refleks pertama sebelum turun dari ranjang",
        "LIHAT HP / BUKA HP"
    ],
    "MINUM AIR": [
        "Meneguk segelas air putih menyegarkan tenggorokan",
        "Mengembalikan hidrasi tubuh setelah tidur semalaman",
        "MINUM AIR PUTIH / MINUM"
    ],
    "KE KAMAR MANDI": [
        "Berjalan ke toilet untuk buang air kecil/cuci",
        "Panggilan alam pertama di pagi hari",
        "KE TOILET / KENCING"
    ],
    "MATIKAN ALARM": [
        "Memencet tombol stop atau snooze di ponsel/jam beker",
        "Menghentikan bunyi nyaring yang membangunkan tidur",
        "MATIIN ALARM / SNOOZE ALARM"
    ],
    "NGUMPULIN NYAWA": [
        "Duduk bengong di pinggir kasur dengan mata setengah merem",
        "Butuh beberapa menit agar kesadaran penuh kembali",
        "KUMPULIN NYAWA / DUDUK BENGONG"
    ],
    "CUCI MUKA": [
        "Membasuh wajah dengan air dingin agar segar",
        "Menghilangkan rasa kantuk dan kotoran mata",
        "BASUH MUKA / RAUP MUKA"
    ],
    "TARIK SELIMUT LAGI": [
        "Kembali memejamkan mata \"lima menit lagi saja\"",
        "Godaan terbesar saat pagi masih dingin atau hujan",
        "TIDUR LAGI / TARIK SELIMUT"
    ],
    "KETIDURAN": [
        "Mengaku terlelap sebelum sempat mengetik balasan",
        "Chat terbaca tapi mata sudah terpejam duluan",
        "TIDUR / KETIDURAN BENERAN"
    ],
    "SIBUK KERJA": [
        "Mengaku seharian dikejar rapat dan tugas menumpuk",
        "Tidak sempat menyentuh chat pribadi di jam kantor",
        "SIBUK / KERJAAN NUMPUK"
    ],
    "TIDAK ADA SINYAL": [
        "Menyalahkan jaringan seluler atau Wi-Fi yang hilang",
        "Alasan area susah sinyal atau kuota habis",
        "SUSAH SINYAL / SINYAL HILANG"
    ],
    "SUDAH BALAS DI HATI": [
        "Merasa sudah menjawab dalam pikiran padahal belum diketik",
        "Chat cuma dilihat lalu dikira sudah terkirim",
        "BALAS DALAM HATI / SUDAH DIKETIK LUPA KIRIM"
    ],
    "BATERAI HABIS": [
        "Mengaku ponsel mati total karena kehabisan daya",
        "Lupa bawa charger atau lupa colok listrik",
        "LOWBAT / BATRE HABIS"
    ],
    "TIDAK BUKA HP": [
        "Mengaku ponsel ditaruh di tas atau mode hening",
        "Berjam-jam fokus di luar tanpa menengok layar",
        "LUPA BUKA HP / HP DI TAS"
    ],
    "TENGGELAM": [
        "Chat tertimbun puluhan pesan grup baru di bawah",
        "Kegulung notifikasi grup sehingga tidak terlihat",
        "KELELEP / CHAT TENGGELAM"
    ],
    "MACET DI JALAN": [
        "Alasan klasik kendaraan tak bergerak di jalan raya",
        "Apalagi pas jam pulang kerja atau hujan turun",
        "MACET / JALANAN MACET"
    ],
    "LEMBUR KANTOR": [
        "Mengaku masih mengerjakan tugas tambahan dari bos",
        "Pulang larut demi menyelesaikan target kantor",
        "LEMBUR / OVERTIME"
    ],
    "NGOPI NONTON BOLA": [
        "Mampir santai kumpul teman di warung kopi/nonton bareng",
        "Nongkrong dulu sebelum pulang menghadapi rumah",
        "NGOPI / NONTON BOLA / NONTON BOLA"
    ],
    "RAPAT MENDADAK": [
        "Mengaku dipanggil meeting evaluasi dadakan menjelang pulang",
        "Meeting sore yang molor sampai malam",
        "MEETING MENDADAK / RAPAT SORE"
    ],
    "BATERAI HP HABIS": [
        "Ponsel mati sehingga tidak bisa mengabari atau ditelpon",
        "Klasik saat istri mulai menelpon berkali-kali",
        "HP MATI / LOWBAT"
    ],
    "BELI TITIPAN ISTRI": [
        "Mampir antre membelikan martabak atau makanan pesanan rumah",
        "Demi meredakan kekesalan dengan buah tangan hangat",
        "BELI MAKANAN / BELI MARTABAT"
    ],
    "TANYA KENAPA": [
        "Bertanya hati-hati: \"Sayang kenapa, aku ada salah?\"",
        "Kalimat paling berisiko saat jawabannya \"Nggak apa-apa\"",
        "NANYA KENAPA / ADA APA"
    ],
    "BELIKAN MAKANAN": [
        "Langsung memesan jajanan manis atau makanan favorit istri",
        "Strategi ampuh melunakkan suasana lewat perut kenyang",
        "BELI MAKANAN / TRAKTIR MAKAN"
    ],
    "TRANSFER UANG": [
        "Mengirim saldo m-banking dengan caption \"buat jajan ya\"",
        "Obat ajaib paling cepat mengembalikan senyuman",
        "TRANSFER / KASIH UANG"
    ],
    "IKUT DIAM": [
        "Menjaga jarak aman dan memilih ikut membisu",
        "Daripada salah bicara lalu debat makin panjang",
        "DIEM JUGA / SAMA SAMA DIAM"
    ],
    "RAYU GOMBAL": [
        "Menggoda dengan pujian lucu supaya tertawa lagi",
        "Memeluk hangat atau melempar candaan receh",
        "RAYU / GOMBAL / MERAYU"
    ],
    "CUCI PIRING": [
        "Tiba-tiba rajin membereskan cucian atau menyapu rumah",
        "Aksi nyata mengambil hati tanpa perlu banyak kata",
        "BERESIN RUMAH / BANTU KERJAAN RUMAH"
    ],
    "KABUR KELUAR": [
        "Pura-pura ada urusan penting atau pergi ke teras/warung",
        "Menghindari badai amarah sampai suasana tenang",
        "KABUR / PERGI KELUAR"
    ],
    "MAKAN GRATIS TRAKTIRAN": [
        "Paling bikin karyawan kompak saat ada syukuran di kantor",
        "Nasi kotak, pizza, atau gorengan dari atasan/rekan",
        "MAKAN GRATIS / TRAKTIRAN / MAKAN GRATIS"
    ],
    "TANGGAL MERAH LIBUR": [
        "Hari bebas kerja yang jatuh di antara hari kerja",
        "Apalagi kalau bisa digabung jadi long weekend",
        "TANGGAL MERAH / LIBUR / TANGGAL MERAH"
    ],
    "PULANG CEPAT": [
        "Atasan mengizinkan karyawan membereskan meja lebih awal",
        "Jam 3 sore sudah boleh absen pulang",
        "BALIK CEPAT / PULANG AWAL"
    ],
    "BONUS THR": [
        "Tambahan penghasilan di luar gaji bulanan pokok",
        "Cair menjelang hari raya atau akhir tahun performa",
        "BONUS / THR / BONUS"
    ],
    "BOS TIDAK MASUK": [
        "Atasan sedang cuti, sakit, atau dinas keluar kota",
        "Suasana kantor terasa langsung lebih santai dan bebas",
        "BOS CUTI / ATASAN TIDAK MASUK"
    ],
    "WFH": [
        "Kesempatan bekerja fleksibel dari rumah",
        "Bebas macet jalanan dan bisa pakai baju santai",
        "WORK FROM HOME / KERJA DARI RUMAH"
    ],
    "RAPAT DIBATALKAN": [
        "Jadwal meeting panjang mendadak dicoret dari kalender",
        "Waktu kembali lega untuk lanjut kerja atau santai",
        "MEETING BATAL / MEETING CANCEL"
    ],
    "KOPI GRATIS": [
        "Pantry atau vendor menyediakan minuman kafe gratis",
        "Es kopi susu atau kopi mesin gratis tanpa batas",
        "KOPI GRATISAN / MINUMAN GRATIS"
    ],
    "MAIN HP SCROLL SOSMED": [
        "Menggeser layar ponsel di bawah meja rapat",
        "Membuka TikTok, Instagram, atau balas chat pribadi",
        "MAIN HP / SCROLL SOSMED / SCROLL SOSMED"
    ],
    "NGANTUK MENGUAP": [
        "Mata berat hampir terpejam sambil menutup mulut menguap",
        "Susah fokus mendengar paparan slide berpuluh halaman",
        "NGANTUK / MENGUAP / MENGUAP"
    ],
    "CORAT CORET BUKU": [
        "Menggambar pola acak atau doodle di catatan rapat",
        "Tangan bergerak menulis supaya tidak kelihatan melamun",
        "CORAT-CORET BUKU / CORAT CORET"
    ],
    "MENGHAYAL": [
        "Pikiran melayang memikirkan makan siang atau liburan",
        "Tatapan menghadap layar presentasi tapi pikiran kosong",
        "KHAYAL / MELAMUN DI RAPAT"
    ],
    "PURA PURA CATAT": [
        "Terlihat mengetik serius di laptop atau menulis di notes",
        "Padahal sebenarnya lagi kerjain hal lain atau chat",
        "PURA-PURA CATAT / AKTING NYATAT"
    ],
    "NYEMIL MINUM KOPI": [
        "Mengunyah permen, kue rapat, atau menyeruput kopi",
        "Cara ampuh mengusir kantuk selama meeting panjang",
        "NYEMIL / MINUM KOPI / NYEMIL"
    ],
    "MATIKAN KAMERA": [
        "Menutup video saat meeting online (Zoom/Meet)",
        "Bisa ditinggal bikin kopi atau rebahan sambil dengar",
        "OFF CAM / MATIIN KAMERA"
    ],
    "IZIN KE TOILET": [
        "Angkat tangan atau izin keluar ruangan ke WC",
        "Sekalian cuci muka dan jalan-jalan sebentar di koridor",
        "KE TOILET / IZIN TOILET"
    ],
    "JOGET DANCE": [
        "Video berjoget mengikuti irama lagu yang sedang tren",
        "Challenge gerakan kompak 15–30 detik",
        "JOGET / DANCE / JOGET"
    ],
    "KULINER MUKBANG": [
        "Video review makanan porsi besar atau street food",
        "Suara kriuk ASMR dan visual keju meleleh bikin lapar",
        "KULINER / MUKBANG / KULINER"
    ],
    "KOMEDI PRANK": [
        "Sketsa lucu, parodi keseharian, atau video jahil",
        "Hiburan singkat yang mengundang tawa",
        "KOMEDI / PRANK / KOMEDI"
    ],
    "REVIEW BARANG": [
        "Ulasan jujur produk skincare, gadget, atau racun belanja",
        "Sering disertai tautan keranjang kuning / affiliate",
        "REVIEW PRODUK / RACUN SHOPEE"
    ],
    "DRAMA CURHAT": [
        "Cerita kisah hidup, perselingkuhan, atau drama keluarga",
        "Konten \"Part 1, lanjut Part 2 di kolom komentar\"",
        "DRAMA / CURHAT / DRAMA"
    ],
    "KUCING LUCU": [
        "Tingkah menggemaskan anabul peliharaan (anabul/oyen)",
        "Video hewan peliharaan bertingkah konyol",
        "KUCING / ANABUL"
    ],
    "TIPS TUTORIAL": [
        "Panduan singkat cara memasak, edit foto, atau rumus Excel",
        "Konten edukasi cepat \"5 detik jadi bisa\"",
        "TIPS / TUTORIAL / TUTORIAL"
    ],
    "PODCAST": [
        "Potongan klip obrolan narasumber di studio mikrofon",
        "Cuplikan wawancara tokoh atau komika berdurasi pendek",
        "PODKES / OBROLAN PODCAST"
    ],
    "FOTO VIDEO DULU": [
        "Mengeluarkan kamera HP untuk mengabadikan hidangan utuh",
        "\"HP makan duluan\" sebelum sendok boleh menyentuh piring",
        "FOTO / VIDEO DULU / FOTO MAKANAN"
    ],
    "UPLOAD STORY": [
        "Langsung memposting foto hidangan ke IG Story atau WA Status",
        "Menandai lokasi kafe tempat nongkrong",
        "POST STORY / IG STORY"
    ],
    "CARI ANGLE BAGUS": [
        "Menggeser gelas, piring, dan pencahayaan agar estetik",
        "Memotret dari atas (flatlay) demi hasil foto terbaik",
        "ATUR ANGLE / CARI PENCAHAYAAN"
    ],
    "CUCI TANGAN": [
        "Pergi ke wastafel atau memakai hand sanitizer dulu",
        "Menjaga kebersihan sebelum menyantap hidangan",
        "HAND SANITIZER / CUCI TANGAN DULU"
    ],
    "COBAIN KUAHNYA": [
        "Menyeruput sedikit kuah atau saus pakai sendok untuk cek rasa",
        "Mengetes apakah butuh tambah sambal atau kecap",
        "ICIP RASA / COBAIN RASA"
    ],
    "TAG TEMAN": [
        "Menyebut akun teman atau pasangan di postingan media sosial",
        "Biar semua pengikut tahu sedang makan bareng siapa",
        "MENTION TEMAN / TAG PACAR"
    ],
    "MINTA SENDOK": [
        "Memanggil pelayan meminta sendok, garpu, atau sambal tambahan",
        "Perlengkapan makan belum lengkap di meja",
        "MINTA GARPU / MINTA SAMBAL"
    ],
    "OVERTHINKING GALAU": [
        "Terlalu banyak memikirkan kemungkinan buruk di malam hari",
        "Istilah anak muda saat pikiran gelisah tak kunjung tidur",
        "OVERTHINKING / GALAU / OVERTHINKING"
    ],
    "HEALING": [
        "Istilah gaul untuk pergi jalan-jalan melepas stres",
        "Padahal kadang cuma ngopi di kafe atau ke pantai",
        "BUTUH HEALING / REFRESHING JIWA"
    ],
    "FOMO": [
        "Takut ketinggalan tren, konser, atau obrolan yang lagi ramai",
        "Singkatan dari Fear Of Missing Out",
        "TAKUT KETINGGALAN TREN"
    ],
    "RED FLAG GREEN FLAG": [
        "Istilah tanda bahaya vs tanda baik dalam sifat pasangan",
        "Dipakai menilai kepribadian gebetan atau tempat kerja",
        "RED FLAG / GREEN FLAG / RED FLAG"
    ],
    "SLAY": [
        "Pujian gaul berarti tampil keren, memukau, atau sukses besar",
        "Dipakai saat penampilan atau pencapaian seseorang luar biasa",
        "KEREN BANGET / MEMUKAU"
    ],
    "BESTIE": [
        "Panggilan akrab untuk sahabat paling dekat",
        "Dari kata bahasa Inggris \"best friend\"",
        "SAHABAT / SOHIB"
    ],
    "VIBE": [
        "Suasana, aura, atau nuansa yang dirasakan di suatu tempat",
        "Sering diucap \"tempatnya punya good vibe\"",
        "VIBES / AURA"
    ],
    "GHOSTING": [
        "Menghilang tiba-tiba tanpa kabar setelah sempat dekat",
        "Pesan tidak dibalas bak ditelan hantu",
        "NGILANG TANPA KABAR / DI GHOSTING"
    ],
    "ES KOPI SUSU": [
        "Minuman kafein dingin manis dalam cup plastik kekinian",
        "Penyemangat wajib pagi hari anak kantoran",
        "KOPI SUSU / ES KOPI"
    ],
    "TWS EARPHONE": [
        "Alat dengar nirkabel kecil di dalam casing saku",
        "Biar tetap fokus kerja tanpa terdengar bising sekitar",
        "TWS / EARPHONE / EARPHONE WIRELESS"
    ],
    "TUMBLER": [
        "Botol minum kekinian berbahan stainless tahan dingin/panas",
        "Sering bermerk Corkcicle/LocknLock di samping laptop",
        "BOTOL TUMBLER / TEMPAT AIR"
    ],
    "LAPTOP IPAD": [
        "Perangkat komputer jinjing atau tablet tipis utama bekerja",
        "Alat tempur menulis laporan, desain, dan meeting",
        "LAPTOP / IPAD / LAPTOP"
    ],
    "CHARGER POWERBANK": [
        "Kabel adaptor dan baterai cadangan untuk ponsel",
        "Wajib ada di tas biar tidak kehabisan daya saat mobilitas",
        "CHARGER / POWERBANK / ADAPTOR CHARGER"
    ],
    "LIP BALM SKINCARE": [
        "Pelembap bibir, sunscreen, atau face mist ukuran kecil",
        "Penjaga kulit tetap lembap di ruangan ber-AC dingin",
        "LIP BALM / SKINCARE / LIP BALM"
    ],
    "STIKER LUCU": [
        "Hiasan tempelan gambar kartun di punggung laptop atau tumbler",
        "Memberi ciri khas personal pada barang kantor",
        "STIKER / TEMPELAN LUCU"
    ],
    "KIPAS MINI": [
        "Pendingin genggam bertenaga USB di meja atau komuter",
        "Penyelamat saat gerah di KRL, ojol, atau kantor",
        "KIPAS PORTABLE / KIPAS ANGIN MINI"
    ],
    "SAKIT PINGGUNG ENCOK": [
        "Nyeri punggung bawah akibat duduk kerja terlalu lama",
        "Tandanya sudah butuh koyo, pijat, atau kursi ergonomis",
        "SAKIT PINGGUNG / ENCOK / SAKIT PINGGUNG"
    ],
    "CICILAN KPR": [
        "Tagihan bulanan rumah, kendaraan, atau kartu kredit",
        "Gaji baru masuk langsung numpang lewat bayar angsuran",
        "CICILAN / KPR / CICILAN"
    ],
    "CAPEK KERJA": [
        "Kelelahan fisik dan mental akibat rutinitas pekerjaan",
        "Rasanya ingin akhir pekan lebih panjang",
        "LELAH KERJA / BURNOUT"
    ],
    "HARGA RUMAH MAHAL": [
        "Keluhan sulitnya membeli hunian di kota besar",
        "Kenaikan harga properti tak sebanding dengan kenaikan gaji",
        "RUMAH MAHAL / SUSAH BELI RUMAH"
    ],
    "SUSAH TIDUR": [
        "Mata terjaga hingga dini hari meski badan sudah letih",
        "Insomnia karena memikirkan target dan tagihan",
        "INSOMNIA / TIDAK BISA TIDUR"
    ],
    "RAMBUT RONTOK UBAN": [
        "Tanda penuaan di kepala yang mulai muncul helai demi helai",
        "Penuh kekhawatiran saat menyisir di pagi hari",
        "RAMBUT RONTOK / UBAN / RAMBUT RONTOK"
    ],
    "KURANG LIBURAN": [
        "Merasa jatah cuti jarang terpakai karena beban kerja",
        "Kapan lagi jalan-jalan jauh tanpa memikirkan laptop",
        "KURANG PIKNIK / BUTUH CUTI"
    ],
    "ASAM LAMBUNG": [
        "Perih di ulu hati akibat telat makan atau kebanyakan kopi",
        "Sering kambuh saat stres kerja dan makan pedas",
        "MAAG / GERD"
    ],
    "KIRIM STIKER SELAMAT PAGI": [
        "Gambar bunga bertuliskan \"Selamat Pagi, Semangat!\" di grup",
        "Hampir pasti muncul setiap subuh dari anggota senior",
        "STIKER SELAMAT PAGI / GAMBAR SELAMAT PAGI"
    ],
    "FORWARD BROADCAST HOAX": [
        "Meneruskan pesan berantai berlabel \"Diteruskan berkali-kali\"",
        "Informasi kesehatan atau promo palsu tanpa dicek dulu",
        "FORWARD BROADCAST / HOAX / FORWARD HOAX"
    ],
    "NGETIK HURUF KAPITAL": [
        "Semua huruf ditulis besar-besar seperti sedang marah",
        "Padahal cuma lupa mematikan tombol Caps Lock",
        "HURUF KAPITAL / CAPS LOCK"
    ],
    "KIRIM FOTO BUNGA KOPI": [
        "Memotret tanaman di halaman atau secangkir kopi pagi",
        "Dibagikan di grup keluarga tanpa keterangan panjang",
        "KIRIM FOTO BUNGA / KOPI / FOTO BUNGA"
    ],
    "TYPO SALAH KIRIM": [
        "Huruf tertukar atau pesan niat ke anak nyasar ke grup RT",
        "Kesalahan ketik karena jari kebesaran di layar kecil",
        "TYPO / SALAH KIRIM / TYPO"
    ],
    "VOICE NOTE PANJANG": [
        "Rekaman pesan suara berdurasi ber menit-menit",
        "Malas mengetik panjang lebar sehingga memilih bicara",
        "VOICE NOTE / VN PANJANG"
    ],
    "BALAS JEMPOL": [
        "Menjawab pesan panjang anak hanya dengan emoji 👍",
        "Singkat, padat, dan kadang terasa bikin deg-degan",
        "EMOJI JEMPOL / STIKER JEMPOL"
    ],
    "KIRIM VIDEO CERAMAH": [
        "Tautan video pengajian atau nasihat bijak berdurasi panjang",
        "Dibagikan pagi atau malam hari ke seluruh anggota grup",
        "VIDEO CERAMAH / CERAMAH"
    ],
    "TENAGA": [
        "Kekuatan tubuh agar sanggup menyuap makanan",
        "Kalau badan lemas tanpa ini, pegang sendok pun tak kuat",
        "ENERGI / OTOT"
    ],
    "MULUT": [
        "Bagian wajah tempat memasukkan makanan ke dalam tubuh",
        "Terbuka saat suapan nasi datang mendekat",
        "BIBIR / RONGGA MULUT"
    ],
    "GIGI": [
        "Bagian keras berwarna putih untuk mengunyah lauk rendang",
        "Alat pengolah makanan sebelum ditelan ke tenggorokan",
        "NGUNYAH / MENGUNYAH"
    ],
    "UANG": [
        "Alat pembayaran wajib saat beranjak dari kasir rumah makan",
        "Tanpa ini, pulang makan bisa disuruh cuci piring",
        "DUIT / CUAN"
    ],
    "LAPAR": [
        "Kondisi perut kosong yang memicu keinginan menyantap nasi",
        "Bunyi kriuk di perut sebelum masuk warung makan",
        "PERUT LAPAR / LAPER"
    ],
    "PIRING": [
        "Wadah datar tempat meletakkan nasi, gulai, dan rendang",
        "Atau kadang diganti daun pisang saat dibungkus",
        "DAUN PISANG / BUNGKUS"
    ],
    "KURSI": [
        "Tempat duduk di meja makan agar tidak pegal berdiri",
        "Bangku di rumah makan untuk menyantap hidangan",
        "BANGKU / TEMPAT DUDUK"
    ],
    "DOA": [
        "Ucapan syukur dan permohonan berkah sebelum menyantap makan",
        "Dibaca pelan sebelum suapan pertama masuk ke mulut",
        "BERDOA / DOA MAKAN"
    ],
    "KASUR": [
        "Alas empuk di kamar tempat meringkuk menahan nyeri gigi",
        "Klinik tutup malam-malam, ya rebahannya pasti di sini",
        "TEMPAT TIDUR / RANJANG"
    ],
    "OBAT": [
        "Tablet atau kapsul pereda nyeri (analgesik) di kotak P3K",
        "Penahan sakit sementara sampai pagi klinik buka",
        "PEREDA NYERI / OBAT SAKIT GIGI"
    ],
    "AIR GARAM": [
        "Larutan dapur hangat untuk berkumur meredakan ngilu gusi",
        "Resep tradisional mencampur garam dengan air matang",
        "KUMUR AIR GARAM / GARAM"
    ],
    "BANTAL": [
        "Penyangga kepala empuk di tempat tidur saat pipi ngilu",
        "Dipakai meringkuk menyamping memeluk guling",
        "GULING / BANTAL GULING"
    ],
    "KACA CERMIN": [
        "Benda pantul untuk meneropong bagian gigi mana yang berlubang",
        "Membuka mulut lebar di depan cermin kamar mandi",
        "CERMIN / KACA"
    ],
    "IGD RUMAH SAKIT": [
        "Instalasi gawat darurat rumah sakit yang buka 24 jam",
        "Tujuan medis darurat ketika nyeri sudah tidak tertahankan",
        "IGD / UGD"
    ],
    "HP": [
        "Ponsel pintar di genggaman untuk mencari info dokter atau obat",
        "Langsung dipakai browsing cara meredakan nyeri tengah malam",
        "HANDPHONE / PONSEL"
    ],
    "GANTIAN": [
        "Cara bergiliran menukar posisi di kursi cukur satu per satu",
        "Karena tukang cukurnya cuma satu, tidak mungkin sekaligus",
        "BERGANTIAN / GILIRAN"
    ],
    "SATU PER SATU": [
        "Diselesaikan urut dari pelanggan pertama hingga kelima",
        "Tidak ada dua kepala dicukur oleh satu orang bersamaan",
        "SATU SATU / BERURUTAN"
    ],
    "ANTRE": [
        "Duduk rapi di ruang tunggu menunggu nama dipanggil",
        "Mengambil nomor giliran sambil membaca majalah/HP",
        "ANTRI / MENUNGGU GILIRAN"
    ],
    "GUNTING": [
        "Alat potong dua bilah tajam yang berbunyi krek-krek",
        "Perkakas utama tukang pangkas untuk merapikan rambut",
        "GUNTING RAMBUT / ALAT POTONG"
    ],
    "MESIN CUKUR": [
        "Alat cukur elektrik berdengung untuk meratakan samping kepala",
        "Biasa disebut clipper atau trimmer barbershop",
        "CLIPPER / SHAVER"
    ],
    "SISIR": [
        "Alat bergigi tipis untuk menahan helai rambut saat dipotong",
        "Diikat bersama gunting di tangan kiri tukang cukur",
        "SISIR RAMBUT"
    ],
    "PELAN PELAN": [
        "Gaya memotong penuh ketelitian agar hasil tidak pitak",
        "Hati-hati merapikan bagian telinga dan poni",
        "PELAN-PELAN / HATI HATI"
    ],
    "SABAR": [
        "Sikap tenang saat menghadapi antrean lima pelanggan sekaligus",
        "Tidak buru-buru meski pelanggan terus berdatangan",
        "TENANG / BERSABAR"
    ],
    "DARI MAGHRIB": [
        "Waktu petang menjelang malam (kalau Ashar baru mendung)",
        "Jawaban legendaris Cak Lontong soal kapan hujan turun",
        "MAGHRIB / MAGRIB"
    ],
    "DARI LANGIT": [
        "Berasal dari lapisan atmosfer biru/kelabu tinggi di atas sana",
        "Tempat berkumpulnya uap air dan awan tebal",
        "LANGIT / AWAN"
    ],
    "DARI ATAS": [
        "Arah jatuhnya rintik air menuju permukaan tanah",
        "Dipengaruhi gaya tarik bumi sehingga jatuh ke bawah",
        "ATAS / ATAS KE BAWAH"
    ],
    "MUSIM HUJAN": [
        "Periode bulan basah biasanya Oktober hingga Maret",
        "Kebalikan dari musim kemarau panjang",
        "PENGHUJAN / MUSIM PENGHUJAN"
    ],
    "SORE HARI": [
        "Rentang waktu siang menjelang petang saat matahari condong",
        "Waktu klasik hujan kiriman turun di kota",
        "SORE / PETANG"
    ],
    "GERIMIS": [
        "Tahap awal turunnya rintik-rintik halus sebelum deras",
        "Tetesan air kecil yang membuat jalan mulai lembap",
        "RINTIK RINTIK / HUJAN RINTIK"
    ],
    "MALAM HARI": [
        "Saat hari sudah gelap dan dingin hingga pagi tiba",
        "Waktu yang bikin orang makin nyenyak menarik selimut",
        "MALAM / WAKTU MALAM"
    ],
    "DITILANG": [
        "Mendapat surat sanksi resmi dari patroli jalan raya",
        "Karena kendaraan roda dua dilarang keras melintas di tol",
        "TILANG / KENA TILANG"
    ],
    "VIRAL": [
        "Direkam pengendara mobil lain lalu ramai di media sosial",
        "Masuk akun berita jalanan dalam hitungan menit",
        "DIREKAM / MASUK SOSMED"
    ],
    "DISURUH KELUAR": [
        "Diarahkan petugas patroli memutar arah di gerbang terdekat",
        "Tidak diizinkan melanjutkan perjalanan di jalur bebas hambatan",
        "PUTAR BALIK / DIUSIR"
    ],
    "DIDEREK": [
        "Diangkut ke atas truk derek resmi Jasa Marga",
        "Kendaraan mogok dievakuasi dari jalur cepat",
        "DEREK / DIANGKUT"
    ],
    "DIDORONG PETUGAS": [
        "Dibantu didorong menepi ke bahu jalan oleh patroli tol",
        "Supaya tidak menghalangi laju kendaraan kencang",
        "DORONG / PETUGAS TOL"
    ],
    "DENDA": [
        "Harus membayar sanksi administratif karena pelanggaran tol",
        "Selain biaya tol jarak terjauh atau sanksi pelanggaran",
        "BAYAR DENDA / SANKSI DENDA"
    ],
    "TIDUR": [
        "Kondisi istirahat malam sebelum bisa disebut \"bangun tidur\"",
        "Mana mungkin bangun jika kondisi ini belum terjadi duluan",
        "BOBOK / TERLELAP"
    ],
    "MEREM": [
        "Menutup kedua kelopak mata rapat-rapat",
        "Tahap awal memanggil rasa kantuk sebelum terlelap",
        "PEJAMKAN MATA / TUTUP MATA"
    ],
    "BARING": [
        "Merebahkan badan telentang atau menyamping di atas kasur",
        "Posisi tubuh horizontal sebelum terlelap",
        "BERBARING / REBAHAN"
    ],
    "MATIKAN LAMPU": [
        "Memencet saklar agar kamar menjadi gelap nyaman",
        "Kebiasaan banyak orang sebelum terlelap di malam hari",
        "LAMPU MATI / GELAP"
    ],
    "NGANTUK": [
        "Rasa berat di kelopak mata dan sering menguap",
        "Sinyal alami tubuh bahwa sudah waktunya beristirahat",
        "MENGANTUK / KANTUK"
    ],
    "PASANG ALARM": [
        "Mengatur jam bunyi di HP agar besok tidak kesiangan",
        "Dipasang berkali-kali jeda 5 menit sebelum tidur",
        "ALARM / SET ALARM"
    ],
    "ORANG SEHAT": [
        "Orang yang tubuhnya bugar dan tidak punya penyakit sama sekali",
        "Dokter mana yang tega membedah orang sehat walafiat",
        "SEHAT / TIDAK SAKIT"
    ],
    "TIDAK PUNYA UANG": [
        "Keluarga belum punya biaya tindakan dan administrasi non-darurat",
        "Belum ada jaminan kesehatan aktif atau dana operasi",
        "NGGAK PUNYA DUIT / MISKIN"
    ],
    "SUDAH MENINGGAL": [
        "Pasien sudah berpulang sebelum masuk ruang tindakan bedah",
        "Operasi medis hanya untuk menyelamatkan orang hidup",
        "MENINGGAL / MATI"
    ],
    "TIDAK SETUJU": [
        "Pasien atau keluarga menolak menandatangani surat izin bedah",
        "Hak pasien memilih pengobatan tanpa paksaan operasi",
        "MENOLAK / TOLAK"
    ],
    "KELUARGA SENDIRI": [
        "Kode etik kedokteran melarang membedah kerabat inti sendiri",
        "Agar emosi pribadi tidak memengaruhi ketenangan tangan dokter",
        "ANAK SENDIRI / ISTRI SENDIRI"
    ],
    "KABUR": [
        "Pasien ketakutan lalu diam-diam pulang dari kamar rawat",
        "Dokter mau masuk ruangan, tempat tidurnya sudah kosong",
        "LARI / MELARIKAN DIRI"
    ],
    "SALAH KAMAR": [
        "Pasien yang ditemui perawat ternyata berbeda nama & ruang",
        "Hampir saja salah orang yang mau dibius",
        "SALAH PASIEN / KAMAR LAIN"
    ],
    "INGIN MENANG": [
        "Tujuan utama kompetisi agar tim meraih kemenangan",
        "Mengumpulkan skor terbanyak sampai peluit panjang",
        "MENANG / JUARA"
    ],
    "BOLANYA CUMA SATU": [
        "Jawaban logika sederhana: di lapangan tidak disediakan 10 bola",
        "Kalau masing-masing dikasih satu bola nanti nggak rebutan!",
        "BOLA SATU / CUMA SATU BOLA"
    ],
    "ATURAN MAIN": [
        "Regulasi resmi olahraga FIFA / FIBA yang harus ditaati",
        "Memang begitulah cara permainan tim berlangsung",
        "ATURAN / PERATURAN"
    ],
    "CETAK POIN": [
        "Bola harus dimasukkan ke ring atau gawang lawan",
        "Satu-satunya cara angka di papan skor bertambah",
        "GOL / SKOR"
    ],
    "TAKUT KALAH": [
        "Tidak mau pulang malu dan diejek suporter lawan",
        "Menjaga gengsi klub dan posisi klasemen",
        "KALAH / DIOMELIN PELATIH"
    ],
    "DIBAYAR": [
        "Atlet profesional menerima gaji dan bonus tiap pertandingan",
        "Tuntutan kontrak bermain maksimal di lapangan",
        "GAJI / GAJI ATLET"
    ],
    "KURANG MODAL BELI BOLA": [
        "Candaan khas: panitianya cuma sanggup membeli satu bola saja",
        "Kalau ada 22 bola panitia tekor anggaran",
        "KURANG MODAL / NGGAK MAMPU BELI BOLA"
    ],
    "PAMIT": [
        "Mengucapkan selamat tinggal kepada tuan rumah lalu pulang",
        "Tahu waktu agar tidak menginap terlalu lama",
        "MINTA IZIN PULANG / PAMITAN"
    ],
    "LAPOR RT": [
        "Aturan wajib papan pengumuman kompleks \"Tamu Wajib Lapor 1x24 Jam\"",
        "Apalagi sudah dua hari dua malam, harus melapor pengurus warga",
        "LAPOR PAK RT / LAPOR RW"
    ],
    "BANTU PEKERJAAN RUMAH": [
        "Ikut menyapu halaman, mencuci piring, atau membereskan meja",
        "Supaya tidak dikira tamu yang cuma numpang tidur dan makan",
        "CUCI PIRING TAMU / BERSIH BERSIH"
    ],
    "BAWA MAKANAN": [
        "Membelikan martabak, buah, atau lauk untuk keluarga tuan rumah",
        "Tanda tahu diri ikut mengisi kulkas atau meja makan",
        "OLEH OLEH / BUAH TANGAN"
    ],
    "JANGAN MEREPOTKAN": [
        "Menjaga kebersihan kamar mandi dan tidak banyak permintaan",
        "Bersikap mandiri tanpa menyusahkan penghuni rumah",
        "TAHU DIRI / SADAR DIRI"
    ],
    "BERTERIMA KASIH": [
        "Mengucapkan apresiasi tulus atas tumpangan dan jamuan tuan rumah",
        "Menjaga silaturahmi tetap hangat saat berpisah",
        "TERIMA KASIH / MAKASIH"
    ],
    "PINDAH HOTEL": [
        "Mencari penginapan komersial atau kos harian terdekat",
        "Pilihan profesional jika urusan di kota tersebut masih panjang",
        "HOTEL / PENGINAPAN"
    ],
    "NASI PADANG": [
        "Kuliner serba santan dan rendang yang cocok di lidah siapa saja",
        "Penyelamat perdebatan saat tidak ada yang mau menentukan menu",
        "PADANG / MASAKAN PADANG"
    ],
    "PULANG": [
        "Keputusan klasik pas suami/pacar menyerah menghadapi \"terserah\"",
        "Makan di rumah masak mi instan saja daripada berdebat di jalan",
        "MASAK SENDIRI / BALIK KE RUMAH"
    ],
    "BAKSO": [
        "Bola daging berkuah kaldu hangat kegemaran segala usia",
        "Selalu tersedia gerobak atau warungnya di hampir tiap sudut jalan",
        "MIE BAKSO / BAKSO URAT"
    ],
    "AYAM GEPREK": [
        "Ayam goreng tepung ditumbuk cabai rawit dan bawang putih",
        "Menu praktis favorit anak kos dan pekerja dengan level pedas",
        "GEPREK / AYAM PENYET"
    ],
    "MIE AYAM": [
        "Mi kuning kenyal dengan topping daging ayam kecap dan pangsit",
        "Sering menjadi alternatif aman selain bakso",
        "MI AYAM / BAKMI"
    ],
    "PECEL LELE": [
        "Warung tenda pinggir jalan berlampu terang dengan spanduk khas",
        "Menyajikan ikan goreng, ayam, lalapan, dan sambal terasi",
        "LAMONGAN / WARUNG TENDA"
    ],
    "SATE": [
        "Daging tusuk bambu dibakar arang dengan bumbu kacang/kecap",
        "Bisa ayam atau kambing hangat untuk makan malam",
        "SATE AYAM / SATE KAMBING"
    ],
    "TIDAK JADI MAKAN": [
        "Perdebatan terlalu lama sampai jam tutup warung lalu bubar kelaparan",
        "Mod-nya keburu rusak karena sama-sama bingung memilih",
        "GA JADI MAKAN / NGGAK JADI MAKAN"
    ],
    "BERHENTI MENCARI": [
        "Baru kelihatan di depan mata setelah pasrah tidak mencari lagi",
        "Hukum Murphy benda kecil di rumah",
        "BERHENTI CARI / STOP CARI"
    ],
    "BELI BARU": [
        "Begitu baru pulang dari toko membawa yang baru, yang lama muncul",
        "Kejadian nyesek yang hampir dialami semua orang",
        "SUDAH BELI / BELI LAGI"
    ],
    "PASRAH": [
        "Menghela napas ikhlas dan memilih mengerjakan hal lain",
        "Tak lama kemudian mata tak sengaja melihatnya di meja",
        "IKHLAS / SUDAH PASRAH"
    ],
    "TANYA IBU": [
        "Meminta bantuan \"radar sakti\" ibu atau istri di rumah",
        "Anehnya langsung ketemu dalam 3 detik padahal tadi tidak ada",
        "TANYA ISTRI / TANYA MAMA"
    ],
    "SUDAH TELAT": [
        "Muncul persis setelah acara selesai atau barang tak terpakai lagi",
        "Waktu berangkat tidak ada, pulang kerja nongol di atas kasur",
        "TELAT / ACARA SELESAI"
    ],
    "BERESKAN KAMAR": [
        "Ditemukan terselip di lipatan selimut saat merapikan ruangan",
        "Muncul ketika bongkar meja belajar yang berantakan",
        "BERESIN KAMAR / RAPIKAN MEJA"
    ],
    "TIDAK BUTUH LAGI": [
        "Saat kepentingan sudah lewat dan tak dicari, malah muncul sendiri",
        "Barang seolah tahu kapan kita tidak membutuhkannya",
        "NGGAK BUTUH / GAK BUTUH"
    ],
    "JADI NOMOR DUA": [
        "Kamu mengambil alih tepat posisi orang yang baru kamu lewati",
        "Hati-hati! Bukan juara 1 karena posisi 1 belum kamu salip",
        "NOMOR DUA / POSISI DUA"
    ],
    "MASIH ADA JUARA SATU": [
        "Pelari terdepan masih berlari di depanmu",
        "Masih ada satu orang lagi yang harus kamu kejar untuk menang",
        "JUARA SATU / POSISI SATU"
    ],
    "DISALIP JADI NOMOR TIGA": [
        "Pembalap yang tadi kamu lewati otomatis mundur satu peringkat",
        "Dari urutan 2 ia tergeser ke belakangmu",
        "NOMOR TIGA / POSISI 3"
    ],
    "BELUM MENANG": [
        "Belum sampai garis finis di peringkat pertama",
        "Baru selangkah lebih dekat, belum meraih medali emas",
        "BELUM JUARA / TIDAK MENANG"
    ],
    "HARUS KEJAR LAGI": [
        "Masih perlu menambah kecepatan untuk menyalip urutan pertama",
        "Jangan puas dulu sebelum melewati pemimpin lomba",
        "KEJAR NOMOR SATU / LARI LEBIH CEPAT"
    ],
    "CAPEK": [
        "Kondisi fisik kelelahan setelah berlari mengejar pelari lain",
        "Napas ngos-ngosan dan kaki terasa berat setelah menyalip",
        "LELAH / LETIH"
    ],
    "BERDIRI": [
        "Posisi tegak dua kaki sebelum peluit dibunyikan panitia",
        "Kalau masih duduk lesehan mana mungkin langsung melompat",
        "TEGAK / BERDIRI TEGAK"
    ],
    "MASUK KARUNG": [
        "Kedua kaki dimasukkan ke dalam karung goni hingga sepinggang",
        "Perlengkapan utama lomba tradisional 17 Agustus",
        "MASUKIN KAKI / PAKAI KARUNG"
    ],
    "PEGANG KARUNG": [
        "Kedua tangan menarik pinggiran atas karung supaya tidak melorot",
        "Pegangan harus kuat agar bisa melompat stabil tanpa jatuh",
        "PEGANG UJUNG KARUNG / TAHAN KARUNG"
    ],
    "DENGAR PELUIT": [
        "Fokus menajamkan telinga menunggu aba-aba mulai dari juri",
        "Jangan curi start sebelum suara tiupan berbunyi",
        "ABA ABA / TUNGGU PELUIT"
    ],
    "SIAP LOMPAT": [
        "Menekuk lutut bersiap melakukan loncatan pertama ke depan",
        "Kuda-kuda agar akselerasi awal melesat cepat",
        "LOMPAT / KUDA KUDA"
    ],
    "LEPAS SANDAL": [
        "Melepas alas kaki di pinggir lintasan supaya tidak licin di karung",
        "Kebiasaan peserta supaya lompatan lebih enteng tanpa tersandung",
        "COPOT SANDAL / LEPAS SEPATU"
    ],
    "BERATNYA SAMA": [
        "Keduanya punya massa persis 10 kilogram di timbangan!",
        "Jebakan fisika SD klasik: 10 kg tetap sama dengan 10 kg",
        "SAMA BERAT / 10 KG SAMA"
    ],
    "BESI LEBIH SAKIT": [
        "Kerapatan & kekerasan logam terpusat di satu titik kecil di kaki",
        "Jari kaki pasti memar meski berat timbangannya sama",
        "SAKIT BESI / BESI KERAS"
    ],
    "KAPAS LEBIH EMPUK": [
        "Sifat seratnya lembut sehingga benturannya teredam nyaman",
        "Terkena kapas rasanya tidak melukai tulang jari kaki",
        "EMPUK / KAPAS LEMBUT"
    ],
    "UKURAN KAPAS BESAR": [
        "Karena massa jenis kecil, 10 kg kapas ukurannya bisa satu karung raksasa",
        "Sementara 10 kg besi ukurannya padat dan kecil",
        "VOLUME KAPAS BESAR / KARUNG BESAR"
    ],
    "BESI JATUH CEPAT": [
        "Hambatan udaranya kecil sehingga langsung menghantam tanpa tertahan angin",
        "Sementara kapas sedikit tertahan hembusan udara",
        "JATUH CEPAT / HAMBATAN UDARA"
    ],
    "MENGHINDAR": [
        "Reaksi refleks menarik kaki ke samping sebelum benda mengenai tubuh",
        "Bukan diam saja membiarkan kaki tertimpa 10 kg barang",
        "TARIK KAKI / MINGGIR"
    ],
    "ILMU": [
        "Pengetahuan yang diajarkan ke orang lain justru makin tajam di ingatan",
        "Semakin sering dibagi ke murid atau rekan, makin dikuasai",
        "PENGETAHUAN / ILMU PENGETAHUAN"
    ],
    "SEDEKAH": [
        "Memberi harta dengan ikhlas dipercaya mendatangkan rezeki berlipat",
        "Semakin sering beramal, keberkahan hidup kian terasa",
        "AMAL / INFAQ"
    ],
    "SENYUM": [
        "Ekspresi wajah ramah yang menular ke semua orang yang melihat",
        "Gratis dibagikan, balasannya juga senyuman hangat",
        "SENYUMAN / RAMAH"
    ],
    "PENGALAMAN": [
        "Semakin sering turun mencoba dan berbagi cerita, jam terbang bertambah",
        "Pembelajaran nyata dari berbagai kejadian hidup",
        "JAM TERBANG / WAWASAN"
    ],
    "TEMAN": [
        "Semakin ramah bergaul di komunitas, lingkar kenalan makin luas",
        "Relasi bertumbuh saat saling mendukung dan menyapa",
        "RELASI / SAHABAT"
    ],
    "KEBAHAGIAAN": [
        "Rasa senang yang dirasakan bersama terasa dua kali lipat lebih indah",
        "Kebalikan kesedihan yang berkurang saat dibagi",
        "BAHAGIA / SUKACITA"
    ],
    "UTANG": [
        "Jawaban belok kocak: semakin sering digesek/dipakai bayar nanti, angkanya makin bengkak!",
        "Cicilan paylater yang dibayar nanti malah menumpuk bunganya",
        "HUTANG / CICILAN"
    ],
    "HARI ESOK": [
        "Saat matahari terbit nanti, kata itu bergeser lagi ke hari berikutnya",
        "Tidak pernah benar-benar bisa disebut \"sekarang\"",
        "BESOK / BESOK HARI"
    ],
    "DIET": [
        "Selalu bilang \"Mulai besok nggak makan gorengan\", tapi besoknya tetap makan",
        "Resolusi sehat yang terus ditunda setiap hari Senin",
        "MULAI DIET / DIET BESOK"
    ],
    "GAJIAN": [
        "Tanggal yang dihitung mundur tiap pertengahan bulan",
        "Rasanya lama datangnya, tapi begitu datang langsung habis cepat",
        "TANGGAL GAJIAN / HARI GAJIAN"
    ],
    "MASA DEPAN": [
        "Waktu yang akan datang dan selalu di depan kita",
        "Ketika sudah sampai, ia berubah menjadi masa kini",
        "HARI DEPAN / MASA NANTI"
    ],
    "JANJI MANIS": [
        "Ucapan manis seperti \"nanti pasti diganti\" atau \"otw sebentar lagi\"",
        "Ditunggu terus namun wujudnya sering meleset",
        "JANJI / PHP"
    ],
    "LIBUR PANJANG": [
        "Jatah cuti panjang yang selalu direncanakan tapi batal karena kerjaan",
        "Sudah masuk wishlist sejak awal tahun namun tertunda",
        "CUTI PANJANG / LIBURAN BESAR"
    ],
    "TOBAT MALAS": [
        "Niat berubah rajin belajar/menabung mulai tanggal 1 bulan depan",
        "Janji perbaikan diri yang sering diundur",
        "MULAI RAJIN / PERUBAHAN DIRI"
    ],
    "SEMUA BULAN": [
        "Jawaban paling tepat! Ke-12 bulan pasti punya tanggal 1 sampai 28!",
        "Jangan terjebak hanya menyebut bulan pendek kabisat",
        "SEMUA / TIAP BULAN"
    ],
    "FEBRUARI": [
        "Bulan kedua yang dikenal paling pendek jumlah harinya",
        "Tepat 28 hari di tahun biasa (atau 29 saat kabisat)",
        "PEBRUARI / BULAN DUA"
    ],
    "JANUARI": [
        "Bulan pertama pembuka tahun (memiliki 31 hari, tentu melewati hari ke-28)",
        "Selalu punya tanggal 28 sebelum tanggal 29–31",
        "BULAN SATU / BULAN PERTAMA"
    ],
    "DESEMBER": [
        "Bulan penutup akhir tahun (punya 31 hari, tentu punya tanggal 28 juga)",
        "Bulan ke-12 sebelum pergantian tahun baru",
        "BULAN KEDUABELAS / BULAN 12"
    ],
    "DUA BELAS BULAN": [
        "Total seluruh bulan dalam satu tahun kalender Masehi",
        "Semua bulan dari ke-1 sampai ke-12 punya tanggal 28",
        "12 BULAN / SETAHUN PENUH"
    ],
    "SETIAP BULAN": [
        "Pasti terulang 12 kali dalam setahun tanpa kecuali",
        "Setiap lembar kalender pasti ada angka 28",
        "TIAP TIAP BULAN"
    ],
    "JARUM": [
        "Benda jahit logam kecil yang punya \"mata\" untuk memasukkan benang",
        "Panjang dan tajam dengan lubang kecil di ujungnya",
        "JARUM JAHIT / MATA JARUM"
    ],
    "MEJA KURSI": [
        "Perabot ruang tamu/makan yang punya empat \"kaki\" penopang",
        "Berdiri tegak di lantai rumah",
        "MEJA / KURSI / MEJA"
    ],
    "BOTOL": [
        "Wadah minum yang punya bagian mengecil bernama \"leher\" dan \"mulut\"",
        "Sering ditutup memakai tutup ulir plastik/logam",
        "LEHER BOTOL / BOTOL KACA"
    ],
    "GERGAJI": [
        "Alat pemotong kayu dari baja yang tepinya dipenuhi deretan \"gigi\" tajam",
        "Digerakkan maju mundur di tukang kayu",
        "GIGI GERGAJI"
    ],
    "KUPING PANCI": [
        "Pegangan kiri-kanan berlubang di sisi wadah masak",
        "Tempat memegang kain serbet biar tangan tidak kepanasan",
        "PANCI / GAGANG PANCI"
    ],
    "DAUN PINTU": [
        "Bagian kayu/kaca yang dibuka tutup di kusen masuk ruangan",
        "Sering disebut pula punya anak dan induk atau kusen",
        "PINTU / DAUN JENDELA"
    ],
    "RESLETING": [
        "Pengait jaket atau celana yang punya deretan \"gigi\" pengunci",
        "Menyatukan dua sisi kain saat ditarik ke atas",
        "RITSLETING / ZIPPER"
    ],
    "CEK METERAN LISTRIK": [
        "Berjalan memeriksa kotak MCB atau token prabayar di dinding depan",
        "Siapa tahu cuma sekring jeglek atau lupa isi pulsa listrik",
        "CEK MCB / SEKRING"
    ],
    "INTIP TETANGGA": [
        "Membuka gorden jendela mengecek apakah lampu rumah sebelah ikut gelap",
        "Ritual wajib memastikan mati lampu massal atau rumah kita saja",
        "LIHAT TETANGGA / NGINTIP TETANGGA"
    ],
    "TERIAK MATI LAMPU": [
        "Refleks berseru kaget \"Yaaah mati lampu!\" seisi rumah/kos",
        "Padahal seluruh ruangan sudah tahu mendadak gelap",
        "MATI LAMPU / MATI LISTRIK"
    ],
    "NYALAKAN SENTER": [
        "Menyalakan lampu flash LED ponsel untuk menerangi jalan ke saklar",
        "Cahaya penyelamat pertama di ruangan gelap gulita",
        "SENTER / FLASHLIGHT"
    ],
    "CARI LILIN": [
        "Meraba-raba laci dapur mencari batang lilin dan korek api",
        "Atau lampu emergency yang lupa di-charge",
        "LILIN / LAMPU EMERGENCY"
    ],
    "CEK WIFI": [
        "Mengamati ponsel yang tiba-tiba pindah ke kuota seluler",
        "Router mati karena listrik padam sehingga paket data menipis",
        "WIFI MATI / PAKET DATA"
    ],
    "SYARAT DAN KETENTUAN": [
        "Teks panjang berisi pasal hukum saat instal aplikasi atau buat akun",
        "Langsung dicentang \"Saya Setuju\" tanpa pernah dibaca satu kata pun",
        "SYARAT KETENTUAN / TERMS"
    ],
    "BUKU PANDUAN": [
        "Kertas lipat tebal di dalam dus barang elektronik baru",
        "Langsung disingkirkan karena merasa langsung bisa mengoperasikan",
        "MANUAL BOOK / BUKU MANUAL"
    ],
    "ATURAN GARANSI": [
        "Kartu kecil bertuliskan syarat klaim kerusakan yang sering hilang",
        "Baru dibaca kalau barang sudah terlanjur rusak",
        "KARTU GARANSI / GARANSI"
    ],
    "KEBIJAKAN PRIVASI": [
        "Tautan persetujuan pemrosesan data dan cookie di halaman web",
        "Langsung klik \"Accept All\" biar banner cepat hilang",
        "PRIVACY POLICY / COOKIE"
    ],
    "DILARANG PARKIR": [
        "Papan tanda huruf P dicoret yang sering diabaikan kendaraan",
        "Tetap ditempati parkir \"sebentar aja kok bang\"",
        "RAMBU DILARANG PARKIR / PARKIR SEMBARANGAN"
    ],
    "ATURAN KOMPLEK": [
        "Spanduk \"Tamu Harap Lapor\" atau \"Dilarang Buang Sampah\" di gang",
        "Kadang dianggap hiasan tembok semata",
        "PAPAN ATURAN / TATA TERTIB"
    ],
    "KEMASAN OBAT": [
        "Tulisan kecil aturan pakai & efek samping di belakang botol/strip",
        "Jarang dibaca lengkap selama sudah tahu dosis minumnya",
        "BROSUR OBAT / ATURAN MINUM OBAT"
    ],
    "SUDAH KAYA": [
        "Tabungan miliaran sudah penuh di bank sehingga tak tergoda lagi",
        "Buat apa 1M kalau hartanya sudah puluhan M",
        "ORANG KAYA / KAYA RAYA"
    ],
    "PURA PURA BIJAK": [
        "Menjawab mulia karena sedang dilihat kamera atau teman sekitar",
        "Padahal dalam hati pengen pilih uang tunainya juga",
        "PURA-PURA BIJAK / PENCITRAAN"
    ],
    "MASIH NGANTUK": [
        "Salah dengar pilihan pertanyaannya karena kurang tidur",
        "Begitu sadar langsung minta ganti jawaban ke uang tunai",
        "NGANTUK BERAT / SALAH DENGER"
    ],
    "LAGI BANYAK MASALAH": [
        "Lagi butuh tempat curhat sejati yang uang saja tidak bisa selesaikan",
        "Merasa kesepian butuh pendengar tulus",
        "KESPIAN / KESEPIAN"
    ],
    "GURU MOTIVASI": [
        "Pekerjaannya memberi petuah inspiratif bahwa persahabatan tak ternilai",
        "Jawaban khas seminar pengembangan diri",
        "MOTIVATOR / KATA MUTIARA"
    ],
    "BARU GAJIAN": [
        "Kondisi mental tanggal muda masih percaya diri merasa mapan",
        "Coba tanya lagi pas tanggal 27 akhir bulan!",
        "TANGGAL MUDA / MASIH ADA UANG"
    ],
    "TAKUT DIHUJAT": [
        "Khawatir dicap materialistis kalau jujur pilih duit di depan umum",
        "Menjaga citra baik di mata audiens",
        "TAKUT DICAP MATRE / JAGA IMAGE"
    ],
    "JALAN CEPAT BAWA KERTAS": [
        "Berjalan terburu-buru di koridor sambil memeluk map atau laptop terbuka",
        "Trik klasik agar tidak ada yang berani menambah kerjaan kita",
        "JALAN CEPAT / BAWA MAP"
    ],
    "DAHI BERKERUT": [
        "Ekspresi alis menukik serius menatap monitor seolah memecahkan rumus nuklir",
        "Padahal lagi baca berita atau belanja online",
        "MUKA SERIUS / ALIS BERKERUT"
    ],
    "BUKA BANYAK TAB": [
        "Layar browser penuh puluhan jendela dan sheet Excel bertumpuk",
        "Setiap bos lewat langsung Alt+Tab ke dashboard grafik",
        "BANYAK TAB / ALT TAB"
    ],
    "PAKAI EARPHONE": [
        "Memasang headset di kedua telinga tanda \"jangan diganggu\"",
        "Seolah lagi rapat online padahal cuma dengar musik",
        "PAKAI HEADSET / EARPHONE KANTOR"
    ],
    "NGETIK CEPAT": [
        "Jari memukul keyboard bertubi-tubi bersuara keras (tok-tok-tok)",
        "Terdengar sangat produktif bagi orang di sebelah kubikel",
        "MENGETIK CEPAT / SUARA KEYBOARD"
    ],
    "TELPONAN MONDAR MANDIR": [
        "Berjalan ke sana kemari sambil memegang HP di telinga dengan nada tegas",
        "\"Iya oke, pastikan besok beres ya!\"",
        "TELPONAN / MONDAR MANDIR"
    ],
    "MINUM KOPI SERIUS": [
        "Menyeruput gelas kopi hitam tanpa senyum sambil menatap jam",
        "Nuansa sibuk ala eksekutif dikejar tenggat",
        "NGOPI SERIUS / TAMPANG LELAH"
    ],
    "MEJA BERANTAKAN": [
        "Menumpuk map, nota, dan catatan tempel (sticky notes) di seluruh meja",
        "Memberi kesan tugasnya sangat melimpah ruah",
        "MEJA PENUH / TUMPUKAN BERKAS"
    ],
    "PARKIR GRATIS": [
        "Spanduk besar bertuliskan bebas biaya, tapi pas mundur muncul suara peluit",
        "Tetap keluar uang receh Rp 2.000 demi keamanan kendaraan",
        "BEBAS PARKIR / TUKANG PARKIR"
    ],
    "CUMA LIHAT LIHAT": [
        "Masuk mall/e-commerce berniat cuci mata saja, pulang bawa kantong belanja",
        "Godaan diskon warna merah terlalu kuat ditahan",
        "CUMA LIHAT-LIHAT / WINDOW SHOPPING"
    ],
    "ONGKIR MINIMAL BELANJA": [
        "Niat berhemat gratis ongkir Rp 10 ribu malah nambah belanja Rp 100 ribu",
        "Demi memenuhi syarat minimal keranjang gratis ongkir",
        "GRATIS ONGKIR / MINIMAL BELANJA"
    ],
    "KONDANGAN": [
        "Datang acara makan prasmanan gratis, tapi wajib siap amplop di pintu masuk",
        "Modal bensin + amplop kadang jauh melebihi porsi rendangnya",
        "UNDANGAN NIKAH / AMPLOP KONDANGAN"
    ],
    "COBA GRATIS": [
        "Ditawari cicip sampel kecil di toko lalu tidak enak hati jika tidak beli",
        "Akhirnya keluar uang membeli kemasan besarnya",
        "SAMPLE GRATIS / CICIP GRATIS"
    ],
    "TRIAL APLIKASI": [
        "Daftar langganan gratis 7 hari, lalu lupa membatalkan hingga terpotong otomatis",
        "Jebakan perpanjangan langganan otomatis di kartu/e-wallet",
        "FREE TRIAL / LANGGANAN OTOMATIS"
    ],
    "DISKON BESAR": [
        "Label potongan 70% yang memancing membeli barang yang tidak dibutuhkan",
        "Bukan hemat, malah boros karena beli impulsif",
        "DISKON / PROMO BESAR"
    ],
    "LAGI BERPIKIR KERAS": [
        "Ngeles elegan: mata terpejam tanda sedang menyusun strategi tingkat tinggi",
        "Jawaban standar saat kepergok mengangguk-angguk di meja",
        "BERPIKIR / MIKIR"
    ],
    "MATA PEDIH": [
        "Mengaku mata perih/kelilipan debu akibat terlalu lama menatap layar",
        "Sambil mengucek-ucek kelopak mata dengan dramatis",
        "KELILIPAN / MATA KERING"
    ],
    "LAGI BERDOA": [
        "Berdalih sedang menunduk khusyuk memanjatkan doa keselamatan perusahaan",
        "Atasan jadi canggung mau menegur",
        "DOA DI MEJA / KHUSYUK"
    ],
    "PUSING": [
        "Memegang kening mengaku sakit kepala/migrain mendadak",
        "Agar malah dikasih simpati dan disuruh istirahat",
        "SAKIT KEPALA / MIGRAIN"
    ],
    "TUNGGU LOADING": [
        "Beralasan sistem/render Excel sedang macet berputar sehingga memejam sejenak",
        "Menyalahkan lambatnya komputer kantor",
        "LOADING LAMA / NUNGGU PROSES"
    ],
    "ISTIRAHAT MATA": [
        "Mengikuti saran dokter 20-20-20 mengistirahatkan retina dari radiasi layar",
        "Alasan ilmiah menjaga kesehatan kerja",
        "REHAT MATA / ISTIRAHATKAN MATA"
    ],
    "MENGHAFAL DATA": [
        "Mengaku sedang mengulang hafalan angka presentasi di luar kepala",
        "Seolah sedang berlatih tanpa melihat teks",
        "MENGHAFAL / LATIHAN PRESENTASI"
    ]
};

    const QUESTION_CLUE_OVERRIDES = {
    "34:SISIR": [
        "Alat bergigi tipis yang dipegang tukang cukur bersama gunting",
        "Merapikan helai rambut pelanggan sebelum dan sesudah dipotong"
    ],
    "49:SISIR": [
        "Benda perawat rambut yang disebut punya bagian \"gigi\"",
        "Terbuat dari plastik atau kayu bergerigi rapat di satu sisi"
    ],
    "37:TIDUR": [
        "Istirahat terlelap di malam hari sebelum kamu bisa terbangun",
        "Tanpa melakukan hal ini, tidak mungkin ada momen \"bangun tidur\""
    ],
    "50:TIDUR": [
        "Pilihan realistis jika malam sudah larut dan baterai HP menipis",
        "Mending langsung tarik selimut sampai listrik menyala besok pagi"
    ]
};

    function maskWord(word, tier) {
        if (!word) return '';
        if (word.length === 1) return '•';
        if (word.length === 2) return tier >= 3 ? word[0] + '•' : '••';
        if (tier === 2) return word[0] + '•'.repeat(word.length - 1);
        return word[0] + '•'.repeat(word.length - 2) + word[word.length - 1];
    }

    function buildMask(normAnswer, tier) {
        return normAnswer.split(' ').filter(Boolean).map((w) => maskWord(w, tier)).join(' ');
    }

    function normalizeKey(text) {
        return String(text || '')
            .toUpperCase()
            .trim()
            .replace(/[^\p{L}\p{N}\s]/gu, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function getTieredClue(questionId, answerText, points, tier) {
        const cleanTier = Math.min(3, Math.max(1, Number(tier) || 1));
        const key = normalizeKey(answerText);
        const words = key.split(' ').filter(Boolean);
        const letterCount = key.replace(/\s+/g, '').length;
        const lengthLabel = words.length > 1
            ? `${words.length} kata, ${letterCount} huruf`
            : `${letterCount} huruf`;

        const override = QUESTION_CLUE_OVERRIDES[`${questionId}:${key}`];
        const entry = ANSWER_CLUES[key];
        const c1 = override ? override[0] : (entry ? entry[0] : `Jawaban survei bernilai ${points} poin`);
        const c2 = override ? override[1] : (entry ? entry[1] : 'Pikirkan jawaban paling relevan dengan pertanyaan');
        const nearHint = entry && entry[2] ? entry[2] : '';

        if (cleanTier === 1) {
            return `💡 [Clue 1/3] ${c1} (${lengthLabel})`;
        }
        if (cleanTier === 2) {
            return `💡 [Clue 2/3] ${c2} • Awal: ${buildMask(key, 2)}`;
        }
        const synBit = nearHint ? ` • Dekat: ${nearHint}` : '';
        return `💡 [Clue 3/3] Pola: ${buildMask(key, 3)}${synBit}`;
    }

    window.Family100Data = Object.freeze({
        SYNONYM_GROUPS,
        ANSWER_CLUES,
        QUESTION_CLUE_OVERRIDES,
        getTieredClue,
    });
})();
