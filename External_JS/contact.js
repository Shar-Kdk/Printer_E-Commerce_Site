// contact.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.input-container');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phoneNumber"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const submitBtn = form.querySelector('.submit-btn');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhoneNumber(phoneNumber) {
        const re = /^(98|97)\d{8}$/;
        return re.test(String(phoneNumber));
    }

    function validateForm() {
        if (
            nameInput.value.trim() === '' ||
            emailInput.value.trim() === '' ||
            phoneInput.value.trim() === '' ||
            messageInput.value.trim() === ''
        ) {
            alert('Please enter all the details');
            return false;
        }

        if (!validateEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address');
            return false;
        }

        if (!validatePhoneNumber(phoneInput.value.trim())) {
            alert('Please enter a valid phone number. It should be 10 digits and start with 98 or 97.');
            return false;
        }

        return true;
    }

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Form is valid, you can submit it or handle it as needed
            alert('Form submitted successfully');
            form.submit();
        }
    });
});
