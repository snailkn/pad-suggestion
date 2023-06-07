<script setup>

import {LaptopOutlined} from "@ant-design/icons-vue";
import router from "@/router";

const onSearch = (searchValue) => {
    router.push({path: 'chat', query: {demand: searchValue}})
    // console.log('or use this.value', value.value);
};
</script>

<template>
    <a-row style="margin-top: 200px">
        <a-col :span="4"></a-col>
        <a-col :span="16">
            <div style="display: flex; justify-content: center; align-items: center;">
                <laptop-outlined style="font-size: 80px; color: #1890ff"/>
            </div>
            <a-input-search class="search"
                            placeholder="请输入你的选购需求"
                            enter-button
                            @search="onSearch"
                            size="large"
                            style="margin-top: 30px"
            />
        </a-col>
        <a-col :span="4"></a-col>
    </a-row>
<!--    <a-row></a-row>-->
</template>

<style scoped>
    .search {
        margin-bottom: auto;
        margin-top: auto;
    }
</style>