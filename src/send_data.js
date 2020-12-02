/*Taggeo del Bancat*/

/*Remover acentos de los textos*/
export function RemoveAccents(str) {
  var accents =
    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
  var accentsOut =
    "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  str = str.split("");
  var strLen = str.length;
  var i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) != -1) {
      str[i] = accentsOut[x];
    }
  }
  return str.join("");
}

export function loadTaggeoDA_GA() {
  try {
    console.log("entro a la libreria de eventos");
    const enlace = document.querySelectorAll("#bc_section a");
    //console.log(enlace);
    let atrib = "";
    let content = "";
    let url = "";
    /*Site Promotion*/
    let attr_sp;
    /**/
    /*cm_mmc*/
    let CM_MMC;
    /**/
    for (let i = 0; i < enlace.length; i++) {
      /*Tracking Google Analytics*/
      enlace[i].addEventListener("click", function (e) {
        atrib = this.getAttribute("data-seccion");
        url = this.getAttribute("href");
        content = url;

        if (atrib != "" && atrib != null) {
          ga("send", "event", "Menu Catalogo", atrib, content);
          //gtag('event', atrib, { 'event_category': 'Menu Catalogo', 'event_label': content });
        }
        console.log("Se ejecuto el GA");
      });

      /**/
      /*Trancking Digital Analytics*/
      atrib = enlace[i].getAttribute("data-seccion");
      url = enlace[i].getAttribute("href");
      content = url;
      if (atrib != "" && atrib != null) {
        attr_sp = document.createAttribute("manual_cm_sp");
        attr_sp.value =
          "Menu_Catalogo-_-" +
          RemoveAccents(atrib.replace(/\s/g, "")) +
          "-_-" +
          content.replace(/\s/g, "");
        enlace[i].setAttributeNode(attr_sp);
        /*Tracking cm_mmc*/
        if (url.indexOf("?") == -1) {
          CM_MMC =
            "?cm_mmc=ripley.com.pe-_-Menu_Catalogo-_-" +
            RemoveAccents(atrib.replace(/\s/g, "")) +
            "-_-" +
            content.replace(/\s/g, "");
        } else {
          CM_MMC =
            "&cm_mmc=ripley.com.pe-_-Menu_Catalogo-_-" +
            RemoveAccents(atrib.replace(/\s/g, "")) +
            "-_-" +
            content.replace(/\s/g, "");
        }
        enlace[i].setAttribute("href", url + CM_MMC);
        /**/
        console.log("Se ejecuto el DA");
      }
      /**/
    }
  } catch (error) {
    console.log("Error=> Taggeo " + error);
  }
}
