import { Button } from "react-bootstrap"


const BodyRecuiment = () => {
    return(
        <div className="body-recuitment">
            <h1 className="body-recuitment-title">Tuyển dụng</h1>
            <div className="body-recuitment-content">
            <img className="recuitment-content-img" src="https://cdn.tgdd.vn/Files/2021/10/31/1394628/artlabs4_1280x720-800-resize.png"/>
            <div className="recuiment-content-input">
                <textarea className="recuiment-content-input-text" placeholder="Great idea here..."></textarea>
                <div className="info-optinal">Other decretive information (optional)</div>
                <input type="file" />
                <div className="body-recuitment-button"><Button className="recuiment-btn">Next</Button></div>
            </div>
            </div>
            
        </div>
        
    )
}
export default BodyRecuiment