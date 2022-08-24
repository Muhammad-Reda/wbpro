<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <p>Muhammad Reda</p>
            </div>

            <ul v-show="!mobile" class="navigation">
                <li>
                    <RouterLink :to="{ name: 'home' }" class="link"
                        >Home</RouterLink
                    >
                </li>
                <li>
                    <RouterLink :to="{ name: 'About' }" class="link"
                        >About</RouterLink
                    >
                </li>
                <li>
                    <RouterLink :to="{ name: 'Contact' }" class="link"
                        >Contact</RouterLink
                    >
                </li>
                <li>
                    <RouterLink :to="{ name: 'Quran' }" class="link"
                        >Quran</RouterLink
                    >
                </li>
            </ul>

            <div class="icon">
                <i
                    @click="toggleMobileNav"
                    v-show="mobile"
                    class="fa fa-bars"
                    :class="{ 'icon-active': mobileNav }"
                ></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <RouterLink :to="{ name: 'home' }" class="link"
                            >Home</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'About' }" class="link"
                            >About</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'Contact' }" class="link"
                            >Contact</RouterLink
                        >
                    </li>

                    <li>
                        <RouterLink :to="{ name: 'Quran' }" class="link"
                            >Quran</RouterLink
                        >
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                scrolledNav: null,
                mobile: null,
                mobileNav: null,
                windowWidth: null,
            };
        },

        created() {
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
        },

        mounted() {
            window.addEventListener("scroll", this.updateScroll);
        },

        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },

            updateScroll() {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 50) {
                    this.scrolledNav = true;
                    return;
                }
                this.scrolledNav = false;
            },

            checkScreen() {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 750) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            },
        },
    };
</script>

<style scoped>
    .scrolled-nav {
        background-color: rgb(0, 0, 0, 0.6);
    }

    .scrolled-nav nav {
        padding: 8px 0;
    }

    header {
        background-color: rgba(0, 0, 0, 0);
        z-index: 99;
        width: 100%;
        position: fixed;
        transition: 0.5s ease all;
        color: rgb(255, 255, 255);
        right: 1px;
        top: 0;
    }

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        transition: 0.5s ease all;
        width: 90%;
        margin: 0 auto;
        @media (min-width: 1140px;) {
            max-width: 1140px;
        }
    }

    ul,
    .link {
        font-weight: 500;
        color: white;
        list-style: none;
        text-decoration: none;
    }

    li {
        text-transform: uppercase;
        padding: 16px;
        margin-left: 16px;
    }

    .link {
        font-size: 14px;
        transition: 0.5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid tran;
    }
    .navigation .link:hover {
        color: #00afea;
        border-color: #00afea;
    }

    .branding {
        display: flex;
        align-items: center;
    }

    .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
    }

    .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 10px;
        height: 100%;
    }

    .icon i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
    }

    .icon-active {
        transform: rotate(180deg);
    }

    .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 100%;
        background-color: white;
        left: 0;
        top: 0;
    }

    .dropdown-nav li {
        margin-left: 0;
    }

    .dropdown-nav li .link {
        color: rgb(181, 166, 166);
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
        transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
    }
</style>
