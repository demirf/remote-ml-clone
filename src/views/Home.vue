<script>
import Header from '../components/Header';
import PostList from '../components/PostList';

export default {
  components: {
    Header,
    PostList
  }
};
</script>

<template>
  <div class="home">
    <Header />
    <post-list />
  </div>
</template>
