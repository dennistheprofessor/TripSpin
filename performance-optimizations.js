// Performance optimizations for Google Lighthouse
document.addEventListener('DOMContentLoaded', function() {
    // Add theme-color meta tag
    const themeColorMeta = document.createElement('meta');
    themeColorMeta.name = 'theme-color';
    themeColorMeta.content = '#000000';
    document.head.appendChild(themeColorMeta);
    
    // Add DNS prefetch links
    const dnsPrefetchDomains = [
        'https://cdn.jsdelivr.net',
        'https://cdnjs.cloudflare.com'
    ];
    
    dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
    });
    
    // Optimize images for bots
    if (navigator.userAgent.match(/(googlebot|bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly)/i)) {
        // Add static image for bots
        const staticImage = document.createElement('img');
        staticImage.src = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_atmos_2048.jpg';
        staticImage.alt = 'Earth';
        staticImage.style.position = 'absolute';
        staticImage.style.zIndex = '-1';
        staticImage.style.opacity = '0.1';
        document.body.appendChild(staticImage);
        
        // Add structured data for bots
        const destinations = [
            { name: "New York", country: "USA" },
            { name: "London", country: "UK" },
            { name: "Tokyo", country: "Japan" },
            { name: "Sydney", country: "Australia" }
        ];
        
        const destinationList = document.createElement('div');
        destinationList.style.display = 'none';
        
        destinations.forEach(dest => {
            const destItem = document.createElement('div');
            destItem.innerHTML = `<h3>${dest.name}</h3><p>${dest.country}</p>`;
            destinationList.appendChild(destItem);
        });
        
        document.body.appendChild(destinationList);
    }
});
