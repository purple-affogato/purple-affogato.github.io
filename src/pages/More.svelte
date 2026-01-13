<script>
    import PWD from "../components/PWD.svelte";

    const catOnFence = "           *     ,MMM8&&&.            *\n                MMMM88&&&&&    .\n               MMMM88&&&&&&&\n   *           MMM88&&&&&&&&\n               MMM88&&&&&&&&\n               'MMM88&&&&&&'\n                 'MMM8&&&'      *\n        |\\___/|\n        )     (             .              '\n       =\\     /=\n         )===(       *\n        /     \\\n        |     |\n       /       \\\n       \\       /\n_/\\_/\\_/\\__  _/_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_\n|  |  |  |( (  |  |  |  |  |  |  |  |  |  |\n|  |  |  | ) ) |  |  |  |  |  |  |  |  |  |\n|  |  |  |(_(  |  |  |  |  |  |  |  |  |  |\n|  |  |  |  |  |  |  |  |  |  |  |  |  |  |\njgs|  |  |  |  |  |  |  |  |  |  |  |  |  |";
</script>

<div>
    <PWD wd={window.location.pathname} lastUpdated="2025/11"></PWD>
    <div class="content-container">
        <p>Looks like you're really venturing into my personal website. :3</p>
        <p>Here's how I achieved the special effects on my website:</p>
        <a href="https://dev.to/afif/a-multi-line-css-only-typewriter-effect-3op3">Multiline Typewriter Effect</a>
        <p style="white-space: pre;">{catOnFence}</p>
    </div>
</div>