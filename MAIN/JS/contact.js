window.onload = function () {
    document.getElementById('name').value    = '';
    document.getElementById('email').value   = '';
    document.getElementById('comment').value = '';
};

function handleSubmit(btn) {
    const nameField    = document.getElementById('name');
    const emailField   = document.getElementById('email');
    const commentField = document.getElementById('comment');

    const nameError    = document.getElementById('name-error');
    const emailError   = document.getElementById('email-error');
    const commentError = document.getElementById('comment-error');

    let valid = true;

    // ── Name: must not be empty ──
    if (!nameField.value.trim()) {
        nameField.classList.add('error');
        nameError.classList.add('visible');
        nameError.textContent = 'Please enter your full name.';
        valid = false;
    } else {
        nameField.classList.remove('error');
        nameError.classList.remove('visible');
    }

    // ── Email: must not be empty, and must contain '@' ──
    const emailVal = emailField.value.trim();
    if (!emailVal) {
        emailField.classList.add('error');
        emailError.classList.add('visible');
        emailError.textContent = 'Please enter your email address.';
        valid = false;
    } else if (!emailVal.includes('@')) {
        emailField.classList.add('error');
        emailError.classList.add('visible');
        emailError.textContent = 'Email must contain \'@\'.';
        valid = false;
    } else {
        emailField.classList.remove('error');
        emailError.classList.remove('visible');
    }

    // ── Comment: must not be empty ──
    if (!commentField.value.trim()) {
        commentField.classList.add('error');
        commentError.classList.add('visible');
        commentError.textContent = 'Please enter a message.';
        valid = false;
    } else {
        commentField.classList.remove('error');
        commentError.classList.remove('visible');
    }

    if (!valid) return;

    // ── Success: clear all fields and show confirmation ──
    nameField.value    = '';
    emailField.value   = '';
    commentField.value = '';

    btn.textContent = 'Sent';
    btn.disabled    = true;
    document.getElementById('success-msg').style.display = 'block';
}