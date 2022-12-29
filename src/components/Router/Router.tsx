import { Route, Routes } from "react-router-dom";
import { routes } from "../../ConstData/ConstData";

export const Router = () => {
    return (
        <Routes>
            {
                routes.map((item, index) => 
                <Route
                    path={item.link}
                    key={index}
                    element={item.element}
                />)
            }

        </Routes>
    );
};