import React from 'react'
import BlogCard from './BlogCard'

const HomeBlog = () => {
    return (
        <section>
            <div className="container">
                <div className='section-header'>
                    <h3>Our Latest Blogs</h3>
                    <p>AC SERVICE always posts AC-related news and company news regularly. So stay connected with us to know about our latest news.</p>
                </div>
                <div className="row">
                    <BlogCard />
                </div>
            </div>
        </section>
    )
}

export default HomeBlog