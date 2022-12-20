import { PropsWithChildren } from "react";
import { AppHeader } from "../app-header/app-header";

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <main>
            <AppHeader />
            <div className="max-w-2xl mx-auto mt-24 mb-12">{children}</div>
        </main>
    );
};
