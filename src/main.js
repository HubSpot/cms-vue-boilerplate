import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './App.svelte';
import './index.scss';

const targetModulesData = document.querySelectorAll(
  '.cms-svelte-boilerplate > script[type="application/json"]',
);

targetModulesData.forEach(({ dataset, textContent }) => {
  const root = document.getElementById(`App--${dataset.moduleInstance}`);
  return new App({
    target: root,
    props: {
      name: 'world',
      portalId: dataset.portalId,
      moduleData: JSON.parse(textContent),
      moduleInstance: dataset.moduleInstance,
    },
  });
});