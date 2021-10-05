import React from "react"
import "../styles/hero.css"
import avatar from "../../static/avatar.png"

export const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src={avatar} className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by seaxxlxx.<br />
                    Web Developer. Studying JavaScript.
                </p>
            </div>
        </div>
    )
}