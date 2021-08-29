import {useEffect} from 'react';
import {useRouter} from 'next/router'
import Content from './components/content';
import { getPageData, getPageInfo, getLocationList } from '../api/Pages';

const Params = (props) => {
    return (
        <>
            <Content data={props.data} query={props.query} location={props.location} />
        </>
    )
}

export async function getServerSideProps(context) {
    const resPlans = await getPageData('IEC');
    const resData = await getPageInfo('IEC');
    let _location;
    if(context.query.param){
        let params=context.query.param;
        _location = await getLocationList(params[params.length-1], 0, 10, true);
    }
    return {
        props: { data: { plans: resPlans, content: resData }, query: context.query, location:_location }, // will be passed to the page component as props
    }
}

export default Params;