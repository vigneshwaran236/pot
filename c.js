// script.js

// Scroll to top button
const toTopBtn = document.createElement('button');
toTopBtn.innerText = 'Back to Top';
toTopBtn.style.position = 'fixed';
toTopBtn.style.bottom = '20px';
toTopBtn.style.right = '20px';
toTopBtn.style.padding = '10px';
toTopBtn.style.display = 'none';
document.body.appendChild(toTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
});

toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});