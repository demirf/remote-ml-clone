<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    postDetail() {
      this.$router.push(`post-detail/${this.post._id}`);
    }
  }
};
</script>

<template>
  <div class="columns card-wrapper">
    <div class="column is-half">
      <div class="card" @click="postDetail">
        <div class="card-content">
          <img v-if="post.companyLogo" :src="post.companyLogo" />
          <img
            v-else
            src="https://kodilan.com/img/empty-company-logo.8437254b.png"
          />
          <div class="description">
            <h3 class="job-title">{{ post.jobTitle }}</h3>
            <p class="company-name">{{ post.companyName }}</p>
            <div class="tags">
              <p class="tag">Machine Learning</p>
              <p class="tag">Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-wrapper {
  padding: 0 15px;

  .column.is-half {
    margin: 0 auto;

    .card {
      border-radius: 6px;
      cursor: pointer;

      &-content {
        display: flex;
        align-items: center;

        .description {
          padding-left: 40px;

          .job-title {
            font-size: 1.563rem;
            font-weight: 400;
            color: #000;
          }

          .company-name {
            margin-top: 6px;
            margin-bottom: 18px;
          }
        }

        img {
          width: 120px;
          height: 120px;
          border-radius: 100%;
        }
      }
    }
  }
}
</style>
