
export default function ProjectCard({ project }) {
    const { project_title, project_short_description, main_image, project_git_link } = project;
    return (
        <div className='project-card'>
            <div className='project-card__image'>
                <img src={main_image} alt={project_title} />
            </div>
            <div className='project-card__content'>
                <h3>{project_title}</h3>
                <p>{project_short_description}</p>
                <a href={project_git_link} target='_blank' rel='noreferrer'>View on Github</a>
            </div>
        </div>
    )
}