import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h1 className="text-center">{error}</h1>
        </div>
    );
};

export default ErrorPage;