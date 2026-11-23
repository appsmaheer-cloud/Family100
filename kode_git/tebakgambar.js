(() => {
    'use strict';

    const IMG_DIR = (document.querySelector('link[rel="icon"]')?.getAttribute('href') || '').includes('assets/')
        ? 'assets/img/'
        : 'img/';

    function renderPhotoStage({ src, alt, solved, preStyle = '', postStyle = '', spotStyle = '', caption = '' }) {
        return `
            <div class="tg-photo-frame">
                <img src="${IMG_DIR}${src}" alt="${alt}" class="tg-photo-img" style="${solved ? postStyle : preStyle}">
                ${solved && spotStyle ? `<div class="tg-photo-spot" style="${spotStyle}"></div>` : ''}
                ${solved && caption ? `<div class="tg-photo-caption">${caption}</div>` : ''}
            </div>`;
    }

    const TEBAK_GAMBAR_QUESTIONS = [
        // === 1. Hitung Alfabet + Gambar ===
        {
            id: 1,
            category: 'Hitung Alfabet + Gambar',
            question: 'Pecahkan kode urutan alfabet (A=1, B=2, ..., Z=26) di sisi kiri lalu gabungkan dengan gambar di sebelah kanan!',
            answer: 'JAM KARET',
            acceptedAnswers: ['JAM KARET', 'JAMKARET'],
            trap: 'WAKTU MELAR',
            openIndices: [4],
            clues: [
                'Hitung huruf ke-10, ke-1, dan ke-13 dalam alfabet A=1..Z=26!',
                '10=J, 1=A, 13=M → "JAM", digabung benda di kanan (gelang lentur)!'
            ],
            reason: 'Kode 10 - 1 - 13 adalah J - A - M ("JAM"), digabung dengan gambar KARET GELANG = JAM KARET (kebiasaan ngaret)!',
            renderSvg: () => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#0F172A"/>
                    <text x="115" y="34" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#94A3B8">HITUNG ALFABET (A=1..Z=26)</text>
                    <rect x="28" y="48" width="46" height="58" rx="10" fill="#1E293B" stroke="#F59E0B" stroke-width="2.5"/>
                    <text x="51" y="86" text-anchor="middle" font-family="Arial Black" font-size="24" fill="#FDE047">10</text>
                    <rect x="86" y="48" width="46" height="58" rx="10" fill="#1E293B" stroke="#F59E0B" stroke-width="2.5"/>
                    <text x="109" y="86" text-anchor="middle" font-family="Arial Black" font-size="24" fill="#FDE047">1</text>
                    <rect x="144" y="48" width="46" height="58" rx="10" fill="#1E293B" stroke="#F59E0B" stroke-width="2.5"/>
                    <text x="167" y="86" text-anchor="middle" font-family="Arial Black" font-size="24" fill="#FDE047">13</text>
                    <text x="109" y="138" text-anchor="middle" font-family="Arial" font-size="11.5" font-weight="700" fill="#CBD5E1">Petunjuk: B = 2, C = 3</text>
                    <text x="225" y="88" text-anchor="middle" font-family="Arial Black" font-size="28" fill="#38BDF8">+</text>
                    <!-- Rubber Band Icon -->
                    <rect x="262" y="32" width="166" height="114" rx="14" fill="#FFFFFF"/>
                    <ellipse cx="345" cy="88" rx="48" ry="22" transform="rotate(-18 345 88)" fill="none" stroke="#D97706" stroke-width="10"/>
                    <ellipse cx="348" cy="92" rx="44" ry="18" transform="rotate(14 348 92)" fill="none" stroke="#F59E0B" stroke-width="8"/>
                    <text x="345" y="135" text-anchor="middle" font-family="Arial" font-size="10.5" font-weight="800" fill="#64748B">(Benda lentur pengikat nasi bungkus)</text>
                </svg>`
        },
        {
            id: 2,
            category: 'Hitung Alfabet + Gambar',
            question: 'Hitung kode alfabet (A=1..Z=26) di kiri, lalu gabungkan dengan angka besar di kanan. Ungkapan apakah ini?',
            answer: 'KAKI LIMA',
            acceptedAnswers: ['KAKI LIMA', 'KAKILIMA'],
            trap: 'LIMA HURUF',
            openIndices: [5],
            clues: [
                'Hitung huruf ke-11, ke-1, ke-11, ke-9 dalam alfabet!',
                '11=K, 1=A, 11=K, 9=I → digabung dengan angka 5!'
            ],
            reason: '11-1-11-9 = K-A-K-I ("KAKI"), ditambah angka 5 ("LIMA") = KAKI LIMA (pedagang kaki lima)!',
            renderSvg: () => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#1E1B4B"/>
                    <text x="128" y="34" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#A5B4FC">A=1, B=2, C=3 ... Z=26</text>
                    <rect x="20" y="52" width="44" height="56" rx="9" fill="#312E81" stroke="#38BDF8" stroke-width="2"/>
                    <text x="42" y="88" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#FFFFFF">11</text>
                    <rect x="72" y="52" width="44" height="56" rx="9" fill="#312E81" stroke="#38BDF8" stroke-width="2"/>
                    <text x="94" y="88" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#FFFFFF">1</text>
                    <rect x="124" y="52" width="44" height="56" rx="9" fill="#312E81" stroke="#38BDF8" stroke-width="2"/>
                    <text x="146" y="88" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#FFFFFF">11</text>
                    <rect x="176" y="52" width="44" height="56" rx="9" fill="#312E81" stroke="#38BDF8" stroke-width="2"/>
                    <text x="198" y="88" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#FFFFFF">9</text>
                    <text x="248" y="90" text-anchor="middle" font-family="Arial Black" font-size="28" fill="#FDE047">+</text>
                    <rect x="278" y="34" width="150" height="106" rx="16" fill="#FFFFFF"/>
                    <text x="353" y="112" text-anchor="middle" font-family="Arial Black" font-size="76" fill="#EF4444">5</text>
                </svg>`
        },
        {
            id: 3,
            category: 'Hitung Alfabet + Gambar',
            question: 'Pecahkan kode alfabet di kiri lalu gabungkan dengan gambar batangan berkilau di kanan!',
            answer: 'ANAK EMAS',
            acceptedAnswers: ['ANAK EMAS', 'ANAKEMAS'],
            trap: 'EMAS MURNI',
            openIndices: [5],
            clues: [
                'Hitung urutan ke-1, ke-14, ke-1, dan ke-11 di alfabet!',
                '1=A, 14=N, 1=A, 11=K + logam mulia kuning!'
            ],
            reason: '1-14-1-11 = A-N-A-K ("ANAK") + batangan EMAS = ANAK EMAS (anak kesayangan/orang kepercayaan bos)!',
            renderSvg: () => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#0F172A"/>
                    <text x="128" y="34" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#94A3B8">KODE ALFABET (A=1..Z=26)</text>
                    <rect x="20" y="52" width="44" height="56" rx="9" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
                    <text x="42" y="88" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#6EE7B7">1</text>
                    <rect x="72" y="52" width="44" height="56" rx="9" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
                    <text x="94" y="88" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#6EE7B7">14</text>
                    <rect x="124" y="52" width="44" height="56" rx="9" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
                    <text x="146" y="88" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#6EE7B7">1</text>
                    <rect x="176" y="52" width="44" height="56" rx="9" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
                    <text x="198" y="88" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#6EE7B7">11</text>
                    <text x="248" y="90" text-anchor="middle" font-family="Arial Black" font-size="28" fill="#FDE047">+</text>
                    <!-- Gold Bar Icon -->
                    <rect x="278" y="34" width="150" height="106" rx="14" fill="#FFFFFF"/>
                    <polygon points="300,114 316,66 390,66 406,114" fill="#F59E0B" stroke="#B45309" stroke-width="3"/>
                    <polygon points="316,66 326,56 380,56 390,66" fill="#FDE047"/>
                    <text x="353" y="97" text-anchor="middle" font-family="Arial Black" font-size="13" fill="#78350F">999.9</text>
                </svg>`
        },
        {
            id: 4,
            category: 'Hitung Alfabet + Gambar',
            question: 'Berdasarkan logika pada tiga baris pertama, angka berapakah yang tepat menggantikan tanda tanya (?)',
            answer: '7',
            acceptedAnswers: ['7', 'TUJUH'],
            trap: '10',
            openIndices: [0],
            clues: [
                'Bukan nilai matematikanya! Jangan langsung jawab 10!',
                'Hitung JUMLAH HURUF pada setiap kata bilangannya!'
            ],
            reason: 'MIND BLOWING! SATU = 4 huruf, DUA = 3 huruf, EMPAT = 5 huruf, maka S-E-P-U-L-U-H terdiri dari 7 huruf!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#F8FAFC"/>
                    <rect x="40" y="16" width="380" height="32" rx="8" fill="#E0F2FE"/>
                    <text x="230" y="37" text-anchor="middle" font-family="Arial Black" font-size="16" fill="#0369A1">S A T U   =   4</text>
                    <rect x="40" y="54" width="380" height="32" rx="8" fill="#FEF3C7"/>
                    <text x="230" y="75" text-anchor="middle" font-family="Arial Black" font-size="16" fill="#B45309">D U A   =   3</text>
                    <rect x="40" y="92" width="380" height="32" rx="8" fill="#DCFCE7"/>
                    <text x="230" y="113" text-anchor="middle" font-family="Arial Black" font-size="16" fill="#15803D">E M P A T   =   5</text>
                    <rect x="40" y="130" width="380" height="34" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/>
                    <text x="230" y="152" text-anchor="middle" font-family="Arial Black" font-size="16" fill="#BE185D">S E P U L U H   =   ${solved ? '7 (HURUF!)' : '?'}</text>
                </svg>`
        },
        {
            id: 5,
            category: 'Hitung Alfabet + Gambar',
            question: 'Huruf tunggal apakah yang paling tepat mengisi tanda tanya (?) di akhir deretan kotak ini?',
            answer: 'M',
            acceptedAnswers: ['M', 'MINGGU'],
            trap: 'N',
            openIndices: [0],
            clues: [
                'Ini bukan deretan urutan huruf A-B-C biasa — baca seperti nama hari dalam seminggu!',
                'Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, lalu...'
            ],
            reason: 'M (MINGGU)! Deretan S - S - R - K - J - S - M adalah inisial nama-nama hari Senin sampai Minggu!',
            renderSvg: (solved) => {
                const letters = ['S', 'S', 'R', 'K', 'J', 'S', solved ? 'M' : '?'];
                const blocks = letters.map((ch, idx) => `
                    <rect x="${26 + idx * 59}" y="54" width="50" height="62" rx="10" fill="${idx === 6 ? '#EF4444' : '#1E40AF'}"/>
                    <text x="${51 + idx * 59}" y="96" text-anchor="middle" font-family="Arial Black" font-size="28" fill="#FFFFFF">${ch}</text>
                `).join('');
                return `
                    <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                        <rect width="460" height="175" rx="12" fill="#F8FAFC"/>
                        <text x="230" y="34" text-anchor="middle" font-family="Arial" font-size="12" font-weight="800" fill="#475569">LENGKAPI DERETAN HURUF INI</text>
                        ${blocks}
                        ${solved ? `<text x="230" y="146" text-anchor="middle" font-family="Arial" font-size="12" font-weight="800" fill="#059669">Senin • Selasa • Rabu • Kamis • Jumat • Sabtu • MINGGU!</text>` : ''}
                    </svg>`;
            }
        },

        // === 2. Logika & Ilusi Optik ===
        {
            id: 6,
            category: 'Logika & Ilusi Optik',
            question: 'Berapakah nomor slot parkir yang sedang tertutup oleh mobil merah pada gambar ini?',
            answer: '87',
            acceptedAnswers: ['87', 'DELAPAN PULUH TUJUH'],
            trap: '67',
            openIndices: [0],
            clues: [
                'Jangan baca angkanya tegak dari layar! Coba balikkan kepalamu / lihat dari atas ke bawah (180 derajat)!',
                'Jika diputar terbalik seperti pandangan sopir saat mau parkir: 86, [?], 88, 89, 90, 91!'
            ],
            reason: 'MIND BLOWING! Jika gambarnya diputar 180 derajat (sesuai arah sopir masuk parkir), deretan nomornya adalah 86, 87, 88, 89, 90, 91! Jadi yang tertutup mobil adalah 87!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#334155"/>
                    <g transform="${solved ? 'rotate(180 230 87.5)' : ''}">
                        ${['16', '06', '68', '88', 'CAR', '98'].map((val, i) => {
                            const x = 32 + i * 66;
                            return `
                                <rect x="${x}" y="25" width="60" height="125" fill="none" stroke="#FFFFFF" stroke-width="3"/>
                                ${val === 'CAR' ? `
                                    <rect x="${x + 10}" y="42" width="40" height="88" rx="10" fill="#EF4444" stroke="#FFFFFF" stroke-width="2"/>
                                    <rect x="${x + 15}" y="58" width="30" height="24" rx="4" fill="#BAE6FD"/>
                                    ${solved ? `<text x="${x + 30}" y="112" text-anchor="middle" font-family="Arial Black" font-size="22" fill="#FDE047" transform="rotate(180 ${x + 30} 105)">87</text>` : ''}
                                ` : `
                                    <text x="${x + 30}" y="102" text-anchor="middle" font-family="Arial Black" font-size="26" fill="#F8FAFC">${val}</text>
                                `}
                            `;
                        }).join('')}
                    </g>
                    ${solved ? `<rect x="132" y="4" width="196" height="20" rx="10" fill="#10B981"/><text x="230" y="18" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#FFFFFF">DIPUTAR 180°: 86 • 87 • 88 • 89 • 90 • 91!</text>` : ''}
                </svg>`
        },
        {
            id: 7,
            category: 'Logika & Ilusi Optik',
            question: 'Perhatikan dua garis mendatar HITAM (ATAS vs BAWAH). Mana yang lebih panjang?',
            answer: 'SAMA PANJANG',
            acceptedAnswers: ['SAMA PANJANG', 'SAMA'],
            trap: 'GARIS BAWAH',
            openIndices: [5],
            clues: [
                'Jangan tertipu ujung panah merah dan biru!',
                'Keduanya membentang persis dari x=140 ke x=320!'
            ],
            reason: 'MIND BLOWING! Panjang garis hitam ATAS dan BAWAH tepat 180px — SAMA PANJANG 100% (Ilusi Muller-Lyer)!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#F8FAFC"/>
                    <text x="24" y="48" font-family="Plus Jakarta Sans, Arial" font-size="13" font-weight="800" fill="#64748B">ATAS</text>
                    <text x="24" y="128" font-family="Plus Jakarta Sans, Arial" font-size="13" font-weight="800" fill="#64748B">BAWAH</text>
                    <line x1="140" y1="44" x2="320" y2="44" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
                    <path d="M115 24 L140 44 L115 64" fill="none" stroke="#EF4444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M345 24 L320 44 L345 64" fill="none" stroke="#EF4444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
            id: 8,
            category: 'Logika & Ilusi Optik',
            question: 'Bandingkan warna abu-abu KOTAK A dan KOTAK B secara langsung. Mana yang kode warnanya lebih terang?',
            answer: 'SAMA WARNA',
            acceptedAnswers: ['SAMA WARNA', 'SAMA'],
            trap: 'KOTAK B',
            openIndices: [5],
            clues: [
                'Kotak B dikelilingi bayangan gelap sehingga terlihat terang.',
                'Tutup kotak sekitarnya pakai jari — A dan B ternyata...'
            ],
            reason: 'MIND BLOWING! Kotak A dan Kotak B memakai kode warna #787878 yang 100% IDENTIK! Saat dihubungkan jembatan #787878, mata langsung sadar keduanya SAMA WARNA!',
            renderSvg: (solved) => `
                <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="170" rx="12" fill="#E2E8F0"/>
                    <rect x="70" y="20" width="90" height="55" fill="#F1F5F9" stroke="#94A3B8"/>
                    <rect x="160" y="20" width="90" height="55" fill="#787878" stroke="#475569"/>
                    <text x="205" y="52" text-anchor="middle" font-family="Arial Black" font-size="18" fill="#FFFFFF">A</text>
                    <rect x="250" y="20" width="90" height="55" fill="#F1F5F9" stroke="#94A3B8"/>
                    <rect x="70" y="75" width="90" height="55" fill="#787878" stroke="#475569"/>
                    <rect x="160" y="75" width="90" height="55" fill="#334155" stroke="#1E293B"/>
                    <rect x="250" y="75" width="90" height="55" fill="#787878" stroke="#475569"/>
                    <text x="295" y="108" text-anchor="middle" font-family="Arial Black" font-size="18" fill="#FFFFFF">B</text>
                    <ellipse cx="365" cy="115" rx="28" ry="11" fill="#047857"/>
                    <rect x="337" y="45" width="56" height="70" fill="#10B981"/>
                    <ellipse cx="365" cy="45" rx="28" ry="11" fill="#34D399"/>
                    ${solved ? `
                        <polygon points="205,65 295,65 295,90 205,90" fill="#787878" stroke="#F59E0B" stroke-width="2.5"/>
                        <rect x="160" y="128" width="140" height="22" rx="11" fill="#10B981"/>
                        <text x="230" y="143" text-anchor="middle" font-family="Arial" font-size="11" font-weight="800" fill="#FFFFFF">BUKTI: SAMA #787878!</text>
                    ` : ''}
                </svg>`
        },

        // === 3. Rebus Tebak Gambar Resmi (Ikon + Ganti Huruf Tanpa Bocoran!) ===
        {
            id: 9,
            category: 'Rebus Tebak Gambar Resmi',
            question: 'Gabungkan kedua gambar rebus ini (ikuti aturan ganti huruf di tiap ikon) menjadi frasa tempat nongkrong favorit!',
            answer: 'WARUNG KOPI',
            acceptedAnswers: ['WARUNG KOPI'],
            trap: 'SARUNG TOPI',
            openIndices: [7],
            clues: [
                'Ikon kiri adalah kain SARUNG (ganti huruf S jadi W) + ikon kanan TOPI (ganti T jadi K)!',
                'Tempat ngobrol santai sambil pesan es kopi atau gorengan!'
            ],
            reason: 'SARUNG (S→W) = WARUNG + TOPI (T→K) = KOPI → WARUNG KOPI! Format resmi game Tebak Gambar Indonesia!',
            renderSvg: () => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#F8FAFC"/>
                    <!-- Sarung Icon -->
                    <rect x="44" y="34" width="134" height="114" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                    <rect x="80" y="54" width="62" height="74" rx="4" fill="#0F766E"/>
                    <line x1="80" y1="74" x2="142" y2="74" stroke="#FDE047" stroke-width="4"/>
                    <line x1="80" y1="96" x2="142" y2="96" stroke="#FDE047" stroke-width="4"/>
                    <line x1="100" y1="54" x2="100" y2="128" stroke="#14B8A6" stroke-width="4"/>
                    <line x1="122" y1="54" x2="122" y2="128" stroke="#14B8A6" stroke-width="4"/>
                    <rect x="64" y="18" width="94" height="24" rx="12" fill="#EF4444"/>
                    <text x="111" y="34" text-anchor="middle" font-family="Arial Black" font-size="12" fill="#FFFFFF">S ➔ W</text>
                    <text x="230" y="100" text-anchor="middle" font-family="Arial Black" font-size="30" fill="#64748B">+</text>
                    <!-- Hat / Topi Icon -->
                    <rect x="282" y="34" width="134" height="114" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                    <path d="M316 108 C316 68, 376 68, 376 108 Z" fill="#2563EB"/>
                    <rect x="308" y="106" width="90" height="12" rx="6" fill="#1E40AF"/>
                    <rect x="302" y="18" width="94" height="24" rx="12" fill="#7C3AED"/>
                    <text x="349" y="34" text-anchor="middle" font-family="Arial Black" font-size="12" fill="#FFFFFF">T ➔ K</text>
                </svg>`
        },
        {
            id: 10,
            category: 'Rebus Tebak Gambar Resmi',
            question: 'Gabungkan dua ikon ini (ikuti aturan ganti hurufnya) menjadi satu ungkapan dagang laris manis!',
            answer: 'LAKU KERAS',
            acceptedAnswers: ['LAKU KERAS'],
            trap: 'PAKU BATU',
            openIndices: [5],
            clues: [
                'Ikon kiri adalah PAKU (ganti huruf P jadi L) + sifat fisik batu di sebelah kanan!',
                'Kondisi toko online yang pesanannya membludak habis terjual!'
            ],
            reason: 'PAKU (P→L) = LAKU + BATU (sifatnya KERAS) = LAKU KERAS!',
            renderSvg: () => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#F8FAFC"/>
                    <!-- Nail / Paku -->
                    <rect x="44" y="34" width="134" height="114" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                    <rect x="92" y="54" width="38" height="10" rx="3" fill="#475569"/>
                    <polygon points="107,64 115,64 113,130 111,138 109,130" fill="#64748B"/>
                    <rect x="64" y="18" width="94" height="24" rx="12" fill="#EF4444"/>
                    <text x="111" y="34" text-anchor="middle" font-family="Arial Black" font-size="12" fill="#FFFFFF">P ➔ L</text>
                    <text x="230" y="100" text-anchor="middle" font-family="Arial Black" font-size="30" fill="#64748B">+</text>
                    <!-- Hard Rock Icon -->
                    <rect x="282" y="34" width="134" height="114" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                    <path d="M302 126 L320 70 L356 58 L394 82 L398 126 Z" fill="#64748B" stroke="#334155" stroke-width="3"/>
                    <text x="349" y="140" text-anchor="middle" font-family="Arial" font-size="10.5" font-weight="800" fill="#64748B">(Sifat benda ini?)</text>
                </svg>`
        },
        {
            id: 11,
            category: 'Rebus Tebak Gambar Resmi',
            question: 'Pecahkan gabungan dua ikon dan aturan huruf ini menjadi ungkapan perasaan sedih!',
            answer: 'MAKAN HATI',
            acceptedAnswers: ['MAKAN HATI'],
            trap: 'IKAN CINTA',
            openIndices: [6],
            clues: [
                'Ikon kiri adalah IKAN (ganti huruf I dengan MA) + simbol HATI merah!',
                'Perasaan saat tersakiti atau kesal terus dipendam di dalam!'
            ],
            reason: 'IKAN (I→MA) = MAKAN + simbol HATI = MAKAN HATI!',
            renderSvg: () => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#FFF1F2"/>
                    <!-- Fish Icon -->
                    <rect x="44" y="34" width="134" height="114" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                    <ellipse cx="105" cy="92" rx="34" ry="20" fill="#0284C7"/>
                    <polygon points="135,92 158,74 158,110" fill="#0369A1"/>
                    <circle cx="86" cy="87" r="4" fill="#FFFFFF"/>
                    <circle cx="85" cy="87" r="2" fill="#0F172A"/>
                    <rect x="64" y="18" width="94" height="24" rx="12" fill="#EF4444"/>
                    <text x="111" y="34" text-anchor="middle" font-family="Arial Black" font-size="12" fill="#FFFFFF">I ➔ MA</text>
                    <text x="230" y="100" text-anchor="middle" font-family="Arial Black" font-size="30" fill="#64748B">+</text>
                    <!-- Heart Icon -->
                    <rect x="282" y="34" width="134" height="114" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                    <path d="M349 124 C349 124 308 98 308 74 C308 60 320 52 332 52 C340 52 346 57 349 63 C352 57 358 52 366 52 C378 52 390 60 390 74 C390 98 349 124 349 124 Z" fill="#EF4444"/>
                </svg>`
        },
        {
            id: 12,
            category: 'Rebus Tebak Gambar Resmi',
            question: 'Gabungkan ikon di kiri dan gambar bulat beraroma wangi + rasa di kanan menjadi nama jajanan masa kecil!',
            answer: 'HARUM MANIS',
            acceptedAnswers: ['HARUM MANIS', 'ARUM MANIS'],
            trap: 'JARUM GULA',
            openIndices: [6],
            clues: [
                'Ikon kiri adalah JARUM (ganti J jadi H) + sifat rasa gula di sebelah kanan!',
                'Jajanan gulali kapas warna pink yang dijual abang keliling!'
            ],
            reason: 'JARUM (J→H) = HARUM + rasa gula (MANIS) = HARUM MANIS!',
            renderSvg: () => `
                <svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg">
                    <rect width="460" height="175" rx="12" fill="#FDF2F8"/>
                    <!-- Needle Icon -->
                    <rect x="44" y="34" width="134" height="114" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                    <path d="M84 128 L138 56" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
                    <ellipse cx="136" cy="59" rx="5" ry="9" transform="rotate(38 136 59)" fill="#FFFFFF" stroke="#475569" stroke-width="3"/>
                    <rect x="64" y="18" width="94" height="24" rx="12" fill="#EC4899"/>
                    <text x="111" y="34" text-anchor="middle" font-family="Arial Black" font-size="12" fill="#FFFFFF">J ➔ H</text>
                    <text x="230" y="100" text-anchor="middle" font-family="Arial Black" font-size="30" fill="#64748B">+</text>
                    <!-- Sugar Cube / Candy -->
                    <rect x="282" y="34" width="134" height="114" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                    <rect x="318" y="60" width="60" height="48" rx="10" fill="#FDE68A" stroke="#D97706" stroke-width="3"/>
                    <text x="348" y="89" text-anchor="middle" font-family="Arial Black" font-size="13" fill="#92400E">GULA</text>
                    <text x="349" y="132" text-anchor="middle" font-family="Arial" font-size="10.5" font-weight="800" fill="#64748B">(Rasanya...?)</text>
                </svg>`
        },

        // === 4. Foto Asli Hewan Menipu & Kamuflase ===
        {
            id: 13,
            category: 'Foto Hewan Menipu',
            question: 'Perhatikan foto halaman belakang rumah ini! Hewan apakah yang sebenarnya sedang menoleh di gambar?',
            answer: 'BURUNG',
            acceptedAnswers: ['BURUNG', 'BURUNG GAGAK', 'GAGAK'],
            trap: 'KUCING',
            openIndices: [5],
            clues: [
                'Coba perhatikan dua ujung runcing hitam yang menghadap ke atas!',
                'Itu bukan telinga berbulu — melainkan paruh yang sedang menganga!'
            ],
            reason: 'MIND BLOWING! Ternyata bukan KUCING HITAM, melainkan BURUNG GAGAK yang menengok ke samping dengan paruh terbuka ke atas mirip telinga kucing!',
            renderSvg: (solved) => renderPhotoStage({
                src: 'hewan-crow-cat.jpg',
                alt: 'Foto sudut pandang hewan menipu',
                solved,
                preStyle: 'object-position: 62% 38%; transform: scale(1.36); transform-origin: 62% 40%; filter: contrast(1.08) brightness(0.92);',
                postStyle: 'object-position: 50% 50%; transform: scale(1); filter: contrast(1.04) brightness(1.12);',
                spotStyle: 'width: 78px; height: 78px; top: 24px; left: 53%;',
                caption: 'BUKAN TELINGA KUCING — INI PARUH BURUNG GAGAK!'
            })
        },
        {
            id: 14,
            category: 'Foto Hewan Menipu',
            question: 'Foto close-up di atas dahan hijau! Hewan apakah yang sedang berada tepat di depan kamera ini?',
            answer: 'ULAT',
            acceptedAnswers: ['ULAT', 'ULAT BULU', 'LARVA'],
            trap: 'ULAR',
            openIndices: [1],
            clues: [
                'Saat kamera dijauhkan nanti, terlihat kaki-kaki mungil di bagian bawah!',
                'Mata hitam kuningnya cuma corak kulit palsu untuk menakuti predator!'
            ],
            reason: 'MIND BLOWING! Saat di-zoom memang 100% mirip kepala ULAR VIPER HIJAU, padahal aslinya adalah ULAT yang punya corak mata palsu di punggungnya!',
            renderSvg: (solved) => renderPhotoStage({
                src: 'hewan-caterpillar-snake.jpg',
                alt: 'Foto close-up hewan di dahan',
                solved,
                preStyle: 'transform: scale(1.88); transform-origin: 41% 45%;',
                postStyle: 'transform: scale(1); transform-origin: 50% 50%;',
                spotStyle: 'width: 84px; height: 64px; top: 108px; left: 37%;',
                caption: 'ZOOM OUT: ADA KAKI MUNGILNYA — INI ULAT!'
            })
        },
        {
            id: 15,
            category: 'Foto Hewan Menipu',
            question: 'Wajah hewan apakah yang sedang menatap tajam ke arah kamera di foto ini?',
            answer: 'KUPU KUPU',
            acceptedAnswers: ['KUPU KUPU', 'KUPU-KUPU', 'NGENGAT'],
            trap: 'BURUNG HANTU',
            openIndices: [8],
            clues: [
                'Dua mata itu bukan bola mata asli — cuma motif lingkaran simetris!',
                'Ketika kamera di-zoom out dan diputar, kelihatan sepasang sayap lebar!'
            ],
            reason: 'MIND BLOWING! Yang menatap kamera ternyata bukan BURUNG HANTU, melainkan sayap KUPU KUPU (Owl Butterfly) yang terbalik & di-zoom!',
            renderSvg: (solved) => renderPhotoStage({
                src: 'hewan-butterfly-owl.jpg',
                alt: 'Foto mata menatap kamera',
                solved,
                preStyle: 'transform: scale(1.82) rotate(180deg); transform-origin: 50% 62%; filter: brightness(0.92);',
                postStyle: 'transform: scale(1) rotate(0deg); transform-origin: 50% 50%; filter: brightness(1.05);',
                caption: 'ZOOM OUT: TERNYATA SAYAP KUPU-KUPU!'
            })
        },
        {
            id: 16,
            category: 'Foto Hewan Menipu',
            question: 'Foto tebing batu gunung salju! Ada 1 hewan liar yang bersembunyi dan ikut menatap ke kamera — hewan apakah itu?',
            answer: 'MACAN TUTUL',
            acceptedAnswers: ['MACAN TUTUL', 'MACAN TUTUL SALJU', 'MACAN', 'LEOPARD'],
            trap: 'KAMBING GUNUNG',
            openIndices: [10],
            clues: [
                'Fokuslah ke area bebatuan tengah agak ke kanan atas!',
                'Motif totol abu-abunya menyatu sempurna dengan batu gunung!'
            ],
            reason: 'MIND BLOWING! Di tengah tebing batu itu ternyata ada MACAN TUTUL SALJU yang berkamuflase 99% sambil menatap lurus ke kamera!',
            renderSvg: (solved) => renderPhotoStage({
                src: 'hewan-leopard-rock.jpg',
                alt: 'Tebing batu gunung',
                solved,
                preStyle: 'object-position: 50% 50%; transform: scale(1);',
                postStyle: 'transform: scale(2.3); transform-origin: 62% 38%;',
                caption: 'ZOOM KE TENGAH-KANAN: MACAN TUTUL SALJU!'
            })
        },
        {
            id: 17,
            category: 'Foto Hewan Menipu',
            question: 'Foto batang pohon berkulit kasar di hutan. Tepat di tengah foto tersembunyi satu hewan — hewan apakah itu?',
            answer: 'BURUNG HANTU',
            acceptedAnswers: ['BURUNG HANTU', 'SCREECH OWL'],
            trap: 'TOKEK POHON',
            openIndices: [11],
            clues: [
                'Lihat tepat di rongga tengah vertikal: ada dua mata sedang menyipit!',
                'Bulunya abu-abu berpola persis guratan kulit batang kayu!'
            ],
            reason: 'MIND BLOWING! Seekor BURUNG HANTU sedang tidur menyipitkan mata tepat di celah batang pohon, nyaris tak terlihat dari kulit kayu!',
            renderSvg: (solved) => renderPhotoStage({
                src: 'hewan-owl-bark.jpg',
                alt: 'Kulit batang pohon',
                solved,
                preStyle: 'object-position: 50% 45%; transform: scale(1);',
                postStyle: 'transform: scale(1.45); transform-origin: 50% 44%;',
                spotStyle: 'width: 112px; height: 145px; top: 26px; left: 38%; border-radius: 28px;',
                caption: 'TEPAT DI CELAH KAYU: BURUNG HANTU!'
            })
        },
        {
            id: 18,
            category: 'Foto Hewan Menipu',
            question: 'Perhatikan kelopak bunga anggrek pink di foto ini! Makhluk hidup apakah yang sebenarnya hinggap tepat di tengahnya?',
            answer: 'BELALANG',
            acceptedAnswers: ['BELALANG', 'BELALANG SEMBAH', 'BELALANG ANGGREK', 'MANTIS'],
            trap: 'BUNGA ANGGREK',
            openIndices: [7],
            clues: [
                'Keempat kakinya berbentuk pipih warna pink persis kelopak bunga!',
                'Dia dikenal sebagai serangga pemburu (belalang sembah)!'
            ],
            reason: 'MIND BLOWING! Di atas bunga itu hinggap BELALANG SEMBAH ANGGREK berwarna putih-pink yang kakinya menyamar sempurna menjadi kelopak bunga!',
            renderSvg: (solved) => renderPhotoStage({
                src: 'hewan-mantis-orchid.jpg',
                alt: 'Kelopak bunga anggrek pink',
                solved,
                preStyle: 'object-position: 50% 48%; transform: scale(1);',
                postStyle: 'transform: scale(1.55); transform-origin: 50% 44%;',
                spotStyle: 'width: 110px; height: 96px; top: 44px; left: 37%;',
                caption: 'DI TENGAH BUNGA: BELALANG ANGGREK!'
            })
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
        showTiles: false,
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
        btnToggleTiles: document.getElementById('tg-toggle-tiles'),
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
        const tilesVisible = state.isSolved || state.showTiles;

        el.qNum.textContent = `Gambar #${state.currentIndex + 1} / ${TEBAK_GAMBAR_QUESTIONS.length}`;
        el.qText.textContent = q.question;
        el.canvas.innerHTML = q.renderSvg(state.isSolved);

        if (tilesVisible) {
            el.lengthChip.textContent = words.length > 1
                ? `Panjang: ${letterCount} Huruf (${words.length} Kata)`
                : `Panjang: ${letterCount} Huruf`;
            el.lengthChip.style.cursor = 'pointer';
            el.lengthChip.title = 'Klik untuk sembunyikan kotak huruf lagi';
        } else {
            el.lengthChip.textContent = '🔒 Jumlah & Kotak Huruf Disembunyikan';
            el.lengthChip.style.cursor = 'pointer';
            el.lengthChip.title = 'Klik untuk memunculkan kotak huruf sebagai bantuan';
        }

        if (el.btnToggleTiles) {
            el.btnToggleTiles.textContent = tilesVisible ? '🙈 Sembunyikan Kotak Huruf' : '🔡 Tampilkan Kotak Huruf';
        }

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

        el.tiles.hidden = !tilesVisible;
        el.tiles.textContent = '';
        if (tilesVisible) {
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
        const q = TEBAK_GAMBAR_QUESTIONS[idx];
        state.openedLetters = new Set(Array.isArray(q?.openIndices) ? q.openIndices : []);
        state.showTiles = false;
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

        const guess = el.input.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (!guess) return;

        const validList = Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.length
            ? q.acceptedAnswers
            : [q.answer];
        const isMatch = validList.some((ans) => ans.toUpperCase().replace(/[^A-Z0-9]/g, '') === guess);

        if (isMatch) {
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
        const toggleTilesFn = () => {
            state.showTiles = !state.showTiles;
            renderQuestion();
        };
        el.btnToggleTiles?.addEventListener('click', toggleTilesFn);
        el.lengthChip?.addEventListener('click', toggleTilesFn);

        el.btnHintLetter.addEventListener('click', () => {
            const q = TEBAK_GAMBAR_QUESTIONS[state.currentIndex];
            if (!q || state.isSolved) return;
            state.showTiles = true;
            const closed = [];
            for (let i = 0; i < q.answer.length; i++) {
                if (q.answer[i] !== ' ' && !state.openedLetters.has(i)) closed.push(i);
            }
            if (closed.length > 0) {
                const pick = closed[Math.floor(Math.random() * closed.length)];
                state.openedLetters.add(pick);
            }
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
