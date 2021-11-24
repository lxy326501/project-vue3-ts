import {h, defineComponent, ref, getCurrentInstance, onMounted } from 'vue';
export default defineComponent({
    setup() {
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

        return () => h(
            <div id="customerChart" ref={myChart} style={{width:'350px', height:'230px'}}></div>
        )
    }
});