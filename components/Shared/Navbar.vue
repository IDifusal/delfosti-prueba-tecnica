<template>
<div class="navbar bg-base-100 shadow-xl">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Hola {{user.value.email}}</a>
  </div>
  <div class="flex-none gap-2">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><a @click="logOut">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
  const {user,logOut} = useProductsModule()
</script>

<style scoped>

</style>