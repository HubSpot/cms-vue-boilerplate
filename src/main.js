import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';
// import './index.scss';
// import ErrorBoundary from './components/ErrorBoundary';

Vue.config.productionTip = false;

const targetModulesData = document.querySelectorAll(
  '.cms-vue-boilerplate > script[type="application/json"]',
);

targetModulesData.forEach(({ dataset, textContent }) => {
  return new Vue({
    render: h =>
      h(App, {
        props: {
          portalId: dataset.portalId,
          moduleData: JSON.parse(textContent),
          moduleInstance: dataset.moduleInstance,
        },
      }),
    data: {
      portalId: dataset.portalId,
      moduleData: JSON.parse(textContent),
      moduleInstance: dataset.moduleInstance,
    },
  }).$mount(`#App--${dataset.moduleInstance}`);
});
