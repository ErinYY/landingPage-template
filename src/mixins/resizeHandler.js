import store from 'store';

const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design

export default {
  watch: {},
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  mounted() {
    const isMobile = this.isMobile();
    if (isMobile) store.dispatch('setDevice', 'mobile');
  },
  methods: {
    isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile();
        store.dispatch('setDevice', isMobile ? 'mobile' : 'desktop');
      }
    }
  }
};
