# Family 100 — `kode_gas` & `kode_git`

Folder ini memisahkan backend **Google Apps Script (`kode_gas/`)** dan frontend **GitHub Pages (`kode_git/`)**.

## 1. Setup Backend Google Apps Script (`kode_gas/`)
1. Buat **Google Spreadsheet** baru.
2. Buka menu **Extensions → Apps Script**.
3. Salin isi `kode_gas/Code.gs` ke editor Apps Script (dan `kode_gas/appsscript.json` jika perlu).
4. Jalankan fungsi `setupDatabase` satu kali untuk membuat sheet `Pertanyaan` beserta 11 soal contoh.
5. Klik **Deploy → New deployment → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Salin **Web App URL** (`https://script.google.com/macros/s/.../exec`).

## 2. Frontend GitHub Pages (`kode_git/`)
1. Workflow `.github/workflows/pages.yml` otomatis men-deploy folder `kode_git/` ke **GitHub Pages** setiap ada `push` ke branch `main`.
2. Di GitHub, pastikan **Settings → Pages → Source** diset ke **GitHub Actions**.
3. Aplikasi dapat diakses di `https://appsmaheer-cloud.github.io/Family100/` (langsung berjalan dengan 11 soal contoh lokal).
4. Klik tombol **URL GAS** di kanan atas lalu tempel **Web App URL** agar tersinkronisasi dengan Google Sheets.
