import { useState, useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes} from '@fortawesome/free-solid-svg-icons';

const Loader = ({ show = false, onClose}) => {
    if (show === false) {
        return null
    }
    return (
        <div className='fullScreenOverlay'>
            {onClose && <FontAwesomeIcon onClick={onClose} style={{position:'fixed', top:'20px', right:'20px', cursor:'pointer'}} icon={faTimes} className='icon32' />}
            <div>
                <div>
                    <Spinner animation="border" />
                </div>
                <div>Loading...</div>
            </div>
        </div>
    )

}

export default Loader;