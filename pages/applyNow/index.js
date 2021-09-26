import React from 'react';
import ApplyNowFrom from './components/ApplyNowForm';

const Index = (props) => {
    return (
            <ApplyNowFrom code={props.code} />
    )
}

export async function getServerSideProps(context) {
    const slug = context.query.slug;
    return {props:{code:slug || ''}}
}

export default Index