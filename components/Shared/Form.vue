
<script setup lang="ts">
const { createUser, loginUser, errorMessage,loginWithGoogle } = useProductsModule()
const isCreateUser = ref(true)
const userData = reactive({
    email: '',
    password: ''
})
const checkForm = () => {
    if (userData.password.length < 6) {
        errorMessage.value = 'La contraseña debe tener 6 caracteres como minimo'
        return
    } else {
        if (isCreateUser.value) {
            createUser(userData)
        } else {
            loginUser(userData)
        }
    }

}
</script>
<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {{ isCreateUser ? 'Crear cuenta' : 'Iniciar sesion' }}
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="checkForm">
                        <div>
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                            <input v-model="userData.email" type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contrasena</label>
                            <input v-model="userData.password" type="password" name="password" id="password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <button type="submit"
                            class="w-full text-primary bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{{
                                    isCreateUser
                                        ? 'Crear Cuenta' : 'Iniciar sesion'
                            }}</button>
                        <div class="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-between">
                            {{ isCreateUser ? 'No tienes una cuenta?' : 'Quieres iniciar sesion?' }}<div
                                @click="isCreateUser = !isCreateUser"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">
                                {{ isCreateUser ? 'Iniciar sesion' : 'Crear cuenta' }}</div>
                        </div>
                    </form>
                    <button @click="loginWithGoogle"  type="button"
                        class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab"
                            data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                            </path>
                        </svg>
                        Sign in with Google
                    </button>
                    <div v-if="errorMessage !== ''" class="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{{ errorMessage }}.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>

</style>