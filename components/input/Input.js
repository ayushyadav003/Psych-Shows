import { TextField } from "@mui/material";
import React from "react";

const Input = ({ input, placeholder }) => {
  return (
    <div style={{ padding: "10px" }}>
      {input ? (
        [...Array(input)].map((i) => (
          <div key={i} style={{ display: "flex", gap: "2%" }}>
            <TextField
              label={placeholder ? placeholder : "Text"}
              variant="filled"
              style={{ width: "30%", margin: "5px 0" }}
              required
            />
            <TextField
              label={placeholder ? placeholder : "Text"}
              variant="filled"
              style={{ width: "70%", margin: "5px 0" }}
              required
            />
          </div>
        ))
      ) : (
        <TextField
          label={placeholder ? placeholder : "Text"}
          variant="filled"
          style={{ width: "68%", margin: "5px 0" }}
        />
      )}
    </div>
  );
};

export default Input;
