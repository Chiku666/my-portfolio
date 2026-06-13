const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-toggle i');

// পেজ লোড হওয়ার সময় আগের সেভ করা থিম চেক করবে
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun'); // চাঁদের বদলে সূর্য দেখাবে
}

// আইকনে ক্লিক করলে থিম চেঞ্জ হবে
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    let theme = 'dark';
    if (document.body.classList.contains('light-theme')) {
        theme = 'light';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    
    // ইউজারের পছন্দ ব্রাউজার মেমোরিতে সেভ রাখবে
    localStorage.setItem('theme', theme);
});