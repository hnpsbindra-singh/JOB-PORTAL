package com.testing.springpractice.springbootrest;

import com.testing.springpractice.springbootrest.Model.JobPost;
import com.testing.springpractice.springbootrest.Model.Stats;
import com.testing.springpractice.springbootrest.service.JobService;
import com.testing.springpractice.springbootrest.service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.origin.Origin;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class JobRestController {
    @Autowired
    private JobService srv;

    @Autowired
    private StatsService stat;

    @GetMapping("jobPosts")
    @ResponseBody
    public List<JobPost> getAllJobs() {
        return srv.getAllJobs();

    }

    @GetMapping("jobPost/{id}")
    public JobPost getJob(@PathVariable int id) {
        return srv.getJob(id);
    }

    @PostMapping("jobPost")
    public void addjob(@RequestBody JobPost job){
        srv.addJob(job);
    }
    @PutMapping("jobPost")
    public JobPost updatejob(@RequestBody JobPost job){
        srv.updateJob(job);
        return srv.getJob(job.getPostId());
    }
    @DeleteMapping("jobPost/{id}")
    public String Deletejob(@PathVariable int id){
        srv.deleteJob(id);
        return "Deleted";
    }
    @GetMapping("load")
    public String load(){
        srv.load();
        return "loaded";
    }
    @GetMapping("jobPosts/keyword/{keyword}")
    public List<JobPost> searchbykeyword(@PathVariable String keyword)
    {
       return srv.search(keyword, keyword);
    }

    @GetMapping("/admin/stats")
    public Stats result(){
        return stat.getStats();
    }
}
