import { IconButton } from "@mui/material";
// import { useAppSelector } from "../../hooks/store";
import { JournalLayout } from "../layout/TodoLayout";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { TodoView } from "../views/TodoView";
import "./styles.css";
import confetti from "canvas-confetti";

export const TodoPage = () => {
  // const { displayName } = useAppSelector((state) => state.auth);

  return (
    <>
      <JournalLayout>
        <TodoView />

        <IconButton
          onClick={() => confetti()}
          size="large"
          sx={{
            color: "white",
            backgroundColor: "#0d6efd",
            ":hover": { backgroundColor: "#0d6efd", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <FlashOnIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
