import { Outlet } from "react-router-dom"
import Menu from "./Menu"

function Layout(props) {
    return <div>
       <Menu/>
       <div style={{border:"1px solid red"}}>
          <Outlet />   
       </div> 
    </div>
}

export default Layout