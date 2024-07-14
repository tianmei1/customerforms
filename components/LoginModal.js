import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Typography,
  Alert,
} from "@mui/material";

const LoginModal = ({ open, onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Login
        </Typography>
        {error && (
          <Alert severity="error" style={{ marginBottom: "20px" }}>
            {error}
          </Alert>
        )}
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
