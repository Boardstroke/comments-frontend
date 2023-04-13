import { PropsWithChildren } from "react";


export enum CardSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export type CardProps = PropsWithChildren<{
    isLink?: boolean;
    size?: CardSize;
}>;




export const Card = ({ children, isLink = false }: CardProps) => {
    return (
        <article className={`bg-white dark:bg-slate-900 dark:border-slate-700 p-4 border-l-0 border-r-0 md:rounded-lg md:border-l md:border-r border border-gray-300 flex flex-col gap-y-4 ${isLink && "hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer"}`}>
            {children}
        </article>
    );
};
