<template>
  <Transition name="flip">
    <p
      :key="flipped"
      @click="onToggleClick"
    >
      {{ flipped ? card.back : card.front }}
      <span @click="onDeleteClick">
        X
      </span>
    </p>
  </Transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Card',

  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    flipped: false,
  }),

  methods: {
    ...mapActions(['removeCard']),
    onToggleClick() {
      this.flipped = !this.flipped;
    },
    onDeleteClick() {
      this.removeCard(this.card.id);
    },
  },
};
</script>

<style scoped>
p {
  display: block;
  width: 150px;
  height: 175px;
  padding: 80px 50px;
  background-color: #51aae5;
  border-radius: 7px;
  margin: 5px;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
  position: relative;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
  will-change: transform;
}
span {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 15px;
  opacity: .4;
  transition: all 0.5s ease;
}
span:hover {
  opacity: 1;
  transform: rotate(360deg);
}
.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}
.flip-enter-active {
  transition: all 0.4s ease;
}
.flip-leave-active {
  display: none;
}
</style>
