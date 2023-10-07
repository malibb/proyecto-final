import useForm from "../../customsHooks/useForm"


export const TodoAdd = ({onNewTodo}) => {

    

    const {values, handleInputChange, reset} = useForm({
        title: '',
        description: ''
    })

    const {title, description} = values

    const onFormSumbit = (event) => {
        event.preventDefault()
        
    const newTodo = {
        title,
        description,
        isDone: false,
        user: "65175c4eabf669d85b8d96f5"
    }

    onNewTodo(newTodo)
    reset()
    }
  
  return (
        <form className='task_form' onSubmit={onFormSumbit}>
            <input type="text" 
            placeholder='Title' 
            className='task_input' 
            onChange={handleInputChange}
            name='title' 
            value={title}
            />
            <input 
            type="text" 
            placeholder='Description' 
            className='task_input' 
            onChange={handleInputChange}
            name='description'
            value={description}/>
            
            <button type='submit'>Agregar</button>
        </form>
)
}
