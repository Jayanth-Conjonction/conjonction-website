import { Route } from "react-router-dom";
import Header from "../../containers/Header";

const RouteWrapper = ({ routeType, layout, layoutProps, ...rest }) => {
  let routeComponenent;

  routeComponenent = <Route {...rest} />;

  if (layout === "regular") {
    return <Header {...layoutProps}> {routeComponenent} </Header>;
  } else {
    return routeComponenent;
  }
};

export default RouteWrapper;
