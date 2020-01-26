import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'

export default function index() {
  return (
        <Layout>
            <div>
              <Link to="/entry1">Blog post</Link> | <Link to="/admin">Login</Link>
            </div>
        </Layout>
  )
}
