<script>
    import {link} from 'svelte-routing';

    let isOpen = $state(false);
    let barWidth = $state("50px")

    const pages = [
        {
            link: "/",
            page: "Home"
        },
        {
            link: "/experience",
            page: "Experience"
        },
        {
            link: "/more",
            page: "More"
        }
    ];
    $effect(() => {
        if (isOpen)
            barWidth = "250px";
        else
            barWidth = "50px";
    });
</script>

<div class='sidebar' style:--bar-width={barWidth}>
    <button onclick={() => {isOpen = !isOpen;}}>X</button>
    <div id="links" class:open={isOpen}>
        <p>Navigation</p>
        {#each pages as p}
            <div>
                <a href={p.link} class="pageLink" use:link onclick={() => {isOpen = false;}}> {p.page} </a>
            </div>
        {/each}
    </div>
</div>

<style>
    button {
        background: none;
        color: white;
        align-self: center;
    }
    div.sidebar {
        background-color: #1B1B1D;
        height: 100%;
        width: var(--bar-width);
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        transition: 0.5s;
        display: block;
        box-shadow: 3px 0 10px lightblue;
    }
    .pageLink {
        color: white;
        text-decoration: none;
    }
    .pageLink:hover {
        color: blueviolet;
    }
    #links.open {
        display: block;
    }
    #links {
        display: none;
        padding: 1em;
    }
</style>