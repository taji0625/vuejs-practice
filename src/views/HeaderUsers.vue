<template>
  <nav>
    <h2>Users</h2>
    <router-link
      to="/" 
      active-class="link--active"
      exact
      class="link"
    >HOME</router-link>
    <router-link
      to="/users"
      active-class="link--active"
      exact
      class="link"
    >Users</router-link>
  </nav>
</template>

<style scorped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 22px;
}
</style>