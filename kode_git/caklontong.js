(() => {
    'use strict';

    const CAK_LONTONG_QUESTIONS = [
            {
                    "id": 1,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Air hujan yang mengguyur bumi biasanya turunnya...",
                    "answer": "DARI MAGHRIB",
                    "isTwist": true,
                    "trap": "DARI MENDUNG",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan \"dari langit\" atau \"dari awan mendung\"!",
                            "Ini soal jam turunnya hujan di sore hari — kalau Ashar belum turun!"
                    ],
                    "reason": "DARI MAGHRIB! Karena waktu Ashar belum turun, masih mendung doang — pas Maghrib baru mengguyur!"
            },
            {
                    "id": 2,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Jika sedang sakit demam tinggi di puskesmas atau klinik, yang paling penting dan utama untuk cepat diperiksa adalah...",
                    "answer": "DAFTAR",
                    "isTwist": true,
                    "trap": "DOKTER",
                    "openIndices": [
                            5
                    ],
                    "clues": [
                            "Bukan orang yang pakai stetoskop.",
                            "Hal pertama yang wajib dilakukan di meja loket paling depan!"
                    ],
                    "reason": "D-?-?-?-?-R bukan DOKTER! Mau ada sepuluh dokter di dalam, kalau nggak DAFTAR dulu nggak bakal dipanggil!"
            },
            {
                    "id": 3,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Seorang tukang cukur memotong rambut pelanggannya dengan...",
                    "answer": "GANTIAN",
                    "isTwist": true,
                    "trap": "GUNTING",
                    "openIndices": [
                            3
                    ],
                    "clues": [
                            "Bukan alat tajam yang bunyinya krek-krek.",
                            "Kalau ada lima pelanggan datang bareng, masa dicukur sekaligus?!"
                    ],
                    "reason": "G-?-?-T-?-?-? bukan GUNTING! Kalau pelanggannya ramai ya dicukurnya GANTIAN satu per satu!"
            },
            {
                    "id": 4,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Di rumah makan Padang, selain pakai sendok, biasanya orang makan pakai...",
                    "answer": "TENAGA",
                    "isTwist": true,
                    "trap": "TANGAN",
                    "openIndices": [
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
                            4
                    ],
                    "clues": [
                            "Pakai mata dulu biar nggak salah sangka.",
                            "Kalau langsung jalan pas lampu merah ya kena tilang!"
                    ],
                    "reason": "L-?-?-?-T bukan LEWAT! Lampu merah itu di-LIHAT dulu, jangan main terobos!"
            },
            {
                    "id": 7,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Orang yang mengendarai bus antar kota saat jalan tol macet total harus...",
                    "answer": "SABAR",
                    "isTwist": true,
                    "trap": "SOPIR",
                    "openIndices": [
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
                            4
                    ],
                    "clues": [
                            "Lebih spesifik dari nama ruangannya.",
                            "Tempat paling empuk buat meringkuk sambil megangin pipi!"
                    ],
                    "reason": "K-?-?-?-R bukan cuma KAMAR! Malam-malam klinik tutup, ya langsung guling-guling di KASUR!"
            },
            {
                    "id": 9,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Hal pertama yang dilakukan anak Gen Z begitu bangun tidur di pagi hari adalah...",
                    "answer": "MEREM",
                    "isTwist": true,
                    "trap": "MINUM",
                    "openIndices": [
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
                    "question": "Ibu Ani punya 4 anak: Mei, Juni, Juli, dan anak bungsunya laki-laki lahir tepat di bulan delapan. Di rumah, anak keempat itu biasa dipanggil...",
                    "answer": "ADIK",
                    "isTwist": true,
                    "trap": "AGUS",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Siapa bilang namanya Agus?!",
                            "Panggilan akrab di keluarga karena dia anak paling bungsu!"
                    ],
                    "reason": "A-?-?-? bukan AGUS! Karena dia anak bungsu, kakak-kakaknya manggil dia ADIK!"
            },
            {
                    "id": 12,
                    "category": "Kata Misteri",
                    "question": "Seekor sapi berdiri menghadap lurus ke timur, lalu memutar badan 90 derajat ke kanan. Kini ujung ekor sapi itu mengarah ke...",
                    "answer": "BAWAH",
                    "isTwist": true,
                    "trap": "BARAT",
                    "openIndices": [
                            3
                    ],
                    "clues": [
                            "Jangan pakai kompas atau hitung arah mata angin!",
                            "Bayangkan arah alami jatuhnya ekor sapi karena gravitasi!"
                    ],
                    "reason": "B-?-?-A-? bukan BARAT! Mau sapinya menghadap ke mana aja, ujung ekor sapi tetap menjuntai ke BAWAH!"
            },
            {
                    "id": 13,
                    "category": "Kata Misteri",
                    "question": "Supaya tidak kalah cepat saat lomba balap karung 17-an dimulai, semua peserta di garis start wajib...",
                    "answer": "BERDIRI",
                    "isTwist": true,
                    "trap": "BERLARI",
                    "openIndices": [
                            6
                    ],
                    "clues": [
                            "Belum boleh lari sebelum peluit ditiup.",
                            "Kalau masih duduk lesehan di dalam karung gimana mau lompat?!"
                    ],
                    "reason": "B-?-?-?-?-?-I bukan BERLARI! Mana bisa lari di dalam karung kalau belum BERDIRI dulu?!"
            },
            {
                    "id": 14,
                    "category": "Kata Misteri",
                    "question": "Saat listrik padam total di kosan tengah malam, benda yang paling sering dicari dan langsung dinyalakan pertama kali oleh penghuni kos adalah...",
                    "answer": "LAYAR",
                    "isTwist": true,
                    "trap": "LILIN",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan benda yang pakai korek api atau sumbu.",
                            "Langsung ditekan tombol samping HP buat tanya grup kos \"mati lampu ya guys?\""
                    ],
                    "reason": "L-?-?-?-? bukan LILIN! Anak zaman sekarang langsung nyalain LAYAR HP dulu buat ngecek status WiFi!"
            },
            {
                    "id": 15,
                    "category": "Kata Misteri",
                    "question": "Jika sebuah sepeda motor tiba-tiba mogok di tengah jalan tol bebas hambatan, maka motor tersebut pasti langsung...",
                    "answer": "DITILANG",
                    "isTwist": true,
                    "trap": "DIDORONG",
                    "openIndices": [
                            1
                    ],
                    "clues": [
                            "Jangan cuma bayangkan mesinnya yang rusak!",
                            "Ingat aturan lalu lintas tentang kendaraan roda dua di jalan tol!"
                    ],
                    "reason": "D-I-?-?-?-?-?-? bukan cuma DIDORONG! Motor kan dilarang masuk jalan tol — baru masuk aja udah pasti DITILANG!"
            },
            {
                    "id": 16,
                    "category": "Kata Misteri",
                    "question": "Sehebat apa pun dokter bedah terbaik di dunia, ada satu kondisi orang yang mustahil bisa dioperasi olehnya, yaitu orang yang...",
                    "answer": "SEHAT",
                    "isTwist": true,
                    "trap": "SAKIT",
                    "openIndices": [
                            4
                    ],
                    "clues": [
                            "Nggak ada dokter yang mau membedah kalau nggak ada penyakitnya.",
                            "Kondisi tubuhnya justru sedang baik-baik saja!"
                    ],
                    "reason": "S-?-?-?-T bukan SAKIT! Orang lagi SEHAT walafiat ngapain naik ke meja operasi?!"
            },
            {
                    "id": 17,
                    "category": "Kata Misteri",
                    "question": "Benda kecil di rumah seperti gunting kuku atau charger HP selalu tidak ketemu saat dicari mati-matian, tapi langsung muncul di atas meja tepat setelah kita...",
                    "answer": "BERHENTI",
                    "isTwist": true,
                    "trap": "BERGANTI",
                    "openIndices": [
                            7
                    ],
                    "clues": [
                            "Hukum alam paling ngeselin soal barang hilang.",
                            "Munculnya pas kita sudah pasrah nggak nyari lagi!"
                    ],
                    "reason": "B-?-?-?-?-?-?-I bukan BERGANTI! Barang hilang baru muncul sendiri tepat setelah kita BERHENTI nyari!"
            },
            {
                    "id": 18,
                    "category": "Kata Misteri",
                    "question": "Kakek berusia 90 tahun ini seumur-umur tidak pernah merasakan sakit gigi berlubang sama sekali karena mulutnya sudah...",
                    "answer": "OMPONG",
                    "isTwist": true,
                    "trap": "KOSONG",
                    "openIndices": [
                            5
                    ],
                    "clues": [
                            "Bukan karena rajin gosok gigi tiga kali sehari.",
                            "Istilah khusus untuk orang yang nggak punya gigi lagi!"
                    ],
                    "reason": "?-?-?-O-?-G bukan KOSONG! Giginya udah OMPONG semua, jadi mana ada gigi yang bisa sakit!"
            },
            {
                    "id": 19,
                    "category": "Kuis Psikologi",
                    "question": "Saat masuk lift sempit sendirian lalu ada orang asing ikut masuk, tiba-tiba kita menatap layar HP padahal nggak ada chat masuk supaya nggak kelihatan...",
                    "answer": "CANGGUNG",
                    "isTwist": true,
                    "trap": "CHATTING",
                    "openIndices": [
                            7
                    ],
                    "clues": [
                            "Cuma buka-tutup menu utama HP biar tangan ada kerjaan.",
                            "Biar nggak tatap-tatapan diam aja di dalam lift!"
                    ],
                    "reason": "C-?-?-?-?-?-?-G bukan beneran CHATTING! Cuma biar nggak kelihatan CANGGUNG aja satu lift sempit!"
            },
            {
                    "id": 20,
                    "category": "Kuis Psikologi",
                    "question": "Jika diminta memilih uang Rp 100 juta tunai atau sahabat sejati seumur hidup, orang yang langsung memilih sahabat sejati tanpa mikir biasanya memang...",
                    "answer": "ORANG KAYA",
                    "isTwist": true,
                    "trap": "ORANG BAIK",
                    "openIndices": [
                            7
                    ],
                    "clues": [
                            "Lihat dulu isi saldo rekeningnya sebelum terharu!",
                            "Yang masih banyak cicilan pasti ambil 100 juta dulu!"
                    ],
                    "reason": "O-?-?-?-? ?-A-?-? bukan cuma ORANG BAIK! Yang langsung tolak Rp 100 juta biasanya memang sudah ORANG KAYA!"
            },
            {
                    "id": 21,
                    "category": "Kuis Psikologi",
                    "question": "Saat instal aplikasi baru, hampir semua orang langsung mencentang kotak \"Saya sudah membaca syarat dan ketentuan\". Padahal pengakuan itu sebenarnya...",
                    "answer": "PALSU",
                    "isTwist": true,
                    "trap": "PAHAM",
                    "openIndices": [
                            1
                    ],
                    "clues": [
                            "Tulisannya 40 halaman huruf kecil-kecil.",
                            "Jujur aja, nggak ada yang beneran baca dari atas sampai bawah!"
                    ],
                    "reason": "P-A-?-?-? bukan PAHAM! Pengakuan sudah baca itu PALSU — hampir semua orang langsung asal klik setuju!"
            },
            {
                    "id": 22,
                    "category": "Kuis Psikologi",
                    "question": "Saat acara tukar kado kantor, orang yang paling semangat mengincar kotak kado paling besar biasanya diam-diam membawa kado yang paling...",
                    "answer": "MURAH",
                    "isTwist": true,
                    "trap": "MEWAH",
                    "openIndices": [
                            4
                    ],
                    "clues": [
                            "Bungkusnya tebal banget pakai koran, isinya ternyata sabun batang.",
                            "Modal kecil tapi harapannya dapat voucher belanja!"
                    ],
                    "reason": "M-?-?-?-H bukan MEWAH! Justru yang modalnya paling MURAH yang paling agresif ngincer kado paling gede!"
            },
            {
                    "id": 23,
                    "category": "Kuis Psikologi",
                    "question": "Pusat dari semua ketegangan, stres, dan kebahagiaan karyawan saat dikejar deadline kerjaan di kantor selalu berawal dari...",
                    "answer": "KETAWA",
                    "isTwist": true,
                    "trap": "KEPALA",
                    "openIndices": [
                            5
                    ],
                    "clues": [
                            "Bukan bagian tubuh tempat pusing berada.",
                            "Sekali dengar jokes receh teman sebelah, stres langsung pecah!"
                    ],
                    "reason": "K-?-?-?-?-A bukan KEPALA! Kalau udah bisa KETAWA bareng teman sekantor, seberat apa pun deadline langsung terasa ringan!"
            },
            {
                    "id": 24,
                    "category": "Kuis Psikologi",
                    "question": "Di restoran modern, setelah duduk di kursi dan memesan menu makanan, benda pertama yang langsung dipegang anak muda sebelum makanan tiba adalah...",
                    "answer": "PONSEL",
                    "isTwist": true,
                    "trap": "PIRING",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan peralatan makan yang ditaruh di meja.",
                            "Buat scroll TikTok atau foto meja kosong sambil nunggu pesanan!"
                    ],
                    "reason": "P-?-?-?-?-? bukan PIRING! Makanannya belum datang, tangannya udah sibuk megang PONSEL terus!"
            },
            {
                    "id": 25,
                    "category": "Kuis Kebenaran",
                    "question": "Saat ronda malam melewati rumah tua yang angker dan sunyi senyap, tiba-tiba terdengar suara keras \"KRIUUUK\" dari sudut gelap, ternyata itu bunyi...",
                    "answer": "PERUT",
                    "isTwist": true,
                    "trap": "PINTU",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan kayu berderit atau hal mistis.",
                            "Efek begadang jaga pos ronda sejak jam 10 tanpa beli nasi goreng!"
                    ],
                    "reason": "P-?-?-?-? bukan PINTU berderit! Itu bunyi PERUT bapak-bapak ronda yang belum makan malam!"
            },
            {
                    "id": 26,
                    "category": "Kuis Kebenaran",
                    "question": "Kenapa matahari selalu terbit rajin di pagi hari tapi menghilang saat malam tiba?",
                    "answer": "TIDUR",
                    "isTwist": true,
                    "trap": "TURUN",
                    "openIndices": [
                            3
                    ],
                    "clues": [
                            "Bayangkan sudah kerja lembur menyinari bumi 12 jam nonstop!",
                            "Kalau manusia capek kerja seharian ya..."
                    ],
                    "reason": "T-?-?-U-? bukan cuma TURUN! Udah kerja nonstop dari subuh sampai magrib, malemnya ya TIDUR lah istirahat!"
            },
            {
                    "id": 27,
                    "category": "Kuis Kebenaran",
                    "question": "Cara paling ampuh dan gratis agar pengendara tidak pernah kena tilang razia ganjil-genap ataupun lampu merah seumur hidup adalah...",
                    "answer": "TIDUR",
                    "isTwist": true,
                    "trap": "TAATI",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan mematuhi rambu di jalan raya.",
                            "Tinggal merem di atas kasur di rumah, dijamin nol pelanggaran!"
                    ],
                    "reason": "T-?-?-?-? bukan cuma TAATI aturan! Kalau TIDUR seharian di rumah nggak keluar ke jalan raya, mana bisa ditilang!"
            },
            {
                    "id": 28,
                    "category": "Kuis Kebenaran",
                    "question": "Dalam pertandingan bola basket resmi antar tim juara, kenapa sepuluh pemain berbadan tinggi di lapangan semuanya rela berlari mengejar satu bola yang sama?",
                    "answer": "MISKIN",
                    "isTwist": true,
                    "trap": "MENANG",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Jangan pikirkan skor atau piala kejuaraan!",
                            "Bayangkan kalau mereka punya cukup uang buat beli bola masing-masing!"
                    ],
                    "reason": "M-?-?-?-?-? bukan cuma mau MENANG! Kasihan banget, satu lapangan isi 10 orang cuma mampu beli satu bola!"
            },
            {
                    "id": 29,
                    "category": "Kuis Kebenaran",
                    "question": "Bakso urat pakai sambal tiga sendok paling nikmat disantap pelan-pelan sambil berkeringat karena rasanya...",
                    "answer": "PANAS",
                    "isTwist": true,
                    "trap": "PEDAS",
                    "openIndices": [
                            3
                    ],
                    "clues": [
                            "Bukan cuma efek cabainya!",
                            "Baru diangkat dari panci kuah mendidih, lidah bisa melepuh kalau nggak ditiup!"
                    ],
                    "reason": "P-?-?-A-? bukan cuma PEDAS! Kuah bakso baru diangkat dari panci itu masih PANAS mendidih!"
            },
            {
                    "id": 30,
                    "category": "Kuis Kebenaran",
                    "question": "Setelah lima kali revisi desain masih ditolak klien dengan alasan \"kurang greget\", keputusan seorang desainer biasanya langsung...",
                    "answer": "PASRAH",
                    "isTwist": true,
                    "trap": "PINDAH",
                    "openIndices": [
                            5
                    ],
                    "clues": [
                            "Belum sampai nekat keluar kantor kok.",
                            "Sudah di titik menerima nasib apa adanya!"
                    ],
                    "reason": "P-?-?-?-?-H bukan PINDAH kantor! Desainer udah PASRAH ikutin aja mau klien sampai revisi final ke-20!"
            },
            {
                    "id": 31,
                    "category": "Cerita Berlubang",
                    "question": "Setiap malam saat lampu kamar sudah dimatikan gelap gulita, nyamuk selalu berbunyi \"ngiiing\" dekat telinga kita karena dia lagi _______ di ruangan gelap.",
                    "answer": "LEWAT",
                    "isTwist": true,
                    "trap": "LAPAR",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Nggak selalu mau mengisap darah!",
                            "Bayangkan dia lagi terbang di tempat gelap — bunyinya kayak klakson biar nggak tabrakan!"
                    ],
                    "reason": "L-?-?-?-? bukan LAPAR! Lampu kamar kan mati gelap gulita, nyamuknya lagi LEWAT sambil bunyiin klakson biar nggak nabrak kuping!"
            },
            {
                    "id": 32,
                    "category": "Cerita Berlubang",
                    "question": "Pagi itu hujan deras mengguyur jalanan. Rina buru-buru berangkat kerja naik motor. Untungnya di tengah jalan ia ingat sudah menyiapkan _______ supaya tidak kehujanan.",
                    "answer": "MANTRA",
                    "isTwist": true,
                    "trap": "MANTEL",
                    "openIndices": [
                            3
                    ],
                    "clues": [
                            "Bukan benda plastik anti-air di dalam jok motor.",
                            "Jas hujannya ketinggalan di kosan, jadi cuma komat-kamit di dalam hati!"
                    ],
                    "reason": "M-?-?-T-?-? bukan MANTEL! Jas hujannya ketinggalan, jadi Rina baca MANTRA anti-hujan sepanjang jalan!"
            },
            {
                    "id": 33,
                    "category": "Cerita Berlubang",
                    "question": "Setiap tanggal 28 akhir bulan, Andi mengecek saldo ATM-nya dengan tegang. Begitu layar muncul, untungnya saldonya masih cukup untuk membeli _______ di pinggir jalan.",
                    "answer": "MINUMAN",
                    "isTwist": true,
                    "trap": "MAKANAN",
                    "openIndices": [
                            11
                    ],
                    "clues": [
                            "Saldonya tinggal Rp 4.000 — nggak cukup buat nasi padang!",
                            "Paling cukup buat segelas es teh tawar atau air mineral!"
                    ],
                    "reason": "M-?-?-?-?-A-? bukan MAKANAN berat! Saldo Rp 4.000 paling cuma cukup beli MINUMAN es teh manis!"
            },
            {
                    "id": 34,
                    "category": "Cerita Berlubang",
                    "question": "Setelah tiga jam nongkrong asyik di kafe bareng teman lama dan kopi sudah habis semua, orang-orang akhirnya sepakat untuk _______ sebelum meninggalkan meja.",
                    "answer": "BAYAR",
                    "isTwist": true,
                    "trap": "BUBAR",
                    "openIndices": [
                            4
                    ],
                    "clues": [
                            "Jangan langsung kabur ke parkiran!",
                            "Masih ada tagihan bill yang menunggu di meja kasir!"
                    ],
                    "reason": "B-?-?-?-R bukan langsung BUBAR! Habis nongkrong ya BAYAR dulu tagihan kopinya!"
            },
            {
                    "id": 35,
                    "category": "Cerita Berlubang",
                    "question": "Saat acara team building di villa, Budi sekamar sama temannya yang tidur ngorok mirip mesin diesel. Sudah tutup kuping pakai bantal tetap tembus, akhirnya Budi memilih _______ demi ketenangan tidur.",
                    "answer": "PINDAH",
                    "isTwist": true,
                    "trap": "PASRAH",
                    "openIndices": [
                            5
                    ],
                    "clues": [
                            "Budi nggak mau nyerah begitu saja sama suara ngorok.",
                            "Masih ada sofa kosong di ruang tamu villa sebelah!"
                    ],
                    "reason": "P-?-?-?-?-H bukan PASRAH! Budi langsung PINDAH kamar tidur di sofa ruang tamu daripada kuping berdenging!"
            },
            {
                    "id": 36,
                    "category": "Cerita Berlubang",
                    "question": "Karyawan baru itu selalu membawa buku catatan tebal setiap ikut rapat penting bersama direksi supaya kelihatan rajin, padahal isi halamannya selalu _______ sampai rapat bubar.",
                    "answer": "KOSONG",
                    "isTwist": true,
                    "trap": "KURANG",
                    "openIndices": [
                            5
                    ],
                    "clues": [
                            "Pulpennya aja cuma diputar-putar di jari tangan.",
                            "Nggak ada satu kata pun yang beneran ditulis!"
                    ],
                    "reason": "K-?-?-?-?-G bukan KURANG lengkap! Isi bukunya memang KOSONG melompong dari halaman pertama sampai terakhir!"
            },
            {
                    "id": 37,
                    "category": "Motivasi Cak Lontong",
                    "question": "\"Jangan pernah berhenti mengejar mimpimu sampai tua, karena jika kamu terus berlari mengejarnya tanpa jeda, ujung-ujungnya kamu pasti...\"",
                    "answer": "BERHENTI",
                    "isTwist": true,
                    "trap": "BERHASIL",
                    "openIndices": [
                            3
                    ],
                    "clues": [
                            "Jangan terlalu optimis bilang sukses!",
                            "Bayangkan kamu disuruh lari terus bertahun-tahun tanpa istirahat!"
                    ],
                    "reason": "B-?-?-H-?-?-?-? bukan BERHASIL! Lari terus nggak ada jeda ujung-ujungnya pasti BERHENTI dulu buat minum es teh!"
            },
            {
                    "id": 38,
                    "category": "Motivasi Cak Lontong",
                    "question": "\"Orang bijak selalu belajar dari kesalahan. Maka dari itu, supaya hidupmu makin bijak dan penuh hikmah, sering-seringlah...\"",
                    "answer": "SALAH",
                    "isTwist": true,
                    "trap": "SABAR",
                    "openIndices": [
                            1
                    ],
                    "clues": [
                            "Ikuti logika kalimat pertamanya secara harfiah!",
                            "Kalau kamu benar terus, nanti nggak punya bahan buat belajar!"
                    ],
                    "reason": "S-A-?-?-? bukan SABAR! Kalau nggak pernah berbuat SALAH, nanti mau belajar jadi orang bijak dari mana?!"
            },
            {
                    "id": 39,
                    "category": "Motivasi Cak Lontong",
                    "question": "\"Saat istri tiba-tiba bilang 'Terserah Mas mau makan di mana', reaksi paling bijak dari seorang suami berpengalaman biasanya langsung...\"",
                    "answer": "PULANG",
                    "isTwist": true,
                    "trap": "PUSING",
                    "openIndices": [
                            5
                    ],
                    "clues": [
                            "Daripada salah tebak restoran lalu perang dingin di dalam mobil.",
                            "Ujung-ujungnya paling aman masak mie instan di dapur sendiri!"
                    ],
                    "reason": "P-?-?-?-?-G bukan cuma PUSING! Menghadapi jebakan \"terserah\", solusi paling aman adalah langsung PULANG!"
            },
            {
                    "id": 40,
                    "category": "Motivasi Cak Lontong",
                    "question": "\"Tamu yang berkunjung ke rumah orang lain lebih dari 2x24 jam sebaiknya segera...\"",
                    "answer": "PAMIT",
                    "isTwist": true,
                    "trap": "PERGI",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Jangan asal menghilang kabur lewat pagar begitu saja!",
                            "Minimal salaman dan bilang terima kasih dulu sama tuan rumah!"
                    ],
                    "reason": "P-?-?-?-? bukan langsung PERGI ngilang kayak tuyul! Udah nginep 2x24 jam ya wajib PAMIT dulu!"
            },
            {
                    "id": 41,
                    "category": "Ice Breaking & Kantor",
                    "question": "Saat makanan lezat sudah tersaji di meja restoran kantor dan siap disantap, barang pertama yang paling cepat diangkat semua karyawan adalah...",
                    "answer": "PONSEL",
                    "isTwist": true,
                    "trap": "PIRING",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan alat makan atau gelas minum!",
                            "Harus difoto dulu dari atas biar estetik buat story sebelum dimakan!"
                    ],
                    "reason": "P-?-?-?-?-? bukan PIRING! Belum juga nyendok nasi, semuanya langsung angkat PONSEL buat foto makanan dulu!"
            },
            {
                    "id": 42,
                    "category": "Ice Breaking & Kantor",
                    "question": "Bos memanggil 5 pegawai yang telat jam 9 pagi ke ruangannya. Setelah selesai dinasihati, besok paginya siapa yang paling pertama membuka pintu masuk kantor?",
                    "answer": "PENJAGA",
                    "isTwist": true,
                    "trap": "PEGAWAI",
                    "openIndices": [
                            0,
                            1
                    ],
                    "clues": [
                            "Bukan salah satu dari 5 karyawan yang dimarahi tadi!",
                            "Dia pegang kunci gembok gerbang kantor sejak jam 6 subuh!"
                    ],
                    "reason": "P-E-?-?-?-?-? bukan PEGAWAI yang telat kemarin! Yang paling pagi buka pintu kantor jelas PENJAGA / satpam kantor!"
            },
            {
                    "id": 43,
                    "category": "Ice Breaking & Kantor",
                    "question": "Supaya rapat online selama 4 jam di luar kantor tidak putus di tengah jalan tanpa kendala, hal paling penting yang wajib diisi penuh adalah...",
                    "answer": "PERUT",
                    "isTwist": true,
                    "trap": "PULSA",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan soal kuota internet atau baterai laptop!",
                            "Kalau rapat 4 jam sambil kelaparan nanti pingsan duluan!"
                    ],
                    "reason": "P-?-?-?-? bukan PULSA! Isi PERUT dulu sebelum rapat 4 jam biar suara keroncongan nggak bocor ke mikrofon!"
            },
            {
                    "id": 44,
                    "category": "Ice Breaking & Kantor",
                    "question": "Ketika komputer kantor mendadak macet dan tidak bergerak saat dikejar deadline 5 menit lagi, bagian yang paling cepat terpancing adalah...",
                    "answer": "EMOSI",
                    "isTwist": true,
                    "trap": "ENTER",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan tombol keyboard atau mouse-nya!",
                            "Detak jantung naik dan tangan langsung pengen gebrak meja!"
                    ],
                    "reason": "E-?-?-?-? bukan tombol ENTER! Yang langsung kepencet duluan saat komputer hang pas deadline adalah EMOSI!"
            },
            {
                    "id": 45,
                    "category": "Ice Breaking & Kantor",
                    "question": "Dalam lomba balap lari kantor, Andi berlari super kencang hingga berhasil menyalip peserta di posisi PALING TERAKHIR. Kini Andi berada di urutan...",
                    "answer": "MUSTAHIL",
                    "isTwist": true,
                    "trap": "MENANGIS",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Coba pikirkan baik-baik logikanya: pelari paling terakhir kan posisi paling belakang!",
                            "Nggak ada pelari di belakang orang yang posisinya paling buncit!"
                    ],
                    "reason": "MUSTAHIL! Bagaimana cara menyalip orang yang ada di posisi paling terakhir kalau di belakangnya udah nggak ada siapa-siapa?!"
            },
            {
                    "id": 46,
                    "category": "Bapak-bapak & Generasi",
                    "question": "Saat istri mengirim foto gamis baru di WhatsApp lalu bertanya \"Bagus yang warna biru atau merah Mas?\", jawaban jujur di lubuk hati bapak-bapak adalah...",
                    "answer": "MAHAL",
                    "isTwist": true,
                    "trap": "MERAH",
                    "openIndices": [
                            0,
                            3
                    ],
                    "clues": [
                            "Bukan soal pilihan warnanya!",
                            "Mata bapak-bapak langsung tertuju ke label angka di pojok kanan bawah!"
                    ],
                    "reason": "M-?-?-A-? bukan MERAH! Di mata bapak-bapak, warna apa pun yang difoto istri di toko itu jawabannya tetap MAHAL!"
            },
            {
                    "id": 47,
                    "category": "Bapak-bapak & Generasi",
                    "question": "Jika anak muda zaman sekarang berfoto selalu senyum santai bergaya bebas, maka pose andalan bapak-bapak saat difoto formal selalu kaku seperti...",
                    "answer": "KAYU",
                    "isTwist": true,
                    "trap": "KAKU",
                    "openIndices": [
                            0,
                            1,
                            3
                    ],
                    "clues": [
                            "Tangan lurus menempel di samping celana tanpa bergerak sedikit pun!",
                            "Benda keras dari batang pohon yang nggak bisa ditekuk!"
                    ],
                    "reason": "K-A-?-U bukan cuma KAKU! Bapak-bapak kalau disuruh foto tegak lurusnya udah kayak batang KAYU!"
            },
            {
                    "id": 48,
                    "category": "Bapak-bapak & Generasi",
                    "question": "Jika bapak-bapak diundang rapat RT jam 19.30 dengan catatan \"Harap membawa pulpen\", maka benda yang paling cepat habis di meja rapat adalah...",
                    "answer": "KACANG",
                    "isTwist": true,
                    "trap": "KERTAS",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Bukan perlengkapan tulis-menulis atau notulen!",
                            "Isinya dua butir di dalam kulit keras rebus, dimakan sambil ngobrol!"
                    ],
                    "reason": "K-?-?-?-?-? bukan KERTAS! Catatan rapatnya cuma dua baris, tapi KACANG rebus dan gorengan ludes dalam 10 menit!"
            },
            {
                    "id": 49,
                    "category": "Bapak-bapak & Generasi",
                    "question": "Setiap tanggal tua, saat anak Gen Z dan Milenial membuka aplikasi pesan-antar makanan di HP, bagian yang paling pertama dicek adalah...",
                    "answer": "DOMPET",
                    "isTwist": true,
                    "trap": "DISKON",
                    "openIndices": [
                            0
                    ],
                    "clues": [
                            "Promo ongkir gratis sudah melambai-lambai di layar.",
                            "Tapi tetap harus mengecek isi saldo tunai di saku celana dulu!"
                    ],
                    "reason": "D-?-?-?-?-? bukan DISKON doang! Diskon 90% pun percuma kalau pas cek DOMPET isinya cuma struk indomaret!"
            },
            {
                    "id": 50,
                    "category": "Bapak-bapak & Generasi",
                    "question": "Seorang ayah membelikan sepeda baru berwarna merah, tapi anaknya malah menangis kencang saat didudukkan di joknya karena ternyata anaknya belum bisa...",
                    "answer": "BERDIRI",
                    "isTwist": true,
                    "trap": "BERLARI",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Usia anaknya masih sangat kecil sekali!",
                            "Boro-boro mengayuh pedal, berdiri tegak di lantai saja belum mampu!"
                    ],
                    "reason": "B-?-?-?-?-?-I bukan BERLARI! Anaknya masih bayi 4 bulan — jangankan gowes sepeda, BERDIRI aja belum bisa!"
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

        if (state.questionHidden && !state.isSolved && !isHostMode) {
            el.qText.textContent = '🙈 Soal masih ditutup Host — klik teks ini atau tombol Buka Soal untuk menampilkan!';
            el.qText.style.cursor = 'pointer';
            el.qText.title = 'Klik untuk tampilkan soal';
        } else {
            el.qText.textContent = q.question;
            el.qText.style.cursor = '';
            el.qText.title = '';
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
        state.questionHidden = false;
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
        el.qText?.addEventListener('click', () => {
            if (state.questionHidden) {
                state.questionHidden = false;
                renderQuestion();
            }
        });
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
