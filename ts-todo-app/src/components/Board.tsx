import { Box, Button } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { CardModel } from "../models/CardModel";
import TodoCard from "./ToDoCard";

const Board: FC = () => {
  const [cardList, setCardList] = useState<CardModel[]>([]);

  const [coutner, setCounter] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5240/api/Columns`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("most fut a use effect");
        const columns = res.data;
        setCardList(columns);
        console.log(columns);
      });
  }, []);

  return (
    <>
      <Box>
        {cardList &&
          cardList.map((card) => (
            <TodoCard key={card.id} card={card}></TodoCard>
          ))}
      </Box>
    </>
  );
};

export default Board;
