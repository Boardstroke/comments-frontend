import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/theme";
import { Button } from "../button/button";
import { SunIcon } from "../icons";
import { MoonIcon } from "../icons/moon";
import { UserIcon } from "../icons/user";
import { SearchBar } from "../search-bar/search-bar";
export const AppHeader = () => {
    const { setTheme, theme } = useTheme();
    return (
        <header className=" bg-white dark:bg-slate-900 border-b dark:border-b-slate-700 py-4 px-10 flex w-full justify-between fixed top-0">
            <div className="flex items-center relative ">
                <Link to={"/"}>
                    <img
                        src="/mustache.png"
                        alt="mustache logo"
                        className="w-12"
                    />
                </Link>
            </div>

            <div className="flex-1 justify-center items-center">
                <SearchBar />
            </div>

            <nav className="flex  relative items-end justify-end">
                <Button.Group>
                    <Button
                        icon={theme == "light" ? <MoonIcon /> : <SunIcon />}
                        variant="text"
                        rounded
                        onClick={() =>
                            setTheme((prevTheme) =>
                                prevTheme === "light" ? "dark" : "light"
                            )
                        }
                    />

                    <Button icon={<UserIcon />} variant="text" rounded />
                </Button.Group>
            </nav>
        </header>
    );
};
