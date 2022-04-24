import "./Project.css"

export const Project  = (props) => {
    return(
        <div className="project">

            <img className="photo"
                 src={props.photo}
                 alt=""
            />

            <div className="project-description">
                <p>{props.description} <br/>
                    {props.descriptionbr}</p>
                <div className="project-description-buttons">
                <button onClick={() => window.location.href=props.github}>GitHub</button>
                <button onClick={() => window.location.href=props.netlify}>Live Demo</button>
                </div>
            </div>
        </div>
    )
}