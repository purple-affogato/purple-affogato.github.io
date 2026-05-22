<script>
    import PWD from "../components/PWD.svelte";
    import {link} from 'svelte-routing';

    const posts = [
      {
        title: "Intro to my blog!",
        link: "intro"
      }
    ];
    
</script>

<div>
    <PWD wd={window.location.pathname} lastUpdated="2026/05"></PWD>
    <div class="content-container">
        <p class="title">Blog</p>
        {#each posts as p}
            <a href={"/blog/" + p.link}>{p.title}</a>
        {/each}
    </div>
</div>

<style>
    a {
        color: white;
    }
</style>