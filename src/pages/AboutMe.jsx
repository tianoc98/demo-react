import { Routes,Route,useParams} from 'react-router-dom'
function AboutMe(props){
    props = useParams()
    return(
        <>
        <h1>{props.name}</h1>
        </>
    )
}

export default AboutMe