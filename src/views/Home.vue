<template>
    <div class="wl_global">
        <vHeader></vHeader>
        <div class="wl_main">
            <vSiber></vSiber>
            <div class="wl_content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import vHeader from '../common/Header.vue'
    import vSiber from '../common/Sidebar.vue'
</script>

<style>
    .wl_global {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #f0f0f0;
    }
    .wl_main {
        display: flex;
        height: 100%;
        width: 100%;
    }
    .wl_content {
        padding: 24px;
        width: 100%;
        overflow-y: auto;
        margin-bottom: 30px;
    }
</style>