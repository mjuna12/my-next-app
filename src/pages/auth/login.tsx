import Link from "next/link"
import { useRouter } from "next/router"

const LoginPage = () => {
    const router = useRouter();
    const HandleLogin = () => {
        router.push('/product')
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={()=> HandleLogin()}>Login</button>
            <p>
            Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
            </p>
        </div>
    )
}

export default LoginPage