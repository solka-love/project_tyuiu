<template>
    <div class="header">
       <router-link class="rl" to="/courses">
            EduTyuiu
        </router-link>
        <router-link class="rl" to="/user" v-if="$store.state.isAuth">
            {{ $store.state.UserName }}
        </router-link>
    </div>
    <router-view></router-view>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.header {
    height: 12.500vmin;

    border-radius: 0px 0px 0.5vmin 0.5vmin;
    background: #2677F0;

    display: flex;

    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    padding-left: 7vmin;
    padding-right: 7vmin;
}

.rl {
    color: #FFF;

    font-family: Inter;
    font-size: 3.333vmin;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
    text-decoration: none;
}
</style>