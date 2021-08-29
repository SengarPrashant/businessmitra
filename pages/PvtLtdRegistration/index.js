import Content from './components/content';
import { getPageData, getPageInfo } from '../api/Pages';

const Index = (props) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    return (
        <Content data={props.data} />
    )
}

export async function getServerSideProps(context) {
    const resPlans = await getPageData('PvtLtdFirm');
    const resData = await getPageInfo('PvtLtdFirm');
    return {
        props: { data: { plans: resPlans, content:resData }, query: context.query }, // will be passed to the page component as props
    }
}

export default Index;