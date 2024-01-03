import React from 'react'
import atglancecount from '../assets/data/atglancecount'
const AtGlanceItems = () => {
  return (
    <>
        {
            atglancecount.map((v,i) => {
                return (
                    <div className="col-lg-3 counter-card" key={i}>
                        <img src={v.icon} alt={v.title} />
                        <h3 className='count'>{v.project_count}</h3>
                        <p className='title'>{v.title}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default AtGlanceItems