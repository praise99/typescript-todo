import React from 'react';
import {Itask} from "../interfaces"
import  "../app.css"

interface Props{
    task:Itask;
    completeTask(taskNametodelete:string):void

}
const TodoTask=({task,completeTask}:Props)=>{
    return  (
        <div className="task">
            <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button className="button" onClick={()=>{
                completeTask(task.taskName)
            }}>cancel</button>
        </div>
    )

}
export default TodoTask