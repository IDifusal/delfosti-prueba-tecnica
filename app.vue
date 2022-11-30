<script setup lang="ts">
const { isLoading, isModal, getListProducts, products,isUserLoged } = useProductsModule()
onMounted(() => {
  getListProducts()
})
</script>
<template>
  <div class="relative">
    <SharedForm v-if="!isUserLoged" />
    <div v-else>
      <SharedModal v-if="isModal" />
      <SharedNavbar />
      <HomeProductsListCard :items="products" />
      <SharedLoading v-if="isLoading" />
    </div>
  </div>
</template>
