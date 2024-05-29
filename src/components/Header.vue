<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="Vue logo">
    </div>
    <nav>
      <!-- Router links akan dimasukkan di App.vue -->
      <slot name="nav-links"></slot>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #42b983;
}

.logo img {
  height: 50px;
}

nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: yellow;
}
</style>
