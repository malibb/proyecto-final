import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import {HomePage} from '../todo/pages/HomePage'
import {TodoRoutes} from '../todo/routes/TodoRoutes'
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"




export const AppRouter = () => {
    return (
        <>
        <Routes>         
            
            <Route path="/auth/*" element={
                <PublicRoute>
                    <AuthRoutes />
                    
                </PublicRoute>
            } />

            <Route path="/" element={
                <PublicRoute>
                   <HomePage />
                    
                </PublicRoute>
            } />




            <Route path="/*" element={
                <PrivateRoute>
                  <TodoRoutes />
                </PrivateRoute>
            } /> 
                     
           
        </Routes>
        </>
    )
}