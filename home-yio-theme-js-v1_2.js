       
        /*fungsi untuk pinned Post*/
        const urlPinned = document.getElementById("url-pinned");
        const sorotanKu = document.getElementById("sorotanku");
        
        if (urlPinned) {
          const url = urlPinned.href;
          const text = urlPinned.innerText;
          sorotanKu.innerHTML = `<a href="${url}">${text}</a>`;
        }
        
        
        /*Fungsi untuk toogle pada homepage*/
        const toggle = document.querySelector('.toggle input[type="checkbox"]');
        if (toggle) {
          const kolom = document.querySelectorAll('.kolom');
          if (kolom.length > 0) {
            function aturLebarKolom() {
              if (toggle.checked) {
                if (window.innerWidth < 768) {
                kolom.forEach(function(item) {
                  item.style.width = '100%';
                });
        		}else{
        		  kolom.forEach(function(item) {
                    item.style.width = 'calc(50% - 4px)';
                  });
        		}
              } else {
                // Kolom setengah atau sepertiga tergantung ukuran layar
                if (window.innerWidth > 768) {
                  kolom.forEach(function(item) {
                    item.style.width = 'calc(33.33% - 4px)';
                  });
                } else {
                  kolom.forEach(function(item) {
                    item.style.width = 'calc(50% - 4px)';
                  });
                }
              }
            }
        
            toggle.addEventListener('change', aturLebarKolom);
          }
        }
        
        
        /*untuk mengubah date pada post*/
        var postDates = document.querySelectorAll('#post-date');
        if (postDates.length > 0) {
          for (var i = 0; i < postDates.length; i++) {
            var date = new Date(postDates[i].getAttribute('datetime'));
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            postDates[i].textContent = date.toLocaleDateString('id-ID', options);
          }
        }
