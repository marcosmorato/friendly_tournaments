import { useState, useEffect } from "react";
import { Bracket, RoundProps } from "react-brackets";

export const TesteApi = () => {
  const rounds = [
    {
      title: "Round 1",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team B" }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }, { name: "Team D" }],
        },
      ],
    },
    {
      title: "Round 2",
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team C" }],
        },
      ],
    },
    {
      title: "Final",
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }],
        },
      ],
    },
  ];

  return (
    <>
      <Bracket rounds={rounds} />
    </>
  );
};