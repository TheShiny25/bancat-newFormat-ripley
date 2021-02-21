import '../css/slick.css';
import '../css/slick-theme.css';
import '../css/styles.css';
import {config_carrusel} from './goCarrusel.js';
import {RemoveAccents,loadTaggeoDA_GA} from './send_data.js';

let spinner = document.getElementById("spinner");
spinner.removeAttribute('hidden');
console.log("ejecuto");

const get_dataBCInfo= async()=>{
    let getdataBCInfo = dataBcInfo;
    return getdataBCInfo;
}

const data_bancat = async ()=>{
    try {
        
        const responseDataBCInfo = await get_dataBCInfo();
        const responseParamURL= responseDataBCInfo.urlJsonBC;
        const responseParamPosSlider =responseDataBCInfo.posicionSlider;
        const responseParamPosBtn = responseDataBCInfo.posicionBTN;
        //console.log(responseParamPosBtn);
        let response = await fetch(responseParamURL);
        let data = await response.json();
        const url_bancat = data.url_bancat;
        /*Listar Banner*/
        let list_banner = '';
        let dataL =data.list_slider[responseParamPosSlider];
        list_banner=`<a href="${dataL.url}" target="_top" data-seccion="${dataL.text_taggeo}">
                        <img class="img-responsive hidden-xs hidden-sm" src="${url_bancat+'img/'+dataL.img_desk}" style="width: 100%;">
                        <img class="img-responsive hidden-lg hidden-md" src="${url_bancat+'img/'+dataL.img_mob}" style="width: 100%;">
                    </a> `
        document.getElementById('banner-principal').innerHTML = list_banner;
        /*Listar de botones*/
        let list_botones = '';
        data.list_btn.forEach((btn,i) => {
            list_botones +=`<div class="item-btn ${(i == responseParamPosBtn)? 'active': ''}">
                                <a href="${btn.url}" data-seccion="${btn.text_taggeo}" target="_top">
                                    <div class="item-img">
                                        <img class="btn_image" src="${url_bancat+'img/'+btn.imagen}" alt="">
                                        <img class="btn_image_hover" src="${url_bancat+'img/hover/'+btn.imagen}" alt="">
                                        <span class="texto">${btn.nombre}</span>
                                    </div>
                                </a>
                            </div>`;
        });
        document.getElementById('content-btns').innerHTML = list_botones;   
        let goCarrusel = await config_carrusel(data.cant_btn);
        setTimeout(() => {
            spinner.setAttribute('hidden', '');    
        }, 1000);
        let loadTaggeo = loadTaggeoDA_GA();
        
        let btn_class = document.querySelectorAll('.item-img');
        btn_class.forEach((button, index) => {
            btn_class[index].addEventListener('mouseover',event=>{
                document.getElementsByClassName('btn_image_hover')[index].style.opacity=1;
            });
            btn_class[index].addEventListener('mouseout',event=>{
                document.getElementsByClassName('btn_image_hover')[index].style.opacity=0;
            }); 
        });
        
        /**/
    } catch (error) {
        console.log("Error ==> ", error)
    }   
}
data_bancat();
