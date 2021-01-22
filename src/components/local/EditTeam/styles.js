import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  userRoot: {
    width: "80%",
    height: "100%",
    marginBottom: "10px",
    backgroundColor: "#353a46",
    color: "white",
  },
  editTeam: {
    width: "30%",
    height: "45%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  buttonsTeamEdit: {
    textAlign: "center",
    "& button": {
      margin: "1rem ",
    },
  },
}));
