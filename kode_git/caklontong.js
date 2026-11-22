(() => {
    'use strict';

    const CAK_LONTONG_QUESTIONS = [
            {
                    "id": 1,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Hujan deras biasanya turun dari...",
                    "answer": "LAMBAT",
                    "isTwist": true,
                    "trap": "LANGIT",
                    "openIndices": [
                            0,
                            1,
                            5
                    ],
                    "clues": [
                            "Bukan tempat asalnya di atas awan.",
                            "Kalau gerimis dulu baru deras, berarti turunnya..."
                    ],
                    "reason": "L-A-?-?-?-T bukan LANGIT! Hujan deras itu awalnya rintik-rintik dulu, jadi turunnya LAMBAT!"
            },
            {
                    "id": 2,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Sebelum diperiksa dokter di puskesmas atau klinik, pasien wajib...",
                    "answer": "DAFTAR",
                    "isTwist": true,
                    "trap": "DOKTER",
                    "openIndices": [
                            0,
                            3,
                            5
                    ],
                    "clues": [
                            "Bukan langsung masuk ruang periksa.",
                            "Dilakukan di meja resepsionis paling depan!"
                    ],
                    "reason": "D-?-?-T-?-R bukan DOKTER! Sebelum ketemu dokter ya harus DAFTAR dulu di loket!"
            },
            {
                    "id": 3,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Seorang tukang cukur memotong rambut pelanggannya dengan...",
                    "answer": "GANTIAN",
                    "isTwist": true,
                    "trap": "GUNTING",
                    "openIndices": [
                            0,
                            2,
                            3,
                            4
                    ],
                    "clues": [
                            "Bukan alat tajam yang bunyinya krek-krek.",
                            "Kalau ada lima pelanggan datang bareng, masa dicukur sekaligus?!"
                    ],
                    "reason": "G-?-N-T-I-?-? bukan GUNTING! Kalau pelanggannya ramai ya dicukurnya GANTIAN satu per satu!"
            },
            {
                    "id": 4,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Di rumah makan Padang, selain pakai sendok, biasanya orang makan pakai...",
                    "answer": "TENAGA",
                    "isTwist": true,
                    "trap": "TANGAN",
                    "openIndices": [
                            0,
                            2
                    ],
                    "clues": [
                            "Bukan anggota tubuh di ujung lengan.",
                            "Kalau lagi lemas nggak punya ini, nyuap nasi pun nggak kuat!"
                    ],
                    "reason": "T-?-N-?-?-? bukan TANGAN! Pakai sendok atau nggak, makannya tetap butuh TENAGA!"
            },
            {
                    "id": 5,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Pedagang kaki lima di pinggir jalan langsung bubar berhamburan karena ada...",
                    "answer": "RAMAI",
                    "isTwist": true,
                    "trap": "RAZIA",
                    "openIndices": [
                            0,
                            1
                    ],
                    "clues": [
                            "Bukan Satpol PP atau hujan badai!",
                            "Justru kondisi yang paling didoakan semua pedagang!"
                    ],
                    "reason": "R-A-?-?-? bukan RAZIA! Karena pembelinya RAMAI banget, dagangannya langsung ludes habis terus bubar pulang!"
            },
            {
                    "id": 6,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Saat lampu merah menyala di perempatan jalan, pengendara harus...",
                    "answer": "LIHAT",
                    "isTwist": true,
                    "trap": "LEWAT",
                    "openIndices": [
                            0,
                            3,
                            4
                    ],
                    "clues": [
                            "Pakai mata dulu biar nggak salah sangka.",
                            "Kalau langsung jalan pas lampu merah ya kena tilang!"
                    ],
                    "reason": "L-?-?-A-T bukan LEWAT! Lampu merah itu di-LIHAT dulu, jangan main terobos!"
            },
            {
                    "id": 7,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Orang yang mengendarai bus antar kota saat jalan tol macet total harus...",
                    "answer": "SABAR",
                    "isTwist": true,
                    "trap": "SOPIR",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Bukan profesinya, tapi kondisi mental menghadapi kemacetan.",
                            "Kalau emosian di tol, bisa-bisa klakson terus nggak ada gunanya!"
                    ],
                    "reason": "S-?-?-?-R bukan SOPIR! Sopirnya kalau nggak SABAR malah turun dorong bus!"
            },
            {
                    "id": 8,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Kalau lagi sakit gigi malam-malam dan tidak tahan lagi, orang langsung lari ke...",
                    "answer": "KASUR",
                    "isTwist": true,
                    "trap": "KAMAR",
                    "openIndices": [
                            0,
                            1,
                            4
                    ],
                    "clues": [
                            "Lebih spesifik dari nama ruangannya.",
                            "Tempat paling empuk buat meringkuk sambil megangin pipi!"
                    ],
                    "reason": "K-A-?-?-R bukan cuma KAMAR! Malam-malam klinik tutup, ya langsung guling-guling di KASUR!"
            },
            {
                    "id": 9,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Hal pertama yang dilakukan anak Gen Z begitu bangun tidur di pagi hari adalah...",
                    "answer": "MEREM",
                    "isTwist": true,
                    "trap": "MINUM",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Bukan langsung minum air putih atau buka TikTok.",
                            "Dilakukan selama 5 menit lagi buat ngumpulin nyawa!"
                    ],
                    "reason": "M-?-?-?-M bukan MINUM! Pasti MEREM lagi lima menit sambil bilang \"bentar lagi deh\"!"
            },
            {
                    "id": 10,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Saat meeting Zoom berlangsung, bagian tubuh yang paling sering menatap kamera penuh kepalsuan adalah...",
                    "answer": "MATA",
                    "isTwist": true,
                    "trap": "MUKA",
                    "openIndices": [
                            0,
                            3
                    ],
                    "clues": [
                            "Keliatannya fokus ke layar, padahal lagi lirik tab belanja online.",
                            "Ada sepasang di wajah dan sering pura-pura menyimak bos!"
                    ],
                    "reason": "M-?-?-A bukan cuma MUKA, tapi MATA yang menatap kamera seolah fokus padahal baca chat gosip!"
            },
            {
                    "id": 11,
                    "category": "Kata Misteri",
                    "question": "Ibu Ani punya 4 orang anak: Mei, Juni, Juli, dan anak bungsunya lahir tepat di bulan delapan. Siapakah nama anak keempat Ibu Ani?",
                    "answer": "TIDAK TAHU",
                    "isTwist": true,
                    "trap": "TIDAK SATU",
                    "openIndices": [
                            0,
                            1,
                            2,
                            3,
                            4,
                            7,
                            9
                    ],
                    "clues": [
                            "Jangan asal menebak nama bulan setelah Juli!",
                            "Coba cek lagi apakah di soal ada tertulis nama anak keempatnya?"
                    ],
                    "reason": "TIDAK TAHU! Di soalnya memang nggak dikasih tahu nama anak keempatnya, kenapa kalian asal nebak Agustus?!"
            },
            {
                    "id": 12,
                    "category": "Kata Misteri",
                    "question": "Budi berlari kencang dari rumah ke sekolah selama 15 menit. Pulangnya Budi jalan kaki santai selama 45 menit. Siapakah nama anak di awal soal ini?",
                    "answer": "BUDI",
                    "isTwist": true,
                    "trap": "RUDI",
                    "openIndices": [
                            1,
                            2,
                            3
                    ],
                    "clues": [
                            "Berhenti menjumlahkan 15 + 45 menit!",
                            "Jawabannya ada di kata paling pertama soal ini!"
                    ],
                    "reason": "BUDI! Peserta sibuk ngitung menit pulang-pergi, padahal yang ditanya cuma nama anaknya yang tertulis di soal!"
            },
            {
                    "id": 13,
                    "category": "Kata Misteri",
                    "question": "Seekor sapi berdiri menghadap lurus ke arah utara, lalu berputar 90 derajat ke kanan dan 180 derajat ke belakang. Ke arah mana ujung ekor sapi itu menghadap?",
                    "answer": "BAWAH",
                    "isTwist": true,
                    "trap": "BARAT",
                    "openIndices": [
                            0,
                            1,
                            3
                    ],
                    "clues": [
                            "Jangan pakai kompas atau hitung derajat putaran!",
                            "Bayangkan posisi alami ekor sapi karena gravitasi!"
                    ],
                    "reason": "B-A-?-A-? bukan BARAT! Mau sapinya muter ke utara atau selatan, ujung ekor sapi tetap menjuntai ke BAWAH!"
            },
            {
                    "id": 14,
                    "category": "Kata Misteri",
                    "question": "Ada 12 ekor ikan di dalam akuarium kaca. Tiba-tiba 5 ikan tenggelam, 3 ikan berenang pergi, dan 2 ikan mati mengapung. Sisa berapa ekor ikan di dalam akuarium?",
                    "answer": "DUA BELAS",
                    "isTwist": true,
                    "trap": "DUA BARIS",
                    "openIndices": [
                            0,
                            1,
                            2,
                            4,
                            8
                    ],
                    "clues": [
                            "Jangan dikurangi 5, 3, dan 2!",
                            "Ikan tenggelam ya memang hidup di air, yang berenang pergi juga tetap di akuarium!"
                    ],
                    "reason": "Tetap DUA BELAS! Yang mati belum diangkat, yang berenang pergi juga masih muter-muter di akuarium yang sama!"
            },
            {
                    "id": 15,
                    "category": "Kata Misteri",
                    "question": "Seorang pria berjalan santai di tengah hujan badai tanpa payung, tanpa jas hujan, dan tanpa topi. Anehnya, rambutnya tidak basah sedikit pun. Kenapa?",
                    "answer": "BOTAK",
                    "isTwist": true,
                    "trap": "BASAH",
                    "openIndices": [
                            0,
                            3
                    ],
                    "clues": [
                            "Dia tidak berteduh di mana pun.",
                            "Perhatikan kata kuncinya: \"rambutnya tidak basah\"!"
                    ],
                    "reason": "B-?-?-A-? bukan BASAH! Rambutnya nggak basah karena dia memang BOTAK plontos nggak punya rambut!"
            },
            {
                    "id": 16,
                    "category": "Kata Misteri",
                    "question": "Pak RT memelihara 10 ekor kambing di kandang. Suatu hari wabah datang dan semua kambingnya mati KECUALI 3 ekor. Berapa ekor kambing Pak RT yang masih hidup?",
                    "answer": "TIGA",
                    "isTwist": true,
                    "trap": "LIMA",
                    "openIndices": [
                            1,
                            3
                    ],
                    "clues": [
                            "Jangan hitung 10 dikurangi 3!",
                            "Baca pelan-pelan kata \"semua mati KECUALI 3 ekor\"!"
                    ],
                    "reason": "?-I-?-A bukan LIMA! Semua mati KECUALI 3 ekor — artinya yang masih hidup ya TIGA ekor!"
            },
            {
                    "id": 17,
                    "category": "Kata Misteri",
                    "question": "Benda paling sering dicari mati-matian di rumah tapi tidak ketemu, lalu mendadak muncul sendiri tepat setelah kita...",
                    "answer": "BERHENTI",
                    "isTwist": true,
                    "trap": "BERGANTI",
                    "openIndices": [
                            0,
                            1,
                            2,
                            5,
                            6,
                            7
                    ],
                    "clues": [
                            "Sering terjadi pada gunting kuku, charger HP, dan kunci motor.",
                            "Baru kelihatan di atas meja begitu kita sudah pasrah nggak nyari lagi!"
                    ],
                    "reason": "B-E-R-?-?-N-T-I bukan BERGANTI! Benda hilang baru muncul tepat setelah kita BERHENTI nyari!"
            },
            {
                    "id": 18,
                    "category": "Kata Misteri",
                    "question": "Orang yang paling jarang sakit gigi di seluruh dunia adalah orang yang...",
                    "answer": "OMPONG",
                    "isTwist": true,
                    "trap": "KOSONG",
                    "openIndices": [
                            3,
                            4,
                            5
                    ],
                    "clues": [
                            "Bukan karena rajin sikat gigi tiga kali sehari.",
                            "Gimana mau sakit gigi kalau giginya aja udah nggak ada?!"
                    ],
                    "reason": "?-?-?-O-N-G bukan KOSONG! Karena OMPONG nggak ada giginya, jadi nggak mungkin sakit gigi!"
            },
            {
                    "id": 19,
                    "category": "Kuis Psikologi",
                    "question": "Saat kamu masuk lift sendirian lalu ada orang asing ikut masuk, kenapa kamu tiba-tiba menatap layar HP padahal nggak ada chat masuk?",
                    "answer": "CANGGUNG",
                    "isTwist": true,
                    "trap": "CHATTING",
                    "openIndices": [
                            0,
                            6,
                            7
                    ],
                    "clues": [
                            "Cuma scroll menu utama HP bolak-balik nggak jelas.",
                            "Bingung mau lihat ke mana biar nggak tatap-tatapan!"
                    ],
                    "reason": "C-?-?-?-?-?-N-G bukan CHATTING! Nggak ada chat masuk, cuma CANGGUNG aja satu lift sempit!"
            },
            {
                    "id": 20,
                    "category": "Kuis Psikologi",
                    "question": "Jika diminta memilih antara uang Rp 100 juta tunai atau sahabat sejati seumur hidup, orang yang langsung memilih sahabat sejati biasanya...",
                    "answer": "SUDAH KAYA",
                    "isTwist": true,
                    "trap": "SUDAH BAIK",
                    "openIndices": [
                            0,
                            1,
                            2,
                            3,
                            4,
                            7
                    ],
                    "clues": [
                            "Lihat isi rekeningnya dulu sebelum memuji ketulusannya.",
                            "Yang saldonya tipis pasti ambil 100 juta dulu!"
                    ],
                    "reason": "S-U-D-A-H ?-A-?-? bukan SUDAH BAIK! Yang langsung pilih sahabat biasanya memang SUDAH KAYA!"
            },
            {
                    "id": 21,
                    "category": "Kuis Psikologi",
                    "question": "Orang yang paling jujur di dunia maya saat mengisi pendaftaran aplikasi adalah saat dia mencentang \"Saya telah membaca syarat dan ketentuan\", padahal aslinya...",
                    "answer": "ASAL KLIK",
                    "isTwist": true,
                    "trap": "AMAN BAIK",
                    "openIndices": [
                            0,
                            2,
                            8
                    ],
                    "clues": [
                            "Tulisannya 40 halaman font kecil-kecil.",
                            "Nggak ada satu manusia pun yang baca dari atas sampai bawah!"
                    ],
                    "reason": "ASAL KLIK! Kebohongan massal paling kompak di abad ke-21!"
            },
            {
                    "id": 22,
                    "category": "Kuis Psikologi",
                    "question": "Kenapa saat acara tukar kado kantor, orang yang paling semangat buka kado duluan justru yang kadonya paling...",
                    "answer": "MURAH",
                    "isTwist": true,
                    "trap": "MEWAH",
                    "openIndices": [
                            0,
                            3,
                            4
                    ],
                    "clues": [
                            "Bungkusnya tebal banget pakai koran berlapis-lapis, isinya ternyata sabun batang.",
                            "Tapi dia berharap banget dapat voucher belanja!"
                    ],
                    "reason": "M-?-?-A-H bukan MEWAH! Justru yang modal kadonya paling MURAH yang paling agresif ngincer kado paling gede!"
            },
            {
                    "id": 23,
                    "category": "Kuis Psikologi",
                    "question": "Supaya peserta seminar yang ngantuk berat mendadak melek semua, pembicara harus bikin...",
                    "answer": "KETAWA",
                    "isTwist": true,
                    "trap": "KEPALA",
                    "openIndices": [
                            0,
                            1,
                            3,
                            5
                    ],
                    "clues": [
                            "Reaksi spontan kalau dengar jokes bapak-bapak atau tebak-tebakan nyeleneh.",
                            "Gratis, menular, dan bikin suasana ruangan langsung cair!"
                    ],
                    "reason": "K-E-?-A-?-A bukan KEPALA! Kalau udah KETAWA bareng, ngantuknya langsung hilang!"
            },
            {
                    "id": 24,
                    "category": "Kuis Psikologi",
                    "question": "Alasan utama kenapa peserta acara kantor semangat banget teriak yel-yel di depan juri adalah...",
                    "answer": "MALU",
                    "isTwist": true,
                    "trap": "MAJU",
                    "openIndices": [
                            0,
                            1,
                            3
                    ],
                    "clues": [
                            "Kalau teriak sendirian jelas nggak berani.",
                            "Karena kalau nggak ikut teriak bareng, rasanya aneh sendiri!"
                    ],
                    "reason": "M-A-?-U bukan MAJU! Justru karena takut kelihatan MALU kalau diam sendiri!"
            },
            {
                    "id": 25,
                    "category": "Kuis Kebenaran",
                    "question": "Jika kamu melempar batu berwarna putih ke dalam Laut Merah, maka batu tersebut akan menjadi...",
                    "answer": "BASAH",
                    "isTwist": true,
                    "trap": "MERAH",
                    "openIndices": [
                            3,
                            4
                    ],
                    "clues": [
                            "Jangan tertipu nama lautnya!",
                            "Benda apa pun yang nyemplung ke air pasti jadi..."
                    ],
                    "reason": "?-?-?-A-H bukan MERAH! Laut Merah airnya tetap bening dan BASAH, bukan cat tembok!"
            },
            {
                    "id": 26,
                    "category": "Kuis Kebenaran",
                    "question": "Mana yang lebih penting bagi manusia: matahari atau bulan?",
                    "answer": "BULAN",
                    "isTwist": true,
                    "trap": "BUKAN",
                    "openIndices": [
                            0,
                            1,
                            3,
                            4
                    ],
                    "clues": [
                            "Jangan jawab matahari dulu!",
                            "Siang hari kan sudah terang, malam hari gelap gulita!"
                    ],
                    "reason": "BULAN! Soalnya bulan menerangi malam yang gelap, kalau matahari cuma muncul pas siang hari yang udah terang!"
            },
            {
                    "id": 27,
                    "category": "Kuis Kebenaran",
                    "question": "Kenapa burung bangau kalau tidur di rawa-rawa selalu mengangkat satu kakinya?",
                    "answer": "JATUH",
                    "isTwist": true,
                    "trap": "PATUH",
                    "openIndices": [
                            1,
                            2,
                            3,
                            4
                    ],
                    "clues": [
                            "Jangan jawab biar nggak pegal!",
                            "Coba bayangkan kalau dua-duanya diangkat sekaligus!"
                    ],
                    "reason": "?-A-T-U-H bukan PATUH! Kalau dua kakinya diangkat semua ya JATUH ke lumpur!"
            },
            {
                    "id": 28,
                    "category": "Kuis Kebenaran",
                    "question": "Hewan peliharaan apa yang paling susah diatur saat jalan bareng karena kalau disuruh belok kanan dia tetap...",
                    "answer": "DIAM",
                    "isTwist": true,
                    "trap": "DIEM",
                    "openIndices": [
                            0,
                            1,
                            3
                    ],
                    "clues": [
                            "Jangan pikirkan hewan tertentu kayak kucing atau bebek.",
                            "Memangnya hewan ngerti bahasa Indonesia disuruh belok kanan?!"
                    ],
                    "reason": "D-I-?-M! Hewan nggak ngerti bahasa manusia, disuruh belok kanan ya tetap DIAM atau jalan sesuka hatinya!"
            },
            {
                    "id": 29,
                    "category": "Kuis Kebenaran",
                    "question": "Kenapa di akhir acara kantor semua peserta berdiri rapat menghadap kamera sambil teriak \"Satu, dua, tiga...\" karena pasti ada yang...",
                    "answer": "KEDIP",
                    "isTwist": true,
                    "trap": "KELIP",
                    "openIndices": [
                            0,
                            1,
                            3,
                            4
                    ],
                    "clues": [
                            "Momen paling ngeselin pas hasil fotonya baru dilihat.",
                            "Yang lain udah senyum maksimal, eh satu orang matanya ketutup!"
                    ],
                    "reason": "K-E-?-I-P bukan KELIP! Selalu ada satu orang yang KEDIP pas jepretan kamera, terus minta ulang sepuluh kali!"
            },
            {
                    "id": 30,
                    "category": "Kuis Kebenaran",
                    "question": "Sikap paling bijaksana saat revisi desain dari klien sudah masuk versi \"FINAL_BENERAN_V9\"?",
                    "answer": "PASRAH",
                    "isTwist": true,
                    "trap": "PINDAH",
                    "openIndices": [
                            0,
                            4,
                            5
                    ],
                    "clues": [
                            "Level tertinggi kesabaran anak agensi dan desainer.",
                            "Sudah lewat tahap ikhlas, tinggal menunggu takdir V10!"
                    ],
                    "reason": "P-?-?-?-A-H bukan PINDAH kantor dulu, tapi PASRAH! Karena habis V9 masih ada V9_REVISI_DIKIT!"
            },
            {
                    "id": 31,
                    "category": "Cerita Berlubang",
                    "question": "Sebuah bus kota berangkat membawa 20 penumpang. Di halte pertama turun 5 orang dan naik 3 orang. Di halte kedua turun 7 orang dan naik 4 orang. Di halte ketiga turun 2 orang. Jadi total halte yang dilewati bus ada _______ halte.",
                    "answer": "TIGA",
                    "isTwist": true,
                    "trap": "LIMA",
                    "openIndices": [
                            1,
                            3
                    ],
                    "clues": [
                            "Jangan hitung 20 - 5 + 3 - 7 + 4 - 2!",
                            "Perhatikan bagian yang ditanyakan di akhir cerita!"
                    ],
                    "reason": "?-I-?-A! Peserta sibuk ngitung sisa penumpang (13), padahal yang ditanya jumlah halte yang dilewati (pertama, kedua, ketiga)!"
            },
            {
                    "id": 32,
                    "category": "Cerita Berlubang",
                    "question": "Pagi itu hujan deras mengguyur jalanan. Rina buru-buru berangkat kerja naik motor. Di tengah kemacetan, Rina bersyukur karena di dalam jok motornya ia selalu menyimpan _______ supaya tetap kuat sampai di kantor.",
                    "answer": "DOA IBU",
                    "isTwist": true,
                    "trap": "DUA ITU",
                    "openIndices": [
                            0,
                            2,
                            4,
                            6
                    ],
                    "clues": [
                            "Bukan benda anti air atau plastik.",
                            "Jas hujannya ketinggalan di kosan, yang tersisa cuma restu orang tua!"
                    ],
                    "reason": "DOA IBU! Tetap basah kuyup sih, tapi hatinya hangat sampai kantor!"
            },
            {
                    "id": 33,
                    "category": "Cerita Berlubang",
                    "question": "Setiap tanggal tua, Budi selalu mengecek saldo ATM-nya dengan penuh harap. Begitu kartu dimasukkan dan PIN ditekan, layar ATM langsung menampilkan tulisan _______ yang bikin Budi senyum kecut lalu jalan ke warteg.",
                    "answer": "SALDO KOSONG",
                    "isTwist": true,
                    "trap": "SALDO KURANG",
                    "openIndices": [
                            0,
                            1,
                            2,
                            3,
                            4,
                            6,
                            10,
                            11
                    ],
                    "clues": [
                            "Bukan cuma kurang dikit, tapi bener-bener habis.",
                            "Angka di layarnya cuma nol besar!"
                    ],
                    "reason": "S-A-L-D-O K-?-?-?-N-G! Bukan cuma kurang, tapi SALDO KOSONG melompong!"
            },
            {
                    "id": 34,
                    "category": "Cerita Berlubang",
                    "question": "Tiga sahabat — Eko, Budi, dan Toni — makan bersama di restoran mewah. Setelah selesai makan dan mengobrol, orang yang paling terakhir berdiri meninggalkan meja makan selalu orang yang _______ di kasir.",
                    "answer": "BAYAR",
                    "isTwist": true,
                    "trap": "BUBAR",
                    "openIndices": [
                            0,
                            3,
                            4
                    ],
                    "clues": [
                            "Yang lain udah duluan ke parkiran pura-pura ambil motor.",
                            "Dia masih duduk nunggu struk tagihan!"
                    ],
                    "reason": "B-?-?-A-R bukan BUBAR! Yang paling terakhir berdiri ya yang lagi BAYAR tagihan!"
            },
            {
                    "id": 35,
                    "category": "Cerita Berlubang",
                    "question": "Saat acara team building di villa, Budi sekamar sama temannya yang tidur ngorok mirip mesin diesel. Sudah tutup kuping pakai bantal tapi tetap tembus. Cara paling ampuh supaya Budi nggak dengar ngoroknya lagi adalah _______ ke kamar sebelah.",
                    "answer": "PINDAH",
                    "isTwist": true,
                    "trap": "PASRAH",
                    "openIndices": [
                            0,
                            4,
                            5
                    ],
                    "clues": [
                            "Jangan bangunin orangnya nanti malah berantem!",
                            "Budi sendiri yang ambil langkah keluar dari kamar itu!"
                    ],
                    "reason": "P-?-?-?-A-H bukan PASRAH! PINDAH kamar aja ke sofa ruang tamu daripada kuping berdenging!"
            },
            {
                    "id": 36,
                    "category": "Cerita Berlubang",
                    "question": "Pak RT memasang bel rumah baru yang bunyinya \"TING TONG\". Kalau seharian penuh nggak ada satu pun tamu yang datang memencet bel itu, maka bel tersebut tetap _______ di tembok pagar.",
                    "answer": "NEMPEL",
                    "isTwist": true,
                    "trap": "NORMAL",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan soal bunyi atau rusaknya bel itu.",
                            "Posisinya di tembok pagar depan rumah Pak RT!"
                    ],
                    "reason": "N-?-?-?-?-L bukan NORMAL! Mau dipencet atau nggak seharian, belnya tetap NEMPEL di tembok rumah!"
            },
            {
                    "id": 37,
                    "category": "Motivasi Cak Lontong",
                    "question": "\"Jangan pernah menyerah mengejar mimpimu, karena jika kamu terus berlari mengejarnya, suatu saat kamu pasti akan...\"",
                    "answer": "CAPEK",
                    "isTwist": true,
                    "trap": "CEPAT",
                    "openIndices": [
                            0,
                            2
                    ],
                    "clues": [
                            "Jangan sok puitis bilang sukses atau berhasil!",
                            "Namanya juga lari maraton nggak berhenti-berhenti!"
                    ],
                    "reason": "C-?-P-?-? bukan CEPAT! Kalau lari terus ya pasti CAPEK — istirahat dulu minum es teh!"
            },
            {
                    "id": 38,
                    "category": "Motivasi Cak Lontong",
                    "question": "\"Orang bijak selalu belajar dari kesalahan. Maka dari itu, supaya hidupmu makin bijak, sering-seringlah berbuat...\"",
                    "answer": "SALAH",
                    "isTwist": true,
                    "trap": "SABAR",
                    "openIndices": [
                            0,
                            1,
                            3
                    ],
                    "clues": [
                            "Ikuti logika kalimat pertamanya secara harfiah!",
                            "Kalau nggak pernah melakukannya, mau belajar dari mana?!"
                    ],
                    "reason": "S-A-?-A-? bukan SABAR! Kalau kamu benar terus, nanti nggak punya bahan pelajaran buat jadi orang bijak!"
            },
            {
                    "id": 39,
                    "category": "Motivasi Cak Lontong",
                    "question": "\"Saat istri tiba-tiba bilang 'Terserah Mas mau makan di mana', langkah paling aman bagi suami yang bijaksana adalah segera...\"",
                    "answer": "PULANG",
                    "isTwist": true,
                    "trap": "PUSING",
                    "openIndices": [
                            0,
                            4,
                            5
                    ],
                    "clues": [
                            "Daripada salah tebak restoran dan bikin perang dingin di mobil.",
                            "Ujung-ujungnya masak mie instan di dapur sendiri!"
                    ],
                    "reason": "P-?-?-?-N-G bukan cuma PUSING! Solusi paling aman menghadapi jebakan \"terserah\" adalah langsung PULANG!"
            },
            {
                    "id": 40,
                    "category": "Motivasi Cak Lontong",
                    "question": "\"Tamu yang berkunjung ke rumah orang lain lebih dari 2x24 jam wajib...\"",
                    "answer": "PAMIT",
                    "isTwist": true,
                    "trap": "PATUT",
                    "openIndices": [
                            0,
                            1,
                            4
                    ],
                    "clues": [
                            "Bukan lapor Pak RT dulu.",
                            "Masa nginep dua hari dua malam nggak bilang-bilang pas mau keluar rumah?!"
                    ],
                    "reason": "P-A-?-?-T bukan PATUT! Sudah 2x24 jam nginep ya wajib PAMIT sebelum pulang!"
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
