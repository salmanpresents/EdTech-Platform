// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Chat Widget
    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    
    // Modal Elements
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const showLoginModal = document.getElementById('showLoginModal');
    const showRegisterModal = document.getElementById('showRegisterModal');
    const closeBtns = document.querySelectorAll('.close-modal');
    
    // Form Elements
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const authButtons = document.querySelector('.auth-buttons');
    
    // Toggle Chat Widget
    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatWidget.classList.toggle('open');
        });
    }
    
    // Send Message
    if (sendMessage && messageInput) {
        sendMessage.addEventListener('click', () => {
            sendChatMessage();
        });
        
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    function sendChatMessage() {
        const message = messageInput.value.trim();
        if (message) {
            // Add user message
            addChatMessage(message, 'sent');
            
            // Clear input
            messageInput.value = '';
            
            // Simulate response (in real app, this would come from server)
            setTimeout(() => {
                const responses = [
                    "Thanks for your message! A member of our team will respond shortly.",
                    "Hello there! How can we help you with your education journey?",
                    "Thank you for contacting G-Bee support. We'll assist you as soon as possible.",
                    "Great question! Let me check that information for you."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addChatMessage(randomResponse, 'received');
            }, 1000);
        }
    }
    
    function addChatMessage(message, type) {
        const messageEl = document.createElement('div');
        messageEl.classList.add('message', type);
        messageEl.textContent = message;
        chatMessages.appendChild(messageEl);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Modal Functionality
    if (showLoginModal) {
        showLoginModal.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.classList.remove('active');
            loginModal.classList.add('active');
        });
    }
    
    if (showRegisterModal) {
        showRegisterModal.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.remove('active');
            registerModal.classList.add('active');
        });
    }
    
    // Close Modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.classList.remove('active');
            registerModal.classList.remove('active');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
        if (e.target === registerModal) {
            registerModal.classList.remove('active');
        }
    });
    
    // Handle form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // In a real application, you would send this data to a server
            console.log('Login attempt:', { email, password });
            
            // Simulate successful login
            alert('Login successful! Redirecting to dashboard...');
            loginModal.classList.remove('active');
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Simple validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // In a real application, you would send this data to a server
            console.log('Registration attempt:', { name, email, password });
            
            // Simulate successful registration
            alert('Registration successful! You can now log in.');
            registerModal.classList.remove('active');
            loginModal.classList.add('active');
        });
    }
    
    // Mobile Menu Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
            authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Back to top functionality
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Open auth modals from header buttons
    const signInBtn = document.querySelector('.auth-buttons .btn-outline');
    const registerBtn = document.querySelector('.auth-buttons .btn-primary');
    
    if (signInBtn) {
        signInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('active');
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.classList.add('active');
        });
    }
    
    // Handle newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.querySelector('input').value = '';
            }
        });
    }
});