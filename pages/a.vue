<template>
    <div>{{ $t('random_9975') }}</div>
</template>
<script setup>
const localRoute = useLocaleRoute();

defineI18nRoute({
  paths: {
    en: '/',
    de: '/',
  },
});
</script>