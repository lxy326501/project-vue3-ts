<template>
    <div class="wl-toobler">
        <a-button type="primary" ghost @click="switchTables">{{ msg }}</a-button>
    </div>
    <div class="wl_table">
        <component :is="getComponent" />
    </div>
</template>

<script setup lang="ts">
import a_table from '@/components/tables/a_table.vue'
import e_table from '@/components/tables/e_table.vue'
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