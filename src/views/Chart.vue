<template>
    <div class="wl_container-chart-one">
        <div class="wl_container-map">
            <a-card title="实时监控情况" style="text-align: left;width: 100%;" bodyStyle="padding: 10px">
                <China />
            </a-card>
        </div>
        <div class="wl_container-thrend">
            <div>
                <a-card title="情况预测" style="text-align: left;width: 100%;" bodyStyle="padding: 10px;">
                    <Thrend />
                </a-card>
            </div>
            <div :style="{marginTop: '15px'}">
                <a-card title="人员效率" style="text-align: left;width: 100%;" bodyStyle="padding: 10px;">
                    <Effic />
                </a-card>
            </div>
        </div>
    </div>
    <div class="wl_container-chart-two">
        <div class="wl_container-radio">
            <a-card title="各类占比" style="text-align: left;width: 100%;" bodyStyle="padding: 10px;display: flex;">
                <Ration value="20" id="radio1" color="#58D9F9" />
                <Ration value="33" id="radio2" color="#f9b137" />
                <Ration value="62" id="radio3" color="#42c568" />
            </a-card>
        </div>
        <div class="wl_container-keyword">

        </div>
    </div>
</template>

<script setup lang="ts">
    import China from "@/components/Chart/chart-map";
    import Thrend from "@/components/Chart/chart-trend";
    import Effic from "@/components/Chart/chart-effic"
    import Ration from "@/components/Chart/chart-ratio";
</script>

<style scoped>
    .wl_container-chart-one {
        display: flex;
    }
    .wl_container-chart-two {
        display: flex;
    }
    .wl_container-map {
        width: 76%;
        background-color: white;
        margin: 10px 0;
    }
    .wl_container-radio {
        width: 50%;
        background-color: white;
        margin: 10px 0;
    }
    .wl_container-thrend {
        margin: 10px 0px 10px 20px;
        height: 100% ;
    }
</style>