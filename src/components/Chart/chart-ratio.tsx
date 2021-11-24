import {h, defineComponent, ref, getCurrentInstance, onMounted } from 'vue';
export default defineComponent({
    props: {
        id: String,
        value: String,
        color: String,
    },
    setup(props) {
        console.log(typeof props.id)
        const myChart = ref<any>()
        const echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts
        const gaugeData = [
            {
                value: props.value,
                name: 'Perfect',
                title: {
                    offsetCenter: ['0%', '0%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '0%']
                }
            }
        ];
        const setChart = ()=>{
            myChart.value = echarts.init(document.getElementById(props.id+'') as HTMLElement);
            myChart.value.setOption({
                series: [
                    {
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        pointer: {
                            show: false
                        },
                        itemStyle: {
                            color: props.color,
                            shadowColor: 'rgba(0,138,255,0.45)',
                            shadowBlur: 10,
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        },
                        progress: {
                            show: true,
                            overlap: false,
                            roundCap: true,
                            clip: false,
                            itemStyle: {
                                borderWidth: 1,
                                borderColor: '#464646'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                width: 10
                            }
                        },
                        splitLine: {
                            show: false,
                            distance: 0,
                            length: 10
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            distance: 20
                        },
                        data: gaugeData,
                        title: {
                            fontSize: 0
                        },
                        detail: {
                            width: 50,
                            height: 14,
                            fontSize: 14,
                            color: '#1c1a1a',
                            borderRadius: 20,
                            borderWidth: 1,
                            formatter: '{value}%'
                        }
                    }
                ]
            });
        }
        onMounted(setChart)

        return () => h(
            <div id={props.id} ref={myChart} style={{width:'300px', height:'180px'}}></div>
        )
    }
});