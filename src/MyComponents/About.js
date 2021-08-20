import React from 'react'

export const About = () => {
    let aboutstyle = {
        position:"relative",
        minHeight :"50.5vh",
    }
    return (
        <div className="container" style={aboutstyle}>
            This is an about component
            <p>this is a paragraph that we are going to built in this section.
            </p>
        </div>
    )
}
