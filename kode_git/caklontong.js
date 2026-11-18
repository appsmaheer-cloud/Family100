(() => {
    'use strict';

    const CAK_LONTONG_QUESTIONS = [
            {
                    "id": 1,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Hujan turun dari...",
                    "answer": "MAGHRIB",
                    "isTwist": true,
                    "trap": "LANGIT",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan dari atas awan atau langit.",
                            "Ini soal waktu mulainya hujan deras di sore hari!"
                    ],
                    "reason": "MAGHRIB! Karena waktu Ashar belum turun, masih mendung doang!"
            },
            {
                    "id": 2,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Orang yang paling jarang sakit gigi di seluruh dunia adalah orang yang...",
                    "answer": "OMPONG",
                    "isTwist": true,
                    "trap": "ORANG",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan karena rajin sikat gigi tiga kali sehari.",
                            "Gimana mau sakit gigi kalau objek yang sakitnya aja nggak ada?!"
                    ],
                    "reason": "OMPONG! Nggak ada giginya, jadi nggak mungkin sakit gigi — paling cuma gusi gatel!"
            },
            {
                    "id": 3,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Bagian dari mobil yang paling sering merasakan beban berat setiap bulan tapi nggak pernah masuk bengkel?",
                    "answer": "CICILAN",
                    "isTwist": true,
                    "trap": "CHASSIS",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan ban, shockbreaker, atau mesin.",
                            "Ban kempes bisa ditambal di pinggir jalan, kalau ini nunggak 3 bulan langsung didatangi debt collector!"
                    ],
                    "reason": "CICILAN! Beban paling berat di mobil bukan muatan bagasi, tapi angsuran tiap tanggal 5!"
            },
            {
                    "id": 4,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Orang yang paling akurat 100% saat menebak cuaca hari ini adalah orang yang menebak cuaca...",
                    "answer": "KEMARIN",
                    "isTwist": true,
                    "trap": "KARENA",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Jangan pakai aplikasi BMKG atau ramalan satelit.",
                            "Kejadiannya sudah lewat jadi pasti 100% benar!"
                    ],
                    "reason": "KEMARIN! Tebak aja cuaca KEMARIN — dijamin 100% akurat tanpa meleset!"
            },
            {
                    "id": 5,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Kenapa tukang bakso kalau lewat depan rumah selalu membunyikan mangkok \"ting ting ting\"?",
                    "answer": "BELUM LAKU",
                    "isTwist": true,
                    "trap": "BIAR RAME",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan buat manggil pembeli atau kode rahasia.",
                            "Coba pikirkan kalau dagangannya sudah habis semua!"
                    ],
                    "reason": "Karena BELUM LAKU! Kalau udah laku habis semua ya langsung pulang nyuci mangkok, nggak bunyi-bunyi lagi!"
            },
            {
                    "id": 6,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Kenapa di restoran cepat saji tidak pernah ada menu nasi uduk komplit?",
                    "answer": "LAMBAT",
                    "isTwist": true,
                    "trap": "LARIS",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan karena tidak laku atau mahal bahannya.",
                            "Masak santan dan ngukus berasnya butuh berjam-jam!"
                    ],
                    "reason": "Nanti jadi restoran LAMBAT saji! Karena masak nasi uduk nggak bisa 3 menit!"
            },
            {
                    "id": 7,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Selain pakai kacamata, orang yang matanya minus bisa melihat tulisan dari jarak 50 meter dengan sangat jelas memakai...",
                    "answer": "FOTO",
                    "isTwist": true,
                    "trap": "FOKUS",
                    "openIndices": [
                            0,
                            3
                    ],
                    "clues": [
                            "Tidak perlu operasi laser atau beli teropong mahal.",
                            "Pakai kamera HP lalu di-zoom pakai dua jari!"
                    ],
                    "reason": "F-?-?-O! Di-FOTO aja dulu dari jauh, terus di-zoom di layar HP sampai gede!"
            },
            {
                    "id": 8,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Kenapa di kalender dinding tanggal merah selalu jauh lebih sedikit daripada tanggal hitam?",
                    "answer": "BIAR KERJA",
                    "isTwist": true,
                    "trap": "BIAR LIBUR",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Kalau tanggal merahnya 30 hari sebulan, apa jadinya kantor?",
                            "Bos dan HRD sepakat dengan aturan ini!"
                    ],
                    "reason": "BIAR KERJA! Kalau tanggal merah terus, kantor tutup dan gajiannya pakai daun!"
            },
            {
                    "id": 9,
                    "category": "TTS (Teka-Teki Sulit)",
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
                    "id": 10,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Di rumah makan Padang, selain pakai sendok, biasanya orang makan pakai...",
                    "answer": "TENAGA",
                    "isTwist": true,
                    "trap": "TANGAN",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan anggota tubuh di ujung lengan.",
                            "Kalau lagi lemas nggak punya ini, nyuap nasi pun nggak kuat!"
                    ],
                    "reason": "TENAGA! Pakai sendok atau tangan kosong, makannya tetap butuh TENAGA!"
            },
            {
                    "id": 11,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Seorang tukang cukur memotong rambut pelanggannya dengan...",
                    "answer": "GANTIAN",
                    "isTwist": true,
                    "trap": "GUNTING",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan alat tajam yang bunyinya krek-krek.",
                            "Kalau pelanggannya ada lima orang, masa dicukur barengan semua?!"
                    ],
                    "reason": "GANTIAN! Pelanggannya banyak, ya dicukurnya satu per satu!"
            },
            {
                    "id": 12,
                    "category": "TTS (Teka-Teki Sulit)",
                    "question": "Kenapa huruf A selalu berada di urutan paling pertama dalam susunan alfabet?",
                    "answer": "ANTRI DULUAN",
                    "isTwist": true,
                    "trap": "ATURAN DUNIA",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan karena kesepakatan ahli bahasa.",
                            "Dari zaman dahulu kala dia paling rajin bangun pagi!"
                    ],
                    "reason": "ANTRI DULUAN! Huruf A datang paling pagi buat ambil nomor antrean #1, huruf Z kesiangan!"
            },
            {
                    "id": 13,
                    "category": "Kata Misteri",
                    "question": "Kata Misteri: Semakin banyak saya diambil dan dicongkel, justru semakin besar ukuran saya. Tidak ada pengendara yang senang bertemu saya di jalan raya.",
                    "answer": "LUBANG",
                    "isTwist": true,
                    "trap": "MACET",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan sesuatu yang bisa dijual.",
                            "Sering muncul di jalan aspal setelah musim hujan!"
                    ],
                    "reason": "LUBANG! Semakin banyak tanahnya diambil, lubangnya makin gede dan bikin motor kejeglong!"
            },
            {
                    "id": 14,
                    "category": "Kata Misteri",
                    "question": "Kata Misteri: Saya selalu berada tepat di depanmu, tapi kamu tidak akan pernah bisa menyentuh atau melihat saya sampai kapan pun.",
                    "answer": "MASA DEPAN",
                    "isTwist": true,
                    "trap": "BAYANGAN",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan benda mati atau hantu.",
                            "Berhubungan dengan waktu yang belum terjadi!"
                    ],
                    "reason": "MASA DEPAN! Selalu ada di depan kita, tapi begitu tercapai namanya berubah jadi masa kini!"
            },
            {
                    "id": 15,
                    "category": "Kata Misteri",
                    "question": "Kata Misteri: Saya milikmu sendiri sejak lahir, tapi orang lain jauh lebih sering mengucapkannya daripada kamu sendiri.",
                    "answer": "NAMAMU",
                    "isTwist": true,
                    "trap": "RAHASIA",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Tidak berbentuk fisik tapi tertulis di KTP.",
                            "Setiap kali orang memanggilmu, mereka mengucapkan kata ini!"
                    ],
                    "reason": "NAMAMU! Kamu jarang manggil diri sendiri, tapi teman dan bosmu tiap hari manggil!"
            },
            {
                    "id": 16,
                    "category": "Kata Misteri",
                    "question": "Kata Misteri: Saya punya kota tapi tidak punya rumah, punya gunung tapi tidak punya pohon, dan punya laut tapi tidak punya air.",
                    "answer": "PETA",
                    "isTwist": true,
                    "trap": "PULAU",
                    "openIndices": [
                            0,
                            3
                    ],
                    "clues": [
                            "Sering dibuka di buku atlas atau layar HP.",
                            "Empat huruf: penunjuk wilayah datar!"
                    ],
                    "reason": "P-?-?-A! Di PETA ada gambar kota, gunung, dan laut, tapi nggak ada airnya sama sekali!"
            },
            {
                    "id": 17,
                    "category": "Kata Misteri",
                    "question": "Kata Misteri: Saya sangat ringan sampai tidak terasa beratnya, tapi orang terkuat di dunia pun tidak sanggup menahan saya lebih dari 5 menit.",
                    "answer": "NAPAS",
                    "isTwist": true,
                    "trap": "ANGIN",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Keluar masuk lewat hidung setiap detik.",
                            "Coba tahan sekarang kalau nggak percaya!"
                    ],
                    "reason": "NAPAS! Binaragawan paling kuat sedunia pun kalah kalau disuruh tahan napas 10 menit!"
            },
            {
                    "id": 18,
                    "category": "Kata Misteri",
                    "question": "Kata Misteri: Saya punya satu mata, tapi saya sama sekali tidak bisa melihat apa-apa.",
                    "answer": "JARUM",
                    "isTwist": true,
                    "trap": "BADAI",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Ukurannya kecil dan tajam, sering dicari ibu-ibu.",
                            "Lubang kecil di ujungnya dipakai buat masukin benang!"
                    ],
                    "reason": "JARUM jahit! Punya lubang yang disebut \"mata jarum\", tapi nggak bisa dipakai melirik!"
            },
            {
                    "id": 19,
                    "category": "Kata Misteri",
                    "question": "Kata Misteri: Saya selalu naik perlahan-lahan tapi tidak pernah bisa turun lagi seumur hidupmu.",
                    "answer": "UMUR",
                    "isTwist": true,
                    "trap": "GAJI",
                    "openIndices": [
                            0,
                            3
                    ],
                    "clues": [
                            "Gaji dan berat badan masih bisa turun.",
                            "Bertambah satu angka setiap kali kamu tiup lilin!"
                    ],
                    "reason": "UMUR! Mau perawatan mahal kayak apa pun, angkanya tetap naik terus tiap tahun!"
            },
            {
                    "id": 20,
                    "category": "Kata Misteri",
                    "question": "Kata Misteri: Saya punya banyak gigi tajam berbaris rapi, tapi seumur hidup tidak pernah menggigit makanan apa pun.",
                    "answer": "SISIR",
                    "isTwist": true,
                    "trap": "SIKAT",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Ada di meja rias atau saku celana.",
                            "Tugasnya cuma merapikan rambut yang berantakan!"
                    ],
                    "reason": "SISIR! Giginya banyak banget tapi cuma buat ngerapihin jambul!"
            },
            {
                    "id": 21,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Kamu tersesat di hutan lalu menemukan rumah kosong dengan pintu terbuka dan meja makan. Hal pertama yang kamu cari di dalam adalah...",
                    "answer": "SINYAL HP",
                    "isTwist": true,
                    "trap": "MAKANAN",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Psikologi manusia modern nggak nyari nasi dulu.",
                            "Panik karena nggak bisa buka Google Maps atau update story!"
                    ],
                    "reason": "SINYAL HP! Lapar bisa ditahan sampai besok, tapi nggak ada sinyal itu darurat nasional!"
            },
            {
                    "id": 22,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Kamu melihat dompet tebal jatuh di trotoar sepi tanpa ada orang di sekitar. Tindakan pertama yang mencerminkan sifat aslimu adalah...",
                    "answer": "NENGOK KANAN KIRI",
                    "isTwist": true,
                    "trap": "AMBIL UANGNYA",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Nggak usah sok suci dulu!",
                            "Refleks pertama mata sebelum tangan bergerak ke bawah!"
                    ],
                    "reason": "NENGOK KANAN KIRI! Secara psikologis, manusia pasti ngecek ada CCTV atau saksi mata dulu!"
            },
            {
                    "id": 23,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Jika diminta memilih antara uang Rp 100 juta tunai atau sahabat sejati seumur hidup, orang yang langsung memilih sahabat sejati biasanya...",
                    "answer": "SUDAH KAYA",
                    "isTwist": true,
                    "trap": "ORANG BAIK",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Lihat isi rekeningnya dulu sebelum memuji ketulusannya.",
                            "Yang saldonya tipis pasti ambil 100 juta dulu!"
                    ],
                    "reason": "SUDAH KAYA! Kalau lagi banyak cicilan mah pasti ambil Rp 100 juta dulu baru nyari sahabat baru!"
            },
            {
                    "id": 24,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Saat kamu masuk lift sendirian lalu ada orang lain ikut masuk, kenapa kamu tiba-tiba langsung menatap layar HP padahal nggak ada chat masuk?",
                    "answer": "SALAH TINGKAH",
                    "isTwist": true,
                    "trap": "SOK SIBUK",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Cuma scroll menu utama HP bolak-balik nggak jelas.",
                            "Bingung mau lihat ke mana biar nggak tatap-tatapan!"
                    ],
                    "reason": "SALAH TINGKAH! Di dalam lift sempit, layar HP adalah penyelamat kecanggungan sosial!"
            },
            {
                    "id": 25,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Kamu lagi di kasir minimarket dan uangnya pas, tapi kasirnya bilang \"Totalnya Rp 24.700\". Sifat sabarmu diuji saat kamu nunggu...",
                    "answer": "KEMBALIAN PERMEN",
                    "isTwist": true,
                    "trap": "STRUK BELANJA",
                    "openIndices": [
                            0,
                            10
                    ],
                    "clues": [
                            "Bukan uang receh Rp 300 perak.",
                            "Manis-manis rasa mint yang nggak bisa dipakai bayar parkir!"
                    ],
                    "reason": "KEMBALIAN PERMEN! Secara psikologis kamu senyum bilang \"Nggak apa-apa Mbak\", padahal batinmu pengen uang receh!"
            },
            {
                    "id": 26,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Jika kamu lagi sedih banget lalu memesan makanan paling mahal lewat ojek online, biasanya alasan psikologisnya adalah...",
                    "answer": "LAPAR SAJA",
                    "isTwist": true,
                    "trap": "BUTUH HEALING",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Jangan terlalu drama pakai istilah self-reward!",
                            "Perutmu cuma keroncongan biasa!"
                    ],
                    "reason": "LAPAR SAJA! Nggak usah nyalahin kondisi mental, emang belum makan siang dari tadi!"
            },
            {
                    "id": 27,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Kenapa seseorang tetap mengulang menekan tombol lift berkali-kali padahal lampunya sudah menyala?",
                    "answer": "TIDAK SABARAN",
                    "isTwist": true,
                    "trap": "TAKUT RUSAK",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Padahal dipencet 1 kali atau 20 kali kecepatannya sama saja.",
                            "Sifat alami manusia yang pengen lift-nya langsung teleport!"
                    ],
                    "reason": "TIDAK SABARAN! Merasa kalau pencet 10 kali mesin lift-nya bakal lari lebih kencang!"
            },
            {
                    "id": 28,
                    "category": "Kuis Psikologi",
                    "question": "Kuis Psikologi: Orang yang paling jujur di dunia maya saat mengisi formulir pendaftaran aplikasi adalah saat dia mencentang kotak \"Saya telah membaca syarat dan ketentuan\", padahal aslinya...",
                    "answer": "ASAL KLIK",
                    "isTwist": true,
                    "trap": "AMAN SAJA",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Tulisannya 40 halaman font kecil-kecil.",
                            "Nggak ada satu manusia pun yang baca dari atas sampai bawah!"
                    ],
                    "reason": "ASAL KLIK! Kebohongan massal paling kompak di abad ke-21!"
            },
            {
                    "id": 29,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Air laut di seluruh dunia rasanya asin banget karena di dalamnya banyak...",
                    "answer": "KERINGAT IKAN",
                    "isTwist": true,
                    "trap": "GARAM LAUT",
                    "openIndices": [
                            0,
                            9
                    ],
                    "clues": [
                            "Bukan mineral atau garam dapur.",
                            "Bayangkan jutaan ikan berenang 24 jam nonstop tanpa AC dan kipas angin!"
                    ],
                    "reason": "KERINGAT IKAN! Ikan berenang seharian penuh tanpa istirahat, ya jelas keringetan sampai lautnya asin!"
            },
            {
                    "id": 30,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Semakin tinggi kita mendaki ke puncak gunung, udaranya semakin dingin karena...",
                    "answer": "JAUH DARI KOMPOR",
                    "isTwist": true,
                    "trap": "KURANG OKSIGEN",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Bukan teori tekanan udara atau fisika SMA.",
                            "Di puncak gunung nggak ada dapur atau tukang gorengan yang nyala!"
                    ],
                    "reason": "JAUH DARI KOMPOR! Di bawah banyak kompor dan knalpot makanya hangat, di puncak gunung jauh dari api!"
            },
            {
                    "id": 31,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Jika seekor ayam jantan berkokok nyaring di pagi hari, itu artinya ayam tersebut...",
                    "answer": "MASIH HIDUP",
                    "isTwist": true,
                    "trap": "SUDAH SUBUH",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Jangan bahas jam matahari terbit.",
                            "Coba bandingkan sama ayam yang sudah di meja makan!"
                    ],
                    "reason": "MASIH HIDUP! Kalau sudah jadi ayam goreng mana bisa berkokok?!"
            },
            {
                    "id": 32,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Kenapa gajah tidak pernah bisa main komputer atau mengetik laporan di kantor?",
                    "answer": "TAKUT MOUSE",
                    "isTwist": true,
                    "trap": "TERLALU BESAR",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan karena belalainya nggak muat di keyboard.",
                            "Ingat hewan kecil yang paling ditakuti gajah di kartun!"
                    ],
                    "reason": "TAKUT MOUSE! Di meja komputer kan ada mouse-nya, gajah langsung lari ketakutan!"
            },
            {
                    "id": 33,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Fakta unik tentang bulan dan matahari — mana yang lebih penting bagi manusia: matahari atau bulan?",
                    "answer": "BULAN",
                    "isTwist": true,
                    "trap": "BUKAN",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Jangan jawab matahari dulu!",
                            "Siang hari kan sudah terang, malam hari gelap gulita!"
                    ],
                    "reason": "BULAN! Soalnya bulan menerangi malam yang gelap, kalau matahari cuma muncul pas siang hari yang udah terang!"
            },
            {
                    "id": 34,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Kenapa air sungai selalu mengalir dari tempat tinggi ke tempat yang lebih rendah?",
                    "answer": "MALAS NANJAK",
                    "isTwist": true,
                    "trap": "MUDAH TURUN",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Jangan sebut hukum gravitasi Newton.",
                            "Kamu aja kalau disuruh jalan nanjak pasti ngos-ngosan!"
                    ],
                    "reason": "MALAS NANJAK! Airnya nggak kuat naik tanjakan curam, jadi milih ngikutin jalan turun aja!"
            },
            {
                    "id": 35,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Jika kamu melempar batu berwarna putih ke dalam Laut Merah, maka batu tersebut akan menjadi...",
                    "answer": "BASAH",
                    "isTwist": true,
                    "trap": "MERAH",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Jangan tertipu nama lautnya!",
                            "Benda apa pun yang nyemplung ke air pasti jadi..."
                    ],
                    "reason": "BASAH! Laut Merah airnya tetap bening dan basah, bukan cat tembok warna merah!"
            },
            {
                    "id": 36,
                    "category": "Kuis Kebenaran",
                    "question": "Kuis Kebenaran: Kenapa burung bangau kalau tidur di rawa-rawa selalu mengangkat satu kakinya?",
                    "answer": "JATUH",
                    "isTwist": true,
                    "trap": "JAGA",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Jangan jawab biar nggak pegal!",
                            "Coba bayangkan kalau dua-duanya diangkat sekaligus!"
                    ],
                    "reason": "Kalau dua kakinya diangkat semua ya JATUH ke lumpur! Makanya cuma satu yang diangkat!"
            },
            {
                    "id": 37,
                    "category": "Cerita Berlubang",
                    "question": "Setiap tanggal tua, Budi selalu mengecek saldo ATM-nya dengan penuh harap. Begitu kartu dimasukkan dan PIN ditekan, layar ATM langsung menampilkan tulisan _______ yang bikin Budi senyum kecut lalu jalan ke warteg.",
                    "answer": "TERIMA KASIH",
                    "isTwist": true,
                    "trap": "TIDAK CUKUP",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Budi nggak berani lihat angka saldonya.",
                            "Dia langsung pencet tombol Cancel sebelum menu saldo muncul!"
                    ],
                    "reason": "TERIMA KASIH! Soalnya Budi keburu pencet Cancel karena takut sakit hati lihat sisa saldo Rp 4.200!"
            },
            {
                    "id": 38,
                    "category": "Cerita Berlubang",
                    "question": "Pagi itu hujan deras mengguyur jalanan. Rina buru-buru berangkat kerja naik motor. Di tengah kemacetan, Rina bersyukur karena di dalam jok motornya ia selalu menyimpan _______ supaya tetap kuat sampai di kantor.",
                    "answer": "DOA IBU",
                    "isTwist": true,
                    "trap": "JAS HUJAN",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Bukan benda anti air atau plastik.",
                            "Jas hujannya ketinggalan di kosan, yang tersisa cuma restu orang tua!"
                    ],
                    "reason": "DOA IBU! Tetap basah kuyup sih, tapi hatinya hangat sampai kantor!"
            },
            {
                    "id": 39,
                    "category": "Cerita Berlubang",
                    "question": "Saat rapat evaluasi bulanan, bos memanggil Doni ke depan ruangan sambil memegang map merah. Semua teman sekantor langsung menatap Doni dengan wajah tegang. Ternyata bos cuma mau bilang _______ kepada Doni di depan semua orang.",
                    "answer": "TOLONG FOTO",
                    "isTwist": true,
                    "trap": "KAMU DIPECAT",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Map merahnya cuma buat properti dokumentasi HRD.",
                            "Bos lagi butuh orang yang pegangin kamera HP!"
                    ],
                    "reason": "TOLONG FOTO! Jantung Doni udah mau copot dikira kena SP, ternyata disuruh jadi fotografer dadakan!"
            },
            {
                    "id": 40,
                    "category": "Cerita Berlubang",
                    "question": "Malam minggu, Andi mengajak gebetannya makan malam di restoran paling mahal di kota. Setelah selesai makan, Andi merogoh saku celananya sambil tersenyum percaya diri. Tiba-tiba wajah Andi berubah pucat pasi karena di sakunya cuma ada _______ yang bikin dia langsung pura-pura ke toilet.",
                    "answer": "STRUK PARKIR",
                    "isTwist": true,
                    "trap": "UANG RECEH",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Dompetnya ketinggalan di laci meja kantor.",
                            "Kertas kecil dari palang pintu masuk mal!"
                    ],
                    "reason": "STRUK PARKIR! Dompet tertinggal, yang nyelip di saku cuma karcis Rp 5.000!"
            },
            {
                    "id": 41,
                    "category": "Cerita Berlubang",
                    "question": "Di sebuah seminar motivasi, pembicara bertanya kepada 100 peserta: \"Siapa di sini yang mau sukses dan kaya raya?\". Semua peserta serentak angkat tangan. Namun di baris paling depan, Pak Budi malah memilih _______ sambil tersenyum santai.",
                    "answer": "MINUM TEH",
                    "isTwist": true,
                    "trap": "MALAS GERAK",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Pak Budi kan pemilik gedung seminarnya!",
                            "Dia udah kaya raya, jadi santai aja menikmati jamuan!"
                    ],
                    "reason": "MINUM TEH! Orang udah kaya mah nggak perlu ikut angkat tangan, cukup nikmatin hidangan VIP!"
            },
            {
                    "id": 42,
                    "category": "Cerita Berlubang",
                    "question": "Setelah menempuh perjalanan macet 3 jam di tol, keluarga Pak Ahmad akhirnya sampai di tempat wisata puncak. Anak-anak berlari gembira ke gerbang masuk, tapi langkah mereka terhenti seketika karena di depan gerbang ada papan besar bertuliskan _______ dengan huruf kapital.",
                    "answer": "TUTUP RENOVASI",
                    "isTwist": true,
                    "trap": "TIKET HABIS",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan karena penuh pengunjung.",
                            "Tempat wisatanya lagi dibongkar tukang bangunan!"
                    ],
                    "reason": "TUTUP RENOVASI! Udah macet 3 jam cuma buat foto di depan pagar seng!"
            },
            {
                    "id": 43,
                    "category": "Cerita Berlubang",
                    "question": "Di akhir acara team building kantor, panitia mengumumkan bahwa juara 1 lomba tarik tambang mendapatkan hadiah spesial. Seluruh anggota tim langsung bersorak gembira, namun senyum mereka mendadak hilang saat tahu hadiahnya ternyata berupa _______ yang harus dibawa pulang.",
                    "answer": "TALI TAMBANGNYA",
                    "isTwist": true,
                    "trap": "TANDA TERIMA",
                    "openIndices": [
                            0,
                            5
                    ],
                    "clues": [
                            "Panitia nggak punya anggaran beli piala atau voucher.",
                            "Alat lombanya sendiri yang dijadikan kenang-kenangan!"
                    ],
                    "reason": "TALI TAMBANGNYA! Lumayan buat jemuran baju di belakang rumah!"
            },
            {
                    "id": 44,
                    "category": "Cerita Berlubang",
                    "question": "Bapak-bapak komplek berkumpul di pos ronda malam Minggu sambil main catur. Saat jam menunjukkan pukul 01.00 dini hari, semua bapak-bapak mendadak bubar pulang ke rumah masing-masing bukan karena mengantuk, melainkan karena _______ di grup WhatsApp RT.",
                    "answer": "DICARI ISTRI",
                    "isTwist": true,
                    "trap": "DATA RONDA",
                    "openIndices": [
                            0,
                            7
                    ],
                    "clues": [
                            "Bukan takut maling atau hujan turun.",
                            "Ada pesan singkat: \"Mas, pintu mau dikunci dari dalam sekarang ya.\""
                    ],
                    "reason": "DICARI ISTRI! Raja catur paling jago pun langsung skakmat kalau istri udah nge-chat!"
            },
            {
                    "id": 45,
                    "category": "Motivasi Cak Lontong",
                    "question": "Motivasi Cak Lontong: \"Jangan pernah menyerah mengejar mimpimu, karena jika kamu terus berlari mengejarnya, suatu saat kamu pasti akan...\"",
                    "answer": "CAPEK",
                    "isTwist": true,
                    "trap": "CEPAT",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Jangan sok puitis bilang sukses atau berhasil!",
                            "Namanya juga lari maraton nggak berhenti-berhenti!"
                    ],
                    "reason": "CAPEK! Istirahat dulu minum es teh, nanti lanjut ngejar lagi kalau udah nggak ngos-ngosan!"
            },
            {
                    "id": 46,
                    "category": "Motivasi Cak Lontong",
                    "question": "Motivasi Cak Lontong: \"Kegagalan adalah keberhasilan yang...\"",
                    "answer": "TIDAK JADI",
                    "isTwist": true,
                    "trap": "TERTUNDA",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Jangan pakai kata mutiara yang terlalu manis!",
                            "Realistis aja: kalau gagal ya memang batal berhasil!"
                    ],
                    "reason": "TIDAK JADI! Nggak usah dihalus-halusin jadi \"ter-tun-da\", kalau gagal ya memang tidak jadi!"
            },
            {
                    "id": 47,
                    "category": "Motivasi Cak Lontong",
                    "question": "Motivasi Cak Lontong: \"Uang memang tidak bisa membeli kebahagiaan, tapi jauh lebih nyaman menangis di dalam...\"",
                    "answer": "MOBIL MEWAH",
                    "isTwist": true,
                    "trap": "MASALAH BESAR",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Ada AC dingin, jok kulit empuk, dan kaca gelap.",
                            "Jauh lebih adem daripada nangis di pinggir jalan kepanasan!"
                    ],
                    "reason": "MOBIL MEWAH! Sedih sih tetap sedih, tapi minimal nggak kena debu knalpot!"
            },
            {
                    "id": 48,
                    "category": "Motivasi Cak Lontong",
                    "question": "Motivasi Cak Lontong: \"Orang bijak selalu belajar dari kesalahan. Maka dari itu, supaya hidupmu makin bijak, sering-seringlah berbuat...\"",
                    "answer": "SALAH",
                    "isTwist": true,
                    "trap": "SABAR",
                    "openIndices": [
                            0,
                            4
                    ],
                    "clues": [
                            "Ikuti logika kalimat pertamanya secara harfiah!",
                            "Kalau nggak pernah melakukannya, mau belajar dari mana?!"
                    ],
                    "reason": "SALAH! Kalau kamu benar terus, nanti nggak punya bahan pelajaran buat jadi orang bijak!"
            },
            {
                    "id": 49,
                    "category": "Motivasi Cak Lontong",
                    "question": "Motivasi Cak Lontong: \"Pekerjaan seberat apa pun akan terasa jauh lebih ringan apabila...\"",
                    "answer": "TIDAK DIKERJAKAN",
                    "isTwist": true,
                    "trap": "TOLONG DIBANTU",
                    "openIndices": [
                            0,
                            6
                    ],
                    "clues": [
                            "Bukan dikerjakan bersama-sama atau gotong royong.",
                            "Bebannya langsung nol gram, tapi siap-siap dipanggil bos!"
                    ],
                    "reason": "TIDAK DIKERJAKAN! Nggak disentuh sama sekali ya pasti ringan banget!"
            },
            {
                    "id": 50,
                    "category": "Motivasi Cak Lontong",
                    "question": "Motivasi Cak Lontong: \"Bermimpilah setinggi langit, karena jika kamu terjatuh, kamu akan jatuh di antara...\"",
                    "answer": "GENTENG TETANGGA",
                    "isTwist": true,
                    "trap": "BINTANG BINTANG",
                    "openIndices": [
                            0,
                            8
                    ],
                    "clues": [
                            "Jangan jawab bintang-bintang di angkasa!",
                            "Jatuh dari atas langit mah nyangkutnya di atap rumah!"
                    ],
                    "reason": "GENTENG TETANGGA! Sakitnya lumayan, ditambah harus ganti genteng orang yang pecah!"
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
