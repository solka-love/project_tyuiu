<template>
    <div class="app">
        <auth-form></auth-form>
        <my-header></my-header>
    </div>
</template>

<script>
import AuthForm from "@/components/AuthForm.vue"
import MyHeader from "@/components/MyHeader.vue"
export default {
    components: {
        AuthForm,
        MyHeader
    }
}
</script>

<style>
#app {
    min-height: 100vh;

    font-family: Inter;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow: auto;

    background-image: url("assets/background.png");
    background-size: cover;

    position: absolute;
    width: 100vw;
    height: 100vh;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
    outline: none;
    border: none
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

*::-webkit-scrollbar {
    width: 12px;               /* ширина всей полосы прокрутки */
}

*::-webkit-scrollbar-track {
    background: #2677F0;        /* цвет зоны отслеживания */
}

*::-webkit-scrollbar-thumb {
    background-color: white;    /* цвет бегунка */
    border-radius: 20px;       /* округлось бегунка */
    border: 3px solid #2677F0;  /* отступ вокруг бегунка */
}

</style>
