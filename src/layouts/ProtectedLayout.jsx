import NavBar from "../components/Navbar"

export default function ProtectedLayout({ children }) {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    )
}