import React from 'react'
import coreServices from './../assets/data/coreservices';

const CoreItems = () => {
    return (
        <>
            {
                coreServices.map((v, i) => {
                    return (
                        <div key={i} className='core-service-items'>
                            <div>
                                <img src={v.icon} alt="" />
                            </div>
                            <div className=''>
                                <h3>{v.title}</h3>
                                <p>{v.info}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CoreItems