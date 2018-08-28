import './lib/slick';
// import './lib/foundation-explicit-pieces';

function sliders(setings) {

    const reviews = setings.reviews;

    $(reviews.slider).on('init', function(slick){

        afterChange(this);
    });

    $(reviews.slider).slick({
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,
        autoplay: true,
        appendDots: document.querySelector(reviews.dots)
    });

    $(reviews.slider).on('afterChange', function(slick){
        afterChange(this);
    });



    function afterChange (_) {
        let activeSlide = _.querySelector(`.slick-active`),
            activeSlideImg = activeSlide.getAttribute(reviews.dataAttr),
            patern = arrowsPatern (activeSlideImg);
        document.querySelector(reviews.author).innerHTML = patern;
    }
}

function arrowsPatern (str) {
    return `<span>${str}</span>`;
}



export default sliders;