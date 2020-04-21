<script>
  import { format } from 'date-fns';
  import { fade } from 'svelte/transition';
  import { removeClipboardItem } from '../../store';

  let isCopied = false;
  export let data;

  const { date, items, text } = data;

  function copyClipboardItem() {
    setCopiedTimeout();
    navigator.clipboard.writeText(text);
  }

  function createLinks(text) {
    return (text || "").replace(
      /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
      function(match, space, url){
        var hyperlink = url;
        if (!hyperlink.match('^https?:\/\/')) {
          hyperlink = 'http://' + hyperlink;
        }
        return space + '<a href="' + hyperlink + '" target="_blank">' + url + '</a>';
      }
    );
  };

  function setCopiedTimeout() {
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 2000);
  }
</script>

<div transition:fade={{ duration: 200 }} class="item">
  <p>{@html createLinks(text)}</p>
  <div class="item-footer">
    <div class="item-actions">
      <button
        class="copy"
        on:click={copyClipboardItem}
      >
        <img alt="copy" src="../assets/copy.svg">
        {#if isCopied}
          <span class="copied">Copied!</span>
        {:else}
          Copy
        {/if}
      </button>
      <button
        class="delete"
        on:click={() => removeClipboardItem(data)}
      >
        <img alt="trash" src="../assets/trash.svg"> Delete
      </button>
    </div>
    <div class="item-date">
      {format(new Date(date), 'p • MMM d')}
    </div>
  </div>
</div>

<style>
  .item {
    width: 900px;
    margin: 0 auto 50px;
    background-color: rgb(26, 53, 46);
    color: white;
    border-radius: 40px;
    padding: 60px 80px 40px;
    transition: background 100ms ease-in-out,
                box-shadow 100ms ease-in-out;
  }

  .item:hover {
    background: #304F42;
    box-shadow: 0px 80px 100px rgba(11, 32, 23, 0.77);
  }

  :global(a),
  :global(a:active),
  :global(a:visited) {
    color: #FFC684;
  }

  p {
    font-size: 20px;
    line-height: 140%;
    margin: 0;
  }

  .item-footer {
    align-items: center;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    line-height: 140%;
    margin-top: 40px;
  }

  .item-actions button {
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 10px;
    color: white;
    display: inline-flex;
    height: 60px;
    justify-content: flex-start;
    font-size: 16px;
    outline: none;
    /* padding: 6px 30px 6px 10px; */
    cursor: pointer;
    width: 140px;
    transition: background 75ms ease-in-out;
  }

  .item-actions button:hover {
    background: #3F6052 !important;
  }

  .item-actions button img {
    margin-right: 10px;
  }

  .copy {
    margin-right: 20px;
  }

  .copy .copied {
    color: #FFC684;
  }

  .item-date {
    color: #8DB5A4;
  }
</style>