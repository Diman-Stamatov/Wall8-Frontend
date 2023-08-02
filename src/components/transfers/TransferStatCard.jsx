import React from "react";
import {
  Typography,
  Card,
  CardContent,
  LinearProgress,
  CardActions,
} from "@mui/material";

const TransferStatCard = ({ value, title }) => {
  return (
    <Card
      sx={{ minWidth: 275, minHeight: 90, backgroundColor: "slategray" }}
      className="m-4 drop-shadow-lg rounded-sm w-2/3 h-auto flex flex-col justify-center items-center"
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
        <Typography variant="body2" component="a" className="text-white">
          View
        </Typography>
      </CardActions>
    </Card>
  );
};

export default TransferStatCard;
