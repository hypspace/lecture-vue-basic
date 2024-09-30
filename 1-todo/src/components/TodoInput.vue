<template>
  <div>
    <input placeholder="Add a new todo" autofocus />
    <button type="button">add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
}
</style>
