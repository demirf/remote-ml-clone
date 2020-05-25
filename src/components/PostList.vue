<script>
import PostListItem from './PostListItem';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    PostListItem
  },
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    ...mapActions(['fetchAllPost'])
  },
  mounted() {
    this.fetchAllPost();
  }
};
</script>

<template>
  <div class="post-list-container">
    <post-list-item v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

.<style lang="scss">
.post-list-container {
  background: #f8f8f8;
  padding-top: 50px;
  height: 100vh;
}
</style>
