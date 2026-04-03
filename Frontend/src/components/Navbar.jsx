import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar sx={{ px: 4 }}>

        {/* Logo / Title */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: "0.5px",
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Job Portal 🚀
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            href="http://localhost:3000"
            sx={{
              color: "#374151",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": {
                color: "#1976d2",
                background: "#f0f7ff",
              },
            }}
          >
            Home
          </Button>

          <Button
            href="http://localhost:3000/Create"
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "10px",
              fontWeight: 600,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              boxShadow: "0 4px 15px rgba(25,118,210,0.3)",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #1e88e5)",
              },
            }}
          >
            + Add Job
          </Button>
          <Button
            href="http://localhost:3000/AdminDashBoard"
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "10px",
              fontWeight: 600,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              boxShadow: "0 4px 15px rgba(25,118,210,0.3)",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #1e88e5)",
              },
            }}
          >
            DashBoard
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;