<template>
  <NotFound v-if="isNotFound" />
  <ul v-else>
    <MediaListItem
      v-for="(media, i) in mediaList"
      :key="i"
      :media="media"
    />
  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MediaListItem from './MediaListItem.vue';
import NotFound from './NotFound.vue';

export default {
  name: 'MediaList',

  components: {
    MediaListItem,
    NotFound,
  },

  computed: {
    ...mapState(['mediaList']),
    ...mapGetters(['isNotFound']),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  border-radius: 5px;
}
</style>
