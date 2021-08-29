import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Content from './components/content';
import { getPageData, getPageInfo, getLocationList } from '../api/Pages';
import sanityClient from '../api/blogs';

const Params = (props) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    //const router=useRouter();
    return (
        <>
            <Content data={props.data} query={props.query} location={props.location} />
        </>
    )
}

export async function getServerSideProps(context) {
    const resPlans = await getPageData('OPCFirm');
    const resData = await getPageInfo('OPCFirm');

    const res = await sanityClient.fetch(`*[_type == "category" && code =="OPC"] {
        _id, title,description,code, _createdAt,
        "posts":*[_type=="post" && references(^._id)] | order(_updatedAt){
            _id, body,mainImage,slug, title, _createdAt,
            "comments":*[_type=="comment" && references(^._id)] | order(_updatedAt)
        }
    }`, {});

    let _location;
    if (context.query.param) {
        let params = context.query.param;
        _location = await getLocationList(params[params.length - 1], 0, 10, true);
    }
    return {
        props: { data: { blogs: res, plans: resPlans, content: resData }, query: context.query, location: _location }, // will be passed to the page component as props
    }
}

export default Params;