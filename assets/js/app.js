let varLogo = document.querySelector('#logo');
let theStyle = document.querySelector('#theStyle');
let varLogo2 = document.querySelector('#logo2');
let theStyle2 = document.querySelector('#theStyle2');
let footer = document.querySelector('#footer');

// document.cookie = "mode=Coucou";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  if(getCookie("mode") != "")
  {
    console.log(getCookie("mode"));

        if(getCookie("mode") == "Dark")
        {
            let img=`assets/img/js-zone-dark.png`;
            let link = `assets/css/dark.css`;
        
            varLogo.setAttribute('class', 'non-visible');
            varLogo2.removeAttribute('class');
            varLogo2.setAttribute('src', img);
            theStyle2.removeAttribute('href');    
            theStyle.setAttribute('href', link);
            footer.style.color = 'white';//setAttribute('style', 'color:white');
        }
        else if(getCookie("mode") == "Light")
        {
            let img=`assets/img/js-zone-light.png`;
            let link2 = `assets/css/mediumish.css`;
        
            varLogo2.setAttribute('class', 'non-visible');
            varLogo.removeAttribute('class');
            varLogo.setAttribute('src', img);
            theStyle.removeAttribute('href');    
            theStyle2.setAttribute('href', link2);
            footer.style.color = 'black';
            
            document.cookie = "mode=Light";
        }else{
            alert("Cookie pas vide mais ni Dark ni Light");
        }

  }else{
      alert("Cookie Vide");
  }


varLogo.addEventListener('click', function(e){

    e.preventDefault();

    let img=`assets/img/js-zone-dark.png`;
    let link = `assets/css/dark.css`;

    varLogo.setAttribute('class', 'non-visible');
    varLogo2.removeAttribute('class');
    varLogo2.setAttribute('src', img);
    theStyle2.removeAttribute('href');    
    theStyle.setAttribute('href', link);
    
    document.cookie = "mode=Dark";
    console.log(getCookie("mode"));
});

varLogo2.addEventListener('click', function(e){

    e.preventDefault();

    let img=`assets/img/js-zone-light.png`;
    let link2 = `assets/css/mediumish.css`;

    varLogo2.setAttribute('class', 'non-visible');
    varLogo.removeAttribute('class');
    varLogo.setAttribute('src', img);
    theStyle.removeAttribute('href');    
    theStyle2.setAttribute('href', link2);
    
    document.cookie = "mode=Light";
    console.log(getCookie("mode"));
});

