import {useRouter} from 'next/router'
import Content from './components/content';

const Params = (props) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    //const router=useRouter();
    return (
        <Content data={props.data} query={props.query} />
    )
}

export async function getServerSideProps(context) {
    const resPlans = await getPageData('LLPFirm');
    //const resData = await getPageInfo('PartnershipFirm');
    return {
        props: { data: { plans: resPlans, content: '' }, query: context.query }, // will be passed to the page component as props
    }
}

export default Params;