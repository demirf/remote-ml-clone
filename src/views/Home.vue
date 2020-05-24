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
    <Header>
      <template slot="content">
        <h1>Remote Machine Learning Jobs</h1>
        <p>
          The best place to find Remote work in Machine Learning, Data Science,
          Deep Learning and Artificial Intelligence. Get new jobs to your inbox
          daily.
        </p>
        <input type="text" class="input full-width" placeholder="Email" />
        <button class="button header-bg is-rounded">Abone ol</button>
      </template>
    </Header>
    <post-list />
  </div>
</template>
