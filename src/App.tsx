import React,{ChangeEvent,useState} from 'react';
import "./app.css"
import {Itask} from "./interfaces"
import TodoTaskk from "./components/todoTask"

const App:React.FC=()=> {
  const [task,setTasks]=useState<string>("")
  const [deadline,setDeadline]=useState<number>(0)
  const [todoList,setTodoList]=useState<Itask[]>([])
  const [active,setActive]=useState<boolean>(false)

  const handleChange=(e:ChangeEvent<HTMLInputElement>):void=>{
    if(e.target.name==="task"){
      setTasks(e.target.value)
    }else{
      setDeadline(Number(e.target.value))
    }
  }
  const addTask=():void=>{
    if(task !=="" && deadline!== 0 ){
      const newTask={taskName:task,deadline:deadline}
      setTodoList([...todoList,newTask])
      setTasks("")
      setDeadline(0)
    }
    
  }
  const completeTask=(taskNametodelete:string):void=>{
    setTodoList(todoList.filter((task)=>{
      return task.taskName != taskNametodelete

    })
  )


}
 
  return(
    <div className="App">
      <div className="header">
        <input type="text" placeholder="Enter task...." value={task} name="task" onChange={handleChange} />
        <input type="number" placeholder="Deadline(in days)" value={deadline} name="deadline" onChange={handleChange} />
        <button className="button2" onClick={addTask}>ADD TASK</button>
      </div>
      <div className="todo-list">
        {
          todoList.map((task:Itask, key:number)=>{
            return <TodoTaskk key={key} task={task} completeTask={completeTask} />;
          })
        }
      </div>
    </div>
  );
}
export default App;
