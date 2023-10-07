/* eslint-disable react/prop-types */

export const TaskCard = ({_id, title, description, isDone, onDeleteTodo, onUpdateTodo}) => {
  

  return (
    <>
    <li key={_id} className='card_task'>
                  
                  <div className="task_title"> 
                       <p>Titulo</p>
                        {title}
                        
                  </div>

                    <div className="task_description"> 
                       <p>descripcion</p>
                        {description}
                     </div>

                  <div> 
                       <p >Estado</p>
                        <span onClick={ () => onUpdateTodo(_id, !isDone)} > {  isDone ? "✔️" : "❌"}</span>
                  </div>

                  <div>
                    <button onClick={() => onDeleteTodo(_id)} >Delete</button>
                  </div>
                 
                </li>
    </>
  )
}
