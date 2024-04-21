import { useSession } from "next-auth/react"

const ProfilePage = () => {
    const {data} = useSession();
    return (
        <div>
            <h1>Profile Page</h1>
            {/* <h2>{data && data.user.fullname}</h2> */}
        </div>
    )
}

export default ProfilePage