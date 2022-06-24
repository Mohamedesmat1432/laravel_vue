<template>
    <div>
        <Header />
        <router-view> </router-view>
    </div>
</template>

<script>
import Header from "./components/partials/Header.vue";
export default {
    components: { Header },
};
</script>
