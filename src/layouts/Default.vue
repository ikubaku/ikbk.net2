<template>
  <i-layout>
    <i-layout-header>
      <i-navbar>
        <i-navbar-brand>
          <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
        </i-navbar-brand>
        <i-navbar-items class="_justify-content-end">
          <i-nav>
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">About</g-link>
            <g-link class="nav__link" to="/works/">Works</g-link>
            <g-link class="nav__link" to="/hall_of_fame">The Hall of Fame</g-link>
          </i-nav>
        </i-navbar-items>
      </i-navbar>
    </i-layout-header>
    <i-layout-content>
      <slot />
    </i-layout-content>
    <i-layout-footer>
      <p>2021 C ikubaku - all rights reserved</p>
    </i-layout-footer>
  </i-layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
