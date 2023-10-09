import { Link } from "react-router-dom"
import image from "../../assets/notas-ancladas.png"


export const NavHome = () => {



  return (
    <>
    <nav className="flex pt-7 " >

      <div >
      
       <img src={image} className="h-16" alt="" />
      </div>

      <div className="flex-grow ">
        <h5 className="text-center font-extrabold ">Bienvenido al modulo de tareas</h5>
      </div>

      <div className="flex">
        <Link to={"/auth/login"} className="bg-white p-2 rounded-md mr-2">Login</Link>
        <Link to={"/auth/register"} className="p-2 rounded-md" >Sign Up</Link>
        
      </div>
        
    </nav>
    </>
  )
}
