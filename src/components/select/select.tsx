import { useState } from "react";
import { SelectArrowDownIcon } from "../icons/select-arrow-down";

export type Option = {
    value: string;
    label: string;
};

export type SelectProps = {
    options: Option[];
    defaultValue?: Option;
};

export const Select = ({ options, defaultValue }: SelectProps) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <div className="flex gap-x-1 w-35 text-xs justify-between items-center px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white  rounded-full">
                <span>{defaultValue?.label}</span>
                <SelectArrowDownIcon />
            </div>

            {isVisible && (
                <ul>
                    {options.map((option) => (
                        <li key={option.value}>{option.label}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
