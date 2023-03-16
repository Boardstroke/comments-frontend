import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
    return (
        <article className="bg-white dark:bg-slate-900 dark:border-slate-700 p-4 border-l-0 border-r-0 md:rounded-lg md:border-l md:border-r border border-gray-300 flex flex-col gap-y-4 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
            {children}
        </article>
    );
};
