import React from 'react'
import Link from "gatsby-link"

export default () => 
    <div style={{ color: `tomato` }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="http://lorempixel.com/400/200/" />
        <br />
        <Link to="/my-second-gatsby-page/">Link</Link>
        <br />
        <Link to="/counter/">Counter</Link>
    </div>