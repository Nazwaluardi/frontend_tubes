import { React, useEffect, useState } from 'react'
import axios from 'axios';
import "./WorkCardStyles.css"

const Work = () => {
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
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) =>
            <tr>
              <td>{index + 1}</td>
              <td>{data.questname}</td>
              <td>{data.description}</td>
              <td>{data.score}</td>
              <td>{data.value}</td>
              <td>{data.impact}</td>
              <td>{data.deadline}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Work