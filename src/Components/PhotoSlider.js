import React from 'react'
import circle from "../images/about_images/circle.png"
import blob from "../images/about_images/blob.png"
import { Image } from 'semantic-ui-react'

class PhotoSlider extends React.Component {

    render() {
        return(
            <>
                <div className="box">
                    <div className="spin-container">
                        <div className="shape">
                            <div className="bgnowimage" ></div>
                        </div>
                    </div>
                </div>
                
                <div id="sliderspanholder">
                    <span id="sliderholder">
                        <Image src={circle} alt="circle" className="blobmeter" />
                        <input type="range" min="3" max="103" id="blobslider" step="10" value={this.props.blobValue} onChange={(e) => {this.props.blobHelper(e)}}></input>
                        <Image src={blob} alt="blob" className="blobmeter" />
                    </span>
                </div>
            </>
        )
    }
}

export default PhotoSlider