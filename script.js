document.addEventListener('DOMContentLoaded', () => {
    // Select all interactive cards AND the new footer CTA anchor
    const interactiveElements = document.querySelectorAll('.skill-card, .affiliate-card, .cta-anchor');

    interactiveElements.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();

            const targetUrl = this.getAttribute('href');
            
            // Your custom confirmation message
            const message = "SECURITY CHECK: You are about to go to explanation page. Proceed?";
            
            if (confirm(message)) {
                console.log(`[SYSTEM]: Connection established. Navigating to ${targetUrl}`);
                window.location.href = targetUrl;
            } else {
                console.log("[SYSTEM]: User aborted the sequence.");
            }
        });
    });

    console.log("Terminal Wealth OS: All nodes and CTA protocols active.");
});