document.addEventListener('DOMContentLoaded', () => {
    // Animation sequence timing
    const TIMINGS = {
        BOOK_APPEAR: 500,
        COVER_TURN: 1500,
        PAGE_TURN_INTERVAL: 1500,
        BOOK_FINAL_STATE: 9000,
        GLOBE_APPEAR: 11000,
        PINS_DROP: 13000,
        CONNECTION_LINE: 14000,
        TILES_APPEAR: 15000,
        FORM_APPEAR: 16500
    };

    // Elements
    const book = document.getElementById('book');
    const bookContainer = document.getElementById('book-container');
    const bookCover = document.querySelector('.book-cover');
    const pages = document.querySelectorAll('.page');
    const globeContainer = document.getElementById('globe-container');
    const globe = document.getElementById('globe');
    const pins = document.querySelectorAll('.pin');
    const connectionLine = document.querySelector('.connection-line');
    const planes = document.querySelectorAll('.plane');
    const tilesContainer = document.getElementById('tiles-container');
    const tiles = document.querySelectorAll('.tile');
    const signupContainer = document.getElementById('signup-container');

    // Animation sequence
    setTimeout(() => {
        // Turn the cover first
        setTimeout(() => {
            bookCover.classList.add('turning-page');
            
            // Add book-open class after cover is turned to show the back of the cover
            setTimeout(() => {
                book.classList.add('book-open');
                
                // After cover is turned, start turning pages one by one
                setTimeout(() => {
                    pages.forEach((page, index) => {
                        setTimeout(() => {
                            // Reset any previous animations
                            page.classList.remove('page-flip');
                            
                            // Reset destination images animation
                            const images = page.querySelectorAll('.destination-image');
                            images.forEach(img => {
                                img.style.animation = 'none';
                                setTimeout(() => {
                                    img.style.animation = '';
                                }, 50);
                            });
                            
                            // Add turning animation
                            page.classList.add('turning-page');
                            
                            // When the last page is turned, show the final state
                            if (index === pages.length - 1) {
                                setTimeout(() => {
                                    book.classList.add('book-final');
                                }, TIMINGS.PAGE_TURN_INTERVAL);
                            }
                        }, index * TIMINGS.PAGE_TURN_INTERVAL);
                    });
                }, TIMINGS.PAGE_TURN_INTERVAL);
            }, TIMINGS.PAGE_TURN_INTERVAL);
        }, TIMINGS.COVER_TURN);

        // Show globe
        setTimeout(() => {
            bookContainer.style.opacity = '0';
            bookContainer.style.transform = 'translateY(30px)';
            bookContainer.style.transition = 'opacity 0.5s, transform 0.5s';
            
            setTimeout(() => {
                bookContainer.style.display = 'none';
                globeContainer.style.display = 'block';
                globeContainer.classList.add('globe-appear');
                
                // Spin the globe
                setTimeout(() => {
                    globe.classList.add('globe-spin');
                    
                    // Animate planes
                    planes.forEach(plane => {
                        plane.classList.add('plane-fly');
                        // Randomize plane animation
                        plane.style.animationDelay = `${Math.random() * 2}s`;
                        plane.style.animationDuration = `${8 + Math.random() * 4}s`;
                    });
                }, 500);
            }, 500);
        }, TIMINGS.GLOBE_APPEAR);

        // Drop pins
        setTimeout(() => {
            pins[0].style.opacity = '1';
            pins[0].classList.add('pin-drop');
            
            setTimeout(() => {
                pins[1].style.opacity = '1';
                pins[1].classList.add('pin-drop');
            }, 500);
        }, TIMINGS.PINS_DROP);

        // Draw connection line
        setTimeout(() => {
            // Set the actual path for the connection line
            connectionLine.setAttribute('d', 'M110,130 C140,100 170,150 210,190');
            connectionLine.classList.add('line-draw');
        }, TIMINGS.CONNECTION_LINE);

        // Show tiles
        setTimeout(() => {
            tilesContainer.classList.add('tiles-appear');
            
            // Animate tiles one by one
            tiles.forEach((tile, index) => {
                setTimeout(() => {
                    tile.classList.add('tile-appear');
                }, index * 200);
            });
        }, TIMINGS.TILES_APPEAR);

        // Show signup form
        setTimeout(() => {
            signupContainer.classList.add('form-appear');
        }, TIMINGS.FORM_APPEAR);

    }, TIMINGS.BOOK_APPEAR);

    // Handle form submission
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(signupForm);
        const name = formData.get('name');
        const email = formData.get('email');
        
        // Here you would typically send this data to your backend
        console.log('Form submitted:', { name, email });
        
        // Show success message
        const button = signupForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Thanks for signing up!';
        button.style.backgroundColor = '#27ae60';
        
        // Reset form
        signupForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 3000);
    });

    // Optimize performance by using requestAnimationFrame for animations
    function optimizeAnimation() {
        // Use transform instead of top/left for animations
        const elements = document.querySelectorAll('.plane, .pin');
        elements.forEach(el => {
            el.style.willChange = 'transform';
        });
    }

    // Call optimization function
    optimizeAnimation();

    // Preload any additional assets
    function preloadAssets() {
        // This function would preload any additional images or assets
        // For this animation, we're using SVG so preloading isn't necessary
    }

    // Call preload function
    preloadAssets();
});
