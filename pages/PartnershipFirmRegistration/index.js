import Content from './components/content';
import { getPageData, getPageInfo, getLocationList } from '../api/Pages';

const index = (props) => {
    return (
        <>
         <div className="innerContainer">
            <Content data={props.data} />
         </div>
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


export default index;