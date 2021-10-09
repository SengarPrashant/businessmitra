import React from 'react';
import ApplyNowFrom from './components/ApplyNowForm';


const ApplyNowSlug = (props) => {
    return (
            <ApplyNowFrom code={props.code}  name={props.name}/>
    )
}

export async function getServerSideProps(context) {
    const slug = context.query.slug;
    return {props:{code:slug || '', name: context.query.name || ''}}
}

export default ApplyNowSlug