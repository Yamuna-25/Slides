// scripts.js
const thumbnails = document.querySelectorAll('.thumbnail-img');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        const imgSrc = e.target.src;
        lightboxImage.src = imgSrc;
        lightboxModal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    lightboxModal.style.display = 'none';
});

lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        lightboxModal.style.display = 'none';
    }
});
