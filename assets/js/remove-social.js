// Remove social sharing buttons after page loads
document.addEventListener('DOMContentLoaded', function() {
    // Simple list of social sharing selectors
    const socialSelectors = [
        '.share-buttons',
        '.social-share',
        '.page-share',
        '.article-share',
        '.hugo-blox-share',
        '.wg-share',
        '#sharing'
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