import { Link } from "gatsby"
import React from "react"
import { Layout } from "./layout"
import { Seo } from "./seo"
import "../styles/404.css"

export const NotFound = () => {
    const IMG_RANDOM = "https://source.unsplash.com/random"

    return (
        <Layout>
            <Seo title="404 Not Found" description="ページが見つかりません" />
            <div className="no-found-message">
                <h1>404 Not Found</h1>
                <Link to="/">トップページへ</Link>
            </div>
            <img src={IMG_RANDOM} className="not-found-image" alt="not found" />
        </Layout>
    )
}