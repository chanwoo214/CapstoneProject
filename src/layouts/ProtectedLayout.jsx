import NavBar from "../components/NavBar"

export default function ProtectedLayout({ children }) {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    )
}