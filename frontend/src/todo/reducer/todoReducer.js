import { types } from "../types/types";

const initialState = {
    data: [],
    isLoading: false
}


export const todoReducer = ( state = initialState, action ) => {

        switch (action.type) {
            case types.addTodo:
            return {
                ...state,
                data: [ ...state.data, action.payload],
                isLoading: false
            }

            case types.loadTodo:
            return {
                ...state,
                data: [...action.payload],
                isLoading: false
            }

            case types.messageTodo:
                return {
                    ...state,
                    data: [],
                    isLoading: false
                }

            case types.deleteTodo:
                return {
                    ...state,
                    data: state.data.filter( todo => todo._id !== action.payload),
                    isLoading: false
                }
            
            case types.updateTodo:
                return {
                    ...state,
                    data: state.data.map( todo => todo._id === action.payload._id ? action.payload : todo),
                    isLoading: false
                }
        
            default:
               return initialState
        }

}
