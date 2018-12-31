<template>
  <div>
    <label for="front">
      Front
      <input
        id="front"
        v-model="front"
        type="text"
      >
    </label>
    <label for="back">
      Back
      <input
        id="back"
        v-model="back"
        type="text"
        @keypress.enter="onSubmit"
      >
    </label>
    <button @click="onSubmit">
      Add a New Card
    </button>
    <span v-show="error">
      Oops! Flashcards need a front and a back.
    </span>
  </div>
</template>

<script>
import shortid from 'shortid';
import { mapActions } from 'vuex';

export default {
  name: 'Form',

  data: () => ({
    front: '',
    back: '',
    error: false,
  }),

  methods: {
    ...mapActions(['addCard']),
    onSubmit() {
      if (!this.front || !this.back) {
        this.error = true;
        return;
      }

      const id = shortid();

      this.addCard({
        id,
        front: this.front,
        back: this.back,
      });

      this.front = '';
      this.back = '';
      this.error = false;
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
}
label {
  font-weight: 400;
  color: #333;
  margin-right: 10px;
}
input {
  border-radius: 5px;
  border: 2px solid #eaeaea;
  padding: 10px;
  outline: none;
}
button {
  border-radius: 5px;
  border: 1px solid #87cb84;
  background-color: #87cb84;
  padding: 8px 15px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  background-color: #70a66f;
}
span {
  margin-top: 10px;
  display: block;
  color: #e44e42;
  font-weight: 600;
}
</style>
