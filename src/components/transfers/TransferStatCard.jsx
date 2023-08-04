import React from "react";
import {
  Typography,
  Card,
  CardContent,
  LinearProgress,
  CardActions,
} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";

const TransferStatCard = ({ value, title }) => {
  const { theme } = useContext(ThemeContext);
  const cardBg = theme == "light" ? "#89ABE3" : "#0C3C78";
  // Grozno ama raboti

  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 90,
        backgroundColor: cardBg,
        raised: true,
      }}
      className="m-4 drop-shadow-lg rounded-sm w-2/3 h-auto flex flex-col justify-center items-center outline dark:outline-dark-tertiary"
    >
      <CardContent className="w-full flex flex-col justify-center items-center">
        <Typography variant="h6" component="h2" className="text-white mb-2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="a"
          className="my-auto"
          style={{ color: "aliceblue", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {value}
        </Typography>
        <LinearProgress
          variant="buffer"
          value={value}
          style={{ flexGrow: 3, width: "100%" }}
          valueBuffer={100}
          color="warning"
        />
      </CardContent>
      <CardActions className="w-full flex justify-center items-center">
        <Typography
          variant="body2"
          component="a"
          className="dark:text-light-primary cursor-pointer hover:dark:text-dark-tertiary"
          onClick={() => console.log("View button pressed")}
        >
          View
        </Typography>
      </CardActions>
    </Card>
  );
};

export default TransferStatCard;
