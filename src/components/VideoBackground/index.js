import React from 'react'

function VideoBackground({ title, subtitle }) {
    return(
        <>
            <div className="video-background">
                <div className="video-wrap">
                    <div id="video">
                        <img src={require('../../assets/img/masinha.jpg')} className="vo-da-um-soco" alt="main" />
                    </div>
                </div>
            </div>
            <div className="caption text-center">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </div>
        </>
    )
}

export default VideoBackground