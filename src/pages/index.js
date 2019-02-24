import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UserForm from "../components/userForm"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>To recieve survey notifications Please complete the following 3 steps :</h2>

    <p> 1. Install the "pushed" app
      <a href="https://pushed.co" target="_blank" rel="noopener noreferrer" > Here, </a>
      then register and login.
    </p>
    <hr/>

    <p> 2. Subscribe to our surveys notifications
      <a href="https://pushed.co/s/Jpj9zha" target="_blank" rel="noopener noreferrer" > Here </a>
    </p>
    <hr/>

    <p> 3. Copy your PushedID as explained below, paste it here and click Submit.</p>
    <UserForm/>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> 

  </Layout>
)
 
export default IndexPage
//    <Link to="/page-2/">Go to page 2</Link>
