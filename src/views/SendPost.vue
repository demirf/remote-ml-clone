<script>
import Header from '../components/Header';

export default {
  components: {
    Header
  }
};
</script>

<template>
  <div>
    <Header slot="content">
      <template slot="content">
        <h1>Post a new job</h1>
        <p>
          Notice: This is a job board for Remote positions only. If your job
          posting does not include the ability to work from outside of the
          office, please do not post it here.
        </p>
        <p>
          Reach a community of over 2k+ monthly users and 1,500 registered
          Machine Learning Engineers by hiring on RemoteML.
        </p>
      </template>
    </Header>
    <div class="card-spacing card-wrapper container">
      <div class="card">
        <div class="card-content">
          <h1 class="title has-text-centered has-text-weight-light">
            Step 1: Company Information
          </h1>
          <input
            type="text"
            class="input full-width"
            placeholder="Company Name*"
          />
          <input
            type="text"
            class="input full-width"
            placeholder="Company Website*"
          />
          <input type="text" class="input full-width" placeholder="E-Mail*" />
          <label>Company Logo*</label>
          <input type="file" class="input full-width is-primary" />
          <button class="button is-primary">Abone ol</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-wrapper.container {
  input {
    margin-bottom: 1.5rem;
  }
}
</style>
