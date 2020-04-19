// const splash = document.querySelector('#splash');
// const pasteItemList = document.querySelector('#paste-item-list');

// document.addEventListener('paste', async (e) => {
//   console.log(e.clipboardData.items);
//   const success = appendPasteItem(await navigator.clipboard.readText());
//   if (success) {
//     splash.classList.remove('empty');
//   }
// });

// function appendPasteItem(pasteItem) {
//   console.log(pasteItem);
//   const element = document.createElement('li');
//   element.className = 'paste-item';
//   element.innerText = pasteItem;
//   pasteItemList.prepend(element);
//   return true;
// }

import App from './App.svelte';

const app = new App({ target: document.body });

export default app;