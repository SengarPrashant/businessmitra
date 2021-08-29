import Content from './components/content';
import { getPageData, getPageInfo } from '../api/Pages';

const Index = (props) => {
    return (
        <Content data={props.data} />
    )
}

export async function getServerSideProps(context) {
    const resPlans = await getPageData('LtdFirm');
    const resData = await getPageInfo('LtdFirm');
    return {
        props: { data: { plans: resPlans, content: resData }, query: context.query }, // will be passed to the page component as props
    }
}

export default Index;