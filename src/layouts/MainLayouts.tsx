import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            Main Layout
            <Outlet/>
        </div>
    );
};

export default MainLayouts;