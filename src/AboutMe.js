import './styles.css';
import Template from "./App";

function AboutMe (){
    return (
        <Template content={<Content />}/>
    )
}

function Content() {
    return(
        <div>
            <p>HI LMAO NICE TO MEET U</p>
        </div>
    );
}

export default AboutMe;