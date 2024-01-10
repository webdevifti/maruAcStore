import React from 'react'
import blogList from './../assets/data/bloglists';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEye } from '@fortawesome/free-solid-svg-icons';

const BlogCard = () => {
    return (
        <>
            {
                blogList.map((item, i) => {
                    return (
                        <div className="col-lg-3  mb-2" key={i}>
                            <div className="blog-card">
                                <Link to="">
                                    <img src={item.img} alt={item.title} />
                                </Link>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='category'>{item.category}</p>
                                    <span className='views'><FontAwesomeIcon icon={faEye}/> {item.views} view(s)</span>
                                </div>
                                <div>
                                    <Link to="">
                                        <h3 className='title'>{item.title}</h3>
                                    </Link>
                                    <p className='content'>{item.content}</p>
                                </div>

                                <Link to="" className='link'>Explore more <FontAwesomeIcon icon={faArrowRightLong} /></Link>
                            </div>
                        </div>
                    )
                })
            }


        </>
    )
}

export default BlogCard