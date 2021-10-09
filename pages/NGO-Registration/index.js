import Content from './components/content';
import { getPageData, getPageInfo, getLocationList } from '../api/Pages';

const index = (props) => {
    return (
        <>
            <Content data={props.data} />
        </>
    )
}

export async function getServerSideProps(context) {

    const resPlans = await getPageData('EPFREG');
    const resData = await getPageInfo('EPFREG');
   
    return {
        props: { data: { plans: resPlans, content: resData }, query: context.query }, // will be passed to the page component as props
    }
}


export default index;