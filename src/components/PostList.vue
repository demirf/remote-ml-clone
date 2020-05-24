<script>
import PostListItem from './PostListItem';
export default {
  components: {
    PostListItem
  }
};
</script>

<template>
  <div class="post-list-container">
    <post-list-item v-for="i in 3" :key="i" />
  </div>
</template>

.<style lang="scss">
.post-list-container {
  background: #f8f8f8;
  padding-top: 50px;
  height: 100vh;
}
</style>
