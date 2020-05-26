<script>
import Navbar from '../components/Navbar';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      post: {}
    };
  },
  components: {
    Navbar
  },
  computed: {
    jobTitle() {
      return `${this.post.jobLevel} ${this.post.jobTitle}`;
    }
  },
  methods: {
    ...mapActions(['fetchPostDetail']),
    postDetail() {
      const postId = this.$route.params.id;

      return this.fetchPostDetail(postId);
    }
  },
  mounted() {
    this.postDetail()
      .then(res => {
        this.post = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<template>
  <div class="post-detail">
    <navbar />
    <div class="card-spacing has-text-centered	container">
      <div class="card">
        <div class="card-content">
          <div class="company-logo">
            <img v-if="post.companyLogo" :src="post.companyLogo" />
            <img
              v-else
              src="https://kodilan.com/img/empty-company-logo.8437254b.png"
            />
          </div>
          <p class="title has-text-weight-light">
            {{ jobTitle }}
          </p>
          <div class="company-info">
            <span>{{ post.companyName }}</span> -
            <span>{{ post.jobCategory }}</span>
            <!-- <span class="company-location-date">Anywhere · May 20, 2020</span> -->
          </div>
          <div>
            <a
              :href="`mailto:${post.companyEmail}`"
              target="_blank"
              class="button is-black send-email-button"
            >
              <span class="icon">
                <i class="fa fa-envelope"></i>
              </span>
              <span>Apply</span>
            </a>
          </div>
          <div class="job-detail-list has-text-left">
            {{ post.jobTitle }}
          </div>
          <p class="requirements has-text-left">
            Requirements
          </p>
          <div class="job-detail-list has-text-left">
            {{ post.jobTitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.post-detail {
  .company-info {
    font-weight: 500;
    color: #000;

    .company-location-date {
      color: rgb(90, 97, 105);
    }
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 100%;
  }

  .send-email-button {
    margin: 1.25rem 0;
  }

  .requirements {
    padding: 2.5rem 0;
    font-weight: 500;
    color: rgb(90, 97, 105);
  }

  .job-detail-list {
    padding-left: 2.5rem;

    ul {
      li {
        list-style: inside;
      }
    }
  }
}
</style>
