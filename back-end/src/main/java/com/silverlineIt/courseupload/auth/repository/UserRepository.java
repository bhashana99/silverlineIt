package com.silverlineIt.courseupload.auth.repository;

import com.silverlineIt.courseupload.auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
}
