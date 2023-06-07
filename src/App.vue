<template>
    <a-layout class="layout">
        <a-layout-header style="display: flex">

            <div class="logo">
                <img src="@/assets/logo.png" alt="logo" height="50"/>
            </div>
            <a-divider type="vertical" style="height: 70%; background-color: #ffffff; margin-bottom: auto; margin-top: auto;"/>
            <div class="h1" style="color: white; margin-left: 5px">笔记本电脑推荐系统</div>

        </a-layout-header>
        <a-layout-content style="padding: 50px 50px">
            <div style="min-height: 600px">
                <router-view></router-view>
            </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Mobile Internet Team 4 @ 2023
        </a-layout-footer>
    </a-layout>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    setup() {
        return {
            selectedKeys: ref<string[]>(['2']),
        };
    },
});
</script>
<style>
.layout {
    height: 100%;
}

.h1 {
    font-size: x-large;
}
</style>
