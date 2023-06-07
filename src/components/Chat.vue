<script setup>
import { RobotOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { reactive } from "vue";

const route = useRoute();
const demand = route.query.demand;

const state = reactive({
  suggestion: {},
});
// let suggestion = reactive(null);
// const updateKey = ref(0)

// const suggestion = {
//     features: [
//         { label: "品牌", value: "联想" },
//         { label: "型号", value: "00001" },
//         { label: "内存", value: "16G" },
//         { label: "重量", value: "1.5 Kg" },
//         { label: "尺寸", value: "300 * 150 * 32 mm" },
//     ],
//     reason: "推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因推荐原因\n"
// }
const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});
instance
  .get("/chat", {
    params: { demand: demand },
  })
  .then(function (response) {
    // 处理成功情况
    state.suggestion = response.data;
    // console.log(suggestion)
    // return suggestion
    //     updateKey.value += 1
    // console.log(updateKey.value)
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
            <robot-outlined />
          </template>
        </a-avatar>
        <div class="h1" style="color: black; margin-left: 25px">
          以下是为您推荐的产品，供您参考
        </div>
      </div>
      <a-card style="margin-top: 20px">
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
          }}</a-descriptions-item>
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
</style>
