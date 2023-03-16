export const SearchBar = () => {
    return (
        <div className="relative w-full max-w-sm mx-auto ">
            <button className="absolute left-4 top-0 mt-3 mr-4">
                <svg
                    className="w-4 h-4 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                >
                    <path
                        className="heroicon-ui"
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                </svg>
            </button>
            <input
                className="w-full pl-10 py-2 rounded-lg text-gray-700 dark:bg-slate-900 dark:text-gray-200 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search..."
            />
        </div>
    );
};
