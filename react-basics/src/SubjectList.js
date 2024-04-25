import React from 'react';
import { useState } from "react";

export function SubjectList(props){
    // let subjects = props.data;
    const subjectlist = props.data;
    const [subjects, setSubjects] = useState(subjectlist);
    
    function addSubject() {
        setSubjects((subjects) => {
            const nval = [...subjects, { code: "CMSC23", description: "Mobile Development" }];
            console.log(nval);
            return nval;
        });
    }


    return (
        <div>
            <h1>{props.title}</h1>
    	    <ol>
            {
                subjects.map((subject) => {
                    return <li key={subject.id}>{subject.code} - {subject.description}</li>
                })
            }
    	    </ol>
            <button onClick={addSubject}>Add Subject</button>
  	  </div>
    );
}

export default SubjectList