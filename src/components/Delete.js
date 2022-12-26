import {React, useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Delete = () => {
    let { id } = useParams();

    useEffect(() => {
        axios.delete('http://localhost:9080/quests/' + id).then((response) => {
            console.log(response.data);
            window.location = "/pagequest";
        })
    }, [])
    
    return (
        <div className='delete'>
            <form>
                
            </form>
        </div>
  )
}

export default Delete