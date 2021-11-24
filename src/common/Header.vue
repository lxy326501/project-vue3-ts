<template>
    <div class="wl_Header">
        <div class="logo">
            <img src="../assets/img/title.png">
            <div class="wl_name"> Cyber Data Co</div>
        </div>
        <div style="flex: 1 0 6%;"></div>
        <div class="wl_manage">
            <a-space>
                <div class="wl_title-manage">
                    <SearchOutlined style="color: white" />
                </div>
                <div class="wl_title-manage">
                    <QuestionCircleOutlined style="color: white" />
                </div>
                <div class="wl_title-manage">
                    <a-dropdown :overlayStyle='{"color":"red  !important","min-width": "125px"}'>
                        <a class="ant-dropdown-link" @click.prevent>
                            <a-avatar :size="23" style="background-color: #7faaff;margin-right: 5px">
                                <template #icon><UserOutlined /></template>
                            </a-avatar>Xiao Ming
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item key="0">
                                    个人中心
                                </a-menu-item>
                                <a-menu-item key="1">
                                    个人设置
                                </a-menu-item>
                                <a-menu-divider />
                                <a-menu-item key="3">退出登录</a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
            </a-space>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { UserOutlined,SearchOutlined,QuestionCircleOutlined } from '@ant-design/icons-vue';
</script>

<style scoped>
    .wl_Header span{
        height: 100%;
    }
    .ant-dropdown-link {
        color: white;
    }
</style>