		/*HITUNGAN ARTIKEL*/
        // Mengambil elemen dengan kelas "postinganku"
        const postinganKu = document.querySelector('.postinganku');

        // Mengambil semua kata di dalam elemen "postinganku"
        const kata = postinganKu.textContent.trim().split(/\s+/);

        // Menghitung kemungkinan waktu baca dalam menit
        const waktuBaca = Math.round(kata.length / 200);

        // Menambahkan waktu baca ke elemen dengan kelas "baca-kah"
        const bacaKah = document.querySelector('.baca-kah');
        bacaKah.textContent = waktuBaca + ' menit membaca';

        // Variabel unik dengan menambahkan kata "yio_theme"
        const jumlahKata_yio_theme = kata.length;

		/*SUARA*/
const yio_theme_textToSpeech = () => {
  let postinganku = document.querySelector('.postinganku');
  let text = postinganku.textContent;
  let regex = /(<([^>]+)>)/gi;
  text = text.replace(regex, '');
  let preTags = postinganku.querySelectorAll('pre, code, .note, .h-toc');
  for (let i = 0; i < preTags.length; i++) {
    text = text.replace(preTags[i].textContent, '');
  }

  let words = text.split(' ');
  let chunkSize = 20;
  let chunkedWords = [];

  while (words.length) {
    chunkedWords.push(words.splice(0, chunkSize).join(' '));
  }

  let chunkIndex = 0;
  let speech = new SpeechSynthesisUtterance(chunkedWords[chunkIndex]);
  speech.lang = "id-ID";
  speech.rate = 1.2;
  window.speechSynthesis.speak(speech);
  speech.onend = () => {
    chunkIndex++;
    if (chunkIndex < chunkedWords.length) {
      speech.text = chunkedWords[chunkIndex];
      window.speechSynthesis.speak(speech);
    }
  };
}

let pemutaran = document.querySelector('#pemutaran');
let div = document.createElement('div');
let icon = document.querySelector('.play-icon');
let isPlaying = false;

pemutaran.addEventListener('click', () => {
  if (!isPlaying) {
    yio_theme_textToSpeech();
    isPlaying = true;
    pemutaran.classList.add('stop');
    icon.innerHTML = 'Stop <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-volume-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464"></path> <path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615"></path> <path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664"></path> <path d="M3 3l18 18"></path> </svg>';
  } else {
    window.speechSynthesis.cancel();
    isPlaying = false;
    pemutaran.classList.remove('stop');
    icon.innerHTML = 'Bacakan <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-volume" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M15 8a5 5 0 0 1 0 8"></path> <path d="M17.7 5a9 9 0 0 1 0 14"></path> <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path> </svg>';
  }
});

        /*Untuk membuat TOC*/
        const tocContainer = document.getElementById('oto-toc');
        if (tocContainer) {
        const headings = document.querySelectorAll('.postinganku h1, .postinganku h2, .postinganku h3');
        if (headings) {
          const toc = document.createElement('ul');
        
          headings.forEach((heading) => {
            const level = parseInt(heading.tagName.substring(1));
            const tocItem = document.createElement('li');
            const tocLink = document.createElement('a');
            tocLink.textContent = heading.textContent;
            tocLink.href = '#' + heading.id;
            tocItem.classList.add('level-' + level);
        
            tocLink.addEventListener('click', (event) => {
              event.preventDefault();
              heading.scrollIntoView({ behavior: 'smooth' });
            });
        
            tocItem.appendChild(tocLink);
            toc.appendChild(tocItem);
          });
        
          tocContainer.appendChild(toc);
        }
        }
        
        
        /*Untuk copy pada PRE CODE*/
        function addCopyButtonToCodeBlocks() {
        const codeBlocks = document.querySelectorAll("pre code");
        if (codeBlocks.length > 0) {
          codeBlocks.forEach((codeBlock) => {
            const copyButton = document.createElement("button");
            copyButton.className = "copy-button";
            copyButton.type = "button";
            copyButton.innerHTML = "Copy to Clipboard";
            copyButton.addEventListener("click", () => {
              navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                // Tampilkan pesan "Copied!" sementara pada tombol copy
                copyButton.innerHTML = "Copied!";
                setTimeout(() => {
                  copyButton.innerHTML = "Copy to Clipboard";
                }, 1000);
              });
            });
            // Tambahkan tombol "Copy to Clipboard" ke blok kode saat ini
            codeBlock.parentNode.insertBefore(copyButton, codeBlock);
          });
        }
        }
        addCopyButtonToCodeBlocks();
        
        var showKom = document.getElementById('show-kom');
        var commentForm = document.querySelector('.comment-replybox-thread');
        
        if (showKom) {
        showKom.addEventListener('click', function() {
          showKom.style.display = 'none';
          commentForm.style.display = 'block';
        });
        }
        
        // Ambil semua elemen span yang sesuai
        const spanElements = document.querySelectorAll('.datetime.secondary-text a');
        
        // Pengulangan untuk setiap elemen span
        spanElements.forEach((spanElement) => {
        // Ambil teks di dalam elemen
        const spanText = spanElement.textContent;
        
        // Ubah teks menjadi format tanggal bulan tahun nomor
        const dateRegex = /(\d{1,2}) (\w+) (\d{4}) pukul (\d{1,2})\.(\d{2})/;
        const match = spanText.match(dateRegex);
        if (match) {
          const date = new Date(match[3], getMonthIndex(match[2]), match[1], match[4], match[5]);
          const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        
          // Ganti teks pada elemen dengan format tanggal bulan tahun nomor
          spanElement.textContent = formattedDate;
        }
        });
        
        // Fungsi untuk mendapatkan indeks bulan berdasarkan namanya (Indonesian locale)
        function getMonthIndex(monthName) {
        const months = [
          'januari', 'februari', 'maret', 'april', 'mei', 'juni',
          'juli', 'agustus', 'september', 'oktober', 'november', 'desember'
        ];
        return months.indexOf(monthName.toLowerCase());
        }
