import Box from "components/common/Box";
import { Flex } from "components/common/flex";
import Footer from "components/common/Footer/Footer";
import Header from "components/common/Header/Header";
import Giveaway from "components/common/Sidebar/Giveaway/Giveaway";
import SidebarHeader from "components/common/Sidebar/Header/Header";
import Sidebar from "components/common/Sidebar/Sidebar";
import Game from "pages/Game";
import Home from "pages/Home";
import Store from "pages/Store";
import User from "pages/User";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Flex className="App">
        <Sidebar>
          <SidebarHeader />
          <Giveaway />
        </Sidebar>
        <Box flexGrow={1} display="grid" gridTemplateRows="auto 1fr auto">
          <Header>Header</Header>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/user/:page?/:id?" component={User} />
            <Route path="/store" component={Store} />
            <Route component={() => <Redirect to="/" />} />
          </Switch>

          <Footer />
        </Box>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
