<script>
    import PWD from "../components/PWD.svelte";
    import figlet from 'figlet';
    import {onMount} from 'svelte';
    import { link } from "svelte-routing";

    let title = $state("");
    const cat = "  /\\_/\\\n=( o.o )=\n";
    const bunny = " (\\ /)\n( *^* )\n";
    const catOnFence = "           *     ,MMM8&&&.            *\n                MMMM88&&&&&    .\n               MMMM88&&&&&&&\n   *           MMM88&&&&&&&&\n               MMM88&&&&&&&&\n               'MMM88&&&&&&'\n                 'MMM8&&&'      *\n        |\\___/|\n        )     (             .              '\n       =\\     /=\n         )===(       *\n        /     \\\n        |     |\n       /       \\\n       \\       /\n_/\\_/\\_/\\__  _/_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_\n|  |  |  |( (  |  |  |  |  |  |  |  |  |  |\n|  |  |  | ) ) |  |  |  |  |  |  |  |  |  |\n|  |  |  |(_(  |  |  |  |  |  |  |  |  |  |\n|  |  |  |  |  |  |  |  |  |  |  |  |  |  |\njgs|  |  |  |  |  |  |  |  |  |  |  |  |  |";

    const sections = [
        {
            title: "Experience",
            description: "> My work experience and projects.",
            characters: 34,
            link: "/experience"
        },
        {
            title: "More About Me",
            description: "> Read more about me outside of dev and a bit about how I made this website.",
            characters: 76,
            link: "/more"
        }
    ];

    figlet.defaults({fontPath: window.location.origin + '/assets/flf'})

    onMount(async () => {
        await figlet.text("purple-affogato",
        {
            font: "ANSI Shadow",
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
        // console.log(title);
    });

</script>

<div>
  <PWD wd="" lastUpdated="2025/11"/>
  <div class="content-container">
    <p class="title">{title}</p>
    <p class="intro">Hi, I'm Ivy!</p>
    <span class="typewriter" style:--n=234>I'm a Computer Science and Engineering student at Santa Clara University. Currently, I'm interested in backend software engineering, networking, IoT, and databases.</span>
    <br/>
    <br/>
    <span class="typewriter" style:--n=25>Learn more about me here!</span>
    <br/>
    <br/>
    {#each sections as s}
    <div>
        <a class="sectionLink" href={s.link} use:link>{s.title}</a>
        <br/>
        <span class="typewriter" style:--n={s.characters}>{s.description}</span>
    </div>
    {/each}
    <p style="white-space: pre;">{catOnFence}</p>
    <!-- <p style="white-space:pre;"> {bunny}</p>
    <p style="white-space:pre;"> {cat} </p> -->
  </div>
</div>

<style>
    p.intro {
        background-color: blueviolet;
        width: max-content;
    }
    p.title {
        font-size: 12px;
        white-space: pre;
    }
    .typewriter {
        color: transparent;
        background: 
            linear-gradient(-90deg,white 2px,transparent 0) 6px 0,
            linear-gradient(white 0 0) 0 0;
        background-clip: padding-box,text;
        -webkit-background-clip: padding-box, text;
        background-size: calc(var(--n) * 1ch) 200%;
        background-repeat: no-repeat;
        white-space: pre-wrap;
        animation:
            t calc(var(--n) * 0.03s) steps(var(--n)) forwards,
            b .3s infinite steps(1);
    }
    .sectionLink {
        text-decoration: underline;
        background-color: indigo;
        color: white;
    }
    @keyframes t{
        from {background-size:0 200%}
    }
    @keyframes b{
        50% {background-position:0 -100%, 0, 0}
    }
    @media only screen and (max-width: 800px) {
        p.title {
            font-size: 8px;
        }
    }
    @media only screen and (max-width: 500px) {
        p.title {
            font-size: 5px;
        }
    }
</style>