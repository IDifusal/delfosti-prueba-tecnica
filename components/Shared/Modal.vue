<script setup lang="ts">
const { isModal, saveProduct } = useProductsModule()
const closeModal = () => {
    isModal.value = false
}
let obj = reactive({
    name: '',
    image: 'https://placeimg.com/400/225/arch',
    price: ''
})

const saveForm = () => {
    saveProduct(obj)
    obj = {
        name: '',
        image: '',
        price: ''
    }
    isModal.value = false
}
</script>
<template>
    <div class="moda w-screen h-screen">
        <form @submit.prevent="saveForm" class="moda-content relative flex flex-col  items-center">
            <div @click="closeModal" class="cursor-pointer moda-close absolute">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="2" fill="#F5F5F5" />
                    <path
                        d="M2 24C1.41667 24 0.9375 23.8125 0.5625 23.4375C0.1875 23.0625 0 22.5833 0 22V2C0 1.41667 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.41667 0 2 0H22C22.5833 0 23.0625 0.1875 23.4375 0.5625C23.8125 0.9375 24 1.41667 24 2V22C24 22.5833 23.8125 23.0625 23.4375 23.4375C23.0625 23.8125 22.5833 24 22 24H2ZM12 14L16 18L18 16L14 12L18 8L16 6L12 10L8 6L6 8L10 12L6 16L8 18L12 14Z"
                        fill="black" />
                </svg>
            </div>
            <h2 class="text-2xl mb-6">Agregar Producto</h2>
            <input v-model="obj.name" type="text" placeholder="Producto"
                class="input input-bordered input-accent w-full max-w-xs mb-5" />
            <input v-model="obj.image" type="text" placeholder="Image"
                class="input input-bordered input-accent w-full max-w-xs mb-5" />
            <input v-model="obj.price" type="text" placeholder="Price"
                class="input input-bordered input-accent w-full max-w-xs mb-5" />
            <button type="submit" class="btn btn-accent">Agregar</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.moda {
    background: rgba(2, 2, 2, 0.6);
    position: sticky;
    z-index: 9;
    display: flex;
    top: 0px;
    place-items: center;
    justify-content: center;

    &-content {
        width: 900px;
        background: rgba(2, 2, 2, 0.9);
        height: fit-content;
        padding: 58px 60px 29px 90px;
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
        border-radius: 15px;
    }

    &-close {
        top: 25px;
        right: 26px;
    }
}
</style>