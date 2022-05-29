import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useSelector } from "react-redux";
import { useNavigate, useLocation} from 'react-router-dom'


const LoginView = () => {

    const navigate = useNavigate()

    const user = useSelector(state => state.auth.token)
    const { state } = useLocation

    const [login, setLogin] = useState(true)

    useEffect(() => {
        if(user) {
            try{navigate(state.from)}
            catch {navigate("/")}
        }
    }, [user, navigate])
  return (
    <div>
        { login
            ? <LoginForm setLogin={setLogin}/>
            : <RegisterForm setLogin={setLogin}  />
        }
    </div>
  )
}

export default LoginView