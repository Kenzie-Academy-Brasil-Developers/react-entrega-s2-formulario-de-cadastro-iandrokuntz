import { useHistory } from "react-router"
import "./style.css"
import toast from "react-hot-toast"

const Home = ({isLoggedIn}) => {

    const history = useHistory()

    const Logout = () => {

        localStorage.clear()
        history.push("/")
        toast.success("Logout Success")
    }

    return(
        <div>
            <h1 className="h1Home">Welcome, {isLoggedIn.name}</h1>
            <h3>Your adress: {isLoggedIn.email}</h3>
            <button onClick={Logout} className="buttonHome">Logout</button>
        </div>

    )
}

export default Home