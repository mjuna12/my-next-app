import { useRouter } from "next/router";
import Navbar from "../Navbar"

type AppShelProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"]

const AppShell = (props: AppShelProps) => {
    const { children } = props;
    const {pathname} = useRouter();
    return (
    <main>
         {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
    </main>
    )
}


export default AppShell;