import './initializer';
export function config_carrusel(view_cant_btn){
    //console.log(view_cant_btn);
    init([
        'https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/js/slick.min.js',
    ], function($, window, document, undefined) {
        $(document).ready(function() {
            let cant_btns =view_cant_btn;
            cant_btns = (cant_btns >= 7)? 7:cant_btns;
            let btn_active = $('#content-btns .item-btn').filter(".active").index();
            let $carrusel = $('#content-btns');
            $carrusel.slick({
                    dots: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: cant_btns,
                    slidesToScroll: cant_btns,
                        responsive: [{
                           breakpoint: 768,
                           settings: {
                            dots: false,
                            infinite: true,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                           }
                      }, ]
            });
                $carrusel.slick('slickGoTo', btn_active);
                $carrusel.addClass('active');
            /*Fin de Carousel*/
            /*Remove Slick*/ 
            if($(window).width() < 768){
                $carrusel.slick('unslick');
                /*Cambios de Estilos*/
                //$('#content-btns .item-btn').css({"width":"calc(100% / 3)","margin": "0"});
                console.log("estilos sin jquery");
                /*Fin de Cambios*/
            }
            /*Fin Remove Slick*/
        });
    });
}
