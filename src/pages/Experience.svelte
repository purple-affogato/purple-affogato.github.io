<script>
    import PWD from "../components/PWD.svelte";
</script>

<div>
    <PWD wd={window.location.pathname} lastUpdated="2026/01"></PWD>
    <div class="content-container">
        <p class="header">Experience</p>
        <p>To be completed!</p>
    </div>
</div>

<style>
    .header {
        background-color: blueviolet;
        width: fit-content;
        text-decoration: underline;
    }
</style>