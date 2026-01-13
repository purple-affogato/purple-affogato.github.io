<script>
  import {Router, Route} from 'svelte-routing';
  import Sidebar from './components/Sidebar.svelte';
  import Home from './pages/Home.svelte';
  import Experience from './pages/Experience.svelte';
  import More from './pages/More.svelte';
  import Projects from './pages/Projects.svelte';

  let url = $state("");
</script>

<Router {url}>
  <Sidebar/>
  <div class="main-container">
    <Route path="/"><Home/></Route>
    <Route path="/experience"><Experience/></Route>
    <Route path="/more"><More/></Route>
    <Route path="/projects"><Projects/></Route>
  </div>
</Router>

<style>
  div.main-container {
    margin-left: 50px;
  }
</style>
