import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
    return (
        <div className='col-3'>
            <div className="blog-card">
                <div className="card-image">
                    <img src="./images/blog-1.jpg" className='img-fluid' alt="blog" />
                </div>
                <div className="blog-content">
                    <p className='date'>1 Dec, 2022</p>
                    <h5 className='title'>A beautiful sunday morning renaissans</h5>
                    <p className='pb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maiores voluptatem.
                    </p>
                    <Link to="" className='button'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard