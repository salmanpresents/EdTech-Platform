document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const togglePassword = document.getElementById('toggle-password');
    const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    togglePassword.addEventListener('click', function() {
        togglePasswordVisibility(this, passwordInput);
    });
    
    toggleConfirmPassword.addEventListener('click', function() {
        togglePasswordVisibility(this, confirmPasswordInput);
    });
    
    function togglePasswordVisibility(icon, input) {
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }
    
    // Form validation
    const signupForm = document.getElementById('signup-form');
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const terms = document.getElementById('terms').checked;
        
        // Simple validation
        if (fullname === '') {
            showError('Please enter your full name');
            return;
        }
        
        if (email === '') {
            showError('Please enter your email address');
            return;
        }
        
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        if (password === '') {
            showError('Please create a password');
            return;
        }
        
        if (password.length < 8) {
            showError('Password must be at least 8 characters long');
            return;
        }
        
        if (confirmPassword === '') {
            showError('Please confirm your password');
            return;
        }
        
        if (password !== confirmPassword) {
            showError('Passwords do not match');
            return;
        }
        
        if (!terms) {
            showError('Please agree to the Terms of Service and Privacy Policy');
            return;
        }
        
        // If validation passes, submit the form (in a real application, this would send data to a server)
        showSuccess('Account created successfully! Redirecting to your dashboard...');
        
        // Simulate redirect after successful signup
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // This would be the dashboard page in a real application
        }, 2000);
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ff3333';
        errorDiv.style.marginBottom = '20px';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.textAlign = 'center';
        
        // Remove any existing error messages
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Insert the error message at the top of the form
        signupForm.insertBefore(errorDiv, signupForm.firstChild);
        
        // Remove the error message after 3 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
    
    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.color = '#4CAF50';
        successDiv.style.marginBottom = '20px';
        successDiv.style.fontSize = '14px';
        successDiv.style.textAlign = 'center';
        
        // Remove any existing messages
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        const existingSuccess = document.querySelector('.success-message');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        // Insert the success message at the top of the form
        signupForm.insertBefore(successDiv, signupForm.firstChild);
    }
    
    // Input focus effects
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 0 0 2px rgba(94, 77, 205, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = 'none';
        });
    });
    
    // Social login buttons (these would integrate with actual social APIs in a real application)
    const googleBtn = document.querySelector('.social-btn.google');
    const facebookBtn = document.querySelector('.social-btn.facebook');
    
    googleBtn.addEventListener('click', function() {
        console.log('Google sign-up initiated');
        // In a real application, this would trigger the Google OAuth flow
    });
    
    facebookBtn.addEventListener('click', function() {
        console.log('Facebook sign-up initiated');
        // In a real application, this would trigger the Facebook OAuth flow
    });
});