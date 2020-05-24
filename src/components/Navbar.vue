<template>
  <nav class="navbar bg-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <i class="fab fa-affiliatetheme fa-2x"></i>
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/send-post" class="button is-rounded header-bg">
                İlan paylaş
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  padding: 1.5rem 0;

  .navbar-item {
    color: #fff !important;
    font-size: 1rem;

    &:hover {
      background: none;
    }
  }
}
</style>
