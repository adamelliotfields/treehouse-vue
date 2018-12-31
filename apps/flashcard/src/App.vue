<template>
  <Container>
    <Heading text="Flash!" />
    <Form />
    <CardList />
  </Container>
</template>

<script>
import Container from './components/Container.vue';
import Heading from './components/Heading.vue';
import Form from './components/Form.vue';
import CardList from './components/CardList.vue';

export default {
  name: 'App',

  components: {
    Container,
    Heading,
    Form,
    CardList,
  },
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  text-align: center;
}
li:nth-child(-n+3) p {
  background-color: #e65f51;
}
li:nth-child(2n+1) p {
  background-color: #a17de9;
}
li:nth-child(4n) p {
  background-color: #feca34;
}
li:nth-child(5n-2) p {
  background-color: #51aae5;
}
li:nth-child(4n+4) p {
  background-color: #feca34;
}
li:nth-child(-7n+7) p {
  background-color: #e46055;
}
</style>
