<template>
  <Container>
    <Heading text="Treehouse Public Library" />
    <MediaTypeSelect />
    <Spinner
      v-if="isLoading"
      color="#333"
    />
    <RouterView v-else />
  </Container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Container from './components/Container.vue';
import Heading from './components/Heading.vue';
import MediaTypeSelect from './components/MediaTypeSelect.vue';
import Spinner from './components/Spinner.vue';

export default {
  name: 'App',

  components: {
    Container,
    Heading,
    MediaTypeSelect,
    Spinner,
  },

  computed: {
    ...mapState(['isLoading']),
  },

  async mounted() {
    await this.fetchData('/api.json');
  },

  methods: {
    ...mapActions(['fetchData']),
  },
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  background: #f4f4f4;
}
</style>
