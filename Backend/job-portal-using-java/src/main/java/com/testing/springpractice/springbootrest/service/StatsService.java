package com.testing.springpractice.springbootrest.service;

import com.testing.springpractice.springbootrest.Model.Stats;
import com.testing.springpractice.springbootrest.Repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatsService {
    @Autowired
    JobRepo rep;


    public Stats getStats() {
        Stats st = new Stats();
        st.setTotalApplications(rep.count());
        st.setTotalUsers(rep.count());
        st.setTotalJobs(rep.count());
        st.setRecentJobs(rep.findTop5ByOrderByPostIdDesc().size());
        return st;
    }
}
