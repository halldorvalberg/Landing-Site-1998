import React from 'react';

import styles from './styles.module.css'

// Education: {
    //         School: String,
    //         Degree: String,
    //         DegreeFinished: String
    //     }

function EducationComponent({ education }) {

    return (
        <div className={styles.Education}>
            <h2 className={styles.SchoolTitle}>{education.school}</h2>
            <div className={styles.EducationInfo}>
                <p className={styles.Degree}>{education.degree}</p>
                <p className={styles.DegreeFinished}>Degree finished: {education.degreefinished}</p>
            </div>
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
