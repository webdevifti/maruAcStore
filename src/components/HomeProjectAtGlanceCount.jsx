import React from 'react'
import AtGlanceItems from './AtGlanceItems'

const HomeProjectAtGlanceCount = () => {
    return (
        <section>
            <div className='home-project-count-atglance'>
                <div id='atglance-inner'>
                    <div className="container">
                        <div className="row">
                            <h3 className='atglance-title'>AC Service At A Glance</h3>
                            <AtGlanceItems />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProjectAtGlanceCount