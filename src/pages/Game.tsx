import Voting from "components/Game/Voting/Voting";
import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";

import { Flex, FlexColumn } from "components/common/flex";
import Player from "components/Game/Player/Player";

import { teams } from "../data/teams";
import Header, { StatusProps } from "components/Game/Header/Header";
import GameStarted from "components/Game/GameStarted/GameStarted";
import GameFinished from "components/Game/GameFinished/GameFinished";

interface Props {}

const Game = (props: Props) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const status: StatusProps =
    pathname === "/game/voting"
      ? {
          title: "voting",
          description: "BO1",
        }
      : pathname === "/game/started"
      ? {
          title: "ongoing",
          description: "BO1",
        }
      : {
          title: "finished",
          description: "BO1",
          result: 1,
        };

  useEffect(() => {
    if (pathname === "/game/started") {
      setTimeout(() => {
        history.push("/game/finished");
      }, 5000);
    }
  }, [pathname, history]);

  const handleMapChoosen = (mapId: string) => {
    history.push("/game/started");
  };

  return (
    <div>
      <Header
        teamsInfo={[
          {
            username: "pidorasov",
            elo: "2872",
            diff: "126",
            win: "10",
            loss: "-30",
          },
          {
            username: "autistov",
            elo: "2872",
            diff: "126",
            win: "10",
            loss: "-30",
          },
        ]}
        status={status}
      />
      <Flex justifyContent="center" pt="12px" pb="20px" gap="62px">
        <FlexColumn gap="5px">
          {teams[0].players.map((player) => (
            <Player key={player.id} data={player} />
          ))}
        </FlexColumn>
        <Switch>
          <Route
            path="/game/voting"
            render={() => {
              return <Voting onMapChoosen={handleMapChoosen} />;
            }}
          />
          <Route path="/game/started" component={GameStarted} />
          <Route path="/game/finished" component={GameFinished} />
          <Route component={() => <Redirect to="/game/voting" />} />
        </Switch>
        <FlexColumn gap="5px">
          {teams[1].players.map((player) => (
            <Player key={player.id} data={player} />
          ))}
        </FlexColumn>
      </Flex>
    </div>
  );
};

export default Game;
