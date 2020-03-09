import React from 'react'

function VideoBackground({ title, subtitle, display = '100vh' }) {
    return(
        <>
            <div className="video-background" style={{ minHeight: display }}>
                <div className="video-wrap">
                    <div id="video">
                        <img src={require('../../assets/img/masinha.jpg')} className="vo-da-um-soco" alt="main" />
                    </div>
                </div>
            </div>
            <div className="caption text-center" style={{ top: display === '100vh' ? '38%' : '19%' }}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </div>
        </>
    )
}

export default VideoBackground