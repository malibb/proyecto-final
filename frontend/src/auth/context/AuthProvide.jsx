/* eslint-disable react/prop-types */
import { useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"


const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return{
    user,
    logged: !!user
  }

}

const URL_LOGIN = 'http://localhost:3000/api/v1/users/auth'

export const AuthProvide = ({children}) => {

    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(authReducer, {}, init)  

    const login =  async(mail, password) =>{
      
      let info
      const credentials = {
        mail,
        password
      }       
      

      const resp = await fetch(URL_LOGIN, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(credentials)
      })
      
      if (!resp.ok){

        const data = await resp.json()
        info = data
        const action = {
          type: types.message,
          payload: info
        }

       return dispatch(action)

      }
        const data = await resp.json()
        info = data

        const action = {
          type: types.login,
          payload: info
        }
        
        dispatch(action)
        navigate('/dashboard', {replace: true})
        localStorage.setItem('user', JSON.stringify(data))

    }

    const onLogoutApp = () => {
      localStorage.removeItem('user')
      const action = {
        type: types.logout
      }

      dispatch(action)

    }

  return (
    <AuthContext.Provider value={{
      ...state,
      state,
      login,
      onLogoutApp
    }}>
        {children}
    </AuthContext.Provider>
  )
}
