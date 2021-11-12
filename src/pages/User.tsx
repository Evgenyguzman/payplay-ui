import { FlexColumn } from "components/common/flex";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

import Header from "components/User/Header/Header";
import Friends from "components/User/Profile/Friends/Friends";
import Transactions from "components/User/Profile/Transactions/Transactions";
import Affiliates from "components/User/Profile/Affiliates/Affiliates";
import Statistics from "components/User/Profile/Statistics/Statistics";

interface Props {}

const User = (props: Props) => {
  const {
    params: { id },
  } = useRouteMatch<{
    id?: string;
  }>();

  console.log(id);

  return (
    <FlexColumn alignItems="center">
      <Header id={id} />
      <Switch>
        <Route path="/user/statistics" component={Statistics} />
        <Route path="/user/friends" component={Friends} />
        <Route path="/user/affiliates" component={Affiliates} />
        <Route path="/user/transactions" component={Transactions} />
        <Route component={() => <Redirect to="/user/friends" />} />
      </Switch>
    </FlexColumn>
  );
};

export default User;
