import {React, useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Edit = () => {
    let { id } = useParams();

    const [questname, setQuestname] = useState('')
    const [description, setDescription] = useState('')
    const [score, setScore] = useState('')
    const [value, setValue] = useState('')
    const [impact, setImpact] = useState('')
    const [deadline, setDeadline] = useState('')

    useEffect(() => {
        axios.get('http://localhost:9080/quests/' + id).then((response) => {
            setQuestname(response.data.questname);
            setDescription(response.data.description);
            setScore(response.data.score);
            setValue(response.data.value);
            setImpact(response.data.impact);
            setDeadline(response.data.deadline);
            console.log(response.data);
        })
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          questname: questname,
          description: description,
          score: score,
          value: value,
          impact: impact,
          deadline: deadline
        };
    
        axios.put(`http://localhost:9080/quests/` + id, user)
          .then(res => {
            console.log(res);
            console.log(res.data);
            window.location = "/pagequest"
          })
    }
    
    return (
        <div className='edit'>
            <form onSubmit={handleSubmit}>
                <label>Questname</label>
                <input type='text' value={questname} onChange={(event) => setQuestname(event.target.value)} required></input>
                <label>Description</label>
                <input type='text' value={description} onChange={(event) => setDescription(event.target.value)} required></input>
                <label>Score</label>
                <input type='number' value={score} onChange={(event) => setScore(event.target.value)} required></input>
                <label>Value</label>
                <input type='number' value={value} onChange={(event) => setValue(event.target.value)} required></input>
                <label>Impact</label>
                <input type='text' value={impact} onChange={(event) => setImpact(event.target.value)} required></input>
                <label>Deadline</label>
                <input type='text' value={deadline} onChange={(event) => setDeadline(event.target.value)} required></input>
                <button className='btn'>Submit</button>
            </form>
        </div>
  )
}

export default Edit