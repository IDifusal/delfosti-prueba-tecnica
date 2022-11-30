<script setup lang="ts">
import type { Product } from '../../../interfaces/Product';
const props = defineProps<{item:Product}>()
const {updateFavorite,deleteProduct} = useProductsModule()

const activeCard = () => {
    updateFavorite(props.item,!props.item.isFavorite)
    props.item.isFavorite = !props.item.isFavorite
}
const deleteCard = () => { 
    deleteProduct(props.item)
 }
</script>
<template>
    <div class="card w-96 bg-base-100 shadow-md hover:shadow-2xl relative">
        <div @click="deleteCard" class="card-delete absolute cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="2" fill="#F5F5F5" />
                <path
                    d="M2 24C1.41667 24 0.9375 23.8125 0.5625 23.4375C0.1875 23.0625 0 22.5833 0 22V2C0 1.41667 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.41667 0 2 0H22C22.5833 0 23.0625 0.1875 23.4375 0.5625C23.8125 0.9375 24 1.41667 24 2V22C24 22.5833 23.8125 23.0625 23.4375 23.4375C23.0625 23.8125 22.5833 24 22 24H2ZM12 14L16 18L18 16L14 12L18 8L16 6L12 10L8 6L6 8L10 12L6 16L8 18L12 14Z"
                    fill="black" />
            </svg>
        </div>
        <figure><img :src="props.item.image" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">{{props.item.name}}</h2>
            <p>{{props.item.price}}</p>
            <div @click="activeCard" class="card-actions justify-end cursor-pointer">
                <svg class="heart" :class="props.item.isFavorite ? 'favorite' : ''"
                    viewBox="0 0 32 29.6">
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                </svg>
            </div>

        </div>
    </div>
</template>



<style lang="scss" scoped>
.card {
    &-delete {
        top: 8px;
        right: 8px;
    }
}

.heart {
    width: 30px;
    fill: white;

    &.favorite {

        fill: red
    }
}
</style>