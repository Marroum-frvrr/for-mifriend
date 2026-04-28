// script.js

/**
 * Checks the birthday password on the index.html page
 */
function checkPassword() {
    const pwdInput = document.getElementById('pwd').value;
    const errorMsg = document.getElementById('error-msg');
    
    // Replace '1508' with her actual birthday (e.g., 15 for day, 08 for August)
    const CORRECT_PASSWORD = "1508"; 

    if (pwdInput === CORRECT_PASSWORD) {
        // Redirect to the confirmation page
        window.location.href = "confirm.html";
    } else {
        // Show gentle error text instead of a harsh alert
        errorMsg.classList.remove('hidden');
    }
}

/**
 * Handles the "No" button click on the confirm page
 */
function handleNoReady() {
    const rejectMsg = document.getElementById('rejection-msg');
    const buttons = document.getElementById('yes-no-buttons');
    
    // Hide buttons and show message
    buttons.classList.add('hidden');
    rejectMsg.classList.remove('hidden');
}

/**
 * Handles the "Try again" button click on the confirm page
 */
function handleTryAgain() {
    const rejectMsg = document.getElementById('rejection-msg');
    const buttons = document.getElementById('yes-no-buttons');
    
    // Show buttons and hide message
    buttons.classList.remove('hidden');
    rejectMsg.classList.add('hidden');
}

/**
 * Shows the comforting modal overlay
 */
function showModal() {
    const modal = document.getElementById('comfort-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

/**
 * Closes the comforting modal overlay
 */
function closeModal() {
    const modal = document.getElementById('comfort-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}
