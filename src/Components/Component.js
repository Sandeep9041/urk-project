import Navbar from "./Navbar/Navbar"
import Profile from "./Profile/Profile";
import Statics from "./Statics/Statics";
import "../App.css"
const Component =() => (
        <div className="Component">
       <Navbar className="navbar"/>
       <Profile />
       <Statics />
    </div>
)
export default Component;