function Project({title, description, tags, github_link}){
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to={github_link.toString()}>GitHub Repo</Link>
        </div>
    );
}

export default Project;