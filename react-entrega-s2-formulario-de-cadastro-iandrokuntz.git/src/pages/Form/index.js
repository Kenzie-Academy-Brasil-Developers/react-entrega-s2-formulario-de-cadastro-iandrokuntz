import * as yup from "yup"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router"
import toast from "react-hot-toast"
import "./style.css"

const Form = ({setIsLoggedIn}) => {

    const history = useHistory();

    const formSchema = yup.object().shape({
        name: yup.string().required("Name Required"),
        email: yup.string().required("Email Required"),
        password: yup.string().min(8, "minimum of 8 digits").matches(/[a-z]+/g,"Must contain at least one lowercase letter and one number.")
            .matches(/[^a-zA-Z0-9]+/g,"Must contain at least one special character")
            .matches(/[A-Z]+/g, "Must contain at least one capital letter."),
        checkPassword: yup.string().oneOf([yup.ref("password"), null], "Password do not match"),
    })

    const onSubmit = (data) => {

        setIsLoggedIn(data)
        history.push("/home")
        toast.success("Login Success")
    }

    const {register,handleSubmit,formState: { errors }} = useForm({ resolver: yupResolver(formSchema) });

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" type="string" {...register("name")} required/>
                    <span>{errors.name?.message}</span>
                <input placeholder="Email" {...register("email")} required/>
                    <span>{errors.email?.message}</span>
                <input placeholder="Password" type="password" {...register("password")}/>
                    <span>{errors.password?.message}</span>
                <input placeholder="Check Password" type="password" {...register("checkPassword")} required/>
                    <span>{errors.checkPassword?.message}</span>

                <button type="submit">Register</button>
            </form>
        </div>

    )
}

export default Form