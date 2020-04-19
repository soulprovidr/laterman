<script>
  export let minimized = false;
</script>

<div class="splash {minimized && 'splash--minimized'}">
  <img alt="cmd" class="icon-cmd" src="../assets/cmd.svg">
  <img alt="+" class="icon-plus" src="../assets/plus.svg">
  V
</div>

<style>
  .splash {
    height: 300px;
    display: flex;
    width: 100vw;
    font-size: 48px;
    justify-content: center;
    align-items: center;
    color: #FFC684;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }

  .icon-cmd {
    width: 35px;
    height: 35px;
  }


  .icon-plus {
    margin: 0 18px;
    width: 10px;
  }

  .splash--minimized {
    height: 100vh;
    font-size: 64px;
  }

  .splash--minimized .icon-cmd {
    width: 46px;
    height: 46px;
  }

  .splash--minimized .icon-plus {
    margin: 0 30px;
  }
</style>