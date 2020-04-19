<div class="splash splash--empty">
  <img alt="cmd" class="splash__cmd" src="../assets/cmd.svg">
  <img alt="+" class="splash__plus" src="../assets/plus.svg">
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

  .splash__cmd {
    width: 35px;
    height: 35px;
  }


  .splash__plus {
    margin: 0 18px;
    width: 10px;
  }

  /* Empty styles */

  .splash--empty {
    height: 100vh;
    font-size: 64px;
  }

  .splash--empty .splash__cmd {
    width: 46px;
    height: 46px;
  }

  .splash--empty .splash__plus {
    margin: 0 30px;
  }
</style>