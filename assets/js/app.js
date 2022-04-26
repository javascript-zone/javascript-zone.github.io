let varLogo = document.querySelector('#logo');
let theStyle = document.querySelector('#theStyle');

let varLogo2 = document.querySelector('#logo2');
let theStyle2 = document.querySelector('#theStyle2');


varLogo.addEventListener('click', function(e){

    e.preventDefault();

    let img=`assets/img/js-zone-dark.png`;
    let link = `assets/css/dark.css`;

    varLogo.setAttribute('class', 'non-visible');
    varLogo2.removeAttribute('class');
    varLogo2.setAttribute('src', img);
    theStyle2.removeAttribute('href');    
    theStyle.setAttribute('href', link);    
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
});

