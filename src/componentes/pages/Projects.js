import Message from "../layout/Message"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";

import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

function Projects() {

    const [projects, setProjects] = useState([])
    const[removeLoading, setRemoveLoading] = useState(false)
    const[projectMessage, setProjectMessage] = useState()

    const location = useLocation()
    let message= ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() =>{
        setTimeout(() =>{
            fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Contenter-Type': 'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
        }, 500)
    }, [])

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((resp) => resp.json)
            .then((data) => {
                setProjects(projects.filter((project) => project.id !== id))
                // message
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch((err) => console.log(err))

        }


    return(
       <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="sucess" msg={message} />}
            {projectMessage && <Message type="sucess" msg={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}/>
                    ))}
                    {!removeLoading && <Loading />}
                    {removeLoading && projects.lenght === 0 && (
                        <p>Não há projetos cadastrados!</p>
                    )}
            </Container>
       </div>
    )
}

export default Projects