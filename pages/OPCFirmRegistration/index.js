import Content from './components/content';
import { getPageData, getPageInfo, getLocationList } from '../api/Pages';
import { getGoogleNews } from "../api/news";
import sanityClient from '../api/blogs';

const index = (props) => {
    return (
        <>
            <Content data={props.data} />
        </>
    )
}

export async function getServerSideProps(context) {

    const resPlans = await getPageData('OPCFirm');
    const resData = await getPageInfo('OPCFirm');

    const res= await sanityClient.fetch(`*[_type == "category" && code =="OPC"] {
        _id, title,description,code, _createdAt,
        "posts":*[_type=="post" && references(^._id)] | order(_updatedAt){
            _id, body,mainImage,slug, title, _createdAt,
            "comments":*[_type=="comment" && references(^._id)] | order(_updatedAt)
        }
    }`, {});

    return {
        props: { data: { blogs:res, plans: resPlans, content: resData }, query: context.query, news:''}, // will be passed to the page component as props
    }
}


export default index;