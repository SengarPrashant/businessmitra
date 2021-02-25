import {useEffect} from 'react';
import {useRouter} from 'next/router'
import Content from './components/content';
import { getPageData, getPageInfo } from '../api/Pages';

const Params = (props) => {
    debugger
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    //const router=useRouter();
    return (
        <>
            <Content data={props.data} query={props.query} />
        </>
    )
}

export async function getServerSideProps(context) {
    const resPlans = await getPageData('PartnershipFirm');
    const resData = await getPageInfo('PartnershipFirm');
    return {
        props: { data: { plans: resPlans, content: resData }, query: context.query }, // will be passed to the page component as props
    }
}

export default Params;