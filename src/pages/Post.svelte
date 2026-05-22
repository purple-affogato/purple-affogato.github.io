<script>
    import { onMount } from "svelte";
    import PWD from "../components/PWD.svelte";
    import { marked } from "marked";

    let {title} = $props();

    let post = $state("<p>Post not found</p>");

    onMount(async () => {
      const response = await fetch("/posts/" + title + ".md");
      if (response.ok) {
        const content = await response.text();
        if (content.includes("<!doctype html>")) {
          console.error("failed to fetch .md file.");
          return;
        }
        post = await marked.parse(content);
      }
      else {
        console.error("failed to fetch .md file.");
      }
    });
    
</script>

<div>
    <PWD wd={window.location.pathname} lastUpdated="2026/05"></PWD>
    <div class="content-container">{@html post}</div>
</div>

<style>
</style>