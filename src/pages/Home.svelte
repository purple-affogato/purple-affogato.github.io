<script>
    import PWD from "../components/PWD.svelte";
    import figlet from 'figlet';
    import {onMount} from 'svelte';

    let title = $state("");

    figlet.defaults({fontPath: window.location.origin + '/assets/flf'})

    onMount(async () => {
        await figlet.text("purple-affogato",
        {
            font: "larry3d",
            horizontalLayout:"default",
            verticalLayout: "default"
        },
            function (err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                title = data;
            }
        );
        console.log(title);
    });

</script>

<div>
  <PWD wd="" lastUpdated="2025/11"/>
  <div class="container">
    <p class="title">{title}</p>
    <p class="intro">Hi, I'm Ivy!</p>
    <p>I'm a Computer Science and Engineering student at Santa Clara University. Let's get to know each other!</p>
  </div>
</div>

<style>
    div.container {
        margin-inline: 2em;
    }
    p.intro {
        background-color: blueviolet;
        width: max-content;
    }
    p.title {
        font-size: small;
        white-space: pre;
    }
</style>