package com.testing.springpractice.springbootrest.Repo;

import com.testing.springpractice.springbootrest.Model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepo extends JpaRepository<JobPost, Integer> {

    List<JobPost> findByPostProfileContainingOrPostDescContaining(String Keyword1, String keyword2);

    List<JobPost> findTop5ByOrderByPostIdDesc();
}
