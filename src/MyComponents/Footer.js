import React from 'react'

export const Footer = () => {
    let footerStyle ={
        position: "relative",
        width: "100%",
        top: "34vh",
        border : "2px solid red"
    }
    return (
        <div className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">CopyRight &copy; Todo-List 2021</p>
            
        </div>
    )
}

// how to add the style in react 
/* 

create a object for it first and define it inside the div as style={footerStyle}
and 
if you want to use css file externaly you can also this thing also
1. firstly create a file as name footer.css
2. import it as import './footer.css'

*/