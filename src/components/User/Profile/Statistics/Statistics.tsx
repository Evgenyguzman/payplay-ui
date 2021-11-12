import { Typography } from "@mui/material";
import Box from "components/common/Box";
import Button from "components/common/Button";
import { Flex, FlexCenter, FlexColumn } from "components/common/flex";
import Table from "components/common/Table/Table";
import Title from "components/common/Title/Title";
import React from "react";

import map from "assets/images/de_dust.jpg";

const Parameter = ({ title, description }: any) => {
  return (
    <FlexCenter
      width="180px"
      height="180px"
      flexDirection="column"
      border="2px solid #6C5ECF"
      borderRadius="50%"
    >
      <Typography
        width="100px"
        textAlign="center"
        fontWeight="400"
        fontStyle="italic"
        style={{ textTransform: "uppercase" }}
      >
        {description}
      </Typography>
      <Typography component="span" fontSize={52}>
        {title}
      </Typography>
    </FlexCenter>
  );
};

const arr = [
  {
    key: "matches",
    value: 263,
  },
  {
    key: "K/D",
    value: 1.12,
  },
  {
    key: "WIN %",
    value: "50%",
  },
  {
    key: "AVG",
    value: "25",
  },
  {
    key: "Longest Win Streak",
    value: 7,
  },
];

interface Props {}

const Statistics = (props: Props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Mode",
        accessor: "mode",
      },
      {
        Header: "Result",
        accessor: "result",
        Cell: ({ cell: { value } }: any) => {
          return (
            <Typography
              color={value === "loss" ? "#F84B60" : "#4BDA7C"}
              style={{ textTransform: "uppercase" }}
            >
              {value}
            </Typography>
          );
        },
      },
      {
        Header: "Score",
        accessor: "score",
      },
      {
        Header: "Map",
        accessor: "map",
        Cell: ({ cell: { value } }: any) => {
          return (
            <Flex alignItems="center" gap="18px" justifyContent="center">
              <Typography>{value.name}</Typography>
              <Box
                width="143px"
                height="66px"
                borderRadius="8px"
                overflow="hidden"
                style={{
                  backgroundImage: `url(${value.imageUrl})`,
                  backgroundSize: "cover",
                }}
              >
                {/* <img src={value.imageUrl} alt={value.name} /> */}
              </Box>

              <FlexColumn alignItems="center" gap="7px">
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  style={{
                    padding: "6.5px 18px",
                    borderRadius: 6,
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#FFF",
                    lineHeight: "12px",
                  }}
                >
                  Scoreboard
                </Button>
                <Button variant="contained" size="small">
                  WATCH DEMO
                </Button>
              </FlexColumn>
            </Flex>
          );
        },
      },
    ],
    []
  );

  const data = [
    {
      date: "26 AUG - 04:14",
      mode: "5V5",
      result: "loss",
      score: "16/14",
      map: {
        name: "DE_DUST2",
        imageUrl: map,
      },
    },
    {
      date: "28 AUG - 04:14",
      mode: "5V5",
      result: "win",
      score: "16/14",
      map: {
        name: "DE_DUST2",
        imageUrl: map,
      },
    },
  ];

  return (
    <Box>
      <Flex gap="70px" py="100px">
        {arr.map((item) => (
          <Parameter key={item.key} title={item.value} description={item.key} />
        ))}
      </Flex>
      <FlexColumn>
        <Title bgcolor="#FFF">
          <Typography variant="h1">Match history</Typography>
        </Title>
        <Box py="87px">
          <Table data={data} columns={columns} />
        </Box>
      </FlexColumn>
    </Box>
  );
};

export default Statistics;
