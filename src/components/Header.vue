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
          <slot name="content" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  height: 70vh;
  padding: 0 1.5rem;

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
