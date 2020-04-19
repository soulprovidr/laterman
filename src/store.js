import { writable } from 'svelte/store';

const clipboardItems = writable([]);

// Get data from Chrome storage.
chrome.storage.sync.get(['clipboardItems'], (data) => {
  if (data.clipboardItems) {
    clipboardItems.update(() => data.clipboardItems);
  }
});

// Write to Chrome storage on change.
clipboardItems.subscribe((items) => {
  chrome.storage.sync.set({ clipboardItems: items });
});

export function addClipboardItem(clipboardItem) {
  clipboardItems.update((clipboardItems) => [clipboardItem, ...clipboardItems]);
}

export function removeClipboardItem(clipboardItem) {
  clipboardItems.update((clipboardItems) =>
    clipboardItems.filter((item) => item.date !== clipboardItem.date)
  );
}

export default clipboardItems;
