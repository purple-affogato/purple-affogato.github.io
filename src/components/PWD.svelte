<script>
    let {wd, lastUpdated} = $props();

    let height = $state(0.0);

</script>
<div class="container">
    <p class="wd" bind:offsetHeight={height}>~{wd}</p>

    <svg class="tri1" width="10" height={Math.round(height)} viewBox={"0 0 10 " + Math.round(height)} aria-hidden="true">
        <polygon points={"0,0 0," + Math.round(height) + " 10," + Math.round(height/2)} fill="blueviolet" />
    </svg>

    <p class="lastUpdated">modified: {lastUpdated}</p>

    <svg class="tri2" width="10" height={Math.round(height)} viewBox={"0 0 10 " + Math.round(height)} aria-hidden="true">
        <polygon points={"0,0 0," + Math.round(height) + " 10," + Math.round(height/2)} fill="indigo" />
    </svg>
</div>
<style>
    p {
        display: inline-block;
        margin-inline: 0;
        padding-inline: 0.5em;
        height: fit-content;
    }
    p.wd {
        background-color: blueviolet;
    }
    p.lastUpdated {
        background-color: indigo;
    }
    div.container {
        display: flex;
        align-items: center;
        gap: 0rem;
    }
    svg.tri1, svg.tri2 {
        display: block;
        flex: 0 0 10px;
        height: auto;
    }
    svg.tri1 {
        background-color: indigo;
    }
</style>