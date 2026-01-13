<script>
    import {link} from 'svelte-routing';

    let isOpen = $state(false);
    let barWidth = $state("50px")

    const pages = [
        {
            link: "/",
            page: "> Home"
        },
        {
            link: "/experience",
            page: "> Experience"
        },
        {
            link: "/projects",
            page: "> Projects"
        },
        {
            link: "/more",
            page: "> More"
        },
    ];
    $effect(() => {
        if (isOpen)
            barWidth = "250px";
        else
            barWidth = "50px";
    });
</script>

<div class='sidebar' style:--bar-width={barWidth}>
    <button onclick={() => {isOpen = !isOpen;}}>=</button>
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
        border: none;
        box-shadow: none;
        width: 100%;
        text-align: center;
        font-size: large;
    }
    button:hover {
        color: blueviolet;
    }
    button:focus:active {
        border: none;
    }
    div.sidebar {
        background-color: #1B1B1D;
        height: 100%;
        width: var(--bar-width);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        transition: width 0.5s;
        display: block;
        border-right: 2px solid white;
    }
    .pageLink {
        color: white;
        text-decoration: none;
    }
    .pageLink:hover {
        color: blueviolet;
        text-decoration: underline;
    }
    #links.open {
        display: block;
    }
    #links {
        display: none;
        padding: 1em;
    }
</style>