import React from 'react';

import styles from './styles.module.css'

// Education: {
    //         School: String,
    //         Degree: String,
    //         DegreeFinished: String
    //     }

function EducationComponent({ education }) {

    return (
        <div>
            <span className={styles.EducationInfo}> {education.degree} from {education.school} </span>


        </div>


        // <div className={styles.Work}>
        //     <h2 className={styles.CompanyTitle}>{work.company}</h2>
        //     {work.jobs.map((job, index) => (
        //         <div key={index} className={styles.Job}>
        //             <span> {job.title} </span> 
        //             <span> {job.starttime} - {job.endtime}</span>
        //             <p className={styles.JobDescription}>{job.description}</p>
        //         </div>
        //     ))}
        // </div>
    );
};

export default EducationComponent;
