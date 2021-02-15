import React from 'react';
import {useDispatch} from 'react-redux';
import Link from 'next/link';
import {addCity} from '../../redux/actions/configActions';

const index=()=>{
    const dispatch=useDispatch();
    return (
        <div>
            Market Area
            <Link href='/Delhi'><a onClick={()=>{dispatch(addCity('Delhi'))}}>Delhi</a></Link>
        </div>
    )
}

export default index;