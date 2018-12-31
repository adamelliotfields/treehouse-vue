import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

const isProduction = process.env.NODE_ENV === 'production';

const cards = [
  {
    id: 'LO46BwmiD',
    front: 'The "First Computer Programmer"',
    back: 'Ada Lovelace',
  },
  {
    id: 'Ow6UnoSEC',
    front: 'Invented the "Clarke Calculator"',
    back: 'Edith Clarke',
  },
  {
    id: 'Zl4WOLjdm',
    front: 'Famous World War II Enigma code breaker',
    back: 'Alan Turing',
  },
  {
    id: 'voc55rrUL',
    front: 'Created satellite orbit analyzation software for NASA',
    back: 'Dr. Evelyn Boyd Granville',
  },
];

const CARD_ADD = 'CARD_ADD';
const CARD_REMOVE = 'CARD_REMOVE';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: !isProduction,

  plugins: !isProduction ? [createLogger()] : [],

  state: {
    cards,
  },

  mutations: {
    [CARD_ADD](state, card) {
      Object.assign(state, { cards: state.cards.concat(card) });
    },
    [CARD_REMOVE](state, id) {
      Object.assign(state, { cards: state.cards.filter(card => card.id !== id) });
    },
  },

  actions: {
    addCard({ commit }, card) {
      commit(CARD_ADD, card);
    },
    removeCard({ commit }, card) {
      commit(CARD_REMOVE, card);
    },
  },
});
