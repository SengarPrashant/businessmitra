import React from 'react';
import sanityClient, { getPost } from '../api/blogs';
import SinglePost from './components/singlePost';

const PostSlug = (props) => {
    return (
            <SinglePost data={props.data} />
    )
}

export async function getServerSideProps(context) {
    const slug = context.query.slug;
    if (!slug) {
        return { notFound: true }
    }
    else {
        const res= await sanityClient.fetch(`*[_type == "post" && slug.current == $slug] | order(_updatedAt){
            _id, body,mainImage,slug, title, _createdAt,
            "comments":*[_type=="comment" && references(^._id)] | order(_updatedAt)
        }`, { slug })
        return {props:{data:res[0]}}
    }

}

export default PostSlug