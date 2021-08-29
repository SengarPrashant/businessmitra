import axios from 'axios';
import getConfig from 'next/config'
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'quaw9ct2', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})

export async function getPost(slug) {
    let res = { notFound:true, post:{} };
    //const query = encodeURIComponent(`*[ _type == "post" and slug.current == "${_slug}" ]`);
    //const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
    try {
        let result = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
        if(result){
            res.post=result;
            res.notFound=false;
        }
    }
    catch (err) {
        res.notFound=true;
    }
    return res;
}

