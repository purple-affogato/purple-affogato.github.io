<script>
  import {Router, Route} from 'svelte-routing';
  import Sidebar from './components/Sidebar.svelte';
  import Home from './pages/Home.svelte';

  let url = $state("");
  let isSidebarOpen = $state(false);
  let leftMargin = $state("0");

  function openSideBar() {
    isSidebarOpen = !isSidebarOpen;
    if (isSidebarOpen)
      leftMargin = "250px";
    else
      leftMargin = "0";
  }
</script>

<Router {url}>
  <Sidebar isOpen={isSidebarOpen}/>
  <div class="main-container" style:--leftMargin={leftMargin}>
    <button onclick={openSideBar}>X</button>
    <Route path="/"><Home/></Route>
  </div>
</Router>

<style>
  div.main-container {
    margin-left: var(--leftMargin);
    transition: margin-left .5s;
  }
</style>
