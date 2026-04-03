import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/edit", { state: { id } });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/jobPost/${id}`);
    setPost((prev) => prev.filter((item) => item.postId !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      let res;
      if (query.length > 2) {
        res = await axios.get(
          `http://localhost:8080/jobPosts/keyword/${query}`
        );
      } else {
        res = await axios.get(`http://localhost:8080/jobPosts`);
      }
      setPost(res.data);
    };
    fetchData();
  }, [query]);

  return (
    <Box sx={{ padding: "3%" }}>
      
      {/* 🔍 Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search jobs (Java, React, Backend...)"
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          marginBottom: 4,
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: "14px",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#666" }} />
            </InputAdornment>
          ),
        }}
      />

      {/* 📦 Cards */}
      <Grid container spacing={4}>
        {post.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.postId}>
            <Card
              sx={{
                padding: 3,
                borderRadius: "20px",
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                },
              }}
            >
              {/* Title */}
              <Typography variant="h6" fontWeight="700">
                {p.postProfile}
              </Typography>

              {/* Description */}
              <Typography
                sx={{ color: "#555", mt: 1 }}
                variant="body2"
              >
                {p.postDesc}
              </Typography>

              {/* Experience */}
              <Typography sx={{ mt: 1 }}>
                <strong>Experience:</strong> {p.reqExperience} yrs
              </Typography>

              {/* Skills */}
              <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {p.postTechStack.map((s, i) => (
                  <Chip
                    key={i}
                    label={s}
                    sx={{
                      background: "#1976d2",
                      color: "#fff",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>

              {/* Actions */}
              <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                <IconButton onClick={() => handleDelete(p.postId)}>
                  <DeleteIcon sx={{ color: "#e53935" }} />
                </IconButton>
                <IconButton onClick={() => handleEdit(p.postId)}>
                  <EditIcon sx={{ color: "#1e88e5" }} />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Search;