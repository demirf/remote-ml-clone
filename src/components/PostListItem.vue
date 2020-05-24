<template>
  <div class="columns card-wrapper">
    <div class="column is-half">
      <div class="card">
        <div class="card-content">
          <img
            src="https://kodilan.ams3.digitaloceanspaces.com/companies/epigra-bilgi-tek-ve-ilt-hiz-ltd-sti.png"
          />
          <div class="description">
            <h3 class="job-title">Machine Learning Engineer</h3>
            <p class="company-name">Monte Carlo Data</p>
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
      }
    }
  }
}
</style>
