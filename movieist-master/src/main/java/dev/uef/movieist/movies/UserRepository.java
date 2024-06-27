package dev.uef.movieist.movies;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, Long> {
    Optional<User> findByUsername(String username);
    User UsernameAndPassword(String username,String password);
}
