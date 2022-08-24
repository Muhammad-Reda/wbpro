<script>
    import { RouterLink, RouterView } from "vue-router";
    import Navigation from "./components/Navigation.vue";
    export default {
        name: "App",
        components: {
            Navigation,
        },
    };
</script>

<template>
    <Navigation />

    <router-view />

    <footer class="text-center text-white" id="bawah">
        <div id="copyright">
            © 2022 Copyright: <strong>Muhammad Reda</strong>
        </div>
        <div class="icon" id="icon">
            <ul>
                <li>
                    <a
                        href="https://www.facebook.com/profile.php?id=100009677568934"
                        target="_blank"
                        ><i class="fab fa-facebook-f" id="facebook"></i
                    ></a>
                </li>
                <li>
                    <a
                        href="https://instagram.com/1xredha?igshid=YmMyMTA2M2Y="
                        target="_blank"
                        ><i class="fab fa-instagram" id="instagram"></i
                    ></a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/profile.php?id=100009677568934"
                        target="_blank"
                        ><i class="fab fa-twitter" id="twitter"></i
                    ></a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/profile.php?id=100009677568934"
                        target="_blank"
                        ><i class="fab fa-github" id="github"></i
                    ></a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style>
    #bawah {
        text-align: center;
        padding-top: 40px;
    }

    #copyright {
        text-align: center;
    }
    .title {
        cursor: pointer;
        color: white;
    }
    .navbar {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    #app {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding: 2rem;
        font-weight: normal;
        background-color: #2b2b2b;
        font-family: "montserrat", sans-serif;
    }
    .navbar .nav-link {
        text-decoration: none;
        color: white;
    }
    .navbar .nav-link:hover {
        color: inherit;
    }
    .nav-sub {
        list-style: none;
        display: flex;
        gap: 5px;
    }
    #toggler,
    .navbar label {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .menu {
            width: 100%;
            max-height: 0;
            overflow: hidden;
        }

        .nav-sub {
            flex-direction: column;
            align-items: center;
        }

        .navbar label {
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            padding: 5px;
        }

        #toggler:checked ~ .menu {
            max-height: 100%;
        }
    }
    .navbar i {
        color: white;
    }
    .icon {
        text-align: center;
    }
    #facebook {
        color: #0028b9;
    }
    #instagram {
        color: #c13584;
    }
    #github {
        color: aliceblue;
    }
    .icon ul li {
        display: inline-block;
        margin-left: 15px;
        margin-right: 15px;
        font-size: 35px;
        color: #333;
        cursor: pointer;
        transition: 0.3s;
    }

    .icon ul li:nth-child(1):hover {
        border-radius: 20%;
    }

    .icon ul li:nth-child(2):hover {
        border-radius: 20%;
    }

    .icon ul li:nth-child(3):hover {
        border-radius: 20%;
    }

    .icon ul li:nth-child(4)::before:hover {
        content: "-";
    }
</style>
