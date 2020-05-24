<script>
import Navbar from './Navbar';
export default {
  components: {
    Navbar
  }
};
</script>

<template>
  <header class="header bg-primary">
    <div class="header-content container">
      <navbar />
      <div class="columns header-content">
        <div class="column is-two-thirds">
          <h1>Remote Machine Learning Jobs</h1>
          <p>
            The best place to find Remote work in Machine Learning, Data
            Science, Deep Learning and Artificial Intelligence. Get new jobs to
            your inbox daily.
          </p>
          <input type="text" class="input full-width" placeholder="Email" />
          <button class="button header-bg is-rounded">Abone ol</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  height: 70vh;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    color: #fff;

    h1 {
      font-size: 3.815rem;
      line-height: 1;
      font-weight: 300;
    }

    p {
      font-size: 1.25rem;
      margin: 1.5rem 0;
    }

    button {
      margin-top: 1.5rem;
    }
  }
}
</style>
