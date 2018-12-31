<template>
  <select
    v-model.lazy="selected"
    @change="onChange($event)"
  >
    <option
      value=""
      disabled
    >
      Select a type of media...
    </option>
    <option
      v-for="(type, i) in mediaTypeList"
      :key="i"
      :value="type | slugify"
    >
      {{ type }}
    </option>
  </select>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { slugify } from '../util';

export default {
  name: 'MediaTypeSelect',

  // Use the slugify function as a filter
  mixins: [{
    filters: { slugify },
  }],

  data: () => ({
    selected: '',
  }),

  computed: {
    ...mapState(['mediaList', 'route']),
    ...mapGetters(['mediaTypeList']),
  },

  // Update the dropdown when a user manually goes to a route
  updated() {
    const { type } = this.route.params;

    // Don't use this at work - your coworkers will tell you to use if-elseif-else
    switch (true) {
      case this.route.path === '/':
        this.selected = 'all';
        break;
      case this.mediaList.map(m => slugify(m.type)).includes(type):
        this.selected = type;
        break;
      default:
        this.selected = '';
    }
  },

  methods: {
    onChange(event) {
      const { value } = event.target;
      this.$router.push({ path: value === 'all' ? '/' : `/${slugify(value)}` });
    },
  },
};
</script>

<style scoped>
select {
  position: absolute;
  right: 0;
  top: 5px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  background-image: url(../assets/arrow.png), linear-gradient(#fff, #fff 40%, #fff);
  background-position: 97% center;
  background-repeat: no-repeat;
  border: 1px solid #eaeaea;
  color: #555;
  font-size: inherit;
  overflow: hidden;
  padding: 5px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
  outline: none;
  -webkit-appearance: button;
  -webkit-padding-start: 2px;
  -webkit-padding-end: 20px;
  -webkit-user-select: none;
}
</style>
