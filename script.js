// Scroll Animations
function initScrollAnimations() {
    gsap.from('.hero h2, .hero h3', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 0.5
    });

    gsap.from('.cta-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1
    });

    gsap.from('.about-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top center'
        }
    });

    gsap.from('.products-grid', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.collection',
            start: 'top center'
        }
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
window.addEventListener('load', () => {
    initScrollAnimations();
});

// Mock product data
const products = [
    { name: 'Classic White Tee', price: '₹999', image: 'product1.jpg' },
    { name: 'Kerala Motif Tee', price: '₹1299', image: 'product2.jpg' },
    { name: 'Minimal Black Tee', price: '₹999', image: 'product3.jpg' }
];

// Load products
function loadProducts() {
    const productsGrid = document.querySelector('.products-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="images/${product.image}" alt="${product.name}">
            </div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
});
