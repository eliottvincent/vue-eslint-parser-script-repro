<template lang="pug">
.hello-world
  span {{ "Hello world" }}
</template>

<script>
// NPM
import { definePageMeta, useHead } from "#imports";
import { useI18n } from "vue-i18n";

definePageMeta({
  layout: "showcase"
});

useHead({
  title: "Hello World"
});
</script>