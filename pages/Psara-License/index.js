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

    const resPlans = await getPageData('PSARA');
    const resData = await getPageInfo('PSARA');
   
    return {
        props: { data: { plans: resPlans, content: resData }, query: context.query }, // will be passed to the page component as props
    }
}


export default index;