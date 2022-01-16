import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';

const AppLogo = ({ varient=1, size=24 }) => {
    
    return (
        <div style={{ display: 'flex', alignItems:'center' }}>
            <div style={{display: 'flex', alignItems:'center', justifyContent:'center', border: '4px solid orange', color:'#fff', width:35, height:35, borderRadius: '50%' }} >B</div>
            <div style={{ color: '#fff' }}>aijoo</div>
        </div>
    )

}

export default AppLogo;