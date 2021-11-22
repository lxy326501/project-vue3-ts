<template>
    <div class="wl_Header">
        <div class="logo">
            <img src="../../assets/img/title.png">
            <div class="wl_name"> Cyber Data Co</div>
        </div>
        <div style="flex: 1 1 0%;"></div>
        <div class="wl_manage">
            <a-space>
                Space
                <a-button type="primary">Button</a-button>
                <div class="wl_title-account">
                    <a-dropdown>
                        <a class="ant-dropdown-link">
                            <span>
                                <a-avatar>USER</a-avatar>
                            </span>Hover me
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item key="0">
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                                        1st menu item
                                    </a>
                                </a-menu-item>
                                <a-menu-item key="1">
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                                        2nd menu item
                                    </a>
                                </a-menu-item>
                                <a-menu-divider />
                                <a-menu-item key="3" disabled>3rd menu item（disabled）</a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
                <a-upload>
                    <a-button>
                        Click to Upload
                    </a-button>
                </a-upload>
                <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
                    <a-button>Confirm</a-button>
                </a-popconfirm>
            </a-space>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .wl_title-account:hover {
        background-color: #c60b0b;
    }
    .ant-dropdown-link {
        color: white;
    }
    .wl_manage span{

    }
</style>