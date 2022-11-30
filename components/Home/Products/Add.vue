<template>
    <div @click="openModal" class="card w-96 bg-white shadow-xl m-auto flex justify-center cursor-pointer hover:shadow-xl h-96">
        <div class="card-body flex justify-center items-center">
            <h2 class="card-title">Agregar nuevo producto</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
  const {isModal} = useProductsModule()
const openModal = ()=>{
    isModal.value = true
}
</script>

<style scoped>

</style>