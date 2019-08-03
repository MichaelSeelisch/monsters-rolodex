import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
// import Img from 'gatsby-image/withIEPolyfill';

const Hero = () => {
    const data = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "heroImage.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 250) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section>
            <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="This is a picture of my face."
            />
            <div>
                <h1>Hi, I like websites.</h1>
                <p>Sometimes I make them.</p>
            </div>
        </section>
    );
};

export default Hero;
