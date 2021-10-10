import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';

const AppLogo = ({ varient=1, size=24 }) => {
    
    return (
        <>
        { varient===1 && <div style={{ display: 'inline-flex', fontSize:size, alignItems:'center', fontWeight:'bold' }}>
            <div style={{display: 'flex', alignItems:'center', justifyContent:'center', border: '4px solid orange', width:(size+10), height:(size+10), borderRadius: '50%' }} >B</div>
            <div>
                <span>aijoo</span>
            </div>
        </div>}
        {varient===2 && <div style={{ display: 'inline-flex', fontSize:size, alignItems:'baseline', fontWeight:'bold' }}>
            <div style={{display: 'flex', alignItems:'baseline', justifyContent:'center'}}>
                <span style={{width:5, height:21, marginRight:3, backgroundColor:'orange'}}></span>
                <span style={{width:5, height:17, marginRight:2, backgroundColor:'orange'}}></span>
                <span style={{width:5, height:13, marginRight:2, backgroundColor:'orange'}}></span>
                <span style={{width:5, height:9, marginRight:2, backgroundColor:'orange'}}></span>
            </div>
            <div>
                <span>Baijoo</span>
            </div>
        </div>}
        </>
    )

}

export default AppLogo;