import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import sliders from './sliders';
import initMobiMenu from './lib/cloneMenu';


var mobiTop = initMobiMenu,
    mobiFooter = initMobiMenu;

$(document).foundation();


window.addEventListener( "DOMContentLoaded", function() {
    sliders({
        reviews: {
            slider:'.reviews-slider',
            author: '.reviews-footer__author',
            dots: '.reviews-footer__slider-dots',
            dataAttr: 'data-author'
        }
    });

    mobiTop({
        clone: ['.nav-list'],
        insert:'.off-canvas',
        addClass: 'mobi-nav'
    });

    mobiFooter({
        clone: ['.footer-nav-list'],
        insert:'.footer-nav-box',
        addClass: 'footer-mobi-nav'
    });
});
