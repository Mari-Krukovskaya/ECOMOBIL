

let breadcrumbsEl = document.getElementById('breadcrumbs');
const headerEl = document.querySelector('.header');
const headerNavItemList = headerEl.querySelectorAll('.header__nav a');
const headerMobileNavItemList = headerEl.querySelectorAll('.header__mobile a');
const createElSVG = document.createElement('svg');
const btnBorderList = document.querySelectorAll('.btn-border rect');


currentMenuItemLightning(headerNavItemList);


function currentMenuItemLightning(headerNavItemList) {
    let count = 1;
    headerNavItemList.forEach(item => {
        item.insertAdjacentHTML("beforeend", `<svg class="btn-border" style="opacity:0" widthOfContainer heightOfContainer><linearGradient id="linear-gradientMenu${count}" x1="0%" y1="50%" x2="0%" y2="100%"><stop offset="0%" stop-color="rgba(255, 255, 255, 0)" /><stop offset="100%" stop-color="rgba(255, 255, 255, 1)" /></linearGradient><rect stroke-width="1.5" stroke="url(#linear-gradientMenu${count})" x="0" y="0" width="100%" height="100%" rx="10px" ry="10px" /></svg>`);
        count++;
    });

    headerNavItemList.forEach(item => {
        const childEl = item.querySelector('.btn-border');
        // if (item.parentElement.matches('.current_page_item') || item.parentElement.matches('.current-menu-item')) {
        if (item.getAttribute('aria-current')) {
            childEl.style.opacity = '1';

        }
        item.addEventListener('mouseover', () => {
            childEl.style.opacity = '1';
        });
        item.addEventListener('mouseout', () => {
            if (!item.parentElement.matches('.current_page_item') && !item.parentElement.matches('.current-menu-item')) {
                childEl.style.opacity = '0';
            }
        });
    });
}



window.addEventListener('resize', () => {
    let height = headerEl.offsetHeight;
    if (breadcrumbsEl) {
        breadcrumbsEl.style.paddingTop = height + 'px';
    }


    btnBorderList.forEach(btnBorder => {
        btnBorder.style.width = '100%';
    });

});

if (breadcrumbsEl) {
    const breadItemList = breadcrumbsEl.querySelectorAll('.breadcrumbs__list>span span');

    breadItemList.forEach(item => {
        if (!item.matches('.breadcrumb_last')) {
            item.insertAdjacentHTML('beforeend', '<svg class="btn__icon"><use xlink:href="/wp-content/themes/Ecomobil/assets/images//sprite.svg#arrow_breadcrumbs"></use></svg>');
        }

    });
}

//РњРѕР±РёР»СЊРЅРѕ РјРµРЅСЋ
const headerMobileEl = document.querySelector('.header__mobile');
const burgerEl = headerMobileEl.querySelector('.mobile__burger');
const mobileNavEl = headerMobileEl.querySelector('.mobile__nav-box');


burgerEl.addEventListener('click', () => {
    if (mobileNavEl.style.opacity === '1') {
        mobileNavEl.style.opacity = '0';
        setTimeout(() => {
            burgerEl.innerHTML = '<svg class="burger__icon"><use xlink:href="/wp-content/themes/Ecomobil/assets/images//sprite.svg#burger"></use></svg>';
        }, 100);


    } else {
        setTimeout(() => {
            burgerEl.innerHTML = '<svg class="close__icon"><use xlink:href="/wp-content/themes/Ecomobil/assets/images//sprite.svg#close"></use></svg>';
        }, 100);

        mobileNavEl.style.opacity = '1';
    }

})

// РџР°СЂР°Р»Р»Р°РєСЃ
$('.selections').parallax({
    imageSrc: '/wp-content/themes/Ecomobil/assets/images/parallax.svg',
    speed: 0.1,
    zIndex: -1,
    iosFix: false,
    androidFix: false
});

$('.advantage').parallax({
    imageSrc: '/wp-content/themes/Ecomobil/assets/images/parallax.svg',
    speed: 0.1,
    zIndex: 1,
    iosFix: false,
    androidFix: false
});

$('.design').parallax({
    imageSrc: '/wp-content/themes/Ecomobil/assets/images/parallax-dark.svg',
    speed: 0.1,
    zIndex: 1,
    iosFix: false,
    androidFix: false
});


$('.request_light').parallax({
    imageSrc: '/wp-content/themes/Ecomobil/assets/images/parallax-dark.svg',
    speed: 0.1,
    zIndex: 1,
    iosFix: false,
    androidFix: false
});


// РљРЅРѕРїРєР° "РќР°Р·Р°Рґ"
const el = document.querySelector('.btn-prev');
if (el) {
    el.addEventListener('click', () => {
        history.back();
    });
}



// Р’С‹РІРѕРґ СЃС‚Р°С‚РµР№

if (window.location.href === 'https://ecomobilcars.ru/articles/') {

    const loadMoreBtn = document.getElementById('loadArticlesBtn');
    const articlesList = document.querySelector('.articles__list_load');
    const articles = articlesList.querySelectorAll('.articles__item');
    const visibleArticles = 4; // РЎРєРѕР»СЊРєРѕ СЃС‚Р°С‚РµР№ РІРёРґРЅРѕ РёР·РЅР°С‡Р°Р»СЊРЅРѕ
    let currentVisible = visibleArticles;

    // РЎРєСЂРѕРµРј РІСЃРµ СЃС‚Р°С‚СЊРё РїРѕСЃР»Рµ С€РµСЃС‚РѕР№
    for (let i = visibleArticles; i < articles.length; i++) {
        articles[i].classList.add('hidden-article');
    }

    loadMoreBtn.addEventListener('click', function () {
        // РџСЂРё РЅР°Р¶Р°С‚РёРё РєРЅРѕРїРєРё, РїРѕРєР°Р¶РµРј СЃР»РµРґСѓСЋС‰РёРµ 3 СЃРєСЂС‹С‚С‹С… СЃС‚Р°С‚РµР№
        for (let i = currentVisible; i < currentVisible + visibleArticles; i++) {
            if (articles[i]) {
                articles[i].classList.remove('hidden-article');
            }
        }
        currentVisible += visibleArticles;

        // Р•СЃР»Рё Р±РѕР»СЊС€Рµ РЅРµС‚ СЃРєСЂС‹С‚С‹С… СЃС‚Р°С‚РµР№, СЃРєСЂРѕРµРј РєРЅРѕРїРєСѓ
        if (currentVisible >= articles.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // РџРѕРєР°Р¶РµРј РєРЅРѕРїРєСѓ "Р—Р°РіСЂСѓР·РёС‚СЊ РµС‰Рµ" С‚РѕР»СЊРєРѕ РµСЃР»Рё РµСЃС‚СЊ СЃРєСЂС‹С‚С‹Рµ СЃС‚Р°С‚СЊРё
    if (articles.length <= visibleArticles) {
        loadMoreBtn.style.display = 'none';
    }
}

// //РЎРєСЂРёРїС‚ РґР»СЏ СЃС‚Р°С‚РµР№ (РѕС„РѕСЂРјР»РµРЅРёРµ СЃРїРёСЃРєРѕРІ Сѓ РєР°СЂС‚РёРЅРѕРє)
// let boxImg = document.querySelectorAll('.article__img-box');
// if (boxImg) {
//     boxImg.forEach(element => {
//         const parentBox = element.parentElement;
//         const descBox = parentBox.querySelector('.article__text');
//         console.log(descBox);
//         if (descBox && (descBox.querySelector('ul') || descBox.querySelector('ol'))) {
//             element.style.float = 'right';
//             element.style.margin = '0 0 3% 9%';
//         }
//     });
// }




// РђРІС‚Рѕ-РєР°СЂС‚РѕС‡Р° Р“Р°Р»РµСЂРµСЏ

const imagesArray = document.querySelectorAll('.gallery__img');
const galleryModalBoxEl = document.querySelector('#gallery__modal');
const interiorArray = document.querySelectorAll('.img__tab');

if (interiorArray) {
    zoomImage(interiorArray);
}

if (imagesArray) {
    zoomImage(imagesArray);
}

function zoomImage(imagesArray) {
    if (galleryModalBoxEl) {
        imagesArray.forEach(image => {
            image.addEventListener('click', ({ target }) => {
                const modalBox = document.createElement('div');
                modalBox.classList.add('gallery__modal-box');
                const image = target.cloneNode(true);
                modalBox.insertAdjacentElement("beforeend", image);
                galleryModalBoxEl.appendChild(modalBox);
                galleryModalBoxEl.classList.add('gallery__modal_visible');
            });
        })

        galleryModalBoxEl.addEventListener('click', () => {
            if (galleryModalBoxEl.children) {
                galleryModalBoxEl.classList.remove('gallery__modal_visible');
                galleryModalBoxEl.innerHTML = '';
            }

        })
    }
}


var owl1 = $('.owl-carousel-1');
var owl2 = $('.owl-carousel-2');
var owl3 = $('.owl-carousel-3');


$(document).ready(function () {
    owl1.owlCarousel({
        items: 1,
        loop: true,
    });
});

$('#slider__next-1').click(function () {
    owl1.trigger('next.owl.carousel');
})

$('#slider__prev-1').click(function () {
    owl1.trigger('prev.owl.carousel', [300]);
})


$(document).ready(function () {
    owl2.owlCarousel({
        items: 1,
        loop: true,
    });
});

$('#slider__next-2').click(function () {
    owl2.trigger('next.owl.carousel');
})

$('#slider__prev-2').click(function () {
    owl2.trigger('prev.owl.carousel', [300]);
})

$(document).ready(function () {
    owl3.owlCarousel({
        items: 1,
        loop: true,
    });
});

$('#slider__next-3').click(function () {
    owl3.trigger('next.owl.carousel');
})

$('#slider__prev-3').click(function () {
    owl3.trigger('prev.owl.carousel', [300]);
})


//Popup Р·Р°РєСЂС‹С‚РёРµ РѕРєРЅР°

const popupEl = document.querySelector('.popup');
if (popupEl) {
    const popupCloseBtn = popupEl.querySelector('.popup__btn');
    popupCloseBtn.addEventListener('click', () => {
        popupEl.classList.remove('popup_visible');
    });
}


// РњР°СЃРєР°

document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});

