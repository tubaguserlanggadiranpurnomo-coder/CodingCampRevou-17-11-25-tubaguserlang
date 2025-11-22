// =======================================================
// Fungsionalitas 1: Sambutan Dinamis di Halaman Home
// =======================================================
function setGreetingName() {
    const greetingElement = document.getElementById('greeting');
    // Cek apakah elemen sapaan ada di halaman (hanya ada di index.html)
    if (greetingElement) {
        // Ganti [Nama Anda] di sini. Contoh: "Budi"
        const companyName = "Tubagus"; 
        
        // Mengubah teks sambutan
        greetingElement.textContent = `Hi, ${companyName}`;
    }
}

// =======================================================
// Fungsionalitas 2: Validasi dan Tampilkan Form Submission
// =======================================================
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    const outputBox = document.getElementById('formOutput');

    // Cek apakah elemen form ada di halaman (hanya ada di index.html)
    if (form && outputBox) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form melakukan reload halaman

            // Ambil nilai dari input form
            const nameInput = document.getElementById('name').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const messageInput = document.getElementById('message').value.trim();

            // --- Validasi Sederhana ---
            if (nameInput === "" || emailInput === "" || messageInput === "") {
                alert("Semua kolom harus diisi!");
                return; // Hentikan proses jika ada yang kosong
            }

            // Validasi format email sederhana
            if (!emailInput.includes('@') || !emailInput.includes('.')) {
                alert("Format email tidak valid!");
                return; 
            }
            // --- Akhir Validasi Sederhana ---

            // Tampilkan nilai yang disubmit
            document.getElementById('outputName').innerHTML = `**Nama:** ${nameInput}`;
            document.getElementById('outputEmail').innerHTML = `**Email:** ${emailInput}`;
            document.getElementById('outputMessage').innerHTML = `**Pesan:** ${messageInput}`;

            // Tampilkan kotak output
            outputBox.style.display = 'block';

            // Opsional: Reset form setelah submission
            form.reset();
        });
    }
}

// Panggil semua fungsi saat DOM sudah dimuat
document.addEventListener('DOMContentLoaded', () => {
    setGreetingName();
    handleFormSubmission();
});