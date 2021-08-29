import React from 'react';
import sanityClient from '../api/blogs';
import PostList from './components/postList';

const Post = (props) => {
    return (
        <>
            <div className='mb-4'>
                <h1>Welcome to  Baijoo blog</h1>
            </div>
            <PostList data={props.data} />
        </>
    )
}
export async function getServerSideProps(context) {
    const res= await sanityClient.fetch(`*[_type == "post"] {
        _id, body,mainImage,slug, title, _createdAt,
        "comments":*[_type=="comment" && references(^._id)] | order(_updatedAt)
    }`, {})
    //const res = await sanityClient.fetch(`*[_type == "post"]`, {})
    return { props: { data: res } }
}

export default Post