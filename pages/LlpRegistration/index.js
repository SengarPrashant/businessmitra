import Content from './components/content';
import { getPageData, getPageInfo } from '../api/Pages';

const Index = (props) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    return (
        <div className="innerContainer">
        <Content data={props.data} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const resPlans = await getPageData('LLPFirm');
    const resData = await getPageInfo('LLPFirm');
    return {
        props: { data: { plans: resPlans, content: resData }, query: context.query }, // will be passed to the page component as props
    }
}

export default Index;