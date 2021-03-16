var elementExists = document.getElementsByClassName("carousel");

if (elementExists) {
    var flkty = new Flickity( '.carousel', {
        imagesLoaded: true,
        percentPosition: false,
        wrapAround: true,
        fullscreen: true,
    });
    
    var caption = document.querySelector('.carousel-caption');
    
    flkty.on( 'select', function() {
        // set image caption using img's alt
        caption.textContent =  flkty.selectedElement.getAttribute("alt");
    });
}