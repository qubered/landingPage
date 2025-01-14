document.addEventListener('DOMContentLoaded', function() {
    const words = ["to solve problems.", "theatre tech.", "events.", "to make things sound good."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typedTextSpan = document.getElementById("self-type");
    let cursorBlink = document.getElementById("cursor");

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at end of word
            isDeleting = true;
            setTimeout(type, 2500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    // Start the typing effect with a 1 second delay
    setTimeout(type, 1500);
});