<template>
    <div class="wl_sidebar">
<!--        <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">-->
<!--            <MenuUnfoldOutlined v-if="collapsed" />-->
<!--            <MenuFoldOutlined v-else />-->
<!--        </a-button>-->
        <div class="logo">WL</div>
        <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed" style="width: 250px"
                v-model:selectedKeys="selectedKeys" @click="handleClick" >
            <a-menu-item key="1">
                <template #icon>
                    <PieChartOutlined />
                </template>
                <router-link to="/chart">Chart</router-link>
            </a-menu-item>
            <a-menu-item key="2">
                <template #icon>
                    <DesktopOutlined />
                </template>
                <router-link to="/table">Table</router-link>
            </a-menu-item>
            <a-menu-item key="3">
                <template #icon>
                    <InboxOutlined />
                </template>
                <router-link to="/layout">Layout</router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #icon>
                    <MailOutlined />
                </template>
                <template #title>Navigation One</template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #title>Navigation Two</template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { MenuFoldOutlined,MenuUnfoldOutlined,PieChartOutlined,MailOutlined,DesktopOutlined,InboxOutlined,AppstoreOutlined } from '@ant-design/icons-vue';
    interface Eventlist {
        key: String,
        doEvent: Event,
        eventKey: String,
        eventKeyPath: Array<any>,
        item? : Object,
        keyPath: Array<String>
    }

    const selectedKeys = ref<string[]>(['1']);
    const collapsed = ref<boolean>(false);
    const toggleCollapsed = ()=> {
        collapsed.value = !collapsed.value;
    }
    const handleClick = (e:Eventlist)=> {
        selectedKeys.value === [e.key]
        console.log(selectedKeys.value)
    }
</script>

<style scoped>
    .wl_sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 0px;
        bottom: 0;
        overflow-y: scroll;
        background-color: #011528;
    }
    .wl_sidebar::-webkit-scrollbar {
        width: 0;
    }
    .wl_sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }
    .wl_sidebar > ul {
        height: calc(100% - 85px);
    }
    .logo{
        font-size: 45px;
        color: #1abc9c;
        height: 50px;
        line-height: 50px;
    }
    .wl_sidebar .logo {
        font-size: 45px;
        color: #1abc9c;
        height: 50px;
        font-weight: bold;
        line-height: 50px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
        text-align: center;
    }
</style>