import { ButtonBadge } from "../button-badge/button-badge";
import { ButtonGroup } from "../button-group/button-group";
import { LoadingIcon } from "../icons";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "text" | "danger";
    rounded?: boolean;
    icon?: React.ReactNode;

    // This is a custom prop that we'll use to render a spinner
    // when the button is loading
    isLoading?: boolean;
}

export const Button = ({
    variant = "primary",
    rounded = false,
    icon,
    isLoading = false,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`
                inline-flex items-center justify-center
                px-4 py-2
                border border-gray-400
                text-sm font-medium rounded-md
                text-slate-800 
                hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400
                ${rounded ? "rounded-full px-2 py-2" : ""}

                ${
                    variant === "secondary"
                        ? "bg-white text-gray-700 hover:bg-gray-50"
                        : ""
                }
                ${
                    variant === "text"
                        ? "bg-transparent  border-transparent text-gray-700 hover:bg-gray-50"
                        : ""
                }
                ${
                    variant === "danger"
                        ? "bg-red-50  hover:bg-red-100 border-red-600 text-red-600"
                        : ""
                }

                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
            `}
            {...props}
        >
            {isLoading ? <LoadingIcon /> : icon}
            {children}
        </button>
    );
};

Button.Group = ButtonGroup;
Button.Badge = ButtonBadge;
