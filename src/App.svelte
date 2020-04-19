<script>
  import Splash from './Splash.svelte';
  export const items = [];
</script>

<main>
  <Splash />
  <ul id="paste-item-list">
    
  </ul>
</main>

<style>
  #paste-item-list {
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    width: 900px;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .paste-item {
    border-radius: 40px;
    background-color: #1B4433;
    color: white;
    font-size: 24px;
    padding: 40px;
    margin-bottom: 114px;
    animation: fadeIn 250ms ease-in-out;
  }
</style>