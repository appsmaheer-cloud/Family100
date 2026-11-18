(() => {
    'use strict';

    const CAK_LONTONG_QUESTIONS = [
        {
            id: 1,
            category: 'Klasik WIB',
            question: 'Sebelum diperiksa dokter di puskesmas atau rumah sakit, pasien harus...',
            answer: 'DAFTAR',
            trap: 'DOKTER',
            openIndices: [0, 3, 5],
            clues: [
                'Bukan langsung masuk ruangan, ada satu langkah wajib di loket depan.',
                'Kalau nggak lakukan ini, namamu nggak bakal dipanggil suster!'
            ],
            reason: 'Hurufnya D-?-?-T-?-R memang mirip DOKTER, padahal DAFTAR dulu di loket baru diperiksa!'
        },
        {
            id: 2,
            category: 'Klasik WIB',
            question: 'Orang yang mengendarai bus antar kota saat jalan tol macet total harus...',
            answer: 'SABAR',
            trap: 'SOPIR',
            openIndices: [0, 4],
            clues: [
                'Bukan profesinya, tapi kondisi mental menghadapi kemacetan.',
                'Kalau emosian di tol, bisa-bisa klakson terus nggak ada gunanya!'
            ],
            reason: 'S-?-?-?-R bukan SOPIR! Sopirnya kalau nggak SABAR malah turun dorong bus!'
        },
        {
            id: 3,
            category: 'Klasik WIB',
            question: 'Saat lampu merah menyala di perempatan jalan, pengendara harus...',
            answer: 'LIHAT',
            trap: 'LEWAT',
            openIndices: [0, 4],
            clues: [
                'Pakai mata dulu biar nggak salah sangka.',
                'Kalau langsung jalan pas lampu merah ya kena tilang!'
            ],
            reason: 'L-?-?-?-T bukan LEWAT! Lampu merah itu di-LIHAT dulu, jangan main terobos!'
        },
        {
            id: 4,
            category: 'Gen Z & Sosmed',
            question: 'Hal pertama yang dilakukan anak Gen Z begitu bangun tidur di pagi hari adalah...',
            answer: 'MEREM',
            trap: 'MINUM',
            openIndices: [0, 4],
            clues: [
                'Bukan langsung minum air putih atau buka TikTok.',
                'Dilakukan selama 5 menit lagi buat ngumpulin nyawa!'
            ],
            reason: 'M-?-?-?-M bukan MINUM! Pasti MEREM lagi lima menit sambil bilang "bentar lagi deh"!'
        },
        {
            id: 5,
            category: 'Lingkungan Kantor',
            question: 'Saat meeting Zoom berlangsung, bagian tubuh yang paling sering menatap kamera penuh kepalsuan adalah...',
            answer: 'MATA',
            trap: 'MUKA',
            openIndices: [0, 3],
            clues: [
                'Keliatannya fokus ke layar, padahal lagi lirik tab belanja online.',
                'Ada sepasang di wajah dan sering pura-pura menyimak bos!'
            ],
            reason: 'M-?-?-A bukan cuma MUKA, tapi MATA yang menatap kamera seolah fokus padahal baca chat gosip!'
        },
        {
            id: 6,
            category: 'Lingkungan Kantor',
            question: 'Karyawan kalau akhir bulan, isi saldo ATM-nya biasanya tinggal...',
            answer: 'ADA',
            trap: 'APA',
            openIndices: [0, 2],
            clues: [
                'Bukan nol atau seratus ribu, ini soal status keberadaannya.',
                'Yang penting rekeningnya belum keblokir bank!'
            ],
            reason: 'A-?-A bukan APA! Yang penting saldonya masih ADA meski cuma Rp 12.400!'
        },
        {
            id: 7,
            category: 'Klasik WIB',
            question: 'Kalau lagi sakit gigi malam-malam dan tidak tahan lagi, orang langsung lari ke...',
            answer: 'KASUR',
            trap: 'KABUR',
            openIndices: [0, 1, 4],
            clues: [
                'Bukan ke klinik atau apotek yang sudah tutup.',
                'Tempat paling empuk buat meringkuk sambil megangin pipi!'
            ],
            reason: 'K-A-?-?-R bukan KABUR! Malam-malam klinik tutup, ya langsung guling-guling di KASUR!'
        },
        {
            id: 8,
            category: 'Bapak-bapak',
            question: 'Saat istri tiba-tiba bilang "Terserah Mas mau makan di mana", jawaban paling aman adalah...',
            answer: 'PULANG',
            trap: 'PUSING',
            openIndices: [0, 1, 4, 5],
            clues: [
                'Daripada salah tebak restoran dan bikin perang dingin di mobil.',
                'Ujung-ujungnya masak mie instan di dapur sendiri!'
            ],
            reason: 'P-?-?-?-?-G memang bikin PUSING, tapi solusi paling aman adalah langsung PULANG!'
        },
        {
            id: 9,
            category: 'Ice Breaking',
            question: 'Saat MC ice breaking bilang "Ayo semuanya berdiri!", yang tidak punya kursi langsung...',
            answer: 'BERDIRI',
            trap: 'BERLARI',
            openIndices: [0, 1, 2, 5, 6],
            clues: [
                'Nggak usah lari keliling ruangan kayak lomba lari.',
                'Ikuti saja instruksi MC-nya dengan tenang!'
            ],
            reason: 'B-?-R-?-?-R-I bukan BERLARI! Kan MC-nya nyuruh BERDIRI, ngapain lari?!'
        },
        {
            id: 10,
            category: 'Ice Breaking',
            question: 'Supaya peserta seminar yang ngantuk berat mendadak melek semua, pembicara harus bikin...',
            answer: 'KETAWA',
            trap: 'KEPALA',
            openIndices: [0, 1, 3, 5],
            clues: [
                'Reaksi spontan kalau dengar jokes bapak-bapak atau tebak-tebakan nyeleneh.',
                'Gratis, menular, dan bikin suasana ruangan langsung cair!'
            ],
            reason: 'K-E-?-?-?-A bukan KEPALA! Kalau udah KETAWA bareng, ngantuknya langsung hilang!'
        },
        {
            id: 11,
            category: 'Ice Breaking',
            question: 'Di akhir acara kantor, semua peserta berdiri rapat menghadap kamera sambil teriak "Satu, dua, tiga..." karena mau...',
            answer: 'KEDIP',
            isTwist: true,
            trap: 'KELIP',
            openIndices: [0, 1, 3, 4],
            clues: [
                'Momen paling ngeselin pas hasil fotonya baru dilihat.',
                'Yang lain udah senyum maksimal, eh satu orang matanya ketutup!'
            ],
            reason: 'Selalu ada satu orang yang KEDIP pas jepretan kamera, terus minta ulang sepuluh kali!'
        },
        {
            id: 12,
            category: 'Ice Breaking',
            question: 'Hal yang paling ditunggu peserta saat sesi game ice breaking hampir selesai adalah...',
            answer: 'PULANG',
            isTwist: true,
            trap: 'PINANG',
            openIndices: [0, 5],
            clues: [
                'Bukan hadiah atau doorprize dari panitia.',
                'Semua udah lirik jam tangan pengen segera ke parkiran!'
            ],
            reason: 'P-?-?-?-?-G! Doorprize sih bonus, tapi di hati paling dalam semua peserta cuma nungguin kata PULANG!'
        },
        {
            id: 13,
            category: 'Ice Breaking',
            question: 'Alasan utama kenapa peserta acara kantor semangat banget teriak yel-yel di depan juri adalah...',
            answer: 'MALU',
            isTwist: true,
            trap: 'MAJU',
            openIndices: [0, 1, 3],
            clues: [
                'Kalau teriak sendirian jelas nggak berani.',
                'Karena rame-rame, rasa ini mendadak hilang entah ke mana!'
            ],
            reason: 'M-?-?-U bukan MAJU! Justru karena kalau nggak teriak bareng malah MALU dilihat divisi sebelah!'
        },
        {
            id: 14,
            category: 'Lingkungan Kantor',
            question: 'Hari Senin pagi di kantor, karyawan baru datang langsung dikasih bos...',
            answer: 'SARAN',
            trap: 'SENIN',
            openIndices: [0, 4],
            clues: [
                'Bukan nama harinya lagi, ini kalimat pembuka dari atasan.',
                'Biasanya diawali kata "Bagus sih, tapi kayaknya lebih oke kalau..."'
            ],
            reason: 'S-?-?-?-N bukan SENIN! Baru duduk udah dikasih SARAN revisi sama bos!'
        },
        {
            id: 15,
            category: 'Lingkungan Kantor',
            question: 'Minuman penyelamat karyawan saat jam 2 siang ngantuk berat cukup diminum...',
            answer: 'SATU',
            trap: 'SUSU',
            openIndices: [0, 3],
            clues: [
                'Bukan jenis minumannya, tapi jumlah gelasnya biar nggak kembung.',
                'Kalau sepuluh gelas nanti jantungnya kayak konser rock!'
            ],
            reason: 'S-?-?-U bukan SUSU! Mau kopi atau teh, cukup SATU gelas aja biar nggak begadang!'
        },
        {
            id: 16,
            category: 'Lingkungan Kantor',
            question: 'Satu-satunya pekerjaan di dunia yang kalau karyawannya ketiduran malah dianggap sukses?',
            answer: 'TESTER KASUR',
            isTwist: true,
            trap: 'TUKANG KABUR',
            openIndices: [0, 7, 11],
            clues: [
                'Bukan satpam atau penjaga malam yang kena SP.',
                'Semakin pulas tidurnya, semakin bagus review produknya!'
            ],
            reason: 'TESTER KASUR! Satu-satunya profesi di mana ngorok di jam kerja justru dapat bonus performa!'
        },
        {
            id: 17,
            category: 'Lingkungan Kantor',
            question: 'Benda di kantor yang paling jujur tapi paling sering dimarahin bos dan karyawan?',
            answer: 'JAM DINDING',
            isTwist: true,
            trap: 'JAM ISTIRAHAT',
            openIndices: [0, 1, 2, 4, 10],
            clues: [
                'Nggak pernah telat dan nggak pernah bohong.',
                'Tiap dilihat selalu dibilang: "Kok baru jam segini sih?!" atau "Kok udah jam segini?!"'
            ],
            reason: 'JAM DINDING! Salahnya cuma muter terus, tapi tiap hari disalahin karena waktu terasa cepat atau lambat!'
        },
        {
            id: 18,
            category: 'Lingkungan Kantor',
            question: 'Alat tulis kantor yang paling sering hilang misterius padahal baru dibeli kemarin?',
            answer: 'DIPINJAM',
            trap: 'DIKLAIM',
            openIndices: [0, 1, 7],
            clues: [
                'Nasib pulpen di meja kerja sebelah.',
                'Bukan hilang ditelan bumi, tapi dibawa teman dan lupa dibalikin!'
            ],
            reason: 'Pulpen nggak pernah punya kaki, tapi selalu DIPINJAM teman dan pindah kewarganegaraan!'
        },
        {
            id: 19,
            category: 'Lingkungan Kantor',
            question: 'Sikap paling bijaksana saat revisi desain dari klien sudah masuk versi "FINAL_BENERAN_V9"?',
            answer: 'PASRAH',
            trap: 'PINDAH',
            openIndices: [0, 4, 5],
            clues: [
                'Level tertinggi kesabaran anak agensi dan desainer.',
                'Sudah lewat tahap ikhlas, tinggal menunggu takdir V10!'
            ],
            reason: 'P-?-?-?-A-H bukan PINDAH kantor dulu, tapi PASRAH! Karena habis V9 masih ada V9_REVISI_DIKIT!'
        },
        {
            id: 20,
            category: 'Lingkungan Kantor',
            question: 'Kalau laptop kantor tiba-tiba lemot parah pas lagi dikejar deadline, tombol paling ampuh adalah...',
            answer: 'DIMATIKAN',
            trap: 'DIABAIKAN',
            openIndices: [0, 1, 7, 8],
            clues: [
                'Bukan F5 atau Ctrl+Alt+Del, ini langkah terakhir pasrah.',
                'Setelah itu tinggal bilang ke bos: "Maaf Pak, lagi update Windows!"'
            ],
            reason: 'D-I-?-?-?-?-?-A-N bukan DIABAIKAN! DIMATIKAN sekalian laptopnya lalu seduh kopi!'
        },
        {
            id: 21,
            category: 'Klasik WIB',
            question: 'Orang yang paling berani menatap mata harimau dari jarak satu jengkal tanpa berkedip adalah...',
            answer: 'BUTA',
            isTwist: true,
            trap: 'BISA',
            openIndices: [0, 3],
            clues: [
                'Bukan pawang atau pelatih sirkus yang nyalinya gede.',
                'Dia tenang banget karena nggak tahu di depannya ada apa!'
            ],
            reason: 'B-?-?-A bukan pawang! Ya karena dia BUTA jadi nggak lihat kalau di depannya ada harimau!'
        },
        {
            id: 22,
            category: 'Klasik WIB',
            question: 'Kalau ada 5 burung bertengger di kabel listrik lalu ditembak 1, sisa berapa burung di kabel?',
            answer: 'NOL',
            isTwist: false,
            trap: 'LIMA',
            openIndices: [0],
            clues: [
                'Bukan 4! Bayangkan suara senapannya di dunia nyata!',
                'Empat burung yang lain nggak bakal diam aja nunggu giliran!'
            ],
            reason: 'NOL! Yang satu jatuh, empat lainnya langsung terbang kabur kaget dengar suara tembakan!'
        },
        {
            id: 23,
            category: 'Klasik WIB',
            question: 'Alasan ilmiah kenapa nyamuk selalu bunyi "ngiiing" pas dekat telinga kita di malam hari?',
            answer: 'PAMER',
            isTwist: true,
            trap: 'LAPAR',
            openIndices: [0, 4],
            clues: [
                'Bukan nyari darah doang, dia lagi sombong.',
                'Dia mau nunjukin kalau dia bisa terbang sementara kita cuma bisa rebahan!'
            ],
            reason: 'Nyamuk cuma mau PAMER kalau dia bisa terbang sambil nyanyi, sementara kita cuma bisa tepuk tangan di udara!'
        },
        {
            id: 24,
            category: 'Klasik WIB',
            question: 'Bulan apa di kalender masehi yang punya tanggal 28?',
            answer: 'SEMUA',
            isTwist: true,
            trap: 'SATU',
            openIndices: [0, 4],
            clues: [
                'Jangan langsung jawab Februari!',
                'Coba cek Januari, Maret, April, sampai Desember...'
            ],
            reason: 'SEMUA bulan punya tanggal 28! Malah ada yang punya 30 dan 31 juga!'
        },
        {
            id: 25,
            category: 'Klasik WIB',
            question: 'Pedagang kaki lima di pinggir jalan langsung bubar berhamburan karena ada...',
            answer: 'RAMAI',
            isTwist: true,
            trap: 'RAZIA',
            openIndices: [0, 1, 4],
            clues: [
                'Bukan Satpol PP atau hujan badai!',
                'Justru ini kondisi yang paling didoakan semua pedagang!'
            ],
            reason: 'R-A-?-?-I bukan RAZIA! Karena dagangannya RAMAI pembeli, langsung ludes habis terus bubar pulang lebih cepat!'
        },
        {
            id: 26,
            category: 'Klasik WIB',
            question: 'Pelukis yang biasa menggambar pemandangan indah di atas kanvas disebut...',
            answer: 'SERIUS',
            trap: 'SENIMAN',
            openIndices: [0, 1, 4],
            clues: [
                'Sikap wajib biar gambarnya nggak berantakan.',
                'Kalau sambil bercanda terus, catnya tumpah semua!'
            ],
            reason: 'Kalau nggak SERIUS gambarnya ya nggak jadi-jadi, malah coret-coret nggak jelas!'
        },
        {
            id: 27,
            category: 'Klasik WIB',
            question: 'Bendera Indonesia warnanya merah dan...',
            answer: 'KAIN',
            trap: 'PUTIH',
            openIndices: [1, 3],
            clues: [
                'Bukan warna putih, ini bahan dasarnya waktu dijahit.',
                'Kalau nggak ada bahannya, mau dijahit pakai daun pisang?!'
            ],
            reason: 'Merah itu warnanya, dan KAIN itu bahan dasarnya biar bisa berkibar di tiang!'
        },
        {
            id: 28,
            category: 'Klasik WIB',
            question: 'Orang yang biasa mengendarai pesawat terbang di udara disebut...',
            answer: 'BERANI',
            trap: 'BUPATI',
            openIndices: [0, 5],
            clues: [
                'Bukan profesinya, tapi mental wajib sebelum duduk di kokpit.',
                'Kalau penakut mana mau terbang tinggi-tinggi!'
            ],
            reason: 'Kalau penakut mana BERANI bawa pesawat melayang di atas awan!'
        },
        {
            id: 29,
            category: 'Klasik WIB',
            question: 'Makanan yang paling enak dimakan pas lagi hujan deras dan cuaca dingin?',
            answer: 'LAPER',
            trap: 'LUPAR',
            openIndices: [0, 2, 4],
            clues: [
                'Kondisi perut sebelum makan apa pun.',
                'Mau bakso atau mie rebus, kalau nggak kondisi ini tetap hambar!'
            ],
            reason: 'Mau hujan kek, panas kek, kalau nggak LAPER ya tetap nggak enak makannya!'
        },
        {
            id: 30,
            category: 'Gen Z & Sosmed',
            question: 'Apa persamaan antara mantan pacar dan WiFi tetangga?',
            answer: 'PASSWORD',
            isTwist: true,
            trap: 'PERASAAN',
            openIndices: [0, 7],
            clues: [
                'Awalnya bikin nyaman dan selalu nyambung otomatis.',
                'Begitu dia ganti satu hal ini, kita langsung putus koneksi!'
            ],
            reason: 'PASSWORD! Sama-sama bikin penasaran, tapi begitu ganti PASSWORD langsung nggak bisa nyambung lagi!'
        },
        {
            id: 31,
            category: 'Gen Z & Sosmed',
            question: 'Kenapa video TikTok kita yang niat banget ngeditnya malah kalah views sama video kucing tidur?',
            answer: 'SEPI',
            trap: 'SAPI',
            openIndices: [0, 3],
            clues: [
                'Nasib kolom komentar dan penonton kita.',
                'Kebalikan dari ramai!'
            ],
            reason: 'S-?-?-I bukan SAPI! Karena yang nonton SEPI! Kucing tidur aja lebih punya karisma daripada transisi CapCut kita!'
        },
        {
            id: 32,
            category: 'Gen Z & Sosmed',
            question: 'Gerakan jari paling refleks anak muda saat lagi bosan nunggu antrean sambil pegang HP adalah...',
            answer: 'SCROLL',
            trap: 'SEKOLAH',
            openIndices: [0, 4, 5],
            clues: [
                'Naik turun layar TikTok atau Instagram tanpa tujuan jelas.',
                'Tahu-tahu udah habis 2 jam padahal cuma lihat video random!'
            ],
            reason: 'SCROLL terus sampai jempol pegal padahal nggak nyari apa-apa!'
        },
        {
            id: 33,
            category: 'Gen Z & Sosmed',
            question: 'Anak muda kalau lagi butuh healing di kafe, yang paling pertama dipesan adalah...',
            answer: 'MEJA',
            trap: 'MOKA',
            openIndices: [0, 3],
            clues: [
                'Kalau nggak ada ini mau duduk dan naruh kopi di mana?!',
                'Wajib yang dekat colokan dan cahayanya estetik!'
            ],
            reason: 'M-?-?-A bukan MOKA! Pesan kopi bisa belakangan, yang penting dapat MEJA dulu!'
        },
        {
            id: 34,
            category: 'Milenial & Boomers',
            question: 'Hal yang paling sering bikin orang lupa diri saat lagi asyik nonton konser?',
            answer: 'NAPAS',
            trap: 'NANAS',
            openIndices: [0, 1, 3, 4],
            clues: [
                'Dilakukan otomatis tanpa sadar saking teriak-teriak nyanyi.',
                'Baru kerasa pas lagunya selesai dan dada mulai bengek!'
            ],
            reason: 'Saking asyiknya teriak bareng, kita sampai lupa kalau lagi NAPAS — sadar-sadar udah ngos-ngosan!'
        },
        {
            id: 35,
            category: 'Milenial & Boomers',
            question: 'Beda tipis antara orang kaya dan orang biasa saat makan di warteg adalah...',
            answer: 'SAMA',
            trap: 'SOTO',
            openIndices: [0, 2],
            clues: [
                'Cara masukin nasi ke mulutnya nggak ada bedanya.',
                'Tidak ada perbedaan sama sekali!'
            ],
            reason: 'Ya SAMA aja makannya pakai sendok atau tangan kanan, masa orang kaya makannya pakai remote TV?!'
        },
        {
            id: 36,
            category: 'Milenial & Boomers',
            question: 'Barang yang paling sering dibeli orang pas lagi tanggal muda tapi nyesel di tanggal tua?',
            answer: 'BARU',
            trap: 'BAJU',
            openIndices: [0, 1, 3],
            clues: [
                'Status barangnya waktu baru di-unboxing dari paket kurir.',
                'Kebalikan dari bekas atau second!'
            ],
            reason: 'B-A-?-U bukan cuma BAJU! Semua yang dibeli pas tanggal muda itu pasti statusnya barang BARU!'
        },
        {
            id: 37,
            category: 'Milenial & Boomers',
            question: 'Grup WhatsApp keluarga paling sering ramai di jam 6 pagi gara-gara ada yang kirim...',
            answer: 'GAMBAR',
            trap: 'GOSIP',
            openIndices: [0, 5],
            clues: [
                'Isinya bunga mawar, secangkir kopi, dan tulisan Selamat Pagi.',
                'Biasanya dikirim om atau tante lengkap dengan doa pagi!'
            ],
            reason: 'GAMBAR bunga mawar + ucapan "Selamat Pagi Semoga Berkah" yang resolusinya udah pecah di-forward berkali-kali!'
        },
        {
            id: 38,
            category: 'Bapak-bapak',
            question: 'Organ tubuh bapak-bapak yang paling berdebar kencang saat ditanya istri "HP-nya mana Mas?"',
            answer: 'JANTUNG',
            trap: 'JEMPOL',
            openIndices: [0, 6],
            clues: [
                'Bukan tangan yang gemetar, tapi yang berdetak di dalam dada.',
                'Langsung lari maraton 100 km/jam padahal isi HP cuma grup mancing!'
            ],
            reason: 'JANTUNG langsung deg-degan kencang padahal isi chat cuma info umpan lele sama meme bapak-bapak!'
        },
        {
            id: 39,
            category: 'Bapak-bapak',
            question: 'Kalau motor mogok di tengah jalan dan bensinnya habis, tindakan paling cepat supaya sampai rumah adalah...',
            answer: 'JALAN',
            trap: 'JUAL',
            openIndices: [0, 1, 4],
            clues: [
                'Pakai dua kaki sambil nuntun motor pelan-pelan.',
                'Masa nunggu motornya tumbuh sayap?!'
            ],
            reason: 'Ya JALAN kaki sambil dorong motor ke pom bensin terdekat!'
        },
        {
            id: 40,
            category: 'Bapak-bapak',
            question: 'Saat istri bilang "Terserah", bapak-bapak yang bijaksana harus langsung...',
            answer: 'MIKIR',
            trap: 'MAKAN',
            openIndices: [0, 4],
            clues: [
                'Sesuai slogan legendaris Cak Lontong!',
                'Karena ada jawaban benar yang sengaja tidak disebutkan!'
            ],
            reason: 'MIKIR keras! Karena kata "terserah" sebenarnya adalah kode rahasia yang harus dipecahkan!'
        },
        {
            id: 41,
            category: 'Lingkungan Kantor',
            question: 'Hal paling pertama yang dilakukan karyawan begitu sampai di meja kerja sebelum mulai mengetik?',
            answer: 'TARIK KURSI',
            isTwist: true,
            trap: 'TEKAN TOMBOL',
            openIndices: [0, 6, 10],
            clues: [
                'Bukan langsung nyalain laptop atau baca email.',
                'Kalau nggak lakukan ini, mau kerja sambil berdiri seharian?!'
            ],
            reason: 'T-?-?-?-?-K K-?-?-?-I! TARIK KURSI dulu biar bisa duduk nyaman sebelum nyalain laptop!'
        },
        {
            id: 42,
            category: 'Lingkungan Kantor',
            question: 'Bencana paling menegangkan di hari Senin pagi sebelum sempat kerja adalah...',
            answer: 'LUPA PASSWORD',
            isTwist: true,
            trap: 'LUPA SARAPAN',
            openIndices: [0, 5, 12],
            clues: [
                'Bukan urusan perut, tapi urusan login ke laptop kantor.',
                'Apalagi kalau tiga kali salah langsung kekunci IT!'
            ],
            reason: 'Bukan LUPA SARAPAN, tapi LUPA PASSWORD! Baru Senin pagi aja udah disuruh reset sama tim IT!'
        },
        {
            id: 43,
            category: 'Klasik WIB',
            question: 'Sebelum menyuap nasi goreng pakai tangan kosong, hal wajib yang harus dipastikan adalah...',
            answer: 'SUDAH MATANG',
            isTwist: true,
            trap: 'SUDAH BERSIH',
            openIndices: [0, 6, 11],
            clues: [
                'Bukan soal cuci tangan pakai sabun dulu.',
                'Kalau masih beras mentah ya sakit perut!'
            ],
            reason: 'S-?-?-?-?-H M-?-?-?-?-G! Pastikan nasi gorengnya SUDAH MATANG dulu, masa makan beras mentah!'
        },
        {
            id: 44,
            category: 'Lingkungan Kantor',
            question: 'Alasan paling jujur kenapa karyawan mendadak rajin senyum dan ramah di jam 12 siang?',
            answer: 'LAPAR BANGET',
            isTwist: true,
            trap: 'LIBUR DATANG',
            openIndices: [0, 6, 11],
            clues: [
                'Bukan karena kerjaan udah kelar semua.',
                'Senyumnya senyum nahan bunyi perut sambil ngajak temen ke kantin!'
            ],
            reason: 'LAPAR BANGET! Senyumnya bukan karena bahagia lihat Excel, tapi karena butuh temen patungan makan siang!'
        },
        {
            id: 45,
            category: 'Gen Z & Sosmed',
            question: 'Momen paling bikin jantung berhenti sepersekian detik saat lagi chat di grup kantor adalah...',
            answer: 'SALAH KIRIM',
            isTwist: true,
            trap: 'SALAH PAHAM',
            openIndices: [0, 6, 10],
            clues: [
                'Niatnya ngirim ke grup gosip, eh malah masuk ke grup yang ada bosnya!',
                'Langsung panik nyari tombol "Hapus untuk semua orang"!'
            ],
            reason: 'SALAH KIRIM! Lebih horor daripada film hantu, apalagi kalau udah ke-read sama HRD!'
        },
        {
            id: 46,
            category: 'Lingkungan Kantor',
            question: 'Penyebab utama tanggal 20 ke atas anak kantor mendadak hobi bawa bekal dari rumah adalah...',
            answer: 'GAJI HABIS',
            isTwist: true,
            trap: 'GAYA HIDUP',
            openIndices: [0, 5, 9],
            clues: [
                'Bukan karena lagi diet sehat atau ikut tren gaya hidup.',
                'Dompetnya udah ngasih sinyal darurat!'
            ],
            reason: 'Bukan GAYA HIDUP sehat, tapi GAJI HABIS! Tanggal tua mengubah semua orang jadi chef dadakan!'
        },
        {
            id: 47,
            category: 'Gen Z & Sosmed',
            question: 'Setelah alarm HP berbunyi nyaring jam 6 pagi di hari libur, tindakan paling mulia adalah...',
            answer: 'TIDUR LAGI',
            isTwist: true,
            trap: 'TEPAT WAKTU',
            openIndices: [0, 6, 9],
            clues: [
                'Ngakunya mau olahraga pagi, tapi kasur memanggil lebih keras.',
                'Matikan alarm, tarik selimut, lalu...'
            ],
            reason: 'TIDUR LAGI! Alarm hari libur cuma berfungsi sebagai pengingat bahwa kita masih boleh lanjut mimpi!'
        },
        {
            id: 48,
            category: 'Ice Breaking',
            question: 'Hal yang diam-diam paling bikin karyawan bahagia kalau rapat sore dibatalkan mendadak adalah...',
            answer: 'PULANG CEPAT',
            isTwist: true,
            trap: 'PUJIAN BOS',
            openIndices: [0, 7, 11],
            clues: [
                'Bisa langsung beresin tas sebelum jam macet dimulai.',
                'Senyumnya nggak bisa disembunyikan waktu keluar lift!'
            ],
            reason: 'PULANG CEPAT! Nggak ada yang lebih indah daripada notif "Meeting kita reschedule besok ya"!'
        },
        {
            id: 49,
            category: 'Ice Breaking',
            question: 'Minuman hangat yang paling sering bikin peserta seminar pagi mendadak salah fokus adalah...',
            answer: 'KETINGGALAN',
            isTwist: true,
            trap: 'KOPI HITAM',
            openIndices: [0, 10],
            clues: [
                'Bukan kopi atau teh manisnya.',
                'Udah duduk manis di meja, eh gelasnya malah tertinggal di meja coffee break!'
            ],
            reason: 'KETINGGALAN di meja belakang! Mau minum eh tangannya megang pulpen doang!'
        },
        {
            id: 50,
            category: 'Bapak-bapak',
            question: 'Saat ditanya "Gimana soal-soal Cak Lontong hari ini?", semua peserta pasti langsung...',
            answer: 'MIKIR KERAS',
            isTwist: true,
            trap: 'MARAH BESAR',
            openIndices: [0, 6, 10],
            clues: [
                'Gabungan slogan Cak Lontong + usaha maksimal otak peserta.',
                'Kadang lurus, kadang belok — bikin pusing tapi nagih!'
            ],
            reason: 'MIKIR KERAS! Kadang beneran lurus, kadang belok — itulah seni TTS Cak Lontong!'
        },
        {
            id: 51,
            category: 'Klasik WIB',
            question: 'Di rumah makan Padang, selain pakai sendok, biasanya orang makan pakai...',
            answer: 'TENAGA',
            isTwist: true,
            trap: 'TANGAN',
            openIndices: [0, 2, 4, 5],
            clues: [
                'Bukan anggota tubuh di ujung lengan.',
                'Kalau lagi lemas nggak punya ini, nyuap nasi pun nggak kuat!'
            ],
            reason: 'T-?-N-?-?-A bukan TANGAN! Pakai sendok atau nggak, makannya tetap butuh TENAGA!'
        },
        {
            id: 52,
            category: 'Klasik WIB',
            question: 'Seorang tukang cukur memotong rambut pelanggannya dengan...',
            answer: 'GANTIAN',
            isTwist: true,
            trap: 'GUNTING',
            openIndices: [0, 2, 3, 4, 6],
            clues: [
                'Bukan alat tajam yang bunyinya krek-krek.',
                'Kalau pelanggannya ada lima orang, masa dicukur barengan semua?!'
            ],
            reason: 'G-?-N-T-?-?-N bukan GUNTING! Kalau pelanggannya banyak ya dicukurnya GANTIAN satu per satu!'
        },
        {
            id: 53,
            category: 'Klasik WIB',
            question: 'Tamu yang berkunjung ke rumah orang lain lebih dari 2x24 jam harus...',
            answer: 'PAMIT',
            isTwist: true,
            trap: 'PULANG',
            openIndices: [0, 4],
            clues: [
                'Bukan lapor Pak RT dulu.',
                'Masa nginep dua hari dua malam nggak bilang-bilang pas mau keluar rumah?!'
            ],
            reason: 'Sudah 2x24 jam nginep ya wajib PAMIT! Jangan ngilang gitu aja kayak tuyul!'
        },
        {
            id: 54,
            category: 'Klasik WIB',
            question: 'Burung bisa terbang bebas di langit karena memiliki...',
            answer: 'WAKTU',
            isTwist: true,
            trap: 'SAYAP',
            openIndices: [0, 4],
            clues: [
                'Bukan bagian tubuh yang berbulu di kanan kiri badannya.',
                'Kalau lagi sibuk banget atau udah jadi ayam bakar, mana sempat terbang!'
            ],
            reason: 'Punya sayap doang kalau nggak punya WAKTU luang ya nggak terbang-terbang! (Atau udah di piring!)'
        },
        {
            id: 55,
            category: 'Soal Cerita',
            question: 'Pak RT memasang bel rumah baru yang super canggih. Kalau dipencet bunyinya "TING TONG". Pertanyaannya: kalau seharian nggak ada tamu yang pencet bel itu, dia tetap...',
            answer: 'NEMPEL',
            isTwist: true,
            trap: 'NEKAD',
            openIndices: [0, 1, 3, 4, 5],
            clues: [
                'Bukan soal bunyi atau diamnya bel itu!',
                'Posisinya di tembok pagar depan rumah Pak RT!'
            ],
            reason: 'N-E-?-P-E-L! Mau dipencet atau nggak seharian, belnya tetap NEMPEL di tembok rumah!'
        },
        {
            id: 56,
            category: 'Soal Cerita',
            question: 'Di dalam kulkas dua pintu ada apel, jeruk, mangga, dan botol air mineral. Ketika pintu kulkas baru saja dibuka lebar, hal pertama yang keluar dari kulkas adalah...',
            answer: 'DINGIN',
            isTwist: true,
            trap: 'DAGING',
            openIndices: [0, 1, 3, 4, 5],
            clues: [
                'Bukan buah-buahan atau botol minumnya.',
                'Langsung terasa di muka pas pintu kulkas dibuka!'
            ],
            reason: 'D-I-?-G-I-N bukan DAGING! Hawa DINGIN-nya langsung keluar duluan sebelum tangan kita ambil apa-apa!'
        },
        {
            id: 57,
            category: 'Soal Cerita',
            question: 'Di gedung kantor lantai 12, Rudi selalu naik lift sampai lantai 8 lalu jalan kaki lewat tangga ke lantai 12 setiap pagi. Padahal lift-nya tidak rusak dan bisa langsung ke lantai 12. Kenapa Rudi melakukan itu?',
            answer: 'PENDEK',
            isTwist: true,
            trap: 'PENGEN',
            openIndices: [0, 5],
            clues: [
                'Bukan karena Rudi pengen olahraga atau diet.',
                'Saat pulang ke lantai 1, Rudi bisa langsung pencet tombol lift paling bawah!'
            ],
            reason: 'Karena badan Rudi PENDEK! Tangannya cuma nyampe pencet tombol angka 8 di panel lift, nggak nyampe angka 12!'
        },
        {
            id: 58,
            category: 'Soal Cerita',
            question: 'Sebuah kapal pesiar mewah berlayar di tengah Samudra Pasifik dengan 200 penumpang. Tiba-tiba badai datang dan kapal oleng hebat. Ajaibnya, tidak ada satu pun orang yang sendirian jatuh ke laut. Kenapa?',
            answer: 'MENIKAH',
            isTwist: true,
            trap: 'SELAMAT',
            openIndices: [0, 6],
            clues: [
                'Perhatikan kata kuncinya: tidak ada satu pun orang yang "sendirian"!',
                'Semua penumpangnya sudah punya pasangan sah!'
            ],
            reason: 'Karena semua penumpangnya sudah MENIKAH! Tidak ada yang "single" (sendirian)! Haha!'
        },
        {
            id: 59,
            category: 'Soal Cerita',
            question: 'Ibu menyuruh Dodi ke warung beli garam. Di jalan Dodi ketemu teman lalu ngobrol 15 menit, mampir lihat layangan 10 menit, dan beli es cendol. Sampai di depan ibu warung, kata pertama yang keluar dari mulut Dodi adalah...',
            answer: 'LUPA',
            isTwist: true,
            trap: 'LAMA',
            openIndices: [0, 3],
            clues: [
                'Saking kelamaan ngobrol di jalan.',
                'Pas ditanya "Beli apa Le?", Dodi cuma garuk kepala!'
            ],
            reason: 'L-?-?-A! Saking asyiknya mampir di jalan, sampai warung Dodi langsung bilang: "Bu, saya LUPA disuruh beli apa!"'
        },
        {
            id: 60,
            category: 'Soal Cerita',
            question: 'Seorang manajer HRD mewawancarai 3 kandidat. Kandidat A jago Excel, kandidat B jago presentasi, dan kandidat C paling rapi. Setelah 2 jam diskusi, manajer HRD memutuskan memilih kandidat yang...',
            answer: 'BELUM KERJA',
            isTwist: true,
            trap: 'BAGUS KERJA',
            openIndices: [0, 6, 10],
            clues: [
                'Kalau kandidatnya udah punya pekerjaan tetap di tempat lain, ngapain diterima?',
                'Syarat paling masuk akal seorang pelamar kerja!'
            ],
            reason: 'Ya dipilih yang BELUM KERJA! Kalau sudah bekerja di kantor lain kan nggak butuh lowongan!'
        },
        {
            id: 61,
            category: 'Soal Cerita',
            question: 'Tiga sahabat — Eko, Budi, dan Toni — makan bersama di restoran mewah dengan total tagihan Rp 300.000. Setelah selesai makan dan mengobrol, orang yang paling terakhir berdiri meninggalkan meja makan selalu orang yang...',
            answer: 'BAYAR',
            isTwist: true,
            trap: 'BESAR',
            openIndices: [0, 4],
            clues: [
                'Yang lain udah duluan ke parkiran pura-pura ambil motor.',
                'Dia masih duduk nunggu struk dari kasir!'
            ],
            reason: 'B-?-?-?-R! Yang lain udah kabur duluan ke parkiran, yang paling terakhir berdiri ya yang lagi BAYAR tagihan!'
        },
        {
            id: 62,
            category: 'Soal Cerita',
            question: 'Saat acara team building di villa, Budi kebagian sekamar sama temannya yang tidur ngorok suaranya mirip mesin diesel. Sudah tutup kuping pakai bantal tapi tetap tembus. Cara paling ampuh supaya Budi nggak dengar ngoroknya lagi adalah...',
            answer: 'PINDAH',
            isTwist: true,
            trap: 'PISAH',
            openIndices: [0, 1, 3, 4, 5],
            clues: [
                'Jangan bangunin orangnya nanti malah berantem!',
                'Budi sendiri yang ambil tindakan keluar dari kamar itu!'
            ],
            reason: 'P-I-?-D-A-H! PINDAH kamar aja ke sofa ruang tamu, daripada ngoroknya dilawan pakai suara lebih keras!'
        },
        {
            id: 63,
            category: 'Soal Cerita',
            question: 'Hari Minggu pagi, ayah mengajak keluarga ke kebun binatang. Di kandang pertama ada gajah, di kandang kedua ada singa, dan di kandang ketiga bertuliskan "Hewan Paling Berbahaya di Dunia". Saat melongok ke dalam, pengunjung malah tertawa karena di dalamnya cuma ada...',
            answer: 'CERMIN',
            isTwist: true,
            trap: 'CICAK',
            openIndices: [0, 5],
            clues: [
                'Bukan binatang buas, tapi benda kaca yang memantulkan bayangan.',
                'Pas melongok, yang kelihatan adalah wajah pengunjung sendiri!'
            ],
            reason: 'C-?-?-?-?-N! Di dalamnya ada CERMIN! Jadi saat pengunjung melongok, mereka langsung lihat diri sendiri sebagai makhluk paling berbahaya!'
        },
        {
            id: 64,
            category: 'Soal Cerita',
            question: 'Rina punya uang Rp 50.000 di dompet. Ia naik angkot ke pasar bayar Rp 5.000, lalu beli sayur Rp 15.000 dan beli gorengan Rp 5.000. Di tengah jalan pulang, sopir angkot menoleh ke Rina dan bertanya "Berapa orang, Neng?". Rina menjawab...',
            answer: 'SENDIRI',
            isTwist: true,
            trap: 'SEPULUH',
            openIndices: [0, 6],
            clues: [
                'Jangan hitung sisa uang belanja Rina!',
                'Perhatikan pertanyaan terakhir sopir angkotnya!'
            ],
            reason: 'S-?-?-?-?-?-I! Yang ditanya sopir angkot itu "Berapa orang?", bukan "Berapa sisa uang Rina?!" Ya jawabnya SENDIRI!'
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
