import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/Menu";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
  </Layout>
)

export default IndexPage
