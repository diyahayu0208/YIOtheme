window.addEventListener("load", function () {
  const loader = document.querySelector(".loading");
  loader.remove();
});

      //top
      const topButton = document.querySelector('#top');
      
      if (topButton) {
        topButton.addEventListener('click', () => {
          const scrollDuration = 500; // Durasi animasi dalam milidetik
          const scrollHeight = window.scrollY;
          const scrollStep = Math.PI / (scrollDuration / 15);
          const cosParameter = scrollHeight / 2;
          let scrollCount = 0;
          let scrollMargin;
          
          const scrollInterval = setInterval(() => {
            if (window.scrollY != 0) {
              scrollCount = scrollCount + 1;  
              scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
              window.scrollTo(0, (scrollHeight - scrollMargin));
            } else clearInterval(scrollInterval);
          }, 15);
        });
      }
      
      
      /*Looading Lazy Load*/
      function lazyload() {
        const lazyImages = document.querySelectorAll('.lazy');

        lazyImages.forEach(lazyImage => {
          if (lazyImage.getBoundingClientRect().top < window.innerHeight && lazyImage.getBoundingClientRect().bottom > 0 && !lazyImage.classList.contains('loaded')) {
            setTimeout(() => {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.add('loaded');
            }, 1000);
          }
        });
      }

      window.addEventListener('scroll', lazyload);


      
      /*Fungsi untuk close header*/
      const btnSideLeft = document.querySelector('.btn-aside');
      const sideLeft = document.querySelector('#side-left');
      const btnSideClose = document.querySelector('.btn-side-close');
      const menuNavbot = document.querySelector('#menu-navbot');
      
      if (btnSideLeft && sideLeft && btnSideClose) {
      btnSideLeft.addEventListener('click', function() {
      sideLeft.classList.toggle('show');
      btnSideLeft.classList.toggle('show');
      document.getElementById('side-right').style.display='none';
      document.getElementById('main').style.display='none';
      document.getElementById('footer').style.display='none';
      document.getElementById('header').style.display='none';
      });
      
      btnSideClose.addEventListener('click', function() {
      sideLeft.classList.remove('show');
      btnSideLeft.classList.remove('show');
      document.getElementById('side-right').style.display='';
      document.getElementById('main').style.display='';
      document.getElementById('footer').style.display='';
      document.getElementById('header').style.display='';
      });
      
      if (menuNavbot){
        menuNavbot.addEventListener('click', function() {
          sideLeft.classList.add('show');
          btnSideLeft.classList.add('show');
          document.getElementById('side-right').style.display='none';
          document.getElementById('main').style.display='none';
          document.getElementById('footer').style.display='none';
          document.getElementById('header').style.display='none';
          });
        }
      }
      
      /*fungsi untuk close pencarian*/
      const closeBtn = document.querySelector('.close-button');
      const pencarianYio = document.querySelector('.pencarian-yio');
      const semuaElemen = document.querySelectorAll('.container > *:not(#header)');
      
      if (closeBtn && pencarianYio && semuaElemen) {
        closeBtn.addEventListener('click', function() {
          pencarianYio.style.display = 'none';
          semuaElemen.forEach(function(elemen) {
            elemen.classList.remove('blur');
          });
        });
      
        const btnSideright = document.querySelector('.btn-sideright');
      
        if (btnSideright) {
          btnSideright.addEventListener('click', function() {
            pencarianYio.style.display = 'block';
            semuaElemen.forEach(function(elemen) {
              elemen.classList.add('blur');
            });
          });
        }
      }
      
      
      /*Fungsi untuk meminimalisir label*/
      const listLabel = document.querySelector('.list-label-widget-content');
      const labelItems = listLabel ? listLabel.querySelectorAll('li') : [];
      const showAllItem = document.querySelector('.tampilkan-semua');
      let showAll = false;
      
      if (listLabel && showAllItem) {
        for (let i = 5; i < labelItems.length; i++) {
          if (!labelItems[i].classList.contains('tampilkan-semua')) {
            labelItems[i].style.display = 'none';
          }
        }
      
        showAllItem.addEventListener('click', () => {
          if (!showAll) {
            // Show all label items
            for (let i = 0; i < labelItems.length; i++) {
              labelItems[i].style.display = 'list-item';
            }
            showAllItem.textContent = 'Hide -';
            showAll = true;
          } else {
            // Hide all label items except the first five
            for (let i = 5; i < labelItems.length; i++) {
              if (!labelItems[i].classList.contains('tampilkan-semua')) {
                labelItems[i].style.display = 'none';
              }
            }
            showAllItem.textContent = 'Show +';
            showAll = false;
          }
        });
      }
      
      
      /*fungsi untuk menyembunyikan sub konten*/
      const mainContentList = document.querySelectorAll('.main-content');
      
      mainContentList.forEach(mainContent => {
        const subContent = mainContent.nextElementSibling;
      
        if (subContent) {
          mainContent.addEventListener('click', () => {
            mainContent.parentElement.classList.toggle('open');
            subContent.style.display = subContent.style.display === 'none' ? 'block' : 'none';
          });
        }
      });
      
      /*Function Darkmode side bar*/
      const toggleSwitch66 = document.querySelector('#dark-mode-toggle');
      
      // cek apakah cookie yio-cookie sudah ada
      function checkCookie66() {
          const cookieValue66 = document.cookie
              .split('; ')
              .find(row => row.startsWith('yio-cookie='))
          if (cookieValue66) {
              return cookieValue66.split('=')[1];
          } else {
              // jika cookie tidak ada, buat cookie baru dengan value light
              document.cookie = "yio-cookie=light; expires=Thu, 28 Apr 2024 00:00:00 UTC; path=/";
              return 'light';
          }
      }
      
      // set toggle based on cookie value
      function setToggle66() {
          const cookieValue66 = checkCookie66();
          if (cookieValue66 === 'dark') {
              toggleSwitch66.checked = true;
              document.documentElement.setAttribute('data-theme', 'dark');
              document.documentElement.classList.add('darkmode');
          } else {
              toggleSwitch66.checked = false;
              document.documentElement.setAttribute('data-theme', 'dark');
              document.documentElement.classList.remove('darkmode');
          }
      }
      
      function switchTheme66(event) {
          if (event.target.checked) {
              document.documentElement.setAttribute('data-theme', 'darkmode');
              document.documentElement.classList.add('darkmode');
              document.cookie = "yio-cookie=dark; expires=Thu, 28 Apr 2024 00:00:00 UTC; path=/";
          } else {
              document.documentElement.setAttribute('data-theme', 'lightmode');
              document.documentElement.classList.remove('darkmode');
              document.cookie = "yio-cookie=light; expires=Thu, 28 Apr 2024 00:00:00 UTC; path=/";
          }
      }
      
      toggleSwitch66.addEventListener('change', switchTheme66, false);
      
      // set toggle saat halaman dimuat
      setToggle66();
      
      
      
      /* fungsi untuk dark mode navbot*/
      var cek_mode_t= document.getElementById('mode-t-g');
      
      if (cek_mode_t){
        // Cek apakah ada cookie yio-cookie saat halaman dimuat
        document.addEventListener('DOMContentLoaded', function() {
          var yioCookie = getCookie('yio-cookie');
          if (yioCookie == null) {
            // Jika tidak ada, buat cookie baru dengan value light
            setCookie('yio-cookie', 'light', 365);
            yioCookie = 'light';
          }
      
        if (yioCookie == 'light') {
            document.querySelector('#node-mtg').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path> <path d="M6.343 17.657l-1.414 1.414"></path> <path d="M6.343 6.343l-1.414 -1.414"></path> <path d="M17.657 6.343l1.414 -1.414"></path> <path d="M17.657 17.657l1.414 1.414"></path> <path d="M4 12h-2"></path> <path d="M12 4v-2"></path> <path d="M20 12h2"></path> <path d="M12 20v2"></path> </svg>';
            document.querySelector('#mode-t-g span').textContent = 'Light';
        } else {
        document.querySelector('#node-mtg').innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path> <path d="M19 11h2m-1 -1v2"></path> </svg>';
            document.querySelector('#mode-t-g span').textContent = 'Dark';
        }
      
          // Tambahkan atau hapus class pada <html> sesuai value cookie
          if (yioCookie == 'dark') {
            document.documentElement.classList.add('darkmode');
            document.documentElement.classList.remove('lightmode');
          } else {
            document.documentElement.classList.add('lightmode');
            document.documentElement.classList.remove('darkmode');
          }
        });
      
        // Ketika tombol #mode-t-g diklik
        document.querySelector('#mode-t-g').addEventListener('click', function() {
          // Dapatkan value cookie
          var yioCookie = getCookie('yio-cookie');
      
          // Jika cookie tidak ditemukan, buat cookie baru dengan value light
          if (yioCookie == null) {
            setCookie('yio-cookie', 'light', 365);
            yioCookie = 'light';
          }
      
          // Ubah value cookie dan teks pada tombol #mode-t-g
          if (yioCookie == 'light') {
            setCookie('yio-cookie', 'dark', 365);
        document.querySelector('#node-mtg').innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path> <path d="M19 11h2m-1 -1v2"></path> </svg>';
            document.querySelector('#mode-t-g span').textContent = 'Dark';
          } else {
            setCookie('yio-cookie', 'light', 365);
            document.querySelector('#node-mtg').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path> <path d="M6.343 17.657l-1.414 1.414"></path> <path d="M6.343 6.343l-1.414 -1.414"></path> <path d="M17.657 6.343l1.414 -1.414"></path> <path d="M17.657 17.657l1.414 1.414"></path> <path d="M4 12h-2"></path> <path d="M12 4v-2"></path> <path d="M20 12h2"></path> <path d="M12 20v2"></path> </svg>';
            document.querySelector('#mode-t-g span').textContent = 'Light';
          }
      
      
          // Tambahkan atau hapus class pada <html> sesuai value cookie yang baru
          var newCookie = getCookie('yio-cookie');
          if (newCookie == 'dark') {
            document.documentElement.classList.add('darkmode');
            document.documentElement.classList.remove('lightmode');
          } else {
            document.documentElement.classList.add('lightmode');
            document.documentElement.classList.remove('darkmode');
          }
        });
      
        // Fungsi untuk membuat cookie
        function setCookie(name, value, days) {
          var expires = '';
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
          }
          document.cookie = name + '=' + (value || '')  + expires + '; path=/';
        }
      
        // Fungsi untuk mendapatkan cookie
        function getCookie(name) {
          var nameEQ = name + '=';
          var ca = document.cookie.split(';');
          for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
          }
          return null;
        }
      }
