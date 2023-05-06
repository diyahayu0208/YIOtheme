        /*Membuat fixed Iklan sticky*/
        var stickyElement = document.getElementById('iklan-sticky-side');
        var originalWidth = stickyElement.offsetWidth;
        var lastScrollPosition = window.scrollY;
        var isScrollingDown = true;
        var elementPosition = stickyElement.getBoundingClientRect().top;
        
        window.addEventListener('scroll', function() {
          if (window.innerWidth > 768) { // tambahkan kondisi untuk memeriksa lebar layar
            var currentScrollPosition = window.scrollY;
            if (currentScrollPosition > lastScrollPosition) {
              isScrollingDown = true;
            } else {
              isScrollingDown = false;
            }
            lastScrollPosition = currentScrollPosition;
        
            if (isScrollingDown && stickyElement.getBoundingClientRect().top <= 0) {
              stickyElement.style.position = 'fixed';
              stickyElement.style.top = '0';
              stickyElement.style.width = originalWidth + 'px';
            } else if (currentScrollPosition <= elementPosition) {
              stickyElement.style.position = 'static';
              stickyElement.style.width = 'auto';
            }
          }
        });
