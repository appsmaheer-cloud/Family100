(() => {
    'use strict';

    const CAK_LONTONG_QUESTIONS = [
            {
                    "id": 1,
                    "category": "Klasik WIB",
                    "question": "Orang yang paling sering datang terlambat ke acara pernikahan mantan adalah...",
                    "answer": "DIUNDANG",
                    "isTwist": true,
                    "trap": "DATANG",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Syarat mutlak sebelum boleh masuk ke gedung resepsi.",
                            "Kalau nggak terima kartu ini, ngapain nekat datang ke nikahan mantan?!"
                    ],
                    "reason": "D-?-?-?-?-?-?-G! Yang datang aja berarti memang DIUNDANG, kalau nggak diundang ya jadi tamu tak diundang!"
            },
            {
                    "id": 2,
                    "category": "Klasik WIB",
                    "question": "Alat musik tradisional yang dipukul sekeras apa pun tetap nggak bunyi sama sekali adalah...",
                    "answer": "RUSAK",
                    "isTwist": true,
                    "trap": "REBANA",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Bukan jenis alat musiknya, tapi kondisinya.",
                            "Mau gendang, gong, atau angklung, kalau udah kondisi ini ya bisu!"
                    ],
                    "reason": "R-?-?-?-K! Mau dipukul pakai palu juga kalau alat musiknya udah RUSAK ya tetap nggak bunyi!"
            },
            {
                    "id": 3,
                    "category": "Klasik WIB",
                    "question": "Kenapa di Indonesia orang kalau makan bakso kuah selalu pakai mangkok?",
                    "answer": "PANAS",
                    "isTwist": true,
                    "trap": "PEDAS",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Bukan soal rasa sambalnya.",
                            "Coba tuang kuah bakso mendidih langsung ke telapak tangan!"
                    ],
                    "reason": "P-?-?-?-S! Kalau ditaruh di tangan langsung ya PANAS melepuh, makanya pakai mangkok!"
            },
            {
                    "id": 4,
                    "category": "Klasik WIB",
                    "question": "Benda paling berharga yang kalau jatuh ke trotoar nggak pernah pecah, tapi bikin pemiliknya langsung lemas dan pengen pulang?",
                    "answer": "HARGA DIRI",
                    "isTwist": true,
                    "trap": "HARTA BENDA",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Tidak berbentuk fisik tapi langsung hilang pas kesandung depan gebetan.",
                            "Apalagi kalau jatuhnya sambil bawa nampan makanan!"
                    ],
                    "reason": "HARGA DIRI! Jatuh di depan umum nggak bunyi \"prang\", tapi bikin pengen pindah planet!"
            },
            {
                    "id": 5,
                    "category": "Klasik WIB",
                    "question": "Hewan yang kalau tidur matanya tetap terbuka lebar tidak pernah merem adalah...",
                    "answer": "LUPA MEREM",
                    "isTwist": true,
                    "trap": "IKAN MAS",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Nggak usah cari teori biologi di Google!",
                            "Kenapa matanya terbuka pas tidur? Ya karena dia..."
                    ],
                    "reason": "LUPA MEREM! Udah capek banget berenang seharian sampai ketiduran dan LUPA MEREM!"
            },
            {
                    "id": 6,
                    "category": "Klasik WIB",
                    "question": "Satu-satunya tempat di mana orang masuk bayar, keluarnya pengen nangis, tapi pas ditanya masnya tetap jawab \"Bagus banget!\" adalah...",
                    "answer": "POTONG RAMBUT",
                    "isTwist": true,
                    "trap": "PANTAI BARAT",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Niatnya minta model oppa Korea, hasilnya malah kayak mangkok bakso.",
                            "Tapi pas ditanya \"Udah oke Mas?\", mulut tetap refleks bilang bagus!"
                    ],
                    "reason": "POTONG RAMBUT! Nyeselnya setengah mati, tapi nggak enak ngomongnya ke tukang cukur!"
            },
            {
                    "id": 7,
                    "category": "Klasik WIB",
                    "question": "Kenapa Superman kalau terbang di langit tangannya selalu lurus ke depan?",
                    "answer": "TAKUT NABRAK",
                    "isTwist": true,
                    "trap": "TERBANG CEPAT",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Di atas awan nggak ada spion dan nggak ada lampu sein.",
                            "Jaga-jaga kalau mendadak ada tiang sutet atau burung lewat!"
                    ],
                    "reason": "TAKUT NABRAK! Kecepatan supersonik tanpa rem ABS, ya tangannya buat tameng depan!"
            },
            {
                    "id": 8,
                    "category": "Klasik WIB",
                    "question": "Kenapa kalau di mulut kita lagi ada sariawan, lidah selalu iseng nyenggol-nyenggol sariawannya terus padahal tahu perih?",
                    "answer": "KEPO",
                    "isTwist": true,
                    "trap": "KAKU",
                    "openIndices": [
                            0,
                            3
                    ],
                    "clues": [
                            "Sifat dasar lidah yang nggak bisa lihat ada benjolan aneh.",
                            "Empat huruf bahasa gaul: selalu pengen tahu!"
                    ],
                    "reason": "K-?-?-O! Lidah itu organ tubuh paling KEPO sedunia — tahu sakit tetap aja dicek tiap lima detik!"
            },
            {
                    "id": 9,
                    "category": "Lingkungan Kantor",
                    "question": "Karyawan yang paling disayang bos karena nggak pernah minta naik gaji, nggak pernah cuti, dan nggak pernah protes lembur adalah...",
                    "answer": "PRINTER",
                    "isTwist": true,
                    "trap": "PEKERJA",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Kerjanya nyetak laporan dari pagi sampai malam.",
                            "Tapi sekalinya ngambek kertasnya nyangkut, satu kantor panik!"
                    ],
                    "reason": "P-?-?-?-?-?-R bukan PEKERJA! Itu PRINTER kantor — kerja keras tanpa gaji, tapi kalau error dimarahin semua divisi!"
            },
            {
                    "id": 10,
                    "category": "Lingkungan Kantor",
                    "question": "Kalimat paling horor di chat WhatsApp dari atasan yang bikin jantung turun ke dengkul adalah...",
                    "answer": "SEBENTAR YA",
                    "isTwist": true,
                    "trap": "SEMUANYA KE",
                    "openIndices": [
                            0,
                            9
                    ],
                    "clues": [
                            "Kelihatannya sopan dan singkat, cuma dua kata.",
                            "Biasanya diikuti dengan: \"...saya cek dulu datanya di sistem.\""
                    ],
                    "reason": "SEBENTAR YA! Dua kata paling menegangkan di dunia kerja — bikin kita langsung ngecek ulang semua file seminggu terakhir!"
            },
            {
                    "id": 11,
                    "category": "Lingkungan Kantor",
                    "question": "Kenapa di setiap kantor selalu ada satu orang yang mejanya paling rapi bersih tanpa selembar kertas pun?",
                    "answer": "BARU MASUK",
                    "isTwist": true,
                    "trap": "BERSIH RAJIN",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan karena dia karyawan paling rapi sedunia.",
                            "Belum dikasih kerjaan apa-apa sama manajernya!"
                    ],
                    "reason": "BARU MASUK hari pertama! (Atau barangnya udah di-packing semua karena hari terakhir sebelum resign!)"
            },
            {
                    "id": 12,
                    "category": "Lingkungan Kantor",
                    "question": "Alasan rahasia kenapa AC ruang meeting kantor selalu disetel sedingin kutub utara?",
                    "answer": "BIAR CEPAT",
                    "isTwist": true,
                    "trap": "BIAR SEGAR",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan supaya karyawan nggak ngantuk.",
                            "Kalau semua udah menggigil kedinginan, nggak ada yang berani nambah pertanyaan!"
                    ],
                    "reason": "BIAR CEPAT selesai rapatnya! Kalau ruangannya hangat dan nyaman, nanti diskusi malah molor sampai magrib!"
            },
            {
                    "id": 13,
                    "category": "Lingkungan Kantor",
                    "question": "Saat presentasi PowerPoint panjang di depan direksi, slide yang paling ditunggu dan bikin ruangan langsung ceria adalah...",
                    "answer": "TERIMA KASIH",
                    "isTwist": true,
                    "trap": "TARGET KERJA",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Letaknya selalu di urutan paling buncit.",
                            "Tidak ada grafik, tidak ada tabel, cuma dua kata penutup!"
                    ],
                    "reason": "Slide TERIMA KASIH! Semua peserta rapat langsung narik napas lega karena sebentar lagi bubar!"
            },
            {
                    "id": 14,
                    "category": "Lingkungan Kantor",
                    "question": "Aktivitas di meja kerja yang jari tangannya mengetik super cepat bunyi tek-tek-tek, tapi laporan Excel-nya nggak nambah satu baris pun?",
                    "answer": "CHATTINGAN",
                    "isTwist": true,
                    "trap": "CORETAN",
                    "openIndices": [
                            0,
                            9
                    ],
                    "clues": [
                            "Begitu bos lewat belakang kursi, langsung refleks pencet Alt+Tab!",
                            "Sering senyum-senyum sendiri menghadap monitor!"
                    ],
                    "reason": "CHATTINGAN di WhatsApp Web! Wajah serius banget kayak lagi ngitung pajak, padahal lagi gibah di grup!"
            },
            {
                    "id": 15,
                    "category": "Ice Breaking",
                    "question": "Dalam acara tebak-tebakan, kenapa peserta yang paling keras ketawanya justru yang paling nggak ngerti maksud jokes-nya?",
                    "answer": "IKUTAN",
                    "isTwist": true,
                    "trap": "INGIN",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Takut ketahuan lemot sama teman sebelahnya.",
                            "Jadi begitu dengar orang lain ketawa, dia langsung..."
                    ],
                    "reason": "I-?-?-?-?-N! Dia cuma IKUTAN ketawa paling kencang biar dianggap nyambung!"
            },
            {
                    "id": 16,
                    "category": "Ice Breaking",
                    "question": "Momen paling ajaib yang bikin peserta acara kantor mendadak punya bakat akting tingkat Oscar adalah saat...",
                    "answer": "DITUNJUK MC",
                    "isTwist": true,
                    "trap": "DAPAT HADIAH",
                    "openIndices": [
                            0,
                            9
                    ],
                    "clues": [
                            "Tiba-tiba pura-pura sibuk minum air, ikat tali sepatu, atau angkat telepon penting.",
                            "Semua dilakukan supaya nggak disuruh maju ke panggung!"
                    ],
                    "reason": "Saat hampir DITUNJUK MC untuk maju ke depan! Mendadak semua punya urusan darurat di HP!"
            },
            {
                    "id": 17,
                    "category": "Ice Breaking",
                    "question": "Satu-satunya momen di mana orang dewasa rela lari sprint kayak atlet Olimpiade tanpa dibayar sepeser pun?",
                    "answer": "REBUTAN KURSI",
                    "isTwist": true,
                    "trap": "RUANG MAKAN",
                    "openIndices": [
                            0,
                            8
                    ],
                    "clues": [
                            "Terjadi begitu musik permainan dihentikan oleh panitia.",
                            "Harga diri langsung hilang demi satu tempat duduk plastik!"
                    ],
                    "reason": "REBUTAN KURSI! Game klasik paling brutal — teman sekantor pun disenggol demi duduk!"
            },
            {
                    "id": 18,
                    "category": "Ice Breaking",
                    "question": "Kenapa saat acara tukar kado kantor, orang yang paling semangat buka kado duluan justru yang kadonya paling...",
                    "answer": "MURAH",
                    "isTwist": true,
                    "trap": "MEWAH",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Bungkusnya tebal banget pakai koran berlapis-lapis, isinya ternyata sabun batang.",
                            "Tapi dia berharap banget dapat voucher belanja!"
                    ],
                    "reason": "M-?-?-?-H bukan MEWAH! Justru yang modal kadonya paling MURAH yang paling agresif ngincer kado paling gede!"
            },
            {
                    "id": 19,
                    "category": "Ice Breaking",
                    "question": "Penyakit menular paling cepat di ruangan seminar ber-AC yang bukan disebabkan oleh virus atau bakteri adalah...",
                    "answer": "NGUAP",
                    "isTwist": true,
                    "trap": "NYIAP",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Satu orang di pojok melakukannya lebar-lebar.",
                            "Tiga detik kemudian satu ruangan ikut mangap semua!"
                    ],
                    "reason": "N-?-?-?-P! NGUAP itu menular lewat tatapan mata — lebih cepat dari WiFi 5G!"
            },
            {
                    "id": 20,
                    "category": "Gen Z & Sosmed",
                    "question": "Kenapa anak Gen Z kalau lagi patah hati bukannya tidur malah bikin story Instagram galau?",
                    "answer": "BIAR DILIHAT",
                    "isTwist": true,
                    "trap": "BUTUH TEMAN",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan buat curhat ke semua followers.",
                            "Setiap 5 menit dicek daftar viewers-nya buat nyari satu nama!"
                    ],
                    "reason": "BIAR DILIHAT sama satu orang spesifik itu! Kalau dia udah view, story-nya langsung di-delete!"
            },
            {
                    "id": 21,
                    "category": "Gen Z & Sosmed",
                    "question": "Alasan paling jujur kenapa orang rela antre 2 jam di kafe baru yang rasa kopinya biasa aja?",
                    "answer": "KONTEN",
                    "isTwist": true,
                    "trap": "KOPI",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Yang dibeli bukan rasa minumannya.",
                            "Wajib foto gelas di depan cermin estetik sebelum es batunya mencair!"
                    ],
                    "reason": "K-?-?-?-?-N! Kopinya diminum dua teguk doang, sisanya buat KONTEN biar dianggap paling update!"
            },
            {
                    "id": 22,
                    "category": "Gen Z & Sosmed",
                    "question": "Kenapa fitur \"Last Seen\" di WhatsApp paling sering dimatikan sama orang yang ngakunya lagi sibuk banget?",
                    "answer": "ONLINE TERUS",
                    "isTwist": true,
                    "trap": "ORANG SIBUK",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Bilangnya lagi lembur nggak pegang HP.",
                            "Padahal jam 2 pagi masih aktif balesin komentar TikTok dan checkout Shopee!"
                    ],
                    "reason": "Karena dia sebenarnya ONLINE TERUS! Kalau Last Seen dinyalain nanti ketahuan nggak balas chat kerjaan!"
            },
            {
                    "id": 23,
                    "category": "Milenial & Boomers",
                    "question": "Benda legendaris di rumah orang tua kita yang umurnya lebih tua dari kita sendiri, tapi isinya nggak pernah sesuai gambar di luarnya?",
                    "answer": "TOPLES KHONG GUAN",
                    "isTwist": true,
                    "trap": "TEMPAT MAKAN",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Di luar gambarnya keluarga bahagia makan biskuit.",
                            "Begitu dibuka isinya jarum jahit, benang, atau kerupuk melempem!"
                    ],
                    "reason": "TOPLES KHONG GUAN! Sumber kekecewaan masa kecil paling ikonik di seluruh Indonesia!"
            },
            {
                    "id": 24,
                    "category": "Milenial & Boomers",
                    "question": "Kenapa kalau ibu-ibu naik motor mau belok ke kanan, lampu sein-nya sering nyala ke kiri?",
                    "answer": "BIAR PENASARAN",
                    "isTwist": true,
                    "trap": "BINGUNG ARAH",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan karena lupa matikan saklar.",
                            "Taktik psikologis biar pengendara di belakang nggak bisa nebak pergerakan selanjutnya!"
                    ],
                    "reason": "BIAR PENASARAN! Supaya orang di belakang tetap waspada dan nggak lengah!"
            },
            {
                    "id": 25,
                    "category": "Milenial & Boomers",
                    "question": "Satu-satunya bunyi di tubuh yang langsung bikin anak Milenial sadar bahwa dirinya sudah tidak muda lagi?",
                    "answer": "BUNYI LUTUT",
                    "isTwist": true,
                    "trap": "BANYAK UTANG",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Terjadi pas jongkok ngambil barang jatuh di bawah meja.",
                            "Suaranya \"KRETEK\" lebih keras dari suara TV!"
                    ],
                    "reason": "BUNYI LUTUT! Umur boleh 28, tapi lutut udah ngasih bunyi peringatan kayak engsel pintu tua!"
            },
            {
                    "id": 26,
                    "category": "Bapak-bapak",
                    "question": "Alasan paling jujur kenapa bapak-bapak kalau nyetir mobil dan nyasar tetap nggak mau tanya orang di pinggir jalan?",
                    "answer": "GENGSI",
                    "isTwist": true,
                    "trap": "GRATIS",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Lebih rela muter komplek 4 kali sambil bilang \"Ini jalan tembusannya nih!\"",
                            "Padahal bensin udah sekarat!"
                    ],
                    "reason": "G-?-?-?-?-I! Harga diri seorang kepala keluarga nggak boleh turun cuma gara-gara nanya arah!"
            },
            {
                    "id": 27,
                    "category": "Bapak-bapak",
                    "question": "Tempat paling damai di rumah bagi seorang suami untuk merenungkan makna hidup selama 30 menit sambil bawa HP?",
                    "answer": "KAMAR MANDI",
                    "isTwist": true,
                    "trap": "KURSI TAMU",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan lagi sakit perut.",
                            "Satu-satunya ruangan di rumah yang pintunya boleh dikunci tanpa dicurigai!"
                    ],
                    "reason": "KAMAR MANDI! Surga keheningan 30 menit buat nonton reels mancing tanpa disuruh beli galon!"
            },
            {
                    "id": 28,
                    "category": "Bapak-bapak",
                    "question": "Kenapa bapak-bapak kalau lagi nonton bola di TV teriaknya lebih keras daripada pelatih di pinggir lapangan?",
                    "answer": "NGGAK KEDENGARAN",
                    "isTwist": true,
                    "trap": "NONTON BARENG",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Pemainnya lagi lari di stadion Eropa.",
                            "Yang teriak duduk di sofa Bekasi!"
                    ],
                    "reason": "Ya karena jaraknya jauh banget jadi NGGAK KEDENGARAN! Makanya bapak-bapak teriak sekuat tenaga!"
            },
            {
                    "id": 29,
                    "category": "Bapak-bapak",
                    "question": "Jawaban paling aman dan bijaksana bagi suami saat istri pamer baju baru dan tanya \"Mas, aku kelihatan gendutan nggak?\"",
                    "answer": "DIAM SAJA",
                    "isTwist": true,
                    "trap": "DIET AJA",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Jangan jawab \"Iya dikit\" dan jangan jawab \"Nggak kok\" terlalu cepat!",
                            "Salah nada sedikit bisa jadi pembahasan tiga hari tiga malam!"
                    ],
                    "reason": "DIAM SAJA sambil senyum tipis dan pura-pura batuk adalah kunci keselamatan rumah tangga!"
            },
            {
                    "id": 30,
                    "category": "Klasik WIB",
                    "question": "Pedagang kaki lima di pinggir jalan langsung bubar berhamburan karena ada...",
                    "answer": "RAMAI",
                    "isTwist": true,
                    "trap": "RAZIA",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Bukan Satpol PP atau hujan badai!",
                            "Justru kondisi yang paling didoakan semua pedagang!"
                    ],
                    "reason": "R-?-?-?-I bukan RAZIA! Karena pembelinya RAMAI banget, dagangannya langsung ludes habis terus bubar pulang!"
            },
            {
                    "id": 31,
                    "category": "Soal Cerita",
                    "question": "Di ruang rapat lantai 5, 6 manajer sedang diskusi serius. Tiba-tiba listrik padam total dan ruangan gelap gulita. Semua manajer langsung refleks keluarkan HP masing-masing. Bukan untuk menyalakan senter, tapi untuk...",
                    "answer": "CEK WIFI",
                    "isTwist": true,
                    "trap": "CARI SINYAL",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Lampu mati nggak masalah bagi orang kantor.",
                            "Yang penting koneksi internet dan grup WhatsApp tetap jalan!"
                    ],
                    "reason": "CEK WIFI! Gelap bisa ditahan, tapi kalau internet putus serasa kiamat!"
            },
            {
                    "id": 32,
                    "category": "Soal Cerita",
                    "question": "Pak Joko pergi memancing dari jam 6 pagi sampai jam 5 sore dengan pancingan mahal. Sepanjang hari kailnya nggak pernah dimakan ikan satu ekor pun. Anehnya, saat pulang ke rumah dengan ember kosong, Pak Joko tetap tersenyum puas. Kenapa?",
                    "answer": "BEBAS OMELAN",
                    "isTwist": true,
                    "trap": "BANYAK IKAN",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Dapat ikan atau nggak urusan belakangan.",
                            "Yang penting seharian penuh dia tenang di tepi danau!"
                    ],
                    "reason": "BEBAS OMELAN seharian di rumah! Dapat ikan cuma bonus, ketenangan jiwa adalah tujuan utama!"
            },
            {
                    "id": 33,
                    "category": "Soal Cerita",
                    "question": "Seorang mahasiswa kosan membeli mie instan 5 bungkus untuk stok akhir bulan. Hari pertama ia makan 1 bungkus, hari kedua 1 bungkus. Pada hari ketiga, mie-nya tinggal bungkusnya saja tanpa isi. Kenapa?",
                    "answer": "DIMAKAN TEMAN",
                    "isTwist": true,
                    "trap": "DIAMBIL TIKUS",
                    "openIndices": [
                            0,
                            8
                    ],
                    "clues": [
                            "Bukan dimakan tikus atau semut.",
                            "Di kosan, barang tanpa gembok otomatis jadi hak milik bersama!"
                    ],
                    "reason": "DIMAKAN TEMAN sekosan! Bahkan air panasnya pun pakai dispenser dia!"
            },
            {
                    "id": 34,
                    "category": "Soal Cerita",
                    "question": "Rani pesan ojek online karena udah telat kerja. Begitu motor berhenti di depan pagar, Rani langsung naik ke jok belakang tanpa tanya apa-apa. Setelah 5 menit jalan, motor berhenti mendadak karena ternyata...",
                    "answer": "SALAH DRIVER",
                    "isTwist": true,
                    "trap": "SOLAR HABIS",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan bensin habis atau ban bocor.",
                            "Abang ojeknya bingung kenapa ada orang asing tiba-tiba naik di belakang!"
                    ],
                    "reason": "SALAH DRIVER! Ternyata itu tetangga atau ojek yang lagi nunggu orderan rumah sebelah!"
            },
            {
                    "id": 35,
                    "category": "Soal Cerita",
                    "question": "Dalam lomba lari maraton 10 km, Doni berlari sangat kencang hingga berhasil menyalip pelari di posisi ke-2 tepat sebelum garis finis. Di posisi ke berapakah Doni sekarang?",
                    "answer": "KEDUA",
                    "isTwist": true,
                    "trap": "KESATU",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Jangan buru-buru jawab juara satu!",
                            "Yang disalip itu pelari posisi ke-2, pelari ke-1 masih di depan!"
                    ],
                    "reason": "K-?-?-?-A! Kalau kamu nyalip orang di posisi ke-2, kamu menempati posisi KEDUA, bukan kesatu!"
            },
            {
                    "id": 36,
                    "category": "Soal Cerita",
                    "question": "Ayah Rina punya 4 anak: Senin, Selasa, Rabu, dan satu anak bungsu yang lahir di hari Minggu pagi. Siapakah nama anak keempat ayah Rina?",
                    "answer": "RINA",
                    "isTwist": true,
                    "trap": "RABU",
                    "openIndices": [
                            0,
                            3
                    ],
                    "clues": [
                            "Jangan jawab Kamis atau Minggu!",
                            "Baca lagi dua kata paling awal di soalnya!"
                    ],
                    "reason": "R-?-?-A! Kalimat pertamanya jelas bilang \"Ayah RINA\"! Jadi anak keempatnya ya RINA!"
            },
            {
                    "id": 37,
                    "category": "Soal Cerita",
                    "question": "Pak Amir berjualan es teh manis Rp 5.000 per gelas di siang bolong yang sangat panas. Ada 20 orang antre mau beli, tapi Pak Amir malah menolak semua pembeli sambil tersenyum. Kenapa?",
                    "answer": "ESNYA HABIS",
                    "isTwist": true,
                    "trap": "ENAK TIDUR",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan karena uangnya sudah banyak atau lagi malas.",
                            "Tehnya masih penuh satu termos, tapi komponen utamanya kosong!"
                    ],
                    "reason": "ESNYA HABIS! Gimana mau jualan es teh kalau es batunya udah cair semua jadi air hangat!"
            },
            {
                    "id": 38,
                    "category": "Soal Cerita",
                    "question": "Setiap pagi sebelum berangkat kerja, Pak Darto selalu mengunci pintu depan dari luar, mengecek kompor, lalu pamit ke istrinya. Namun pagi ini Pak Darto keluar rumah tanpa mengunci pintu depan. Kenapa?",
                    "answer": "MASIH DI DALAM",
                    "isTwist": true,
                    "trap": "MARAH BESAR",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan karena lupa atau buru-buru.",
                            "Pikirkan nasib istrinya yang lagi mandi di rumah!"
                    ],
                    "reason": "Istrinya MASIH DI DALAM rumah! Kalau pintunya dikunci dari luar, nanti istrinya nggak bisa keluar!"
            },
            {
                    "id": 39,
                    "category": "Soal Cerita",
                    "question": "Pak RT memasang bel rumah baru yang bunyinya \"TING TONG\". Kalau dipencet tamu, belnya langsung bunyi nyaring. Pertanyaannya: kalau seharian penuh nggak ada satu pun tamu yang datang pencet bel, dia tetap...",
                    "answer": "NEMPEL",
                    "isTwist": true,
                    "trap": "NEKAD",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan soal bunyi atau diamnya bel itu.",
                            "Posisinya di tembok pagar depan rumah Pak RT!"
                    ],
                    "reason": "N-?-?-?-?-L! Mau dipencet atau nggak seharian, belnya tetap NEMPEL di tembok rumah!"
            },
            {
                    "id": 40,
                    "category": "Soal Cerita",
                    "question": "Di acara team building kantor, Budi kebagian sekamar sama temannya yang tidur ngorok suaranya mirip mesin diesel. Sudah tutup kuping pakai bantal tapi tetap tembus. Cara paling ampuh supaya Budi nggak dengar ngoroknya lagi adalah...",
                    "answer": "PINDAH",
                    "isTwist": true,
                    "trap": "PISAH",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Jangan bangunin orangnya nanti malah berantem!",
                            "Budi sendiri yang ambil langkah keluar dari kamar itu!"
                    ],
                    "reason": "P-?-?-?-?-H! PINDAH kamar aja ke sofa ruang tamu, daripada ngoroknya dilawan pakai suara lebih keras!"
            },
            {
                    "id": 41,
                    "category": "Cerita Berlubang",
                    "question": "Setiap tanggal tua, Budi selalu mengecek saldo ATM-nya dengan penuh harap. Begitu kartu dimasukkan dan PIN ditekan, layar ATM langsung menampilkan tulisan _______ yang bikin Budi senyum kecut lalu jalan ke warteg.",
                    "answer": "TERIMA KASIH",
                    "isTwist": true,
                    "trap": "TIDAK CUKUP",
                    "openIndices": [0, 7],
                    "clues": [
                            "Budi nggak berani lihat angka saldonya.",
                            "Dia langsung pencet tombol Cancel sebelum menu saldo muncul!"
                    ],
                    "reason": "TERIMA KASIH! Soalnya Budi keburu pencet Cancel karena takut sakit hati lihat sisa saldo Rp 4.200!"
            },
            {
                    "id": 42,
                    "category": "Cerita Berlubang",
                    "question": "Pagi itu hujan deras mengguyur jalanan. Rina buru-buru berangkat kerja naik motor. Di tengah kemacetan, Rina bersyukur karena di dalam jok motornya ia selalu menyimpan _______ supaya tetap kuat sampai di kantor.",
                    "answer": "DOA IBU",
                    "isTwist": true,
                    "trap": "JAS HUJAN",
                    "openIndices": [0, 4],
                    "clues": [
                            "Bukan benda anti air atau plastik.",
                            "Jas hujannya ketinggalan di kosan, yang tersisa cuma restu orang tua!"
                    ],
                    "reason": "DOA IBU! Tetap basah kuyup sih, tapi hatinya hangat sampai kantor!"
            },
            {
                    "id": 43,
                    "category": "Cerita Berlubang",
                    "question": "Saat rapat evaluasi bulanan, bos memanggil Doni ke depan ruangan sambil memegang map merah. Semua teman sekantor langsung menatap Doni dengan wajah tegang. Ternyata bos cuma mau bilang _______ kepada Doni di depan semua orang.",
                    "answer": "TOLONG FOTO",
                    "isTwist": true,
                    "trap": "KAMU DIPECAT",
                    "openIndices": [0, 7],
                    "clues": [
                            "Map merahnya cuma buat properti dokumentasi HRD.",
                            "Bos lagi butuh orang yang pegangin kamera HP!"
                    ],
                    "reason": "TOLONG FOTO! Jantung Doni udah mau copot dikira kena SP, ternyata disuruh jadi fotografer dadakan!"
            },
            {
                    "id": 44,
                    "category": "Cerita Berlubang",
                    "question": "Malam minggu, Andi mengajak gebetannya makan malam di restoran paling mahal di kota. Setelah selesai makan, Andi merogoh saku celananya sambil tersenyum percaya diri. Tiba-tiba wajah Andi berubah pucat pasi karena di sakunya cuma ada _______ yang bikin dia langsung pura-pura ke toilet.",
                    "answer": "STRUK PARKIR",
                    "isTwist": true,
                    "trap": "UANG RECEH",
                    "openIndices": [0, 6],
                    "clues": [
                            "Dompetnya ketinggalan di laci meja kantor.",
                            "Kertas kecil dari palang pintu masuk mal!"
                    ],
                    "reason": "STRUK PARKIR! Dompet tertinggal, yang nyelip di saku cuma karcis Rp 5.000!"
            },
            {
                    "id": 45,
                    "category": "Cerita Berlubang",
                    "question": "Di sebuah seminar motivasi, pembicara bertanya kepada 100 peserta: 'Siapa di sini yang mau sukses dan kaya raya?'. Semua peserta serentak angkat tangan. Namun di baris paling depan, Pak Budi malah memilih _______ sambil tersenyum santai.",
                    "answer": "MINUM TEH",
                    "isTwist": true,
                    "trap": "MALAS GERAK",
                    "openIndices": [0, 6],
                    "clues": [
                            "Pak Budi kan pemilik gedung seminarnya!",
                            "Dia udah kaya raya, jadi santai aja menikmati jamuan!"
                    ],
                    "reason": "MINUM TEH! Orang udah kaya mah nggak perlu ikut angkat tangan, cukup nikmatin hidangan VIP!"
            },
            {
                    "id": 46,
                    "category": "Cerita Berlubang",
                    "question": "Setelah menempuh perjalanan macet 3 jam di tol, keluarga Pak Ahmad akhirnya sampai di tempat wisata puncak. Anak-anak berlari gembira ke gerbang masuk, tapi langkah mereka terhenti seketika karena di depan gerbang ada papan besar bertuliskan _______ dengan huruf kapital.",
                    "answer": "TUTUP RENOVASI",
                    "isTwist": true,
                    "trap": "TIKET HABIS",
                    "openIndices": [0, 6],
                    "clues": [
                            "Bukan karena penuh pengunjung.",
                            "Tempat wisatanya lagi dibongkar tukang bangunan!"
                    ],
                    "reason": "TUTUP RENOVASI! Udah macet 3 jam cuma buat foto di depan pagar seng!"
            },
            {
                    "id": 47,
                    "category": "Klasik WIB",
                    "question": "Hujan turun dari...",
                    "answer": "MAGHRIB",
                    "isTwist": true,
                    "trap": "LANGIT",
                    "openIndices": [0, 6],
                    "clues": [
                            "Bukan dari atas awan atau langit.",
                            "Ini soal waktu mulainya hujan deras di sore hari!"
                    ],
                    "reason": "MAGHRIB! Karena waktu Ashar belum turun, masih mendung doang!"
            },
            {
                    "id": 48,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Air laut di seluruh dunia rasanya asin banget karena di dalamnya banyak...",
                    "answer": "KERINGAT IKAN",
                    "isTwist": true,
                    "trap": "GARAM LAUT",
                    "openIndices": [0, 9],
                    "clues": [
                            "Bukan mineral atau garam dapur.",
                            "Bayangkan jutaan ikan berenang 24 jam nonstop tanpa AC dan kipas angin!"
                    ],
                    "reason": "KERINGAT IKAN! Ikan berenang seharian penuh tanpa istirahat, ya jelas keringetan sampai lautnya asin!"
            },
            {
                    "id": 49,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Semakin tinggi kita mendaki ke puncak gunung, udaranya semakin dingin karena...",
                    "answer": "JAUH DARI KOMPOR",
                    "isTwist": true,
                    "trap": "KURANG OKSIGEN",
                    "openIndices": [0, 5, 10],
                    "clues": [
                            "Bukan teori tekanan udara atau fisika SMA.",
                            "Di puncak gunung nggak ada dapur atau tukang gorengan yang nyala!"
                    ],
                    "reason": "JAUH DARI KOMPOR! Di bawah banyak kompor dan knalpot makanya hangat, di puncak gunung jauh dari api!"
            },
            {
                    "id": 50,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Jika seekor ayam jantan berkokok nyaring di pagi hari, itu artinya ayam tersebut...",
                    "answer": "MASIH HIDUP",
                    "isTwist": true,
                    "trap": "SUDAH SUBUH",
                    "openIndices": [0, 6],
                    "clues": [
                            "Jangan bahas jam matahari terbit.",
                            "Coba bandingkan sama ayam yang sudah di meja makan!"
                    ],
                    "reason": "MASIH HIDUP! Kalau sudah jadi ayam goreng mana bisa berkokok?!"
            },
            {
                    "id": 51,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Kamu tersesat di hutan lalu menemukan rumah kosong dengan pintu terbuka dan meja makan. Hal pertama yang kamu cari di dalam adalah...",
                    "answer": "SINYAL HP",
                    "isTwist": true,
                    "trap": "MAKANAN",
                    "openIndices": [0, 7],
                    "clues": [
                            "Psikologi manusia modern nggak nyari nasi dulu.",
                            "Panik karena nggak bisa buka Google Maps atau update story!"
                    ],
                    "reason": "SINYAL HP! Lapar bisa ditahan sampai besok, tapi nggak ada sinyal itu darurat nasional!"
            },
            {
                    "id": 52,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Kamu melihat dompet tebal jatuh di trotoar sepi tanpa ada orang di sekitar. Tindakan pertama yang mencerminkan sifat aslimu adalah...",
                    "answer": "NENGOK KANAN KIRI",
                    "isTwist": true,
                    "trap": "AMBIL UANGNYA",
                    "openIndices": [0, 7, 13],
                    "clues": [
                            "Nggak usah sok suci dulu!",
                            "Refleks pertama mata sebelum tangan bergerak ke bawah!"
                    ],
                    "reason": "NENGOK KANAN KIRI! Secara psikologis, manusia pasti ngecek ada CCTV atau saksi mata dulu!"
            },
            {
                    "id": 53,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Jika diminta memilih antara uang Rp 100 juta tunai atau sahabat sejati seumur hidup, orang yang langsung memilih sahabat sejati biasanya...",
                    "answer": "SUDAH KAYA",
                    "isTwist": true,
                    "trap": "ORANG BAIK",
                    "openIndices": [0, 6],
                    "clues": [
                            "Lihat isi rekeningnya dulu sebelum memuji ketulusannya.",
                            "Yang saldonya tipis pasti ambil 100 juta dulu!"
                    ],
                    "reason": "SUDAH KAYA! Kalau lagi banyak cicilan mah pasti ambil Rp 100 juta dulu baru nyari sahabat baru!"
            }
    ];

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
        selectedCategory: 'ALL',
        currentIndex: 0,
        openedLetters: new Set(),
        clueStage: 0,
        preOpenMode: 'default',
        questionHidden: false,
        isSolved: false,
        teams: [
            { name: 'Tim Merah', score: 0, color: 'red', icon: '🔥' },
            { name: 'Tim Biru', score: 0, color: 'blue', icon: '⚡' },
            { name: 'Tim Emas', score: 0, color: 'gold', icon: '👑' },
        ],
        activeTeam: 0,
        soundEnabled: true,
        audioCtx: null,
    };

    const isHostMode = new URLSearchParams(window.location.search).get('mode') === 'host';

    const el = {
        select: document.getElementById('cl-select'),
        btnRandom: document.getElementById('cl-random'),
        countBadge: document.getElementById('cl-count-badge'),
        btnHp: document.getElementById('cl-hp-btn'),
        hpModal: document.getElementById('cl-hp-modal'),
        hpClose: document.getElementById('cl-hp-close'),
        hpUrl: document.getElementById('cl-hp-url'),
        btnCopyHpUrl: document.getElementById('cl-copy-hp-url'),
        openHpTab: document.getElementById('cl-open-hp-tab'),
        hpCheatCard: document.getElementById('cl-hp-cheat-card'),
        hpType: document.getElementById('cl-hp-type'),
        hpAnswer: document.getElementById('cl-hp-answer'),
        hpTrap: document.getElementById('cl-hp-trap'),
        hpClue1: document.getElementById('cl-hp-clue1'),
        hpClue2: document.getElementById('cl-hp-clue2'),
        hpReason: document.getElementById('cl-hp-reason'),
        preOpenSelect: document.getElementById('cl-preopen-select'),
        btnToggleQuestion: document.getElementById('cl-toggle-question'),
        hpClue2: document.getElementById('cl-hp-clue2'),
        hpReason: document.getElementById('cl-hp-reason'),
        btnSound: document.getElementById('cl-sound'),
        btnFullscreen: document.getElementById('cl-fullscreen'),
        qNum: document.getElementById('cl-q-num'),
        qText: document.getElementById('cl-q-text'),
        lengthChip: document.getElementById('cl-length-chip'),
        clueChip: document.getElementById('cl-clue-chip'),
        tiles: document.getElementById('cl-tiles'),
        reasonBox: document.getElementById('cl-reason-box'),
        reasonText: document.getElementById('cl-reason-text'),
        protestBtn: document.getElementById('cl-protest-btn'),
        protestReply: document.getElementById('cl-protest-reply'),
        turnBar: document.getElementById('cl-turn-bar'),
        activeTurnLabel: document.getElementById('active-turn-label'),
        form: document.getElementById('cl-form'),
        input: document.getElementById('cl-input'),
        feedback: document.getElementById('cl-feedback'),
        teamsContainer: document.getElementById('studio-arena'),
        teamsLeft: document.getElementById('teams-left'),
        teamsRight: document.getElementById('teams-right'),
        btnAddTeam: document.getElementById('btn-add-team'),
        btnHintLetter: document.getElementById('cl-hint-letter'),
        btnTetot: document.getElementById('cl-tetot'),
        btnReveal: document.getElementById('cl-reveal'),
        btnNext: document.getElementById('cl-next'),
        btnResetScores: document.getElementById('cl-reset-scores'),
        confettiLayer: document.getElementById('confetti-layer'),
        wrongOverlay: document.getElementById('wrong-overlay'),
    };

    function getAudioCtx() {
        if (!state.soundEnabled) return null;
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
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.06);
            gain.gain.setValueAtTime(0.001, now + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.22, now + i * 0.06 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.06);
            osc.stop(now + i * 0.06 + 0.26);
        });
    }

    function playWrongSound() {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.4);
        gain.gain.setValueAtTime(0.24, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.46);
    }

    function spawnConfetti() {
        if (!el.confettiLayer) return;
        const colors = ['#F5B700', '#10B981', '#EF4444', '#38BDF8', '#FFFFFF'];
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

            const legs = document.createElementNS(ns, 'rect');
            legs.setAttribute('x', String(p.cx - 12));
            legs.setAttribute('y', '67');
            legs.setAttribute('width', '24');
            legs.setAttribute('height', '15');
            legs.setAttribute('class', 'lego-legs');

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

            const body = document.createElementNS(ns, 'path');
            body.setAttribute('d', `M${p.cx - 10} 36 L${p.cx + 10} 36 L${p.cx + 13} 67 L${p.cx - 13} 67 Z`);
            body.setAttribute('class', `person-body ${p.shirt}`);

            const collar = document.createElementNS(ns, 'path');
            collar.setAttribute('d', `M${p.cx - 5} 36 L${p.cx} 42 L${p.cx + 5} 36`);
            collar.setAttribute('class', 'lego-collar');

            const neck = document.createElementNS(ns, 'rect');
            neck.setAttribute('x', String(p.cx - 4));
            neck.setAttribute('y', '32');
            neck.setAttribute('width', '8');
            neck.setAttribute('height', '4');
            neck.setAttribute('class', 'lego-neck');

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

            const exprHappy = document.createElementNS(ns, 'g');
            exprHappy.setAttribute('class', 'expr expr-happy');
            exprHappy.innerHTML = `
                <path d="M${p.cx - 6.5} 21.2 Q${p.cx - 4.2} 17.8 ${p.cx - 1.9} 21.2" class="lego-eye-arc"/>
                <path d="M${p.cx + 1.9} 21.2 Q${p.cx + 4.2} 17.8 ${p.cx + 6.5} 21.2" class="lego-eye-arc"/>
                <path d="M${p.cx - 4.5} 24.5 Q${p.cx} 30 ${p.cx + 4.5} 24.5 Z" class="lego-mouth-open"/>
            `;

            const exprSad = document.createElementNS(ns, 'g');
            exprSad.setAttribute('class', 'expr expr-sad');
            exprSad.innerHTML = `
                <path d="M${p.cx - 6.5} 19.8 Q${p.cx - 4.2} 22 ${p.cx - 1.9} 20.8" class="lego-eye-sad"/>
                <path d="M${p.cx + 1.9} 20.8 Q${p.cx + 4.2} 22 ${p.cx + 6.5} 19.8" class="lego-eye-sad"/>
                <circle cx="${p.cx - 5.8}" cy="23.8" r="1.2" class="lego-tear"/>
                <circle cx="${p.cx + 5.8}" cy="23.8" r="1.2" class="lego-tear"/>
                <path d="M${p.cx - 3.5} 27.8 Q${p.cx} 24.8 ${p.cx + 3.5} 27.8" class="lego-mouth-sad"/>
            `;

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

    function renderTeams() {
        const sortedIndices = state.teams.map((_, i) => i).sort((a, b) => state.teams[b].score - state.teams[a].score);
        el.teamsLeft.textContent = '';
        el.teamsRight.textContent = '';

        state.teams.forEach((team, idx) => {
            const isAct = idx === state.activeTeam;
            const unit = document.createElement('div');
            unit.className = `podium-unit podium-${team.color}${isAct ? ' active' : ''}`;
            unit.dataset.team = String(idx);

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
            topCounter.appendChild(buzzer);

            const rank = document.createElement('span');
            rank.className = 'podium-rank';
            rank.textContent = `#${sortedIndices.indexOf(idx) + 1}`;

            if (state.teams.length > 1) {
                const btnRemove = document.createElement('button');
                btnRemove.type = 'button';
                btnRemove.className = 'podium-remove';
                btnRemove.dataset.removeTeam = String(idx);
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
            pedestal.append(iconSpan, nameInput);

            desk.append(topCounter, rank, scoreEl, pedestal);
            unit.append(crew, desk);

            if (idx % 2 === 0) el.teamsLeft.appendChild(unit);
            else el.teamsRight.appendChild(unit);
        });

        const leftCount = Math.ceil(state.teams.length / 2);
        const rightCount = Math.floor(state.teams.length / 2);
        el.teamsLeft.classList.toggle('many-teams', leftCount >= 3);
        el.teamsRight.classList.toggle('many-teams', rightCount >= 3);
        if (el.teamsContainer) el.teamsContainer.classList.toggle('many-teams-arena', state.teams.length >= 5);

        const activeObj = state.teams[state.activeTeam];
        const activeColor = activeObj?.color || 'blue';
        if (el.turnBar) el.turnBar.setAttribute('data-active-color', activeColor);
        if (el.form) el.form.setAttribute('data-active-color', activeColor);
        if (el.activeTurnLabel) el.activeTurnLabel.textContent = `Giliran Menjawab: ${activeObj?.icon || ''} ${activeObj?.name || ''}`;
        if (el.btnAddTeam) el.btnAddTeam.disabled = state.teams.length >= 8;
    }

    let reactionTimer = null;
    function triggerTeamReactions(type) {
        if (!el.teamsContainer) return;
        const units = el.teamsContainer.querySelectorAll('.podium-unit');
        if (reactionTimer) clearTimeout(reactionTimer);
        units.forEach((unit) => {
            unit.classList.remove('celebrate', 'sad', 'sad-wrong');
            const old = unit.querySelector('.react-bubble');
            if (old) old.remove();

            const teamIdx = Number(unit.dataset.team);
            const isAct = teamIdx === state.activeTeam;
            const crew = unit.querySelector('.podium-contestants');
            const isHappy = (type === 'correct' && isAct) || (type === 'wrong' && !isAct);
            const isSad = type === 'correct' && !isAct;
            const isShock = type === 'wrong' && isAct;

            if (isHappy) unit.classList.add('celebrate');
            else if (isSad) unit.classList.add('sad');
            else if (isShock) unit.classList.add('sad-wrong');

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
                const old = unit.querySelector('.react-bubble');
                if (old) old.remove();
            });
        }, 2300);
    }

    function getInitialOpenedSet(q) {
        if (!q) return new Set();
        if (state.preOpenMode === 'default') {
            return new Set(Array.isArray(q.openIndices) ? q.openIndices.filter((i) => q.answer[i] && q.answer[i] !== ' ') : []);
        }
        const count = Number(state.preOpenMode) || 0;
        if (count <= 0) return new Set();
        const nonSpaceIndices = [];
        for (let i = 0; i < q.answer.length; i++) {
            if (q.answer[i] !== ' ') nonSpaceIndices.push(i);
        }
        const chosen = [];
        const base = Array.isArray(q.openIndices) ? q.openIndices : [];
        base.forEach((idx) => {
            if (chosen.length < count && q.answer[idx] && q.answer[idx] !== ' ' && !chosen.includes(idx)) {
                chosen.push(idx);
            }
        });
        while (chosen.length < count && chosen.length < nonSpaceIndices.length) {
            const remaining = nonSpaceIndices.filter((idx) => !chosen.includes(idx));
            if (remaining.length === 0) break;
            chosen.push(remaining[Math.floor(Math.random() * remaining.length)]);
        }
        return new Set(chosen);
    }

    function renderQuestion() {
        const q = CAK_LONTONG_QUESTIONS[state.currentIndex];
        if (!q) return;
        const clues = Array.isArray(q.clues) ? q.clues : [q.clue || '-'];
        const words = q.answer.split(' ').filter(Boolean);
        const letterCount = q.answer.replace(/\s+/g, '').length;
        const isTwist = q.isTwist !== false;

        el.qNum.textContent = `Soal #${state.currentIndex + 1} / ${CAK_LONTONG_QUESTIONS.length}`;
        if (el.countBadge) el.countBadge.textContent = `${CAK_LONTONG_QUESTIONS.length} SOAL`;

        if (state.questionHidden && !state.isSolved) {
            el.qText.textContent = '🙈 Soal masih ditutup Host — buka kartu huruf dulu sebelum soal diberikan!';
        } else {
            el.qText.textContent = q.question;
        }
        if (el.btnToggleQuestion) {
            el.btnToggleQuestion.textContent = state.questionHidden ? '👁️ Buka Soal' : '🙈 Tutup Soal';
        }

        el.lengthChip.textContent = words.length > 1
            ? `Panjang: ${letterCount} Huruf (${words.length} Kata)`
            : `Panjang: ${letterCount} Huruf`;

        if (el.clueChip) {
            if (state.clueStage === 0) {
                el.clueChip.textContent = isHostMode
                    ? `📱 Mode HP Host • Klik untuk tampilkan Clue 1/${clues.length} di layar`
                    : `🤫 Clue Tersembunyi — Klik untuk buka sedikit demi sedikit (0/${clues.length})`;
            } else if (state.clueStage === 1) {
                el.clueChip.textContent = clues.length > 1
                    ? `💡 Clue 1: ${clues[0]} (Klik untuk Clue 2/${clues.length})`
                    : `💡 Clue: ${clues[0]}`;
            } else {
                el.clueChip.textContent = `💡 Clue 1: ${clues[0]} • Clue 2: ${clues[1] || clues[0]}`;
            }
        }

        if (el.hpCheatCard) {
            el.hpCheatCard.hidden = !isHostMode;
            if (isHostMode) {
                if (el.hpType) {
                    el.hpType.textContent = isTwist ? '🔀 BELOK / PLOT TWIST' : '✅ LURUS / BENERAN';
                    el.hpType.style.background = isTwist ? '#fef3c7' : '#dcfce7';
                    el.hpType.style.color = isTwist ? '#92400e' : '#166534';
                }
                if (el.hpAnswer) el.hpAnswer.textContent = q.answer;
                if (el.hpTrap) el.hpTrap.textContent = q.trap ? `${q.trap} (Pancingan)` : '-';
                if (el.hpClue1) el.hpClue1.textContent = clues[0] || '-';
                if (el.hpClue2) el.hpClue2.textContent = clues[1] || '-';
                if (el.hpReason) el.hpReason.textContent = q.reason;
            }
        }

        el.tiles.textContent = '';
        let currentWordGroup = document.createElement('div');
        currentWordGroup.className = 'cl-word-group';
        for (let i = 0; i < q.answer.length; i++) {
            if (q.answer[i] === ' ') {
                if (currentWordGroup.childNodes.length > 0) {
                    el.tiles.appendChild(currentWordGroup);
                    currentWordGroup = document.createElement('div');
                    currentWordGroup.className = 'cl-word-group';
                }
                continue;
            }
            const tile = document.createElement('button');
            tile.type = 'button';
            const isOpen = state.isSolved || state.openedLetters.has(i);
            let cls = 'cl-tile';
            if (state.isSolved) cls += ' revealed';
            else if (isOpen) cls += ' clue';
            else cls += ' hidden-letter';
            tile.className = cls;
            tile.textContent = isOpen ? q.answer[i] : '?';
            tile.setAttribute('aria-label', isOpen ? `Huruf ke-${i + 1}: ${q.answer[i]}` : `Buka huruf ke-${i + 1}`);
            if (!state.isSolved) {
                tile.title = isOpen ? 'Klik untuk tutup huruf ini lagi' : 'Klik untuk buka huruf ini';
                tile.addEventListener('click', () => {
                    if (state.openedLetters.has(i)) state.openedLetters.delete(i);
                    else state.openedLetters.add(i);
                    renderQuestion();
                });
            }
            currentWordGroup.appendChild(tile);
        }
        if (currentWordGroup.childNodes.length > 0) {
            el.tiles.appendChild(currentWordGroup);
        }

        if (state.isSolved) {
            el.reasonBox.hidden = false;
            el.reasonText.textContent = q.reason;
        } else {
            el.reasonBox.hidden = true;
        }
        renderTeams();
    }

    function loadQuestion(idx) {
        state.currentIndex = idx;
        const q = CAK_LONTONG_QUESTIONS[idx];
        state.openedLetters = getInitialOpenedSet(q);
        state.clueStage = 0;
        state.isSolved = false;
        el.feedback.textContent = '';
        el.feedback.className = 'feedback-msg';
        if (el.protestReply) {
            el.protestReply.hidden = true;
            el.protestReply.textContent = '';
        }
        el.input.value = '';
        renderQuestion();
    }

    function getFilteredIndices() {
        const list = [];
        CAK_LONTONG_QUESTIONS.forEach((q, idx) => {
            if (state.selectedCategory === 'ALL' || q.category === state.selectedCategory) list.push(idx);
        });
        return list;
    }

    function populateCategorySelect() {
        const catEl = document.getElementById('cl-category');
        if (!catEl) return;
        const cats = new Set(CAK_LONTONG_QUESTIONS.map((q) => q.category));
        catEl.textContent = '';
        const allOpt = document.createElement('option');
        allOpt.value = 'ALL';
        allOpt.textContent = `Semua Kategori (${CAK_LONTONG_QUESTIONS.length})`;
        catEl.appendChild(allOpt);
        cats.forEach((c) => {
            const count = CAK_LONTONG_QUESTIONS.filter((q) => q.category === c).length;
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = `${c} (${count})`;
            catEl.appendChild(opt);
        });
        catEl.value = state.selectedCategory;
    }

    function populateSelect() {
        populateCategorySelect();
        el.select.textContent = '';
        const indices = getFilteredIndices();
        indices.forEach((idx, pos) => {
            const q = CAK_LONTONG_QUESTIONS[idx];
            const opt = document.createElement('option');
            opt.value = String(idx);
            opt.textContent = `${pos + 1}. ${q.question}`;
            el.select.appendChild(opt);
        });
        if (indices.length > 0 && !indices.includes(state.currentIndex)) {
            state.currentIndex = indices[0];
        }
        el.select.value = String(state.currentIndex);
        const badge = document.getElementById('cl-count-badge');
        if (badge) badge.textContent = `${indices.length} SOAL`;
    }

    function handleGuess(e) {
        e.preventDefault();
        const q = CAK_LONTONG_QUESTIONS[state.currentIndex];
        if (!q || state.isSolved) return;

        const guess = el.input.value.trim().toUpperCase().replace(/\s+/g, '');
        if (!guess) return;

        const targetAnswer = q.answer.toUpperCase().replace(/\s+/g, '');
        if (guess === targetAnswer) {
            state.isSolved = true;
            state.questionHidden = false;
            const bonus = Math.max(40, 100 - Math.max(0, state.openedLetters.size - (q.openIndices?.length || 0)) * 10);
            state.teams[state.activeTeam].score += bonus;
            playCorrectSound();
            spawnConfetti();
            renderQuestion();
            triggerTeamReactions('correct');
            el.feedback.textContent = `BENAR! "${q.answer}" (+${bonus} poin untuk ${state.teams[state.activeTeam].name})`;
            el.feedback.className = 'feedback-msg ok';
        } else {
            playWrongSound();
            el.wrongOverlay.classList.add('show');
            triggerTeamReactions('wrong');
            setTimeout(() => el.wrongOverlay.classList.remove('show'), 750);
            el.feedback.textContent = `MIKIRRR! "${guess}" bukan jawaban Cak Lontong!`;
            el.feedback.className = 'feedback-msg err';
        }
        el.input.value = '';
        el.input.focus();
    }

    function init() {
        populateSelect();
        loadQuestion(0);

        const catEl = document.getElementById('cl-category');
        if (catEl) {
            catEl.addEventListener('change', (e) => {
                state.selectedCategory = e.target.value || 'ALL';
                populateSelect();
                loadQuestion(state.currentIndex);
            });
        }
        el.select.addEventListener('change', (e) => loadQuestion(Number(e.target.value) || 0));
        el.btnRandom.addEventListener('click', () => {
            const indices = getFilteredIndices();
            if (indices.length === 0) return;
            const next = indices[Math.floor(Math.random() * indices.length)];
            el.select.value = String(next);
            loadQuestion(next);
        });
        el.btnNext.addEventListener('click', () => {
            const indices = getFilteredIndices();
            if (indices.length === 0) return;
            const curPos = indices.indexOf(state.currentIndex);
            const next = indices[(curPos + 1) % indices.length];
            el.select.value = String(next);
            loadQuestion(next);
        });
        if (el.preOpenSelect) {
            el.preOpenSelect.addEventListener('change', (e) => {
                state.preOpenMode = e.target.value || 'default';
                const q = CAK_LONTONG_QUESTIONS[state.currentIndex];
                if (q && !state.isSolved) {
                    state.openedLetters = getInitialOpenedSet(q);
                    renderQuestion();
                }
            });
        }
        if (el.btnToggleQuestion) {
            el.btnToggleQuestion.addEventListener('click', () => {
                state.questionHidden = !state.questionHidden;
                renderQuestion();
            });
        }
        el.btnHintLetter.addEventListener('click', () => {
            const q = CAK_LONTONG_QUESTIONS[state.currentIndex];
            if (!q || state.isSolved) return;
            const closed = [];
            for (let i = 0; i < q.answer.length; i++) {
                if (q.answer[i] !== ' ' && !state.openedLetters.has(i)) closed.push(i);
            }
            if (closed.length === 0) return;
            const pick = closed[Math.floor(Math.random() * closed.length)];
            state.openedLetters.add(pick);
            renderQuestion();
        });
        el.btnReveal.addEventListener('click', () => {
            const q = CAK_LONTONG_QUESTIONS[state.currentIndex];
            if (!q) return;
            state.isSolved = true;
            playCorrectSound();
            renderQuestion();
            el.feedback.textContent = `Jawaban Cak Lontong: "${q.answer}" — Salam Lemper!`;
            el.feedback.className = 'feedback-msg ok';
        });
        el.btnTetot.addEventListener('click', () => {
            playWrongSound();
            el.wrongOverlay.classList.add('show');
            triggerTeamReactions('wrong');
            setTimeout(() => el.wrongOverlay.classList.remove('show'), 750);
            el.feedback.textContent = `MIKIRRR! Belum tepat, ayo pikir lagi ${state.teams[state.activeTeam].name}!`;
            el.feedback.className = 'feedback-msg err';
        });
        if (el.protestBtn && el.protestReply) {
            const PROTEST_ROASTS = [
                '😤 Cak Lontong: "Jangan pakai emosi, pakai logika! Mikirrr!"',
                '☝️ Cak Lontong: "Protes ditolak! Yang protes keras nilainya saya potong!"',
                '🍚 Cak Lontong: "Sudah paling benar ini jawabannya. Salam Lemper!"',
                '🧠 Cak Lontong: "Kalian aja yang mikirnya terlalu lurus, hidup itu ada tikungannya!"'
            ];
            let protestIdx = 0;
            el.protestBtn.addEventListener('click', () => {
                playWrongSound();
                triggerTeamReactions('wrong');
                el.protestReply.textContent = PROTEST_ROASTS[protestIdx % PROTEST_ROASTS.length];
                el.protestReply.hidden = false;
                protestIdx++;
            });
        }
        el.btnAddTeam.addEventListener('click', () => {
            if (state.teams.length >= 8) return;
            const used = new Set(state.teams.map((t) => t.color));
            const theme = TEAM_THEMES.find((th) => !used.has(th.color)) || TEAM_THEMES[state.teams.length % TEAM_THEMES.length];
            state.teams.push({ name: `Tim ${state.teams.length + 1}`, score: 0, color: theme.color, icon: theme.icon });
            state.activeTeam = state.teams.length - 1;
            renderTeams();
        });
        el.btnResetScores.addEventListener('click', () => {
            state.teams.forEach((t) => { t.score = 0; });
            renderTeams();
        });
        el.btnSound.addEventListener('click', () => {
            state.soundEnabled = !state.soundEnabled;
            el.btnSound.textContent = state.soundEnabled ? '🔊' : '🔇';
        });
        el.btnFullscreen.addEventListener('click', () => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
            else document.exitFullscreen?.();
        });
        if (el.clueChip) {
            el.clueChip.addEventListener('click', () => {
                const q = CAK_LONTONG_QUESTIONS[state.currentIndex];
                const maxStage = Array.isArray(q?.clues) ? q.clues.length : 1;
                state.clueStage = (state.clueStage + 1) % (maxStage + 1);
                renderQuestion();
            });
        }
        if (el.btnHp && el.hpModal) {
            const getHostUrl = () => {
                const u = new URL(window.location.href);
                u.searchParams.set('mode', 'host');
                return u.toString();
            };
            el.btnHp.addEventListener('click', () => {
                const url = getHostUrl();
                if (el.hpUrl) el.hpUrl.value = url;
                if (el.openHpTab) el.openHpTab.href = url;
                el.hpModal.hidden = false;
            });
            el.hpClose?.addEventListener('click', () => { el.hpModal.hidden = true; });
            el.hpModal.addEventListener('click', (e) => {
                if (e.target === el.hpModal) el.hpModal.hidden = true;
            });
            el.btnCopyHpUrl?.addEventListener('click', () => {
                const url = el.hpUrl?.value || getHostUrl();
                navigator.clipboard?.writeText(url).then(() => {
                    el.btnCopyHpUrl.textContent = 'Tersalin!';
                    setTimeout(() => { el.btnCopyHpUrl.textContent = 'Salin Link'; }, 1500);
                }).catch(() => {
                    el.hpUrl?.select();
                });
            });
        }
        el.form.addEventListener('submit', handleGuess);
        el.teamsContainer.addEventListener('click', (e) => {
            const rm = e.target.closest('[data-remove-team]');
            if (rm) {
                e.stopPropagation();
                if (state.teams.length <= 1) return;
                state.teams.splice(Number(rm.dataset.removeTeam), 1);
                if (state.activeTeam >= state.teams.length) state.activeTeam = state.teams.length - 1;
                renderTeams();
                return;
            }
            const card = e.target.closest('.podium-unit');
            if (!card) return;
            state.activeTeam = Number(card.dataset.team) || 0;
            renderTeams();
            if (e.target.tagName !== 'INPUT') el.input.focus();
        });
        el.teamsContainer.addEventListener('input', (e) => {
            if (e.target.classList.contains('team-name-input')) {
                const idx = Number(e.target.dataset.teamNameIdx);
                if (state.teams[idx]) state.teams[idx].name = e.target.value;
                renderTeams();
            }
        });
    }

    init();
})();
