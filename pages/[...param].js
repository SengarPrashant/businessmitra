import Content from '../components/Home/content';

const Params = (props) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    //const router=useRouter();
    debugger
    return (
        <Content query={props.query} />
    )
}

Params.getInitialProps= async(contex)=>{
    return {query:contex.query}
}

export default Params;