import { Route, Switch } from "react-router";
import WeatherPage from "./pages/WeatherPage";

const Router = () => {
  return (
    <div>
      <Switch>{<Route exact path={"/"} component={WeatherPage} />}</Switch>
    </div>
  );
};

export default Router;
