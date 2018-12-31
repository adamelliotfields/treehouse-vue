<template>
  <ul>
    <li
      v-for="card in cards"
      :key="card.id"
    >
      <Card :card="card" />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

import Card from './Card.vue';

export default {
  name: 'CardList',

  components: {
    Card,
  },

  computed: {
    ...mapState(['cards']),
  },
};
</script>

<style scoped>
ul {
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
}
li {
  list-style-type: none;
  padding: 10px 10px;
  transition: all 0.3s ease;
}
li:hover{
  transform: scale(1.1);
}
</style>
