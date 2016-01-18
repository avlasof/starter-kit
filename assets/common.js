import Slider from 'slider';

let slider = new Slider($('.jsSlider'));
slider.init({
    items: 1,
    nav: true,
    margin: 0
});

$('.jsModalVideoShow').click(function() {
    require.ensure([], (require) => {
        let Modal = require('modal');
        let modalVideo = new Modal();
        modalVideo.show($(this));
    });

    return false;
});
