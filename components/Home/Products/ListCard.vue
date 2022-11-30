
<script setup lang="ts">
const props = defineProps<{ items: any[] }>()
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-6 py-10">
        <HomeProductsCard v-for="item in props.items" :item="item">
        </HomeProductsCard>
        <HomeProductsAdd/>
    </div>
</template>


<style scoped>
.grid {
    justify-content: center;
}
</style>