import Project from  "./components/Project.jsx";
import { projects } from "./ProjectsData.jsx";

function ProjectList() {
    const listItems = projects.map((project) => (
        <Project key={project.id} title={project.title} description={project.description} github_link={project.github_link}/>
    ));
    return(
        <div>
            <h1>Projects</h1>
            <p>Sorted in chronological order from most recent to earliest.</p>
            <>{listItems}</>
        </div>
    );
}


export default ProjectList;
