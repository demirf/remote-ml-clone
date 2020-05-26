<script>
import Header from '../components/Header';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isContinue: true,
      formData: {}
    };
  },
  components: {
    Header
  },
  methods: {
    backButton() {
      this.isContinue = true;
    },
    ...mapActions(['createPost']),
    sendPost() {
      this.createPost(this.formData);
    },
    Images_onFileChanged(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', img => {
          this.formData.companyLogo = img.srcElement.result;
        });

        reader.readAsDataURL(file);
      }
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
              v-model="formData.companyName"
              type="text"
              class="input full-width"
              placeholder="Company Name*"
              required
            />
            <input
              v-model="formData.companyWebsite"
              type="text"
              class="input full-width"
              placeholder="Company Website*"
              required
            />
            <input
              v-model="formData.companyEmail"
              type="text"
              class="input full-width"
              placeholder="E-Mail*"
              required
            />
            <label>Company Logo*</label>
            <input
              type="file"
              accept="image/*"
              @change="Images_onFileChanged"
              class="input full-width is-primary"
              required
            />
            <button class="button is-primary" @click="isContinue = false">
              Continue
            </button>
          </template>
          <template v-else>
            <h1 class="title has-text-centered has-text-weight-light">
              Step 2: Job Post
            </h1>
            <input
              v-model="formData.jobTitle"
              type="text"
              class="input full-width"
              placeholder="Job Title*"
            />
            <div class="select">
              <select v-model="formData.jobCategory">
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Freelance</option>
              </select>
            </div>
            <div class="select">
              <select v-model="formData.jobLevel">
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>
            </div>
            <textarea
              v-model="formData.jobDescription"
              type="text"
              class="input full-width"
              placeholder="Job Description*"
            ></textarea>
            <div class="button-wrapper">
              <button class="button is-primary" @click="backButton">
                Prev
              </button>
              <button class="button is-primary" @click="sendPost">Share</button>
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
