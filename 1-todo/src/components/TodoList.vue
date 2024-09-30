<template>
  <ul>
    <li>
      <button>X</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
</style>
