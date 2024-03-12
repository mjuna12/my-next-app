import Navbar from "../Navbar"

type AppShelProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShelProps) => {
    const { children } = props;
    return (
    <main>
         <Navbar />
        {children}
    </main>
    )
}


export default AppShell;