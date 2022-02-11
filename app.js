'use strict';
(function () {
    $(document).ready(function () {
        let itemIndex = 0;
        const sliderItem = $('.slider-item');
        const sliderFunction = _ => {
            if (itemIndex >= sliderItem.length) itemIndex = 0;
            if (itemIndex < 0) itemIndex = sliderItem.length - 1;
            sliderItem.each(function () {
                $(this).css({ 'display': 'none' });
            });
            sliderItem.eq(itemIndex).css({ 'display': 'block' });
        }
        $('.slide-next').click(_ => { sliderFunction(++itemIndex) })
        $('.slide-prev').click(_ => { sliderFunction(--itemIndex) })
        $(window).on('load', sliderFunction(itemIndex));
    });
})();