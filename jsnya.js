// Function to scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan telah dikirim. Terima kasih!');
    // Reset form fields
    document.getElementById('contact-form').reset();
});