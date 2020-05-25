<script>
import Header from '../components/Header';

export default {
  data() {
    return {
      isContinue: true
    };
  },
  components: {
    Header
  },
  methods: {
    backButton() {
      this.isContinue = true;
    }
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
          <template v-if="isContinue">
            <h1 class="title has-text-centered has-text-weight-light">
              Step 1: Company Information
            </h1>
            <input
              type="text"
              class="input full-width"
              placeholder="Company Name*"
              required
            />
            <input
              type="text"
              class="input full-width"
              placeholder="Company Website*"
              required
            />
            <input
              type="text"
              class="input full-width"
              placeholder="E-Mail*"
              required
            />
            <label>Company Logo*</label>
            <input type="file" class="input full-width is-primary" required />
            <button class="button is-primary" @click="isContinue = false">
              Continue
            </button>
          </template>
          <template v-else>
            <h1 class="title has-text-centered has-text-weight-light">
              Step 2: Job Post
            </h1>
            <input
              type="text"
              class="input full-width"
              placeholder="Job Title*"
            />
            <div class="select">
              <select>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Freelance</option>
              </select>
            </div>
            <div class="select">
              <select>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>
            </div>
            <textarea
              type="text"
              class="input full-width"
              placeholder="Job Description*"
            ></textarea>
            <div class="button-wrapper">
              <button class="button is-primary" @click="backButton">
                Prev
              </button>
              <button class="button is-primary">Share</button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-wrapper.container {
  input,
  .select {
    margin-bottom: 1.5rem;
    width: 100%;
  }

  select {
    width: 100%;
  }

  .button-wrapper {
    display: flex;

    button {
      margin-top: 1.5rem;
      margin-right: 24px;
    }
  }

  textarea {
    min-height: 180px;
  }
}
</style>
