// Remove social sharing buttons after page loads
document.addEventListener('DOMContentLoaded', function() {
    // List of selectors for social sharing elements
    const socialSelectors = [
        '.share-buttons',
        '.social-share',
        '.sharing-buttons',
        '.post-share',
        '.article-share',
        '.page-share',
        '.blox-share',
        '.hugo-blox-share',
        '.share-facebook',
        '.share-twitter',
        '.share-x',
        '.share-linkedin',
        '[data-share]',
        '.btn-social',
        '.social-btn',
        'a[href*="facebook.com/sharer"]',
        'a[href*="twitter.com/intent"]',
        'a[href*="linkedin.com/sharing"]'
    ];
    
    // Remove elements matching these selectors
    socialSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.remove();
        });
    });
    
    // Also hide any parent containers that might be empty now
    const potentialContainers = document.querySelectorAll('.share-container, .social-container, .sharing-container');
    potentialContainers.forEach(container => {
        if (container.children.length === 0 || container.textContent.trim() === '') {
            container.remove();
        }
    });
});