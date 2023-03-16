import { PropsWithChildren } from "react";
import { useTheme } from "../../contexts/theme";
import { AppHeader } from "../app-header/app-header";

export const Layout = ({ children }: PropsWithChildren) => {
    const { theme } = useTheme();

    return (
        <main className={`${theme} `}>
            <div className="flex flex-col dark:bg-slate-900 min-h-screen">
                <AppHeader />
                <div className="max-w-screen-md mx-auto flex-1 mt-24 dark:bg-slate-900">
                    {children}
                </div>
            </div>
        </main>
    );
};
