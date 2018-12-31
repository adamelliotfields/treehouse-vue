import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../src/components/Heading.vue';

describe('Heading.vue', () => {
  it('should render props.text when passed', () => {
    const wrapper = shallowMount(HelloWorld, { propsData: { text: 'Flash!' } });
    expect(wrapper.text()).toMatch('Flash!');
  });
});
