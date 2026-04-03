import React, { useEffect, useState } from "react";
import { Box, Grid, Card, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalUsers: 0,
    totalApplications: 0,
    recentJobs: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:8080/admin/stats");
         console.log(res.data);
        setStats(res.data);
       
      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();
  }, []);

return (
  <Box sx={{ background: "#f5f7fb", minHeight: "100vh", p: 4 }}>

    {/* HEADER */}
    <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
      Dashboard Overview
    </Typography>

    {/* STATS ROW */}
    <Grid container spacing={3} sx={{ mb: 5 }}>
      {[
        { title: "Total Jobs", value: stats.totalJobs },
        { title: "Users", value: stats.totalUsers },
        { title: "Applications", value: stats.totalApplications },
        { title: "Recent Jobs", value: stats.recentJobs },
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              p: 3,
              borderRadius: "12px",
              background: "#fff",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography sx={{ color: "#6b7280" }}>
              {item.title}
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
              {item.value}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>

    {/* SINGLE ANALYTICS SECTION */}
 <Box sx={{ mt: 5 }}>
  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
    Analytics Overview
  </Typography>

  <Card
    sx={{
      p: 3,
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      width: "100%",
    }}
  >
    <Typography sx={{ mb: 2 }}>Jobs Statistics</Typography>

    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={[
          { name: "Jobs", value: stats.totalJobs },
          { name: "Users", value: stats.totalUsers },
          { name: "Apps", value: stats.totalApplications },
          { name: "Recent", value: stats.recentJobs },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </Card>
</Box>

  </Box>
);
};

export default AdminDashboard;