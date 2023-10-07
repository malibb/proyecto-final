import { types } from "../types/types";



export const startloadTasks = async (dispatch) => {
    let info
try {
    const resp = await fetch('http://localhost:3000/api/v1/tasks') 
    const data = await resp.json()
    info = data 
} catch (error) {
    console.log(error);    
}
    if(info?.message){
        const messageTodo = {
            type: types.messageTodo,
            payload: info
        }
        return dispatch(messageTodo)
    }   
    const loadTodo = {
        type: types.loadTodo,
        payload: info
    }

    dispatch(loadTodo)
    
}


export const addNewTodo = async (todo, dispatch) => {        
        let info

        try {
            const resp = await fetch('http://localhost:3000/api/v1/tasks',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(todo)
            })
    
            const data = await resp.json()
            info = data
        } catch (error) {
            console.log(error);            
        }       
        const addTodo = {
            type: types.addTodo,
            payload: info
        }
        dispatch(addTodo)
}


export const deleteTodo = async (id, dispatch) => {

    try {
        const resp = await fetch(`http://localhost:3000/api/v1/tasks/${id}`,{
            method: 'DELETE'})

        if(!resp.ok){
            const data = await resp.json()
             throw new Error(data.message) 
        }

        const deleteTodo = {
            type: types.deleteTodo,
            payload: id
        }

        dispatch(deleteTodo)
        
    } catch (error) {        
        console.log(error);
    }


}

export const updateTodo = async (id, todo, dispatch) => {
    let info    
    const body = {
            isDone: todo
        }   

   try {
       const resp = await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
           method: 'PATCH',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(body)
       })

       if(!resp.ok){
        const data = await resp.json()
         throw new Error(data.message) 
    }
    
       const data = await resp.json()
       info = data
    
   } catch (error) {
    console.log(error);
   }

    
        

        const update = {
            type: types.updateTodo,
            payload: info
        }

        dispatch(update)
}



