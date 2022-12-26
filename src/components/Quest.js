import {React, useEffect, useState} from 'react'
import axios from 'axios';
import "./QuestStyles.css"
import { Link } from 'react-router-dom';

const Quest = () => {
    const [data, setData] = useState([{}])
    console.log(data)
    useEffect(() => {
        axios.get('http://localhost:9080/quests').then((response) => {
            setData(response.data);
        })
    }, [])

    return (
        <div className='quest'>
           <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Questname</th>
                        <th>Description</th>
                        <th>Score</th>
                        <th>Value</th>
                        <th>Impact</th>
                        <th>Deadline</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => 
                        <tr>
                            <td>{index+1}</td>
                            <td>{data.questname}</td>
                            <td>{data.description}</td>
                            <td>{data.score}</td>
                            <td>{data.value}</td>
                            <td>{data.impact}</td>
                            <td>{data.deadline}</td>
                            <td><Link to={"/pageedit/" + data.id}><button>Edit</button></Link></td>
                            <td><Link to={"/pagedelete/" + data.id}><button>Delete</button></Link></td>
                        </tr>
                    )}
                </tbody>
                <Link to="/pagecreate"><button className='btn'>Add</button></Link>
           </table>
        </div>
  )
}

export default Quest