import { Badge, Box, Card, IconButton, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { FC } from "react";
import { CardModel } from "../models/CardModel";

interface Props {
  card: CardModel;
}

const TodoCard: FC<Props> = ({ card: card }) => {
  return (
    <Card
      sx={{
        minWidth: 400,
        maxWidth: 500,
        marginRight: 2,
        boxShadow: 3,
        borderRadius: 1,
      }}
    >
      {" "}
      <Box
        sx={{
          backgroundColor: "#ebebeb",
          border: 0,
          borderBottom: 1,
          borderBlockColor: "black",
          padding: 1,
          display: "flex",
        }}
      >
        <Typography
          sx={{ fontSize: 20, fontWeight: 600, flexGrow: 0, paddingTop: 1 }}
          color="text.primary"
        >
      {card.title}
          
        </Typography>
        <Badge
          badgeContent={0}
          color="primary"
          sx={{ paddingLeft: 1, flexGrow: 1, paddingTop: 1 }}
        >
          <AssignmentIcon />
        </Badge>

        <IconButton>
          <AddCircleRoundedIcon />{" "}
        </IconButton>
      </Box>
         asdf
    </Card>
  );
};
export default TodoCard