import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { updateIsLoggedThunk } from "../../store/modules/users/thunk";
import { getTournamentInfoThunk } from "../../store/modules/tournaments/thunk";

import { IsValidState } from "../../components/global/IsValidState/index";

import { LinearProgress, Box } from "@material-ui/core";
import { useStyles } from "./styles";

import { TitleHeader } from "../../components/local/TournamentInfo/TitleHeader";
import { StatusSection } from "../../components/local/TournamentInfo/StatusSection";
import { InfoSection } from "../../components/local/TournamentInfo/InfoSection";

export const TournamentInfo = () => {
  const classes = useStyles();

  const { tournamentID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateIsLoggedThunk());
    dispatch(getTournamentInfoThunk(tournamentID));
  }, [dispatch, tournamentID]);

  const tournamentData = useSelector(
    ({ TournamentsReducer: { selectedTournament } }) => selectedTournament
  );

  useEffect(() => {}, [tournamentData]);

  const {
    gameName,
    info,
    numberOfTeams,
    teamsSize,
    teamsData,
    status,
    deadline,
    id,
  } = tournamentData;

  const isLogged = useSelector(({ UsersReducer: { isLogged } }) => isLogged);

  return (
    <>
      {IsValidState(tournamentData) ? (
        <Box component="div" className={classes.tournamentInfoRoot}>
          <TitleHeader isLogged={isLogged} tournamentData={tournamentData} />
          <StatusSection
            numberOfTeams={numberOfTeams}
            teamsSize={teamsSize}
            teamsSignedin={teamsData?.length}
            status={status}
            deadline={deadline}
          />
          <InfoSection
            info={info}
            teamsSize={teamsSize}
            gameName={gameName}
            tournamentId={id}
          />
        </Box>
      ) : (
        <Box component="div" className={classes.tournamentInfoRoot}>
          <LinearProgress />
        </Box>
      )}
    </>
  );
};
