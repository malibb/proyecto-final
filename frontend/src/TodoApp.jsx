import { AuthProvide } from "./auth/context/AuthProvide"
import { AppRouter } from "./router/AppRouter"

export const TodoApp = () => {

    return (
        <AuthProvide>
            <AppRouter />   
        </AuthProvide>
    )
}