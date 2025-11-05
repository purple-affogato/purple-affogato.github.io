<script>
    import {Link} from 'svelte-routing';

    let {isOpen = false} = $props();
    let displaySetting = $state("none")

    $effect(() => {
        if (isOpen == true) {
            displaySetting = "block";
        }
        else {
            displaySetting = "none";
        }
    });
</script>

<div class='sidebar' style:--displaySetting={displaySetting}>
    <p>sidebar</p>
    <Link to="/"> Home </Link>
</div>

<style>
    div.sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        transition: 0.5s;
        display: var(--displaySetting);
    }
</style>