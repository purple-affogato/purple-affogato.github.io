import { Link } from "react-router-dom";
import './Project.css';

function Project({title, description, tags, github_link}){
    const points = [];
    for (let i=0;i<description.length;i++){
            points.push(<li key={i}>{description[i].toString()}</li>);
    }
    return (
        <div>
            <h2>{title}</h2>
            <>{points}</>
            <Link to={github_link.toString()} className="github">GitHub Repo</Link>
        </div>
    );
}

export default Project;