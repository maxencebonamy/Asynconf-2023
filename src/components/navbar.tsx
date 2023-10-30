import Image from "next/image"

interface NavbarProps {

}

const Navbar = ({}: NavbarProps) => {
    return (
        <nav className="fixed w-full h-28 p-8 flex flex-row items-center justify-between bg-transparent">
            <Image src="/logo.png" alt="Logo" width={48} height={48} />
        </nav>
    )
}

export default Navbar