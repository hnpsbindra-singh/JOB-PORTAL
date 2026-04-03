package com.testing.springpractice.springbootrest.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Scope;

@Entity
@Scope("Prototype")
public class Stats {
    @Id
    private long totalJobs;
    private long totalUsers;
    private long totalApplications;
    private int recentJobs;

    public long getTotalJobs() {
        return totalJobs;
    }

    public void setTotalJobs(long totalJobs) {
        this.totalJobs = totalJobs;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalApplications() {
        return totalApplications;
    }

    public void setTotalApplications(long totalApplications) {
        this.totalApplications = totalApplications;
    }

    public int getRecentJobs() {
        return recentJobs;
    }

    public void setRecentJobs(int recentJobs) {
        this.recentJobs = recentJobs;
    }
}
