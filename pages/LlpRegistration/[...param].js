import {useRouter} from 'next/router'
import Content from './components/content';

const Params = (props) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    //const router=useRouter();
    return (
        <Content query={props.query} />
    )
}

Params.getInitialProps= async(contex)=>{
    
    return {query:contex.query}
}

// export async function getServerSideProps(contex) {
//     // Fetch data from external API
//     // Pass data to the page via props
//     return { props: { query:contex.query } }
// }

export default Params;