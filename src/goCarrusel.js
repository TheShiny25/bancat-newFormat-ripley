import './initializer';
export function config_carrusel(view_cant_btn){
    console.log(view_cant_btn);
    init([
        'https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/js/slick.min.js',
    ], function($, window, document, undefined) {
        $(document).ready(function() {
            let cant_btns =view_cant_btn;
            cant_btns = (cant_btns >= 7)? 7:cant_btns;
            //let btn_active = btns.filter(".active").index();
            let $carrusel = $('#content-btns');
            $carrusel.slick({
                    dots: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: cant_btns,
                    slidesToScroll: 1,
                        responsive: [{
                           breakpoint: 768,
                           settings: {
                             dots: false,
                               infinite: true,
                           slidesToShow: 3,
                              slidesToScroll: 2,
                           }
                      }, ]
            });
                //$carrusel.slick('slickGoTo', btn_active);
                //$carrusel.addClass('active');
            /*Fin de Carousel*/
        });
    });
}

