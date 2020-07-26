import React from "react"

import Header from "../components/header"
import BlogCard from "../components/blogCards"


const Main = ({data}) =>  (
  <div className="main-container">
    <Header />
    <BlogCard /> 
  </div>
)

export default Main
