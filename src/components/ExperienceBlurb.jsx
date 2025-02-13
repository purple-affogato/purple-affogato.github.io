import './Project.css';

export function Experience({title, description}) {
    const points = [];
    for (let i=0;i<description.length;i++){
            points.push(<li key={i}>{description[i].toString()}</li>);
    }
    return (
        <>
        <h2>
            {title}
        </h2>
        <>{points}</>
        </>
    );
}