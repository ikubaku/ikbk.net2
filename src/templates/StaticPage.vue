<template>
  <Layout>
    <div>
      <h1 v-html="$page.staticPage.title" />
      <div v-html="$page.staticPage.content" />
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  staticPage(id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  name: "",
};
</script>

<style scoped></style>
