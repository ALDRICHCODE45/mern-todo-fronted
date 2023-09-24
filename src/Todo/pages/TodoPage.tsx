import { IconButton } from "@mui/material";
// import { useAppSelector } from "../../hooks/store";
import { JournalLayout } from "../layout/TodoLayout";
import { AddOutlined } from "@mui/icons-material";
import { TodoView } from "../views/TodoView";
import "./styles.css";

export const TodoPage = () => {
  // const { displayName } = useAppSelector((state) => state.auth);
  return (
    <>
      <JournalLayout>
        {/* {active !== null ? <NoteView /> : <NothingSelectedView />} */}
        <TodoView />

        <IconButton
          // disabled={isSaving}
          // onClick={onAddNewNote}
          size="large"
          sx={{
            color: "white",
            backgroundColor: "#0d6efd",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
