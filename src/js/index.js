const banerSwiper1 = new Swiper('.banerSwiper1', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination-bullet-custom',
    bulletActiveClass: 'swiper-pagination-bullet-custom--active',
    renderBullet: function (index, className) {
      return `<div class="${className}" data-index="${index}">
        ${index + 1}
          <svg viewbox="0 0 20 20">
              <circle r="9" cx="10" cy="10" fill="none" stroke-width="1" stroke="#B1163D"/>
          </svg>
        </div>`
    },
    clickable: true
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  effect: "fade",
  on: {
    init: function () {
      const _self = this;

      _self.el.style.setProperty('--delay', _self.params.autoplay.delay);

      // _self.el.addEventListener('mouseenter', function() {
      //   _self.el.classList.add('swiper--pause');
      //   _self.autoplay.stop();
      // });

      _self.el.addEventListener('mouseleave', function () {
        _self.el.classList.remove('swiper--pause');
        _self.autoplay.start();
      });
    }
  }
});
const partnersSwiper1 = new Swiper('.partnersSwiper1', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: "auto",
  spaceBetween: 0,
});
const cenosSwiper1 = new Swiper('.cenosSwiper1', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  spaceBetween: 10,
});


// Скрипт три линии
$(function () {
  $('#nav-icon4').click(function () {
    $(this).toggleClass('open');
  });
});

// Скрипт появления моб меню

if (document.querySelector('#nav-icon4')) {
  const navIcon = document.querySelector('#nav-icon4');
  const overlayMenu = document.querySelector('.overlay__box')
  const box = document.querySelector('.box')

  function toggleMobMenu() {
    overlayMenu.classList.toggle('overlay_open');
    box.classList.toggle('box_open');
  }

  function removeMobMenu() {
    overlayMenu.classList.remove('overlay_open');
    box.classList.remove('box_open');
  }

  overlayMenu.addEventListener('click', () => {
    removeMobMenu();
    if (navIcon.classList.contains('open')) {
      navIcon.classList.remove('open');
    }
  })

  navIcon.addEventListener('click', () => {
    toggleMobMenu();
  })
}

// Скрипт submenu мобилка 
if (document.querySelector('.parent')) {
  const parent = document.querySelectorAll('.parent');

  parent.forEach(element => {
    element.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      element.classList.toggle('parent_active');
    })
  });
}