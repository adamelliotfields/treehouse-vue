<template>
  <li
    v-show="isVisible"
    :class="[{ less: showDetail, more: !showDetail }, className]"
    @click="onClick"
  >
    <h3>{{ media.title }}</h3>
    <div v-show="showDetail">
      <p>{{ media.description }}</p>
      <p
        v-if="media.contributor"
        class="by"
      >
        By: {{ media.contributor }}
      </p>
    </div>
  </li>
</template>

<script>
import { mapState } from 'vuex';
import { slugify } from '../util';

export default {
  name: 'MediaListItem',

  props: {
    media: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    showDetail: false,
  }),

  computed: {
    ...mapState(['route']),
    className() {
      return slugify(this.media.type);
    },
    isVisible() {
      return this.route.path === '/' || this.route.params.type === slugify(this.media.type);
    },
  },

  methods: {
    onClick() {
      this.showDetail = !this.showDetail;
    },
  },
};
</script>

<style scoped>
li {
  border: #eaeaea solid 1px;
  margin: 10px 0;
  padding: 15px;
  border-left: #95effe solid 5px;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}
h3 {
  cursor: pointer;
  display: inline;
}
p {
  color: #333;
}
.more:after {
  content: "\25BC";
  font-size: 8px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -10px;
  font-size: 16px;
  color: #333;
}
.less:after {
  content: "\25B2";
  font-size: 8px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -10px;
  font-size: 16px;
  color: #333;
}
.book {
  border-left: #eb727e solid 5px;
}
.book > h3:before {
  content: "📖\00a0";
}
.streaming-video {
  border-left: #a0f2d0 solid 5px;
}
.streaming-video > h3:before {
  content: "📺\00a0";
}
.dvd > h3:before {
  content: "📀\00a0";
}
.by {
  font-size: 14px;
  font-style: italic;
}
</style>
