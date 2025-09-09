import { Link } from "react-router-dom";

import Logo from "@/assets/logo.svg?react";
import Search from "@/shared/ui/Search";
import Login from "@/shared/ui/Login";

const Header = () => {
    return (
        <header className = "flex justify-between w-full h-21.6 items-center">
            <Link to={`/`}>
                <Logo className = "flex w-26 cursor-pointer justify-start"/>
            </Link>

            <Search />
            <Login />

        </header>
    )
}

export default Header;