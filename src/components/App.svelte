<script>
  import clipboardItems, { addClipboardItem } from '../store';
  import ClipboardItem from './ClipboardItem/ClipboardItem.svelte';
  import Splash from './Splash.svelte';

  $: isEmpty = $clipboardItems.length === 0;

  document.addEventListener('paste', async (e) => {
    addClipboardItem(await getClipboardItemData(e));
  });

  async function getClipboardItemData(e) {
    return {
      date: Date.now(),
      items: e.clipboardData.items,
      text: await navigator.clipboard.readText()
    }
  }

</script>

<main>
  <Splash minimized={isEmpty} />
  {#each $clipboardItems as clipboardItem (clipboardItem.date)}
    <ClipboardItem data={clipboardItem} />
  {/each}
</main>

<style>
  @font-face {
    font-family: SF Pro Display;
    src: '../assets/SF-Pro-Display-Regular.otf';
    font-weight: normal;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html),
  :global(body) {
    font-family: SF Pro Display, sans-serif;
    background-color: #1d483a;
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;
    margin: 0;
  }

</style>