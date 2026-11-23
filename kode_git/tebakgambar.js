(() => {
    'use strict';

    const TEBAK_GAMBAR_QUESTIONS = [
        // === 1. Ilusi Optik Menipu (dengan Bukti Visual saat dibuka!) ===
        {
            id: 1,
            category: 'Ilusi Optik Menipu',
            question: 'Perhatikan garis tengah (warna hitam) pada gambar ATAS dan BAWAH. Garis mana yang ukurannya lebih panjang?',
            answer: 'SAMA PANJANG',
            trap: 'GARIS BAWAH',
            openIndices: [0, 5], // S ? ? ?  P ? ? ? ? ? ? ?
            clues: [
                'Jangan percaya 100% sama penglihatan mata dari panahnya!',
                'Coba ukur ujung garis hitam kiri dan kanan kedua garis pakai jari atau penggaris!'
            ],
            reason: 'MIND BLOWING! Panjang garis hitam ATAS dan BAWAH tepat 180px — SAMA PANJANG 100%! Panah keluar dan ke dalam (Ilusi Muller-Lyer) menipu otak kita!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                    <text x="24" y="48" font-family="Plus Jakarta Sans, Arial" font-size="13" font-weight="800" fill="#64748B">ATAS</text>
                    <text x="24" y="128" font-family="Plus Jakarta Sans, Arial" font-size="13" font-weight="800" fill="#64748B">BAWAH</text>
                    <!-- Garis Atas (180px dari x=140 ke x=320) -->
                    <line x1="140" y1="44" x2="320" y2="44" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
                    <path d="M115 24 L140 44 L115 64" fill="none" stroke="#EF4444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M345 24 L320 44 L345 64" fill="none" stroke="#EF4444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <!-- Garis Bawah (180px persis dari x=140 ke x=320!) -->
                    <line x1="140" y1="124" x2="320" y2="124" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
                    <path d="M165 104 L140 124 L165 144" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M295 104 L320 124 L295 144" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    ${solved ? `
                        <line x1="140" y1="16" x2="140" y2="154" stroke="#10B981" stroke-width="2.5" stroke-dasharray="6 4"/>
                        <line x1="320" y1="16" x2="320" y2="154" stroke="#10B981" stroke-width="2.5" stroke-dasharray="6 4"/>
                        <rect x="172" y="72" width="116" height="24" rx="12" fill="#10B981"/>
                        <text x="230" y="88" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#FFFFFF">BUKTI: SAMA 180px!</text>
                    ` : ''}
                </svg>`
        },
        {
            id: 2,
            category: 'Ilusi Optik Menipu',
            question: 'Perhatikan lingkaran ORANYE di tengah KIRI dan KANAN. Lingkaran oranye mana yang diameternya lebih besar?',
            answer: 'SAMA BESAR',
            trap: 'YANG KANAN',
            openIndices: [0, 5], // S ? ? ?  B ? ? ? ?
            clues: [
                'Fokus cuma ke lingkaran ORANYE-nya, abaikan bulatan biru di sekitarnya!',
                'Tutup bulatan birunya pakai tangan — kelihatan bedanya atau sama?'
            ],
            reason: 'MIND BLOWING! Kedua lingkaran oranye punya jari-jari 18px yang SAMA BESAR 100% (Ilusi Ebbinghaus)! Lingkaran biru raksasa di kiri bikin otak mengira pusatnya kecil!',
            renderSvg: (solved) => {
                const bigAround = [0, 60, 120, 180, 240, 300].map((deg) => {
                    const rad = deg * Math.PI / 180;
                    return `<circle cx="${125 + Math.cos(rad) * 50}" cy="${85 + Math.sin(rad) * 50}" r="20" fill="${solved ? '#CBD5E1' : '#2563EB'}"/>`;
                }).join('');
                const smallAround = [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                    const rad = deg * Math.PI / 180;
                    return `<circle cx="${335 + Math.cos(rad) * 32}" cy="${85 + Math.sin(rad) * 32}" r="7" fill="${solved ? '#CBD5E1' : '#2563EB'}"/>`;
                }).join('');
                return `
                    <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                        <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                        ${bigAround}
                        ${smallAround}
                        <circle cx="125" cy="85" r="18" fill="#F97316"/>
                        <circle cx="335" cy="85" r="18" fill="#F97316"/>
                        <text x="125" y="158" text-anchor="middle" font-family="Arial" font-size="12" font-weight="800" fill="#475569">KIRI</text>
                        <text x="335" y="158" text-anchor="middle" font-family="Arial" font-size="12" font-weight="800" fill="#475569">KANAN</text>
                        ${solved ? `
                            <line x1="125" y1="67" x2="335" y2="67" stroke="#10B981" stroke-width="2" stroke-dasharray="5 4"/>
                            <line x1="125" y1="103" x2="335" y2="103" stroke="#10B981" stroke-width="2" stroke-dasharray="5 4"/>
                            <rect x="176" y="74" width="108" height="22" rx="11" fill="#10B981"/>
                            <text x="230" y="89" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#FFFFFF">SAMA r=18px!</text>
                        ` : ''}
                    </svg>`;
            }
        },
        {
            id: 3,
            category: 'Ilusi Optik Menipu',
            question: 'Bandingkan warna abu-abu KOTAK A dan KOTAK B secara langsung. Mana yang kode warnanya lebih terang?',
            answer: 'SAMA WARNA',
            trap: 'KOTAK B',
            openIndices: [0, 5],
            clues: [
                'Mata kita terkecoh karena Kotak B berada di area bayangan silinder!',
                'Tutup kotak sekitarnya pakai kertas/jari dan lihat cuma kotak A & B!'
            ],
            reason: 'MIND BLOWING! Kotak A dan Kotak B memakai kode warna #787878 yang 100% IDENTIK! Saat dihubungkan garis #787878, mata langsung sadar keduanya SAMA WARNA!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#E2E8F0"/>
                    <!-- Papan atas terang -->
                    <rect x="70" y="20" width="90" height="55" fill="#F1F5F9" stroke="#94A3B8"/>
                    <rect x="160" y="20" width="90" height="55" fill="#787878" stroke="#475569"/>
                    <text x="205" y="52" text-anchor="middle" font-family="Arial Black" font-size="18" fill="#FFFFFF">A</text>
                    <rect x="250" y="20" width="90" height="55" fill="#F1F5F9" stroke="#94A3B8"/>
                    <!-- Area bayangan -->
                    <rect x="70" y="75" width="90" height="55" fill="#787878" stroke="#475569"/>
                    <rect x="160" y="75" width="90" height="55" fill="#334155" stroke="#1E293B"/>
                    <rect x="250" y="75" width="90" height="55" fill="#787878" stroke="#475569"/>
                    <text x="295" y="108" text-anchor="middle" font-family="Arial Black" font-size="18" fill="#FFFFFF">B</text>
                    <!-- Silinder hijau pembuat efek bayangan -->
                    <ellipse cx="365" cy="115" rx="28" ry="11" fill="#047857"/>
                    <rect x="337" y="45" width="56" height="70" fill="#10B981"/>
                    <ellipse cx="365" cy="45" rx="28" ry="11" fill="#34D399"/>
                    <text x="230" y="154" text-anchor="middle" font-family="Arial" font-size="11.5" font-weight="800" fill="#334155">Kotak A vs Kotak B (di samping bayangan silinder)</text>
                    ${solved ? `
                        <polygon points="205,65 295,65 295,90 205,90" fill="#787878" stroke="#F59E0B" stroke-width="2.5"/>
                        <rect x="160" y="128" width="140" height="22" rx="11" fill="#10B981"/>
                        <text x="230" y="143" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#FFFFFF">BUKTI: SAMA #787878!</text>
                    ` : ''}
                </svg>`
        },
        {
            id: 4,
            category: 'Ilusi Optik Menipu',
            question: 'Lihatlah ke tengah gambar! Berapa jumlah garis SEGITIGA PUTIH yang benar-benar digambar di gambar ini?',
            answer: 'NOL',
            trap: 'TIGA',
            openIndices: [0],
            clues: [
                'Otakmu sedang menggambar garis ilusi sendiri (Segitiga Kanizsa)!',
                'Hanya ada 3 lingkaran hitam terpotong — nggak ada garis segitiga sama sekali!'
            ],
            reason: 'MIND BLOWING! Jumlah garis segitiga yang benar-benar digambar adalah NOL! Otak kita yang mengarang garis putih di antara potongan lingkaran hitam!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#FFFFFF"/>
                    <!-- 3 Pac-Man circles forming illusory white triangle -->
                    <circle cx="230" cy="36" r="24" fill="${solved ? '#94A3B8' : '#0F172A'}"/>
                    <circle cx="155" cy="136" r="24" fill="${solved ? '#94A3B8' : '#0F172A'}"/>
                    <circle cx="305" cy="136" r="24" fill="${solved ? '#94A3B8' : '#0F172A'}"/>
                    <!-- Inner white mask polygon (drawn WITHOUT any border!) -->
                    <polygon points="230,36 155,136 305,136" fill="#FFFFFF"/>
                    ${solved ? `
                        <text x="230" y="106" text-anchor="middle" font-family="Arial Black" font-size="13" fill="#EF4444">0 GARIS SEGITIGA!</text>
                        <text x="230" y="124" text-anchor="middle" font-family="Arial" font-size="10.5" font-weight="700" fill="#64748B">(Cuma 3 lingkaran terpotong)</text>
                    ` : ''}
                </svg>`
        },
        {
            id: 5,
            category: 'Ilusi Optik Menipu',
            question: 'Perhatikan garis abu-abu mendatar di antara kotak hitam-putih ini. Apakah garis mendatar tersebut lurus sejajar atau miring bengkok?',
            answer: 'LURUS SEJAJAR',
            trap: 'MIRING BENGKOK',
            openIndices: [0, 6],
            clues: [
                'Jangan lihat kotak-kotak hitam putihnya!',
                'Miringkan layar HP/kepalamu sedikit sejajar garis datar untuk melihat aslinya!'
            ],
            reason: 'MIND BLOWING! Semua garis mendatarnya 100% LURUS SEJAJAR sempurna! Pergeseran pola kotak hitam-putih (Ilusi Cafe Wall) bikin mata melihatnya miring!',
            renderSvg: (solved) => {
                const rows = [0, 1, 2, 3];
                const offsets = [0, 14, 28, 14];
                const tiles = rows.map((r) => {
                    const y = 25 + r * 30;
                    const rowTiles = [];
                    for (let c = -1; c < 11; c++) {
                        const x = 60 + c * 32 + offsets[r];
                        const isBlack = c % 2 === 0;
                        rowTiles.push(`<rect x="${x}" y="${y}" width="32" height="30" fill="${isBlack ? (solved ? '#CBD5E1' : '#0F172A') : '#FFFFFF'}"/>`);
                    }
                    return rowTiles.join('') + `<line x1="50" y1="${y}" x2="410" y2="${y}" stroke="${solved ? '#10B981' : '#94A3B8'}" stroke-width="${solved ? 3 : 2}"/>`;
                }).join('');
                return `
                    <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                        <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                        <clipPath id="cwClip"><rect x="60" y="25" width="340" height="120" rx="6"/></clipPath>
                        <g clip-path="url(#cwClip)">${tiles}</g>
                        ${solved ? `<text x="230" y="160" text-anchor="middle" font-family="Arial" font-size="11.5" font-weight="800" fill="#059669">BUKTI: GARIS HIJAU 100% LURUS SEJAJAR!</text>` : ''}
                    </svg>`;
            }
        },
        {
            id: 6,
            category: 'Ilusi Optik Menipu',
            question: 'Perhatikan dua bentuk lengkung pelangi (ORANYE dan BIRU) yang ditumpuk ini. Bentuk mana yang ukurannya lebih besar?',
            answer: 'SAMA BESAR',
            trap: 'YANG BAWAH',
            openIndices: [0, 5],
            clues: [
                'Sisi pendek bagian bawah ditaruh persis di atas sisi panjang gambar bawahnya!',
                'Kalau digeser lurus sejajar, dua-duanya ukurannya...'
            ],
            reason: 'MIND BLOWING! Bentuk oranye dan biru ukurannya 100% IDENTIK / SAMA BESAR (Ilusi Jastrow)! Otak tertipu membandingkan lengkungan pendek dan lengkungan panjang yang bersebelahan!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                    <!-- Top curved trapezoid -->
                    <path d="M135 55 Q230 22 325 55 L308 82 Q230 56 152 82 Z" fill="#F97316" stroke="#C2410C" stroke-width="2"/>
                    <!-- Bottom identical curved trapezoid shifted slightly right -->
                    <path d="${solved ? 'M135 100 Q230 67 325 100 L308 127 Q230 101 152 127 Z' : 'M152 100 Q247 67 342 100 L325 127 Q247 101 169 127 Z'}" fill="#0284C7" stroke="#0369A1" stroke-width="2"/>
                    ${solved ? `<text x="230" y="155" text-anchor="middle" font-family="Arial" font-size="12" font-weight="800" fill="#059669">BUKTI: DIGESER LURUS 100% SAMA BESAR!</text>` : ''}
                </svg>`
        },

        // === 2. Tebak Sudut Pandang ===
        {
            id: 7,
            category: 'Tebak Sudut Pandang',
            question: 'Sekilas terlihat gambar PIALA PUTIH di tengah. Tapi fokuslah ke sisi hitam di kiri dan kanan... sebenarnya mereka lagi ngapain?',
            answer: 'SALING TATAP',
            trap: 'PIALA EMAS',
            openIndices: [0, 7],
            clues: [
                'Abaikan bentuk piala putih di tengah, lihat bayangan hitam di kiri dan kanan!',
                'Keduanya punya hidung, dagu, dan bibir yang berhadap-hadapan!'
            ],
            reason: 'MIND BLOWING! Ini ilusi Vas Rubin — bayangan hitam kiri dan kanan adalah dua wajah manusia yang lagi SALING TATAP jarak dekat!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#FFFFFF"/>
                    <!-- Two facing silhouettes in black -->
                    <path d="M120 20 L205 20 C198 40, 212 52, 200 66 C214 78, 218 85, 202 92 C210 98, 202 104, 198 108 C208 114, 194 128, 196 150 L120 150 Z" fill="${solved ? '#6D28D9' : '#0F172A'}"/>
                    <path d="M340 20 L255 20 C262 40, 248 52, 260 66 C246 78, 242 85, 258 92 C250 98, 258 104, 262 108 C252 114, 266 128, 264 150 L340 150 Z" fill="${solved ? '#DB2777' : '#0F172A'}"/>
                    ${solved ? `
                        <line x1="205" y1="54" x2="255" y2="54" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="4 3"/>
                        <text x="230" y="164" text-anchor="middle" font-family="Arial" font-size="11.5" font-weight="800" fill="#6D28D9">DUA WAJAH SALING TATAP!</text>
                    ` : ''}
                </svg>`
        },
        {
            id: 8,
            category: 'Tebak Sudut Pandang',
            question: 'Fokus pada WARNA TINTA tulisan pertama (bukan kata yang tertulis!). Apa warna tinta kata pertama tersebut?',
            answer: 'BIRU',
            trap: 'MERAH',
            openIndices: [0],
            clues: [
                'Otakmu otomatis membaca teksnya, padahal yang ditanya WARNA TINTA-nya!',
                'Tulisannya berbunyi "MERAH", tapi warnanya kayak langit cerah!'
            ],
            reason: 'Efek Stroop! Tulisan pertamanya memang berbunyi MERAH, tapi warna tintanya BIRU! Otak langsung bentrok pas disuruh nyebut cepat!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#0F172A"/>
                    <text x="145" y="75" text-anchor="middle" font-family="Arial Black" font-size="34" fill="#38BDF8">MERAH</text>
                    <text x="320" y="75" text-anchor="middle" font-family="Arial Black" font-size="34" fill="#FACC15">HIJAU</text>
                    <text x="145" y="135" text-anchor="middle" font-family="Arial Black" font-size="34" fill="#EF4444">BIRU</text>
                    <text x="320" y="135" text-anchor="middle" font-family="Arial Black" font-size="34" fill="#22C55E">KUNING</text>
                    <rect x="65" y="34" width="160" height="54" rx="10" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="6 4"/>
                </svg>`
        },
        {
            id: 9,
            category: 'Tebak Sudut Pandang',
            question: 'Si Kiri berteriak itu angka 6! Si Kanan ngotot itu angka 9! Siapa sebenarnya yang paling tahu kebenaran angka aslinya?',
            answer: 'PEMBUATNYA',
            trap: 'PENGUKUR',
            openIndices: [0, 9],
            clues: [
                'Bukan salah satu dari dua orang yang berdebat di kiri atau kanan!',
                'Tanyakan ke orang yang pertama kali mengecat/menulis angka itu di lantai!'
            ],
            reason: 'MIND BLOWING! Keduanya cuma berdebat dari sudut pandang masing-masing — yang paling tahu apakah itu 6 atau 9 adalah PEMBUATNYA!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                    <!-- Left stick figure -->
                    <circle cx="95" cy="60" r="16" fill="#2563EB"/>
                    <rect x="83" y="80" width="24" height="45" rx="6" fill="#2563EB"/>
                    <text x="95" y="148" text-anchor="middle" font-family="Arial Black" font-size="14" fill="#1E40AF">"ITU 6!"</text>
                    <!-- Number in center lying sideways/vertical -->
                    <ellipse cx="230" cy="116" rx="64" ry="20" fill="#E2E8F0"/>
                    <text x="230" y="102" text-anchor="middle" font-family="Arial Black" font-size="76" fill="#0F172A">6</text>
                    <!-- Right stick figure -->
                    <circle cx="365" cy="60" r="16" fill="#DC2626"/>
                    <rect x="353" y="80" width="24" height="45" rx="6" fill="#DC2626"/>
                    <text x="365" y="148" text-anchor="middle" font-family="Arial Black" font-size="14" fill="#B91C1C">"ITU 9!"</text>
                </svg>`
        },
        {
            id: 10,
            category: 'Tebak Sudut Pandang',
            question: 'Tiga orang menutup mata lalu meraba seekor gajah di tempat gelap. Semua punya jawaban beda tapi semua merasa benar karena...',
            answer: 'BELUM LIHAT UTUH',
            trap: 'SALAH MEGANG',
            openIndices: [0, 12],
            clues: [
                'Yang pegang belalai dikira ular, yang pegang kaki dikira pohon, yang pegang telinga dikira kipas!',
                'Mereka masing-masing cuma melihat sebagian kecilnya!'
            ],
            reason: 'Mereka semua merasa paling benar karena BELUM LIHAT UTUH gambar gajahnya! Pelajaran hidup sekaligus jebakan sudut pandang!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                    <!-- Stylized Elephant Silhouette -->
                    <rect x="165" y="55" width="125" height="65" rx="22" fill="#64748B"/>
                    <rect x="175" y="110" width="22" height="38" rx="6" fill="#64748B"/>
                    <rect x="255" y="110" width="22" height="38" rx="6" fill="#64748B"/>
                    <path d="M165 72 Q125 75 130 112 Q132 124 144 120" fill="none" stroke="#64748B" stroke-width="16" stroke-linecap="round"/>
                    <ellipse cx="205" cy="76" rx="18" ry="24" fill="#94A3B8"/>
                    <!-- Speech bubbles -->
                    <rect x="26" y="25" width="95" height="30" rx="8" fill="#FEE2E2" stroke="#EF4444"/>
                    <text x="73" y="45" text-anchor="middle" font-family="Arial Black" font-size="11" fill="#B91C1C">"ULAR!"</text>
                    <rect x="182" y="12" width="95" height="28" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
                    <text x="230" y="30" text-anchor="middle" font-family="Arial Black" font-size="11" fill="#92400E">"KIPAS!"</text>
                    <rect x="330" y="65" width="104" height="30" rx="8" fill="#DBEAFE" stroke="#2563EB"/>
                    <text x="382" y="85" text-anchor="middle" font-family="Arial Black" font-size="11" fill="#1E40AF">"TEMBOK!"</text>
                </svg>`
        },
        {
            id: 11,
            category: 'Tebak Sudut Pandang',
            question: 'Jam weker sudah bunyi nyaring jam 06.00 pagi tepat! Tapi dari gerakan di gambar ini, kalimat yang keluar dari mulutnya pasti...',
            answer: 'LIMA MENIT LAGI',
            trap: 'BANGUN PAGI',
            openIndices: [0, 5],
            clues: [
                'Tangannya malah nekan tombol SNOOZE terus tarik selimut lagi!',
                'Janji palsu sejuta umat tiap pagi hari kerja!'
            ],
            reason: 'LIMA MENIT LAGI! Janji paling bohong di pagi hari — tahu-tahu melek lagi udah jam 08.15 lewat rapat pagi!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#EFF6FF"/>
                    <!-- Alarm clock shaking -->
                    <circle cx="120" cy="85" r="36" fill="#EF4444"/>
                    <circle cx="120" cy="85" r="28" fill="#FFFFFF"/>
                    <line x1="120" y1="85" x2="120" y2="66" stroke="#0F172A" stroke-width="3.5" stroke-linecap="round"/>
                    <line x1="120" y1="85" x2="136" y2="85" stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>
                    <text x="120" y="34" text-anchor="middle" font-family="Arial Black" font-size="13" fill="#DC2626">KRINGGG! 06:00</text>
                    <!-- Arrow to Snooze & Sleeping Blanket -->
                    <path d="M175 85 L220 85" stroke="#64748B" stroke-width="4" stroke-linecap="round"/>
                    <rect x="240" y="96" width="170" height="44" rx="14" fill="#3B82F6"/>
                    <circle cx="385" cy="85" r="18" fill="#FDE047"/>
                    <text x="315" y="72" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#1E3A8A">Zzz...</text>
                </svg>`
        },

        // === 3. Rebus Plesetan Kantor ===
        {
            id: 12,
            category: 'Rebus Plesetan Kantor',
            question: 'Tebak ungkapan khas anak kantor dari kombinasi gambar dan kejadian berikut!',
            answer: 'KAMBING HITAM',
            trap: 'HEWAN HITAM',
            openIndices: [0, 8],
            clues: [
                'Lihat warnanya + posisinya sebagai karyawan paling baru di rapat!',
                'Sering dijadikan pihak yang disalahkan setiap kali ada masalah!'
            ],
            reason: 'KAMBING HITAM! Klasik di kantor maupun pergaulan: tiap proyek error, yang paling gampang disalahin ya si anak baru!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                    <!-- Black Goat Silhouette -->
                    <ellipse cx="120" cy="95" rx="45" ry="28" fill="#0F172A"/>
                    <circle cx="164" cy="72" r="18" fill="#0F172A"/>
                    <path d="M162 56 Q150 38 136 46" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
                    <path d="M170 56 Q182 38 190 48" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
                    <rect x="92" y="114" width="10" height="32" rx="4" fill="#0F172A"/>
                    <rect x="138" y="114" width="10" height="32" rx="4" fill="#0F172A"/>
                    <text x="120" y="162" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#475569">Mbeee...</text>
                    <!-- Arrow = Salah Semua -->
                    <text x="235" y="98" text-anchor="middle" font-family="Arial Black" font-size="30" fill="#EF4444">=</text>
                    <!-- Blamed New Intern -->
                    <circle cx="345" cy="58" r="20" fill="#FDE047" stroke="#0F172A" stroke-width="2"/>
                    <rect x="320" y="82" width="50" height="48" rx="10" fill="#EF4444"/>
                    <text x="345" y="152" text-anchor="middle" font-family="Arial Black" font-size="11" fill="#B91C1C">"SALAH ANAK BARU!"</text>
                </svg>`
        },
        {
            id: 13,
            category: 'Rebus Plesetan Kantor',
            question: 'Lihat gambar pintu minimarket bertuliskan DORONG, tapi orangnya malah menarik sekuat tenaga. Kenapa?',
            answer: 'MALAS BACA',
            trap: 'BUKA PINTU',
            openIndices: [0, 6],
            clues: [
                'Bukan karena pintunya macet atau terkunci.',
                'Tulisannya sudah gede banget berwarna merah, tapi diabaikan matanya!'
            ],
            reason: 'MALAS BACA! Penyakit umum di pintu kaca seluruh minimarket — udah tertulis DORONG huruf kapital tetep aja ditarik sampai bunyi brak!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                    <!-- Glass Door with big DORONG sign -->
                    <rect x="165" y="18" width="130" height="136" rx="8" fill="#E0F2FE" stroke="#0284C7" stroke-width="4"/>
                    <rect x="188" y="42" width="84" height="32" rx="6" fill="#EF4444"/>
                    <text x="230" y="63" text-anchor="middle" font-family="Arial Black" font-size="15" fill="#FFFFFF">DORONG</text>
                    <!-- Door Handle + Hand Pulling Left -->
                    <rect x="274" y="88" width="8" height="32" rx="4" fill="#334155"/>
                    <path d="M350 104 L288 104" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
                    <path d="M335 90 L355 104 L335 118" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <text x="368" y="78" text-anchor="middle" font-family="Arial Black" font-size="13" fill="#B45309">TARIKK!!</text>
                </svg>`
        },
        {
            id: 14,
            category: 'Rebus Plesetan Kantor',
            question: 'Dompet terbuka dengan sarang laba-laba (Rp 0) + Kalender angka 28 merah. Tebak frasanya!',
            answer: 'TANGGAL TUA',
            trap: 'DOMPET KOSONG',
            openIndices: [0, 8],
            clues: [
                'Fokus ke angka di kalendernya + kondisi isi dompetnya!',
                'Dua kata paling keramat bagi anak kos dan karyawan!'
            ],
            reason: 'TANGGAL TUA! Tanggal 28 dompet udah isi sarang laba-laba, gajian masih minggu depan!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#FEF2F2"/>
                    <!-- Empty Wallet -->
                    <rect x="58" y="48" width="120" height="82" rx="12" fill="#78350F" stroke="#451A03" stroke-width="3"/>
                    <text x="118" y="96" text-anchor="middle" font-family="Arial Black" font-size="24" fill="#FCA5A5">Rp 0</text>
                    <text x="225" y="98" text-anchor="middle" font-family="Arial Black" font-size="30" fill="#64748B">+</text>
                    <!-- Calendar 28 -->
                    <rect x="275" y="34" width="115" height="106" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
                    <rect x="275" y="34" width="115" height="32" rx="10" fill="#EF4444"/>
                    <text x="332" y="55" text-anchor="middle" font-family="Arial Black" font-size="12" fill="#FFFFFF">AKHIR BULAN</text>
                    <text x="332" y="118" text-anchor="middle" font-family="Arial Black" font-size="48" fill="#0F172A">28</text>
                </svg>`
        },
        {
            id: 15,
            category: 'Rebus Plesetan Kantor',
            question: 'Seekor udang bersembunyi di belakang batu besar. Tebak makna peribahasa (bukan benda harfiahnya!)',
            answer: 'ADA MAUNYA',
            trap: 'UDANG BATU',
            openIndices: [0, 4],
            clues: [
                'Peribahasanya "Ada udang di balik batu" — apa arti aslinya?',
                'Kalau teman tiba-tiba super baik ngasih kopi gratis, tandanya...'
            ],
            reason: 'ADA MAUNYA! Bukan nyari udang beneran, biasanya temenmu lagi mau nitip absen atau minjam duit!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#F0FDF4"/>
                    <!-- Shrimp behind Rock -->
                    <path d="M290 65 Q340 40 345 85 Q345 110 315 115" fill="none" stroke="#F97316" stroke-width="18" stroke-linecap="round"/>
                    <circle cx="332" cy="60" r="3" fill="#0F172A"/>
                    <path d="M135 135 Q145 45 230 48 Q310 50 325 135 Z" fill="#64748B" stroke="#475569" stroke-width="3"/>
                    <text x="230" y="102" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#F8FAFC">BATU</text>
                    <text x="360" y="45" text-anchor="middle" font-family="Arial Black" font-size="12" fill="#EA580C">Ngintip...</text>
                </svg>`
        },
        {
            id: 16,
            category: 'Rebus Plesetan Kantor',
            question: 'Laporan penting belum diklik SAVE, tiba-tiba gelas kopi tumpah membanjiri keyboard laptop! Satu kata refleks karyawan saat itu adalah...',
            answer: 'PANIK',
            trap: 'PASRAH',
            openIndices: [0],
            clues: [
                'Jantung berhenti sepersekian detik melihat air kopi masuk sela-sela tombol!',
                'Lima huruf diawali P, langsung cabut colokan listrik!'
            ],
            reason: 'PANIK! Lebih ngeri daripada film horor — kerjaan seharian hilang dalam dua detik karena segelas es kopi susu!',
            renderSvg: () => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#FFFBEB"/>
                    <!-- Laptop Screen saying UNSAVED -->
                    <rect x="135" y="22" width="160" height="92" rx="8" fill="#1E293B"/>
                    <rect x="145" y="32" width="140" height="72" rx="4" fill="#FFFFFF"/>
                    <text x="215" y="64" text-anchor="middle" font-family="Arial Black" font-size="13" fill="#EF4444">BELUM DI-SAVE!</text>
                    <text x="215" y="85" text-anchor="middle" font-family="Arial" font-size="11" font-weight="700" fill="#64748B">Laporan_Final_V9</text>
                    <!-- Keyboard base -->
                    <polygon points="115,118 315,118 335,148 95,148" fill="#64748B"/>
                    <!-- Spilling Coffee Mug -->
                    <rect x="305" y="42" width="46" height="36" rx="6" transform="rotate(-45 328 60)" fill="#B45309"/>
                    <path d="M295 72 Q265 95 245 128 Q270 135 285 130 Q300 115 305 85 Z" fill="#78350F" opacity="0.85"/>
                </svg>`
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
        select: document.getElementById('tg-select'),
        btnRandom: document.getElementById('tg-random'),
        countBadge: document.getElementById('tg-count-badge'),
        btnHp: document.getElementById('tg-hp-btn'),
        hpModal: document.getElementById('tg-hp-modal'),
        hpClose: document.getElementById('tg-hp-close'),
        hpUrl: document.getElementById('tg-hp-url'),
        btnCopyHpUrl: document.getElementById('tg-copy-hp-url'),
        openHpTab: document.getElementById('tg-open-hp-tab'),
        hpCheatCard: document.getElementById('tg-hp-cheat-card'),
        hpAnswer: document.getElementById('tg-hp-answer'),
        hpTrap: document.getElementById('tg-hp-trap'),
        hpClue1: document.getElementById('tg-hp-clue1'),
        hpClue2: document.getElementById('tg-hp-clue2'),
        hpReason: document.getElementById('tg-hp-reason'),
        btnSound: document.getElementById('tg-sound'),
        btnFullscreen: document.getElementById('tg-fullscreen'),
        qNum: document.getElementById('tg-q-num'),
        qText: document.getElementById('tg-q-text'),
        canvas: document.getElementById('tg-canvas'),
        lengthChip: document.getElementById('tg-length-chip'),
        clueChip: document.getElementById('tg-clue-chip'),
        tiles: document.getElementById('tg-tiles'),
        reasonBox: document.getElementById('tg-reason-box'),
        reasonText: document.getElementById('tg-reason-text'),
        turnBar: document.getElementById('tg-turn-bar'),
        activeTurnLabel: document.getElementById('active-turn-label'),
        form: document.getElementById('tg-form'),
        input: document.getElementById('tg-input'),
        feedback: document.getElementById('tg-feedback'),
        teamsContainer: document.getElementById('studio-arena'),
        teamsLeft: document.getElementById('teams-left'),
        teamsRight: document.getElementById('teams-right'),
        btnAddTeam: document.getElementById('btn-add-team'),
        btnHintLetter: document.getElementById('tg-hint-letter'),
        btnTetot: document.getElementById('tg-tetot'),
        btnReveal: document.getElementById('tg-reveal'),
        btnNext: document.getElementById('tg-next'),
        btnResetScores: document.getElementById('tg-reset-scores'),
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
        const colors = ['#7C3AED', '#F59E0B', '#10B981', '#EC4899', '#FFFFFF'];
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
            <linearGradient id="tgLegoYellow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#FFE055"/>
                <stop offset="55%" stop-color="#F5B700"/>
                <stop offset="100%" stop-color="#D99B00"/>
            </linearGradient>`;
        svg.appendChild(defs);

        const players = [
            { cx: 52, shirt: 'shirt-a', hair: '#1E293B', pose: 'pose-a', rot: 7 },
            { cx: 110, shirt: 'shirt-b', hair: '#92400E', pose: 'pose-b', rot: 0 },
            { cx: 168, shirt: 'shirt-c', hair: '#7C2D12', pose: 'pose-c', rot: -7 }
        ];

        players.forEach((p) => {
            const outer = document.createElementNS(ns, 'g');
            if (p.rot !== 0) outer.setAttribute('transform', `rotate(${p.rot} ${p.cx} 54)`);

            const g = document.createElementNS(ns, 'g');
            g.setAttribute('class', `person-anim ${p.pose}`);
            g.style.transformOrigin = `${p.cx}px 68px`;

            const legs = document.createElementNS(ns, 'path');
            legs.setAttribute('d', `M${p.cx - 9} 67 H${p.cx - 1.5} V78 H${p.cx - 9} Z M${p.cx + 1.5} 67 H${p.cx + 9} V78 H${p.cx + 1.5} Z`);
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
            head.setAttribute('fill', 'url(#tgLegoYellow)');
            head.setAttribute('class', 'lego-head');

            const hair = document.createElementNS(ns, 'path');
            hair.setAttribute('d', `M${p.cx - 11.5} 16 C${p.cx - 11.5} 7.5 ${p.cx + 11.5} 7.5 ${p.cx + 11.5} 16 Q${p.cx} 12.5 ${p.cx - 11.5} 16 Z`);
            hair.setAttribute('fill', p.hair);

            const exprIdle = document.createElementNS(ns, 'g');
            exprIdle.setAttribute('class', 'expr expr-idle');
            exprIdle.innerHTML = `
                <g class="lego-eyes-blink" style="transform-origin: ${p.cx}px 20.5px;">
                    <circle cx="${p.cx - 4.2}" cy="20.5" r="1.9" class="lego-eye"/>
                    <circle cx="${p.cx + 4.2}" cy="20.5" r="1.9" class="lego-eye"/>
                </g>
                <path d="M${p.cx - 3.5} 25.5 Q${p.cx} 28.5 ${p.cx + 3.5} 25.5" class="lego-mouth"/>
                <ellipse cx="${p.cx}" cy="26.4" rx="2.6" ry="1.8" class="lego-mouth-talk"/>`;

            const exprHappy = document.createElementNS(ns, 'g');
            exprHappy.setAttribute('class', 'expr expr-happy');
            exprHappy.innerHTML = `
                <path d="M${p.cx - 6.5} 21.2 Q${p.cx - 4.2} 17.8 ${p.cx - 1.9} 21.2" class="lego-eye-arc"/>
                <path d="M${p.cx + 1.9} 21.2 Q${p.cx + 4.2} 17.8 ${p.cx + 6.5} 21.2" class="lego-eye-arc"/>
                <path d="M${p.cx - 4.5} 24.5 Q${p.cx} 30 ${p.cx + 4.5} 24.5 Z" class="lego-mouth-open"/>`;

            const exprShock = document.createElementNS(ns, 'g');
            exprShock.setAttribute('class', 'expr expr-shock');
            exprShock.innerHTML = `
                <path d="M${p.cx - 6} 18.8 L${p.cx - 2.4} 22.2 M${p.cx - 2.4} 18.8 L${p.cx - 6} 22.2" class="lego-eye-x"/>
                <path d="M${p.cx + 2.4} 18.8 L${p.cx + 6} 22.2 M${p.cx + 6} 18.8 L${p.cx + 2.4} 22.2" class="lego-eye-x"/>
                <ellipse cx="${p.cx}" cy="26.5" rx="2.3" ry="1.8" class="lego-mouth-shock"/>`;

            headGroup.append(stud, head, hair, exprIdle, exprHappy, exprShock);
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
                btnRemove.title = `Hapus ${team.name}`;
                btnRemove.textContent = '×';
                desk.appendChild(btnRemove);
            }

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.className = 'team-name-input';
            nameInput.value = team.name;
            nameInput.maxLength = 18;
            nameInput.dataset.teamNameIdx = String(idx);

            const score = document.createElement('div');
            score.className = 'podium-score';
            score.textContent = String(team.score);

            const status = document.createElement('div');
            status.className = 'podium-status';
            status.textContent = isAct ? 'Giliran Menebak' : 'Klik Pilih Tim';

            desk.append(topCounter, rank, nameInput, score, status);
            unit.append(crew, desk);
            (idx % 2 === 0 ? el.teamsLeft : el.teamsRight).appendChild(unit);
        });

        const activeObj = state.teams[state.activeTeam];
        const activeColor = activeObj?.color || 'red';
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
            const teamIdx = Number(unit.dataset.team);
            const isAct = teamIdx === state.activeTeam;
            if (type === 'correct' && isAct) unit.classList.add('celebrate');
            else if (type === 'wrong' && !isAct) unit.classList.add('celebrate');
            else if (type === 'wrong' && isAct) unit.classList.add('sad-wrong');
        });
        reactionTimer = setTimeout(() => {
            units.forEach((unit) => unit.classList.remove('celebrate', 'sad', 'sad-wrong'));
        }, 2300);
    }

    function renderQuestion() {
        const q = TEBAK_GAMBAR_QUESTIONS[state.currentIndex];
        if (!q) return;
        const words = q.answer.split(' ').filter(Boolean);
        const letterCount = q.answer.replace(/\s+/g, '').length;

        el.qNum.textContent = `Gambar #${state.currentIndex + 1} / ${TEBAK_GAMBAR_QUESTIONS.length}`;
        el.qText.textContent = q.question;
        el.canvas.innerHTML = q.renderSvg(state.isSolved);
        el.lengthChip.textContent = words.length > 1
            ? `Panjang: ${letterCount} Huruf (${words.length} Kata)`
            : `Panjang: ${letterCount} Huruf`;

        if (el.clueChip) {
            if (state.clueStage === 0) {
                el.clueChip.textContent = isHostMode
                    ? `📱 Mode HP Host • Klik tampilkan Clue 1/${q.clues.length}`
                    : `🤫 Clue Tersembunyi — Klik untuk buka sedikit demi sedikit (0/${q.clues.length})`;
            } else if (state.clueStage === 1) {
                el.clueChip.textContent = `💡 Clue 1: ${q.clues[0]} (Klik untuk Clue 2/2)`;
            } else {
                el.clueChip.textContent = `💡 Clue 1: ${q.clues[0]} • Clue 2: ${q.clues[1]}`;
            }
        }

        if (el.hpCheatCard) {
            el.hpCheatCard.hidden = !isHostMode;
            if (isHostMode) {
                if (el.hpAnswer) el.hpAnswer.textContent = q.answer;
                if (el.hpTrap) el.hpTrap.textContent = q.trap || '-';
                if (el.hpClue1) el.hpClue1.textContent = q.clues[0] || '-';
                if (el.hpClue2) el.hpClue2.textContent = q.clues[1] || '-';
                if (el.hpReason) el.hpReason.textContent = q.reason;
            }
        }

        el.tiles.textContent = '';
        let group = document.createElement('div');
        group.className = 'tg-word-group';
        for (let i = 0; i < q.answer.length; i++) {
            if (q.answer[i] === ' ') {
                if (group.childNodes.length > 0) {
                    el.tiles.appendChild(group);
                    group = document.createElement('div');
                    group.className = 'tg-word-group';
                }
                continue;
            }
            const tile = document.createElement('button');
            tile.type = 'button';
            const isOpen = state.isSolved || state.openedLetters.has(i);
            let cls = 'tg-tile';
            if (state.isSolved) cls += ' revealed';
            else if (isOpen) cls += ' clue';
            else cls += ' hidden-letter';
            tile.className = cls;
            tile.textContent = isOpen ? q.answer[i] : '?';
            if (!state.isSolved) {
                tile.title = isOpen ? 'Klik untuk tutup huruf ini lagi' : 'Klik untuk buka huruf ini';
                tile.addEventListener('click', () => {
                    if (state.openedLetters.has(i)) state.openedLetters.delete(i);
                    else state.openedLetters.add(i);
                    renderQuestion();
                });
            }
            group.appendChild(tile);
        }
        if (group.childNodes.length > 0) el.tiles.appendChild(group);

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
        const q = TEBAK_GAMBAR_QUESTIONS[idx];
        state.openedLetters = new Set(Array.isArray(q?.openIndices) ? q.openIndices : []);
        state.clueStage = 0;
        state.isSolved = false;
        el.feedback.textContent = '';
        el.feedback.className = 'feedback-msg';
        el.input.value = '';
        renderQuestion();
    }

    function getFilteredIndices() {
        const list = [];
        TEBAK_GAMBAR_QUESTIONS.forEach((q, idx) => {
            if (state.selectedCategory === 'ALL' || q.category === state.selectedCategory) list.push(idx);
        });
        return list;
    }

    function populateCategorySelect() {
        const catEl = document.getElementById('tg-category');
        if (!catEl) return;
        const cats = [...new Set(TEBAK_GAMBAR_QUESTIONS.map((q) => q.category))];
        catEl.textContent = '';
        const allOpt = document.createElement('option');
        allOpt.value = 'ALL';
        allOpt.textContent = `Semua Kategori (${TEBAK_GAMBAR_QUESTIONS.length})`;
        catEl.appendChild(allOpt);
        cats.forEach((c) => {
            const count = TEBAK_GAMBAR_QUESTIONS.filter((q) => q.category === c).length;
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
            const q = TEBAK_GAMBAR_QUESTIONS[idx];
            const opt = document.createElement('option');
            opt.value = String(idx);
            opt.textContent = `${pos + 1}. ${q.question}`;
            el.select.appendChild(opt);
        });
        if (indices.length > 0 && !indices.includes(state.currentIndex)) {
            state.currentIndex = indices[0];
        }
        el.select.value = String(state.currentIndex);
        if (el.countBadge) el.countBadge.textContent = `${indices.length} GAMBAR`;
    }

    function handleGuess(e) {
        e.preventDefault();
        const q = TEBAK_GAMBAR_QUESTIONS[state.currentIndex];
        if (!q || state.isSolved) return;

        const guess = el.input.value.trim().toUpperCase().replace(/\s+/g, '');
        if (!guess) return;

        const targetAnswer = q.answer.toUpperCase().replace(/\s+/g, '');
        if (guess === targetAnswer) {
            state.isSolved = true;
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
            el.feedback.textContent = `KETIPU MATA! "${el.input.value.trim().toUpperCase()}" bukan jawabannya!`;
            el.feedback.className = 'feedback-msg err';
        }
        el.input.value = '';
        el.input.focus();
    }

    function init() {
        populateSelect();
        loadQuestion(0);

        const catEl = document.getElementById('tg-category');
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
        el.clueChip?.addEventListener('click', () => {
            const q = TEBAK_GAMBAR_QUESTIONS[state.currentIndex];
            const maxStage = Array.isArray(q?.clues) ? q.clues.length : 1;
            state.clueStage = (state.clueStage + 1) % (maxStage + 1);
            renderQuestion();
        });
        el.btnHintLetter.addEventListener('click', () => {
            const q = TEBAK_GAMBAR_QUESTIONS[state.currentIndex];
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
            const q = TEBAK_GAMBAR_QUESTIONS[state.currentIndex];
            if (!q) return;
            state.isSolved = true;
            playCorrectSound();
            renderQuestion();
            el.feedback.textContent = `Fakta Mind-Blowing: "${q.answer}"!`;
            el.feedback.className = 'feedback-msg ok';
        });
        el.btnTetot.addEventListener('click', () => {
            playWrongSound();
            el.wrongOverlay.classList.add('show');
            triggerTeamReactions('wrong');
            setTimeout(() => el.wrongOverlay.classList.remove('show'), 750);
            el.feedback.textContent = `KENA PRANK MATA! Coba lihat lebih teliti lagi, ${state.teams[state.activeTeam].name}!`;
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
                }).catch(() => el.hpUrl?.select());
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
