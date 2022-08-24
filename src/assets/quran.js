import axios from "axios";

export default {
    data() {
        return {
            ayats: [],
            arti: [],
            audio: null,
            namaSurah: null,
        };
    },

    async mounted() {
        //this.load();
    },

    methods: {
        async cari() {
            let ayat =
                "https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=" +
                this.myinput;
            let arti =
                "https://api.quran.com/api/v4/quran/translations/134?chapter_number=" +
                this.myinput;

            let judul = "https://api.quran.com/api/v4/chapters?language=en";
            let suara =
                "https://api.quran.com/api/v4/chapter_recitations/2?language=en";

            if (this.myinput <= 0 || this.myinput > 114) {
                alert("masukkan angka dengan benar");
            } else {
                const reqAyat = axios.get(ayat);
                const reqArti = axios.get(arti);
                const reqJudul = axios.get(judul);
                const reqSuara = axios.get(suara);

                axios.all([reqAyat, reqArti, reqJudul, reqSuara]).then(
                    axios.spread((...response) => {
                        let responseAyat = response[0];
                        const responseArti = response[1];
                        const responseJudul = response[2];
                        const responseSuara = response[3];

                        const a = responseAyat.data.verses;
                        const b = responseArti.data.translations;

                        const gabung = (a, b) => {
                            const res = [];

                            for (let i = 0; i < a.length + b.length; i++) {
                                if (i % 2 === 0) {
                                    res.push(a[i / 2]);
                                } else {
                                    res.push(b[(i - 1) / 2]);
                                }
                            }
                            return res;
                        };

                        this.ayats = gabung(a, b);
                        this.audio =
                            responseSuara.data.audio_files[
                                this.myinput - 1
                            ].audio_url;
                        this.namaSurah = responseJudul.data.chapters[this.myinput - 1].name_simple

                        console.log(responseJudul.data.chapters[this.myinput - 1].name_simple);
                    })
                );
            }
        },
    },
};
