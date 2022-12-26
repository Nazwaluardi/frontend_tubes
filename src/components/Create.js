import {React, useState} from 'react'
import axios from 'axios';

const Create = () => {
    const [questname, setQuestname] = useState('')
    const [description, setDescription] = useState('')
    const [score, setScore] = useState('')
    const [value, setValue] = useState('')
    const [impact, setImpact] = useState('')
    const [deadline, setDeadline] = useState('')

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
    
        axios.post(`http://localhost:9080/quests`, user)
          .then(res => {
            console.log(res);
            console.log(res.data);
            window.location = "/pagequest"
          })
    }
    
    return (
        <div className='create'>
            <form onSubmit={handleSubmit}>
                <label>Questname</label>
                <input type='text' onChange={(event) => setQuestname(event.target.value)} required></input>
                <label>Description</label>
                <input type='text' onChange={(event) => setDescription(event.target.value)} required></input>
                <label>Score</label>
                <input type='number' onChange={(event) => setScore(event.target.value)} required></input>
                <label>Value</label>
                <input type='number' onChange={(event) => setValue(event.target.value)} required></input>
                <label>Impact</label>
                <input type='text' onChange={(event) => setImpact(event.target.value)} required></input>
                <label>Deadline</label>
                <input type='text' onChange={(event) => setDeadline(event.target.value)} required></input>
                <button className='btn'>Submit</button>
            </form>
        </div>
  )
}

export default Create