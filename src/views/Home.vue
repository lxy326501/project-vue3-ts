<template>
    <div class="wl_global">
        <vSiber />
        <div class="wl_content">
            <div class="wl_container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import vSiber from '../components/common/Sidebar.vue'
</script>

<style>
    .wl_global {
        width: 100%;
        height: 100%;
        overflow: hidden
    }
    .wl_content {
        position: absolute;
        left: 250px;
        right: 0;
        top: 70px;
        bottom: 0;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;
        padding: 10px;
    }
    .wl_container {
        padding: 30px;
        background: #fff;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>