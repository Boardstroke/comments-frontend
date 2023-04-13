import { Card } from "../components/card/card"

export const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Card>

                <div className="flex flex-col items-center justify-center">
                    <img
                        src="/mustache.png"
                        alt="mustache logo"
                        className="w-12"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Mustache
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400">
                        Login to your account
                    </p>
                </div>

                <form className="flex flex-col items-center justify-center w-full mt-8">
                    <div className="w-full">
                        <label
                            htmlFor="email"
                            className="text-gray-600 dark:text-gray-400"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />

                        <label
                            htmlFor="password"
                            className="text-gray-600 dark:text-gray-400"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-between w-full mt-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-blue-500"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-gray-600 dark:text-gray-400"
                            >
                                Remember me
                            </label>
                        </div>

                        <a
                            href="#"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center justify-center w-full mt-8">
                    <span className="text-gray-500 dark:text-gray-400">
                        Don't have an account?
                    </span>
                    <a
                        href="#"
                        className="ml-2 text-blue-500 hover:underline"
                    >
                        Sign up
                    </a>

                </div>
            </Card>


        </div>
    )
}