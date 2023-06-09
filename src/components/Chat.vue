<script setup>
import {RobotOutlined} from "@ant-design/icons-vue";
import {useRoute} from "vue-router";
import axios from "axios";
import {reactive} from "vue";

const route = useRoute();
const demand = route.query.demand;

const state = reactive({
    suggestion: {},
    loading: true
});

const instance = axios.create({
    baseURL: "/api",
    timeout: 500000,
});
instance
    .get("/chat", {
        params: {demand: demand},
    })
    .then(function (response) {
        // 处理成功情况
        state.suggestion = response.data;
        state.loading = false;
    })
    .catch();
</script>

<template>
    <a-row style="margin-top: 50px">
        <a-col :span="4"></a-col>
        <a-col :span="16">
            <div style="display: flex">
                <a-avatar :size="64" style="background-color: #1890ff">
                    <template #icon>
                        <robot-outlined/>
                    </template>
                </a-avatar>
                <div class="h1" style="color: black; margin-left: 25px">
                    以下是为您推荐的产品，供您参考
                </div>
            </div>
            <a-card v-if="state.loading" class="loading">
                <a-spin size="large"/>
                <h3 style="margin-top: 20px">正在为您推荐，请耐心等待</h3>
            </a-card>
            <a-card style="margin-top: 20px" v-if="!state.loading">
                <a-descriptions title="用户诉求" style="margin-top: 25px">
                    <a-descriptions-item>{{
                        demand
                        }}
                    </a-descriptions-item>
                </a-descriptions>
                <a-descriptions title="产品信息">
                    <a-descriptions-item
                            v-for="feat in state.suggestion.features"
                            :label="feat.label"
                    >
                        {{ feat.value }}
                    </a-descriptions-item>
                </a-descriptions>
                <a-descriptions title="推荐原因" style="margin-top: 25px">
                    <a-descriptions-item>{{
                        state.suggestion.reason
                        }}
                    </a-descriptions-item>
                </a-descriptions>
            </a-card>
        </a-col>
        <a-col :span="4"></a-col>
    </a-row>
</template>

<style scoped>
.h1 {
    font-size: x-large;
}
.loading {
    text-align: center;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
