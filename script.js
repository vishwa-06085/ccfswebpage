document.addEventListener('DOMContentLoaded', function() {
    // Get all icon elements
    const icons = document.querySelectorAll('.header-icons a');
    
    // Add click event listeners to each icon
    icons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the popup associated with this icon
            const popup = this.querySelector('.popup');
            
            // Close all other popups
            document.querySelectorAll('.popup').forEach(p => {
                if (p !== popup) {
                    p.style.display = 'none';
                }
            });
            
            // Toggle the current popup
            if (popup.style.display === 'block') {
                popup.style.display = 'none';
            } else {
                popup.style.display = 'block';
            }
        });
    });
    
    // Close popups when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.header-icons')) {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.style.display = 'none';
            });
        }
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('p').textContent;
            
            alert(`Added to cart: ${productName} - ${productPrice}`);
            
            // Here you would typically add the product to the cart
            // and update the cart popup content
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});