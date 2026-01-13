<script>
    let {name, points, status, link} = $props();
</script>
<div>
    <p class="name">{name}</p>
    <p>Status: {status}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    <ul>
    {#each points as p}
        <li>{p}</li>
    {/each}
    </ul>
</div>

<style>
    p {
        margin: 0;
    }
    .name {
        font-weight: normal;
        font-style: italic;
        background-color: indigo;
        width: fit-content;
        margin: 1em 0;
    }
    ul {
        list-style-type: none;
    }
    li::marker {
        content: "> ";
        color: blueviolet;
    }
    a {
        color: blueviolet;
    }
</style>