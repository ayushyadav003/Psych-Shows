import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MovieDetail from "../../components/movieDeail/MovieDetail";
import Searchbar from "../../widgets/Searchbar";
import styles from "./adminPage.module.scss";
import Input from "../../components/input/Input";
import { Button } from "@mui/material";

function Admin() {
  const [inputCount, setInputCount] = useState(5);
  return (
    <div className={styles.adminContainer}>
      <Searchbar />
      <div className={styles.adminBodyContainer}>
        <MovieDetail />
        <form className={styles.textFieldContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "10px",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => setInputCount((prev) => prev - 1)}
              disabled={inputCount > 1 ? false : true}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#55AAFF", color: "#fff" }}
              onClick={() => setInputCount((prev) => prev + 1)}
            >
              Add
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "green", color: "#fff" }}
              type="submit"
            >
              Save
            </Button>
          </div>
          <Input input={inputCount} />
        </form>
      </div>
    </div>
  );
}

export default Admin;
