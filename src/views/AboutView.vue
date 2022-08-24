<template>
    <!-- Foto-->
    <div class="foto">
        <img
            src="../assets/JPEG_20220318_171748_8090_.png"
            alt="Muhammad Reda"
            width="350"
            height="350"
            class="pict"
        />
        <p class="Haii">
            Hai, saya <strong>Muhammad Reda</strong>, saya mahasiswa UIN SUSKA
            RIAU
        </p>
    </div>

    <br />
    <div id="SPA">
        <p>
            Ini adalah SPA web pertama saya yang ditujukan untuk menjadi tugas
            matakuliah Pemrograman Web. Sejak kecil saya besar dan tumbuh di
            Pujud, Rokan Hilir, Riau. Kini sekarang saya menempuh pendidikan di
            Pekanbaru tepatnya di Universitas Islam Negeri Sultan Syarif Kasim
            Riau.
        </p>
    </div>
</template>

<style>
    .Haii {
        text-align: center;
        color: aliceblue;
        font-size: 35px;
    }
    .foto {
        margin-top: 70px;
    }

    #SPA {
        text-align: center;
        margin: 0;
        color: #fff;
        font-size: 20px;
    }

    .pict {
        float: center;
        margin: auto;
        display: block;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 450px) {
        .pict {
            width: 150px;
            height: 150px;
        }
    }
</style>
