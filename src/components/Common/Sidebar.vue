<template>
    <div id="wl_sidebar" class="wl_sidebar">
        <a-menu class="wl_sidebar-main" mode="inline" :inline-collapsed="collapsed" style="width: 100%;overflow-y: auto;overflow-x: hidden;"
                v-model:selectedKeys="selectedKeys" @click="handleClick" >
            <a-menu-item key="Chart">
                <template #icon>
                    <PieChartOutlined />
                </template>
                <router-link to="/chart">Chart</router-link>
            </a-menu-item>
            <a-menu-item key="Table">
                <template #icon>
                    <DesktopOutlined />
                </template>
                <router-link to="/table">Table</router-link>
            </a-menu-item>
            <a-menu-item key="3">
                <template #icon>
                    <InboxOutlined />
                </template>
                <router-link to="/test">Layout</router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #icon>
                    <MailOutlined />
                </template>
                <template #title>表单页</template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #title>列表页</template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
        <a-divider style="margin: 1px 0;" />
        <div class="wl_sidebar-button">
            <ul @click="toggleCollapsed">
                <li>
                    <MenuFoldOutlined v-if="!collapsed" style="width: 20px;height: 20px;" />
                    <MenuUnfoldOutlined v-else style="width: 20px;height: 20px;" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useRoute   } from 'vue-router'
    import { MenuUnfoldOutlined,MenuFoldOutlined,PieChartOutlined,MailOutlined,DesktopOutlined,InboxOutlined,AppstoreOutlined,ReadOutlined } from '@ant-design/icons-vue';
    interface Eventlist {
        key: String,
        doEvent: Event,
        eventKey: String,
        eventKeyPath: Array<any>,
        item? : Object,
        keyPath: Array<String>
    }
    const route = ref<any>(useRoute())
    const selectedKeys = ref<string[]>([route.value.name]);
    const collapsed = ref<boolean>(false);
    const toggleCollapsed = ()=> {
        collapsed.value = !collapsed.value
        /* 改变侧边栏宽度 */
        const dom = document.getElementById('wl_sidebar')
        if (dom && collapsed.value) dom.style.width = '48px'
        else if(dom && !collapsed.value) dom.style.width = '235px'
    }
    const handleClick = (e:Eventlist)=> {
        selectedKeys.value === [e.key]
    }
</script>

<style scoped>
    .wl_sidebar {
        background-color: #ffffff;
        width: 235px;
    }
    .ant-menu-sub.ant-menu-inlin {
        background-color: antiquewhite;
    }
</style>