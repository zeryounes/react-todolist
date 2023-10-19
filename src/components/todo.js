import React from 'react'
import { useState, useEffect } from 'react'


 

function Todo() {

    const [task,setTask] = useState('')
    const [tasks,setTasks] = useState([])

    useEffect(()=>{
        if(localStorage.getItem('localTasks')){
            const storedList = JSON.parse(localStorage.getItem('localTasks'))
            setTasks(storedList)
        }
    
     },[])

    const addTask = (e)=>{
        if(task){
            const newTask = {id:new Date().getTime().toString(), title: task}
            setTasks([ ...tasks, newTask])
            localStorage.setItem('localTasks', JSON.stringify([ ...tasks, newTask]))
            setTask('')
        }
    } 

    const handleDelete =(task)=>{
        
        const deleted = tasks.filter((t)=>t.id!==task.id)
        // console.log(deleted)
        // setTasks([deleted])
        setTasks( deleted)
        // console.log(setTasks([deleted]))
        localStorage.setItem('localTasks', JSON.stringify(deleted))
    }

    const handleClear=()=>{
        setTasks([])
        localStorage.removeItem('localTasks')
    }

  return (
    <div className='container row'>
        <h1 className='mt-3 text-white'> To-Do App </h1>
        <div className='col-8'>
            <input 
            name='task' 
            onChange={(e)=>setTask(e.target.value)}
            type='text' 
            value={task}
            placeholder='Write your task...' 
            className='form-control' />
        </div>
        <div className='col-4'>
            <button className='btn btn-primary form-control material-icons' onClick={addTask}> add  </button>
        </div>
        <div className='badge'>
            You have 
            {
                !tasks.length? ' No Task'
                : tasks.length === 1? ' 1 Task' 
                : tasks.length > 1 ? ` ${tasks.length} tasks `
                : null
            } 

        </div>
    {
        tasks.map( (task)=>(
            <React.Fragment >
                <div key={task.id} className='col-11'>
                    <span className='form-control bg-white btn mt-2'
                    style={{textAlign:'left', fontWeight:'bold'}}>
                        {task.title}
                    </span>
                </div>
                <div className='col-1'>
                    <button 
                    className=' mt-2 btn btn-warning '
                    onClick={()=> handleDelete(task)}> Delete </button>
                </div>
            </React.Fragment>
        )
        )
    }    
    {!tasks.length ? null:(
        <div>
            <button className='btn btn-secondary mt-4 mb-4' onClick={()=>handleClear()}>
                Clear
            </button>
        </div>
    )}
    
    </div>
  )
}

export default Todo