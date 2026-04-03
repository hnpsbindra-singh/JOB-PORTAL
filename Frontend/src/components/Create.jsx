import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const initial = { postId:"",postProfile: "", reqExperience: 0, postTechStack: [], postDesc:"" };


const Create = () => {
  const skillSet = [
    {
      name: "Javascript"
    },
    {
      name: "Java"
    },
    {
      name: "Python"
    },
    {
      name: "Django"
    },
    {
      name: "Rust"
    }
  ];

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/jobPost",form)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate('/');
    };


  const { postId, postProfile, reqExperience, postDesc } = form;

  const handleChange = (e) => {
    setForm({...form , postTechStack : [...form.postTechStack, e.target.value]});
  }

  

 return (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #eef2f3, #dfe9f3)",
    }}
  >
    <Paper
      elevation={0}
      sx={{
        padding: "3%",
        width: "420px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        align="center"
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          background: "linear-gradient(90deg, #1976d2, #42a5f5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Create New Job 🚀
      </Typography>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          
          <TextField
            type="number"
            label="Post ID"
            value={postId}
            onChange={(e) => setForm({ ...form, postId: e.target.value })}
            fullWidth
          />

          <TextField
            label="Job Profile"
            value={postProfile}
            onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
            fullWidth
            required
          />

          <TextField
            type="number"
            label="Experience (years)"
            value={reqExperience}
            onChange={(e) => setForm({ ...form, reqExperience: e.target.value })}
            fullWidth
            required
          />

          <TextField
            label="Job Description"
            value={postDesc}
            onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
            multiline
            rows={4}
            fullWidth
            required
          />

          {/* Skills */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 600 }}>
              Required Skills
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {skillSet.map(({ name }, index) => (
                <label key={index} style={{ cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    value={name}
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: "20px",
                      background: "#e3f2fd",
                      fontSize: "0.85rem",
                      transition: "0.3s",
                      "&:hover": {
                        background: "#1976d2",
                        color: "#fff",
                      },
                    }}
                  >
                    {name}
                  </Box>
                </label>
              ))}
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              borderRadius: "12px",
              padding: "10px",
              fontWeight: 600,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              boxShadow: "0 6px 20px rgba(25,118,210,0.3)",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #1e88e5)",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  </Box>
);
}

export default Create