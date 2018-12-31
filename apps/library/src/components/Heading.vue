<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  name: 'Heading',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
