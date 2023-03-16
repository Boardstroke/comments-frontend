import { Outlet } from "react-router-dom";
import { Layout } from "../components/layout/layout";

export const Root = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};
