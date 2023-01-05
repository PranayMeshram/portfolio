import "./Workcard.css"
import Workcard from "./Workcard"
import React from 'react'

import Workdata from "./Workdata"
const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">PROJECTS</h1>
            <div className="project-container">
                {Workdata.map((val, ind) => {
                    return (
                        <Workcard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work;