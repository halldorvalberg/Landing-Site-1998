import PocketBase from 'pocketbase';
import ProjectCard from '../components/ProjectCard';

const { email, password } = process.env;

export default async function Projects() {

    const projects = await getProjects();

    return (
        <div>
            <h1>Projects</h1>
            {projects?.map((project) => (
                <ProjectCard key={project.id} project={project} />
            )) 
            }
        </div>
    )
}

async function getProjects() {
    
    const production = "https://1998.is:8090"
    const development = "http://127.0.0.1:8090"

    // We need to authenticate with PocketBase to get a token
    const pb = new PocketBase(development);
    
    const authData = await pb.admins.authWithPassword(email, password)

    if (!authData) {
        console.error('Authentication failed');
        return null;
    }
    console.log('Authentication successful')
    
    const { token } = authData;

    const records = await pb.collection('Projects', token
    ).getFullList({
        sort: '-created',
    });
        
    return records;
}