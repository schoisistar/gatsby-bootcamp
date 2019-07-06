import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Contact</h1>
                <p>Marco Schoisengeyer
            <br />Florianiweg 9/7
            <br />3100 St. Pölten</p>
                <p>Follow me on <a href="https://twitter.com/schoisistar">@schoisistar</a></p>
            </Layout>
        </div>

    )
}

export default ContactPage