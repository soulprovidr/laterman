const splash = document.querySelector('#splash');
const pasteItemList = document.querySelector('#paste-item-list');

document.addEventListener('paste', async () => {
  const success = appendPasteItem(await navigator.clipboard.readText());
  if (success) {
    splash.classList.remove('empty');
  }
});

function appendPasteItem(pasteItem) {
  const element = document.createElement('li');
  element.className = 'paste-item';
  element.innerText = pasteItem;
  pasteItemList.prepend(element);
  return true;
}