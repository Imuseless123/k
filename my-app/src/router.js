import {ROUTERS} from "./utils/router";
import HomePage from "./pages/user/homePage";
import {Route, Routes} from "react-router-dom";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";
import ShopPage from "./pages/user/shopPage";

const renderRouterUser = () => {
  const userRouters = [
      {
          path: ROUTERS.USER.HOME,
          component: <HomePage/>
      },
      {
          path: ROUTERS.USER.PROFILE,
          component: <ProfilePage/>
      },
      {
          path: ROUTERS.USER.SHOP,
          component: <ShopPage/>
      }
  ]
    
    return (
        <MasterLayout>
            <Routes>
                {
                userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component}/>
                    ))
                }
            </Routes>
        </MasterLayout>
  )
}

const RouterCustom = () => {
  return renderRouterUser();
};

export default RouterCustom;