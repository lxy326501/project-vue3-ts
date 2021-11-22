<template>
    <div class="wl_container">
        <div id="customerChart" ref="myChart" :style="{ width: '300px', height: '300px' }"></div>
        <div>{{ count }}</div>
        <button @click="buttonClick">按钮</button>
        <div>{{ props.msg }}</div>
        <Login></Login>
    </div>
</template>

<script setup lang="ts">
import Login from "./login.vue"
import { ref,reactive,getCurrentInstance,onMounted } from 'vue'
import { OBJ } from "#/chart";
//chart display
const count = ref(0)
const myChart = ref<any>()
const echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts
const setChart = ()=>{
    myChart.value = echarts.init(document.getElementById('customerChart') as HTMLElement);
    myChart.value.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
            data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
            {
                name: "用户量",
                type: "line",
                data: [5, 20, 36, 10, 10, 20],
            },
        ],
    });
}
onMounted(setChart)
const buttonClick = () => { count.value++ }

//get porops
const props = defineProps<{msg?: string,data? :Object }>()
const obj = reactive({
    count: {
        data: [0,1,2,3],
    }
}) as OBJ

</script>

<style scoped>

</style>