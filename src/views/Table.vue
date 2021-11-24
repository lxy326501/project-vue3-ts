<template>
    <div class="wl_container">
        <div class="wl-toobler">
            <a-button type="primary" ghost @click="switchTables">{{ msg }}</a-button>
        </div>
        <div class="wl_table">
            <component :is="getComponent" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import a_table from '@/components/Tables/a-table'
    import e_table from '@/components/Tables/e-table'
    import { ref, computed } from 'vue'

    const msg = ref<String>('Element')

    const getComponent = computed(()=> {
        return msg.value === 'Element' ? a_table : e_table
    })

    const switchTables = ()=> {
        msg.value = msg.value === 'Element' ? 'Ant' : 'Element'
    }
</script>

<style scoped>
</style>