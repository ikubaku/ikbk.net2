<template>
  <Layout>
    <div>
      <h1 v-html="$page.post.title" />
      <div v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
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
