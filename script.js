(function() {
    const message = "Please view our story with positivity and do not attack us. Thank you! ❤️";
    const style = "color: #13c8ec; font-size: 20px; font-weight: bold; font-family: 'Plus Jakarta Sans', sans-serif; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); padding: 10px;";

    console.info("%c" + message, style);

    document.addEventListener('contextmenu', e => e.preventDefault());

    document.onkeydown = function(e) {
        if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
            (e.ctrlKey && e.keyCode === 85) // Ctrl+U
        ) {
            return false;
        }
    };

    const noop = () => {};
    const methods = ['log', 'debug', 'warn', 'error', 'table', 'clear'];
    methods.forEach(method => {
        console[method] = noop;
    });

    setInterval(function() {
        (function() {
            return false;
        }['constructor']('debugger')['call']());
    }, 50);
})();


function changeLanguage(lang) {
    const label = document.getElementById('lang-label');
    if (label) label.innerText = lang.toUpperCase();

    const icon = document.getElementById('lang-icon');
    if (icon) icon.innerText = (lang === 'vi') ? '🇻🇳' : '🇺🇸';

    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            if (el.tagName === 'TITLE') {
                document.title = translation;
            } else {
                el.innerText = translation;
            }
        }
    });

    localStorage.setItem('preferredLang', lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLanguage(savedLang);

    // Kích hoạt animation khi cuộn
    if (typeof IntersectionObserver !== "undefined") {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('#quote-section, #image-grid-section');
        sections.forEach(el => observer.observe(el));
    }
});
let isMusicPlaying = false;
const audio = document.getElementById('local-audio');
const musicBtn = document.getElementById('music-btn');
const iconBox = document.getElementById('music-icon-container');

function toggleLocalMusic() {
    if (isMusicPlaying) {
        audio.pause();
        musicBtn.classList.remove('bg-primary', 'text-white');
        musicBtn.classList.add('bg-white', 'text-primary');
        iconBox.innerHTML = '<span class="material-symbols-outlined text-2xl">music_note</span>';
        iconBox.classList.remove('animate-spin');
    } else {
        audio.play().catch(err => {
            console.info("Trình duyệt chặn tự động phát. Hãy tương tác với trang trước! ❤️");
        });
        musicBtn.classList.remove('bg-white', 'text-primary');
        musicBtn.classList.add('bg-primary', 'text-white');
        iconBox.innerHTML = '<span class="material-symbols-outlined text-2xl">album</span>';
        iconBox.classList.add('animate-spin');
        iconBox.style.animationDuration = '3s';
    }
    isMusicPlaying = !isMusicPlaying;
}

document.addEventListener("DOMContentLoaded", () => {
    if(audio) audio.volume = 0.4;
});