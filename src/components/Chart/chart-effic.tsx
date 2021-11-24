import {h, defineComponent, ref, getCurrentInstance, onMounted } from 'vue';
export default defineComponent({
    setup() {
        const myChart = ref<any>()
        const echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts
        const setChart = ()=>{
            myChart.value = echarts.init(document.getElementById('customereffic') as HTMLElement);
            myChart.value.setOption({
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [20, 100],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: [
                            { value: 40, name: 'rose 1' },
                            { value: 38, name: 'rose 2' },
                            { value: 32, name: 'rose 3' },
                            { value: 30, name: 'rose 4' },
                            { value: 28, name: 'rose 5' },
                            { value: 26, name: 'rose 6' },
                            { value: 22, name: 'rose 7' },
                            { value: 18, name: 'rose 8' }
                        ]
                    }
                ]
            });
        }
        onMounted(setChart)

        return () => h(
            <div id="customereffic" ref={myChart} style={{width:'350px', height:'230px'}}></div>
        )
    }
});