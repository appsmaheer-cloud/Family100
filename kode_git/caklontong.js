(() => {
    'use strict';

    const CAK_LONTONG_QUESTIONS = [
        {
            id: 1,
            category: 'Klasik WIB',
            question: 'Orang yang biasanya paling tahu jalan tikus di seluruh kota adalah...',
            answer: 'NYASAR',
            clues: [
                'Kondisi orang yang sok tahu jalan pintas tanpa Google Maps.',
                'Biasanya baru sadar setelah masuk gang buntu tiga kali!'
            ],
            reason: 'Lah iya! Justru orang yang paling sering NYASAR itu yang paling banyak nemu jalan tikus nggak jelas!'
        },
        {
            id: 2,
            category: 'Lingkungan Kantor',
            question: 'Saat meeting Zoom berlangsung, bagian tubuh yang paling sering berbohong adalah...',
            answer: 'MATA',
            clues: [
                'Keliatannya fokus ke layar, padahal lagi lirik tab belanja online.',
                'Ada sepasang di wajah dan sering menatap kamera penuh kepalsuan!'
            ],
            reason: 'MATA-nya menatap kamera seolah menyimak presentasi bos, padahal lagi baca chat gosip atau checkout keranjang!'
        },
        {
            id: 3,
            category: 'Lingkungan Kantor',
            question: 'Karyawan kalau akhir bulan, saldo ATM-nya biasanya tinggal...',
            answer: 'ADA',
            clues: [
                'Bukan nol atau seratus ribu, ini soal status keberadaannya.',
                'Cuma tiga huruf: yang penting rekeningnya belum keblokir!'
            ],
            reason: 'Yang penting mah masih ADA di sistem bank meski cuma Rp 12.400, daripada saldo nol nggak bisa tarik tunai!'
        },
        {
            id: 4,
            category: 'Gen Z & Sosmed',
            question: 'Hal pertama yang dilakukan anak Gen Z begitu bangun tidur di pagi hari adalah...',
            answer: 'MEREM',
            clues: [
                'Bukan langsung buka TikTok atau cek notifikasi WA.',
                'Dilakukan selama 5 menit lagi buat ngumpulin nyawa!'
            ],
            reason: 'Nggak mungkin langsung melek penuh! Pasti MEREM lagi 5 menit sambil bilang "lima menit lagi deh"!'
        },
        {
            id: 5,
            category: 'Lingkungan Kantor',
            question: 'Kenapa suara peserta meeting online sering nggak kedengaran di laptop kita?',
            answer: 'DIEM',
            clues: [
                'Bukan salah mic ke-mute atau sinyal WiFi kantor yang lemot.',
                'Semua peserta lagi saling tunggu siapa yang ngomong duluan!'
            ],
            reason: 'Ya karena peserta lain lagi pada DIEM semua nunggu ada yang bersuara duluan!'
        },
        {
            id: 6,
            category: 'Klasik WIB',
            question: 'Supaya nggak jatuh saat naik motor berdua di tikungan tajam, kita harus...',
            answer: 'BERDIRI',
            clues: [
                'Posisi wajib sebelum kaki mengangkang ke atas jok motor.',
                'Kalau duduk terus di teras, kapan naiknya?!'
            ],
            reason: 'Kalau nggak BERDIRI dulu gimana mau naik ke atas jok motornya?! Masa ngesot dari ruang tamu?!'
        },
        {
            id: 7,
            category: 'Bapak-bapak',
            question: 'Kalau istri tiba-tiba bilang "Terserah Mas mau makan di mana", jawaban paling aman adalah...',
            answer: 'PULANG',
            clues: [
                'Daripada salah tebak restoran dan bikin perang dingin di mobil.',
                'Ujung-ujungnya masak mie instan di dapur sendiri!'
            ],
            reason: 'Mending PULANG aja! Karena kata "terserah" itu jebakan psikologis tingkat tinggi yang tidak punya jawaban benar!'
        },
        {
            id: 8,
            category: 'Milenial & Boomers',
            question: 'Hal yang paling sering bikin orang lupa diri saat lagi asyik nonton konser?',
            answer: 'NAPAS',
            clues: [
                'Dilakukan otomatis tanpa sadar saking teriak-teriak nyanyi.',
                'Baru kerasa pas lagunya selesai dan dada mulai bengek!'
            ],
            reason: 'Saking asyiknya teriak bareng, kita sampai lupa kalau lagi NAPAS — sadar-sadar udah ngos-ngosan!'
        },
        {
            id: 9,
            category: 'Gen Z & Sosmed',
            question: 'Alasan utama kenapa orang betah nongkrong berjam-jam di kafe padahal kopinya udah habis?',
            answer: 'GRATIS',
            clues: [
                'Sifat WiFi dan AC yang bikin males pulang ke kosan.',
                'Di kosan harus bayar token listrik, di kafe tinggal numpang!'
            ],
            reason: 'Bukan karena estetikanya, tapi karena WiFi, colokan, dan AC-nya GRATIS!'
        },
        {
            id: 10,
            category: 'Lingkungan Kantor',
            question: 'Biar cepat naik gaji dan dianggap rajin oleh atasan, setiap pagi kita harus...',
            answer: 'BANGUN',
            clues: [
                'Syarat paling dasar sebelum mandi dan berangkat ngantor.',
                'Dilakukan setelah alarm berbunyi tiga kali!'
            ],
            reason: 'Mau lembur kek, mau jago presentasi kek, kalau nggak BANGUN dari kasur ya dipecat!'
        },
        {
            id: 11,
            category: 'Milenial & Boomers',
            question: 'Beda tipis antara orang kaya dan orang biasa saat makan di warteg adalah...',
            answer: 'SAMA',
            clues: [
                'Cara masukin nasi ke mulutnya nggak ada bedanya.',
                'Empat huruf: tidak ada perbedaan sama sekali!'
            ],
            reason: 'Ya SAMA aja makannya pakai sendok atau tangan kanan, masa orang kaya makannya pakai remote TV?!'
        },
        {
            id: 12,
            category: 'Klasik WIB',
            question: 'Benda yang paling dicari orang kalau lagi kepanasan di kamar tapi listrik padam?',
            answer: 'ANGIN',
            clues: [
                'Yang bikin adem, bukan kipasnya yang lagi mati total.',
                'Adanya di teras rumah sambil kibas-kibas kardus!'
            ],
            reason: 'Kipasnya kan mati kena mati lampu, jadi yang dicari ya ANGIN-nya langsung di luar rumah!'
        },
        {
            id: 13,
            category: 'Lingkungan Kantor',
            question: 'Kalau laptop kantor tiba-tiba lemot parah pas lagi dikejar deadline, tombol paling ampuh adalah...',
            answer: 'DIMATIKAN',
            clues: [
                'Bukan F5 atau Ctrl+Alt+Del, ini langkah terakhir pasrah.',
                'Setelah itu tinggal bilang ke bos: "Maaf Pak, lagi update Windows!"'
            ],
            reason: 'DIMATIKAN sekalian laptopnya, lalu ambil napas dan seduh kopi!'
        },
        {
            id: 14,
            category: 'Bapak-bapak',
            question: 'Organ tubuh bapak-bapak yang paling berdebar kencang saat ditanya istri "HP-nya mana Mas?"',
            answer: 'JANTUNG',
            clues: [
                'Bukan tangan yang gemetar, tapi yang berdetak di dalam dada.',
                'Langsung lari maraton 100 km/jam padahal isi HP cuma grup mancing!'
            ],
            reason: 'JANTUNG langsung deg-degan kencang padahal isi chat cuma info umpan lele sama meme bapak-bapak!'
        },
        {
            id: 15,
            category: 'Klasik WIB',
            question: 'Satu kata yang paling sering diucapkan orang saat ditanya "Mau tambah nasi?" padahal masih lapar?',
            answer: 'TIDAK',
            clues: [
                'Jawabannya sok jaim depan gebetan atau calon mertua.',
                'Mulut menolak, padahal perut teriak minta nambah dua piring!'
            ],
            reason: 'Mulut bilang TIDAK, padahal perut keroncongan! Gengsi sering mengalahkan logika!'
        },
        {
            id: 16,
            category: 'Gen Z & Sosmed',
            question: 'Kenapa video TikTok kita yang niat banget ngeditnya malah kalah views sama video kucing tidur?',
            answer: 'SEPI',
            clues: [
                'Nasib kolom komentar dan penonton kita.',
                'Cuma empat huruf: kebalikan dari ramai!'
            ],
            reason: 'Karena yang nonton SEPI! Kucing tidur aja lebih punya karisma daripada transisi CapCut kita!'
        },
        {
            id: 17,
            category: 'Milenial & Boomers',
            question: 'Barang yang paling sering dibeli orang pas lagi tanggal muda tapi nyesel di tanggal tua?',
            answer: 'BARU',
            clues: [
                'Status barangnya waktu baru di-unboxing dari paket kurir.',
                'Kebalikan dari bekas atau second!'
            ],
            reason: 'Semua yang dibeli pas tanggal muda itu pasti statusnya barang BARU, pas tanggal tua jadi barang gadaian!'
        },
        {
            id: 18,
            category: 'Lingkungan Kantor',
            question: 'Sikap paling bijaksana saat revisi desain dari klien sudah masuk versi "FINAL_BENERAN_V9"?',
            answer: 'PASRAH',
            clues: [
                'Level tertinggi kesabaran anak agensi dan desainer.',
                'Sudah lewat tahap ikhlas, tinggal menunggu takdir V10!'
            ],
            reason: 'Sudah bukan sabar lagi, tapi PASRAH! Karena habis V9 masih ada V9_REVISI_DIKIT!'
        },
        {
            id: 19,
            category: 'Bapak-bapak',
            question: 'Kalau motor mogok di tengah jalan dan bensinnya habis, tindakan paling cepat supaya sampai rumah adalah...',
            answer: 'JALAN',
            clues: [
                'Pakai dua kaki sambil nuntun motor pelan-pelan.',
                'Masa nunggu motornya tumbuh sayap?!'
            ],
            reason: 'Ya JALAN kaki sambil dorong motor ke pom bensin terdekat!'
        },
        {
            id: 20,
            category: 'Klasik WIB',
            question: 'Aktivitas paling produktif yang bisa dilakukan manusia dengan mata tertutup selama 8 jam?',
            answer: 'TIDUR',
            clues: [
                'Bukan meditasi atau merem doang.',
                'Nge-charge badan tanpa ngabisin kuota internet dan duit jajan!'
            ],
            reason: 'TIDUR! Produktif banget karena hemat listrik, hemat kuota, dan hemat biaya hidup!'
        },
        {
            id: 21,
            category: 'Ice Breaking',
            question: 'Saat acara ice breaking baru dimulai dan MC bilang "Ayo perkenalkan diri!", peserta biasanya langsung...',
            answer: 'KENALAN',
            clues: [
                'Tujuan utama dari perkenalan itu sendiri.',
                'Kalau nggak gini, sampai acara selesai tetap nggak tahu nama!'
            ],
            reason: 'Ya KENALAN dong, masa langsung tukeran pin ATM?!'
        },
        {
            id: 22,
            category: 'Ice Breaking',
            question: 'Obat paling mujarab supaya peserta seminar yang ngantuk berat mendadak melek semua?',
            answer: 'KETAWA',
            clues: [
                'Reaksi spontan kalau dengar jokes bapak-bapak atau tebak-tebakan nyeleneh.',
                'Gratis, menular, dan bikin suasana ruangan langsung cair!'
            ],
            reason: 'Kalau udah KETAWA bareng, ngantuknya langsung hilang dan suasana rapat langsung hidup!'
        },
        {
            id: 23,
            category: 'Ice Breaking',
            question: 'Hal yang paling ditunggu-tunggu peserta saat sesi game ice breaking hampir selesai adalah...',
            answer: 'MAKAN',
            clues: [
                'Biasanya ada di kotak snack atau prasmanan belakang ruangan.',
                'Energi tambahan setelah mikir keras jawab kuis!'
            ],
            reason: 'Juara 1 boleh bangga, tapi semua peserta tetap paling nungguin jam MAKAN siang!'
        },
        {
            id: 24,
            category: 'Ice Breaking',
            question: 'Syarat mutlak supaya yel-yel kelompok di acara team building terdengar menggelegar adalah...',
            answer: 'KOMPAK',
            clues: [
                'Kalau satu teriak kiri dan satu teriak kanan, jadinya berantakan.',
                'Harus barengan dan satu suara!'
            ],
            reason: 'Suara fals nggak masalah, yang penting KOMPAK! Biar juri terharu!'
        },
        {
            id: 25,
            category: 'Ice Breaking',
            question: 'Gerakan wajib seluruh peserta di akhir acara kantor sebelum pada bubar pulang adalah...',
            answer: 'FOTO',
            clues: [
                'Sambil teriak "Satu, dua, tiga... bebas!" atau gaya jempol.',
                'Wajib buat laporan dokumentasi HRD dan story Instagram!'
            ],
            reason: 'Nggak sah acaranya kalau belum FOTO bareng dengan pose jempol dan gaya bebas!'
        },
        {
            id: 26,
            category: 'Klasik WIB',
            question: 'Pelukis yang biasa menggambar pemandangan indah di atas kanvas disebut...',
            answer: 'SERIUS',
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
            clues: [
                'Kondisi perut sebelum makan apa pun.',
                'Mau bakso atau mie rebus, kalau nggak kondisi ini tetap hambar!'
            ],
            reason: 'Mau hujan kek, panas kek, kalau nggak LAPER ya tetap nggak enak makannya!'
        },
        {
            id: 30,
            category: 'Klasik WIB',
            question: 'Saat lampu merah menyala di perempatan jalan, pengendara wajib...',
            answer: 'LIHAT',
            clues: [
                'Pakai mata dulu biar nggak salah sangka.',
                'Kalau nggak gitu mana tahu lampunya lagi merah atau hijau!'
            ],
            reason: 'Harus di-LIHAT dulu lampunya! Kalau merem terus mana tahu sudah merah!'
        },
        {
            id: 31,
            category: 'Lingkungan Kantor',
            question: 'Hari yang paling sering bikin karyawan mendadak sakit kepala di pagi hari adalah hari...',
            answer: 'SENIN',
            clues: [
                'Datang tepat setelah Minggu malam berakhir terlalu cepat.',
                'Identik dengan macet pagi dan tumpukan email!'
            ],
            reason: 'SENIN! Baru dengar alarm hari SENIN aja rasanya sudah pengen cuti!'
        },
        {
            id: 32,
            category: 'Lingkungan Kantor',
            question: 'Minuman wajib penyelamat nyawa karyawan saat jam 2 siang mulai ngantuk berat adalah...',
            answer: 'KOPI',
            clues: [
                'Pahit-pahit manis yang bikin mata melek lagi.',
                'Empat huruf, teman setia lembur!'
            ],
            reason: 'KOPI! Tanpa KOPI jam 2 siang, keyboard laptop rasanya kayak bantal empuk!'
        },
        {
            id: 33,
            category: 'Lingkungan Kantor',
            question: 'Alat tulis kantor yang paling sering hilang misterius padahal baru dibeli kemarin?',
            answer: 'DIPINJAM',
            clues: [
                'Nasib pulpen di meja kerja sebelah.',
                'Bukan hilang ditelan bumi, tapi dibawa teman dan lupa dibalikin!'
            ],
            reason: 'Pulpen nggak pernah punya kaki, tapi selalu DIPINJAM teman dan pindah kewarganegaraan!'
        },
        {
            id: 34,
            category: 'Lingkungan Kantor',
            question: 'Tanggal berwarna merah di kalender dinding paling disukai karyawan karena artinya...',
            answer: 'LIBUR',
            clues: [
                'Bisa rebahan seharian tanpa takut ditelepon bos.',
                'Lima huruf yang bikin semangat kerja di hari sebelumnya!'
            ],
            reason: 'LIBUR! Satu kata penuh kedamaian dan harapan hidup!'
        },
        {
            id: 35,
            category: 'Gen Z & Sosmed',
            question: 'Gerakan jari paling refleks anak muda saat lagi bosan nunggu antrean sambil pegang HP adalah...',
            answer: 'SCROLL',
            clues: [
                'Naik turun layar TikTok atau Instagram tanpa tujuan jelas.',
                'Tahu-tahu udah habis 2 jam padahal cuma lihat video random!'
            ],
            reason: 'SCROLL terus sampai jempol pegal padahal nggak nyari apa-apa!'
        },
        {
            id: 36,
            category: 'Gen Z & Sosmed',
            question: 'Anak muda kalau lagi butuh healing di kafe, yang paling pertama dipesan adalah...',
            answer: 'MEJA',
            clues: [
                'Kalau nggak ada ini mau duduk dan naruh kopi di mana?!',
                'Wajib yang dekat colokan dan cahayanya estetik!'
            ],
            reason: 'Pesan kopi bisa belakangan, yang penting dapat MEJA dulu buat foto dan nge-charge HP!'
        },
        {
            id: 37,
            category: 'Milenial & Boomers',
            question: 'Grup WhatsApp keluarga paling sering ramai di jam 6 pagi gara-gara ada yang kirim...',
            answer: 'GAMBAR',
            clues: [
                'Isinya bunga mawar, secangkir kopi, dan tulisan Selamat Pagi.',
                'Biasanya dikirim om atau tante lengkap dengan doa pagi!'
            ],
            reason: 'GAMBAR bunga mawar + ucapan "Selamat Pagi Semoga Berkah" yang resolusinya udah pecah di-forward berkali-kali!'
        },
        {
            id: 38,
            category: 'Milenial & Boomers',
            question: 'Minuman yang paling sering bikin orang begadang bolak-balik bangun semalaman?',
            answer: 'BANYAK',
            clues: [
                'Bukan jenis minumannya, tapi ukurannya sebelum tidur.',
                'Mau air putih atau teh, kalau segalon ya ke WC terus!'
            ],
            reason: 'Minum apa aja kalau kebanyakan (BANYAK) sebelum tidur ya bolak-balik ke kamar mandi semalaman!'
        },
        {
            id: 39,
            category: 'Bapak-bapak',
            question: 'Benda yang paling sering dicari bapak-bapak pas mau berangkat kerja padahal ada di tangannya sendiri?',
            answer: 'KETEMU',
            clues: [
                'Harapan terakhir setelah ubek-ubek seisi rumah.',
                'Kacamata di kepala, kunci motor di kantong, yang penting akhirnya...'
            ],
            reason: 'Kalau dicari terus ya harapannya KETEMU, masa dicari biar makin hilang!'
        },
        {
            id: 40,
            category: 'Bapak-bapak',
            question: 'Saat istri bilang "Terserah", bapak-bapak yang bijaksana harus langsung...',
            answer: 'MIKIR',
            clues: [
                'Sesuai slogan legendaris Cak Lontong!',
                'Karena ada jawaban benar yang sengaja tidak disebutkan!'
            ],
            reason: 'MIKIR keras! Karena kata "terserah" sebenarnya adalah kode rahasia yang harus dipecahkan!'
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
        hpAnswer: document.getElementById('cl-hp-answer'),
        hpClue1: document.getElementById('cl-hp-clue1'),
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

    function renderQuestion() {
        const q = CAK_LONTONG_QUESTIONS[state.currentIndex];
        if (!q) return;
        const clues = Array.isArray(q.clues) ? q.clues : [q.clue || '-'];
        el.qNum.textContent = `Soal #${state.currentIndex + 1} / ${CAK_LONTONG_QUESTIONS.length}`;
        if (el.countBadge) el.countBadge.textContent = `${CAK_LONTONG_QUESTIONS.length} SOAL`;
        el.qText.textContent = q.question;
        el.lengthChip.textContent = `Panjang: ${q.answer.length} Huruf`;

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
                if (el.hpAnswer) el.hpAnswer.textContent = q.answer;
                if (el.hpClue1) el.hpClue1.textContent = clues[0] || '-';
                if (el.hpClue2) el.hpClue2.textContent = clues[1] || '-';
                if (el.hpReason) el.hpReason.textContent = q.reason;
            }
        }

        el.tiles.textContent = '';
        for (let i = 0; i < q.answer.length; i++) {
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
            el.tiles.appendChild(tile);
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
        state.openedLetters = new Set();
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

        if (guess === q.answer) {
            state.isSolved = true;
            const bonus = Math.max(40, 100 - (state.openedLetters.size - q.openIndices.length) * 10);
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
        el.btnHintLetter.addEventListener('click', () => {
            const q = CAK_LONTONG_QUESTIONS[state.currentIndex];
            if (!q || state.isSolved) return;
            const closed = [];
            for (let i = 0; i < q.answer.length; i++) {
                if (!state.openedLetters.has(i)) closed.push(i);
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
