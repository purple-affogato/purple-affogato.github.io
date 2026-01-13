<script>
    import PWD from "../components/PWD.svelte";
    import Project from "../components/Project.svelte";
    import { Link } from "svelte-routing";

    const projects = [
        {
            name: "Home Quality Monitoring",
            status: "In Progress",
            points: [
                "Design home quality monitoring solution using embedded PSoC 6 system and a personal web server.",
                "Program PSoC 6 to interface with sensors over GPIO & I2C, schedule tasks with FreeRTOS, and transmit data to the server via MQTT.",
                "Deploy a web server using Go to ingest, process, and serve data through an API."
            ],
            link: "https://github.com/purple-affogato/home-monitoring"
        },
        {
            name: "Embark",
            status: "H4H 2025 Submission",
            points: [
                "Led my team by defining project goals, assigning roles, and overseeing technical decisions and timelines.",
                "Implemented backend capabilities in Go, such as authentication and Firebase database operations.",
                "Collaborated with teammates to added connectivity between frontend and backend."
            ],
            link: "https://github.com/team-embark/embark"
        },
        {
            name: "Money Laundering Detection",
            status: "Completed",
            points: [
                "Designed an AI/ML model in Python to detect money laundering with 90% precision and recall.",
                "Conducted exploratory data analysis to optimize imbalanced data with random under-sampling & SMOTE-NC.",
                "Evaluated various ML algorithms, including logistic regression, decision trees, and gradient boost."
            ],
            link: "https://github.com/purple-affogato/money-laundering-detection"
        },
        {
            name: "FoodiFi",
            status: "On Hold",
            points: [
                "Implemented web scraping of online grocery sites for price data using Selenium and BeautifulSoup.",
                "Built Flask API in Python to invoke web scraping functions and send data to the frontend"
            ],
            link: "https://github.com/Celeste04/FoodiFi"
        },
        {
            name: "RezoomAI",
            status: "AWS x INRIX Hack 2024 Submission",
            points: [
                "Implemented backend functionalities for user login and AWS Bedrock through Flask & Supabase.",
                "Led my team in delegating tasks and designing project goals."
            ],
            link: "https://github.com/purple-affogato/RezoomAI"
        }
    ]
</script>

<div>
    <PWD wd={window.location.pathname} lastUpdated="2026/01"></PWD>
    <div class="content-container">
        <p class="title">Projects</p>
        <p>Check out my <a href="https://github.com/purple-affogato/" target="_blank" rel="noopener noreferrer">GitHub</a> for more info!</p>
        {#each projects as pr}
        <Project name={pr.name} points={pr.points} status={pr.status} link={pr.link}/>
        <hr>
        {/each}
    </div>
</div>

<style scoped>
    .title {
        background-color: blueviolet;
        width: fit-content;
        text-decoration: underline;
    }
    a {
        color: blueviolet;
    }
</style>