import { Button } from "../button/button";
import { SunIcon } from "../icons";
import { MoonIcon } from "../icons/moon";
import { UserIcon } from "../icons/user";
import { SearchBar } from "../search-bar/search-bar";

export const AppHeader = () => {
    return (
        <header className="bg-white py-4 px-10 shadow-md flex w-full justify-between fixed top-0">
            <div className="flex items-center relative ">
                <h1 className="text-xl font-bold">
                    <img
                        src="mustache.png"
                        alt="mustache logo"
                        className="w-12"
                    />{" "}
                </h1>
            </div>

            <div className="flex-1 justify-center items-center">
                <SearchBar />
            </div>

            <nav className="flex  relative items-end justify-end">
                <Button.Group>
                    <Button icon={<MoonIcon />} variant="text" rounded />

                    <Button icon={<UserIcon />} variant="text" rounded />
                </Button.Group>
            </nav>
        </header>
    );
};
