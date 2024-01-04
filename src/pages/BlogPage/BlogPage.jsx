import React from "react";
import './BlogPage.css';
import posts from '../../constants/blogdata.json';
import Articles from "../../components/Articles/Articles.jsx";



function BlogPage () {
    return (
        <>
            <main className='main-outer-container'>
                <section className='main-inner-container'>
                    <h1>Bekijk alle {posts.length} blog posts op deze pagina</h1>
                    <div className='articles-blog-post'> <Articles/></div>
                </section>
            </main>
        </>
    )
}

export default BlogPage