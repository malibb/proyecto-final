import { useContext, useEffect, useReducer } from 'react'
import {Navbar} from '../../ui/components/Navbar'
import {addNewTodo, deleteTodo, startloadTasks, updateTodo } from '../actions/todo'
import { ListTasks } from '../components/ListTasks'
import { todoReducer } from '../reducer/todoReducer'
import '../css/dashboard.css'
import { TodoAdd } from '../components/TodoAdd'
import { AuthContext } from '../../auth/context/AuthContext'

export const Dashboard = () => {

  const {state} = useContext(AuthContext)
 

  const initialState = {
    data: null,
    isLoading: true
}

const [data, dispatch] = useReducer(todoReducer,  initialState)



useEffect(() => {        
  startloadTasks(dispatch);
  }, [])

 const handleNewTodo = (todo) =>{
    
    addNewTodo(todo, dispatch)
  }

  const handleDeleteTodo = (id) =>{
    deleteTodo(id, dispatch)
  }

  const handleUpdateTodo = (id, todo) =>{
    updateTodo(id, todo, dispatch)
  }




return (
    <>
    <Navbar />   
    <section className='container'>
      <div className='container_tasks'>        
        {data.isLoading ? <h1 className='title_task'>Cargando....</h1>  : <ListTasks data={data.data} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo}/> }  
      </div>

      <div className='container_form'>
          <h1>Agregar una tarea</h1>
          <TodoAdd onNewTodo={handleNewTodo} />
      </div>

    </section> 
         
    </>
    )
}
