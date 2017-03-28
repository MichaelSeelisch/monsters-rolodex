<template>
  <div>
    <li :class="{ 'removed': item.checked }">
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="item.checked" />
          <span>
            {{ item.text }}
          </span>
        </label>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    props: ['item']
  };
</script>

<style scoped>
  .removed {
    color: gray;
  }

  .removed span {
    text-decoration: line-through;
  }

  li {
    list-style-type: none;
  }

  li span {
    margin-left: 5px;
  }
</style>
