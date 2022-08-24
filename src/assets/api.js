let inputKeyword = document.querySelector("#submit");
let terjemah = document.querySelector("#terjemah");
let inputan = document.querySelector(".input");

inputKeyword.addEventListener("click", function () {
    var valueIn = inputan.value;
    fetch(
        `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${valueIn}`
    )
        .then((Response) => Response.json())
        .then((data) => {
            let angka = -1;

            while (angka <= data.verses.length - 2) {
                angka += 1;
                let ayat = data.verses[angka].text_uthmani;
                const cek = document.querySelector(".bismillah");
                cek.textContent = "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْ مِ ";
                document.querySelector(`#a${angka}`).textContent = ayat;
                document.querySelector(`.hr${angka}`).innerHTML =
                    '<hr style="height: 1px;background-color: #293540;border: none;"; />';
            }
        });

    fetch(
        `https://api.quran.com/api/v4/quran/translations/134?chapter_number=${valueIn}`
    )
        .then((Response) => Response.json())
        .then((jemah) => {
            let angka = -1;

            while (angka <= jemah.translations.length - 2) {
                angka += 1;
                const sub = jemah.translations[angka].text;
                document.querySelector(
                    `#b${angka}`
                ).innerHTML = `<p style = "text-align: left;font-size: 18px;color: #336c8e;" class="sub">${sub}</p>`;
            }
        });
});
