import Template from "./App";

function ProjectList() {
    return(
        <Template content={<Content />}/>
    );
}

function Content() {
    return(
        <div>
            <p>i will soon list my projects here :)</p>
        </div>
    );
}

export default ProjectList;