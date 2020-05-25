<script>
import Navbar from '../components/Navbar';
import { mapState } from 'vuex';

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState(['posts'])
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
            <img
              src="https://kodilan.ams3.digitaloceanspaces.com/companies/epigra-bilgi-tek-ve-ilt-hiz-ltd-sti.png"
            />
          </div>
          <p class="title has-text-weight-light">
            Machine Learning Engineer
          </p>
          <div class="company-info">
            <span>Predictive Caller</span> ·
            <span class="company-location-date">Anywhere · May 20, 2020</span>
          </div>
          <div>
            <button class="button is-black send-email-button">
              <span class="icon">
                <i class="fa fa-envelope"></i>
              </span>
              <span>Apply</span>
            </button>
          </div>
          <div class="job-detail-list has-text-left">
            <ul>
              <li>
                Independently develop predictive regression machine learning
                models using a standard set of inputs
              </li>
              <li>
                Design pipelines to train and evaluate machine learning models
              </li>
              <li>Advise on deployment practices for real-time environment</li>
              <li>
                Help innovate model deployment and management through MLOps
                strategies
              </li>
              <li>
                Interact with external clients to explain data needs and model
                results
              </li>
              <li>
                Develop visuals (graphs, slides) supporting model build process
              </li>
            </ul>
          </div>
          <p class="requirements has-text-left">
            Requirements
          </p>
          <div class="job-detail-list has-text-left">
            <ul>
              <li>Strong Python skills. Scikit-learn, Numpy, Pandas</li>
              <li>
                Working knowledge of SAS required to support legacy models
              </li>
              <li>
                Demonstrated experience in building, validating, and deploying
                machine learning models
              </li>
              <li>Excellent verbal and written communication skills</li>
              <li>
                Ability to speak to logistic regression models at a variety of
                technical depths
              </li>
              <li>Must be a collaborative team player</li>
            </ul>
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
