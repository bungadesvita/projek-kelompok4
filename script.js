document.addEventListener('DOMContentLoaded', function() {
    
    // Pilih semua link di navbar yang mengarah ke ID
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // 1. Hentikan perilaku default (lompat langsung)
            e.preventDefault();
            
            // 2. Dapatkan ID tujuan (misal: "#tentang")
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 3. Hitung tinggi navbar
                const navHeight = document.querySelector('nav').offsetHeight;
                
                // 4. Hitung posisi target dikurangi tinggi navbar
                // Ini agar judul section pas di bawah navbar, tidak tertutup
                const targetPosition = targetElement.offsetTop - navHeight;

                // 5. Lakukan scroll dengan mulus ke posisi tersebut
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
