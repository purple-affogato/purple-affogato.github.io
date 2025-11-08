<script>
    import PWD from "../components/PWD.svelte";
    import figlet from 'figlet';
    import {onMount} from 'svelte';

    let title = $state("");
    const cat = "  /\\_/\\\n=( o.o )=\n";
    const bunny = " (\\ /)\n( *^* )\n";

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
    <span class="typewriter" style:--n=234>I'm a Computer Science and Engineering student at Santa Clara University. Currently, I'm interested in backend software engineering and making complex systems work together. I also want to learn more about IoT and computer networking.</span>
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