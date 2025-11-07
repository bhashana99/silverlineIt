package com.silverlineIt.courseupload.auth.service;

import com.silverlineIt.courseupload.auth.dto.UserRegisterDTO;
import com.silverlineIt.courseupload.auth.dto.UserResponseDTO;
import com.silverlineIt.courseupload.auth.model.User;
import com.silverlineIt.courseupload.auth.repository.UserRepository;
import com.silverlineIt.courseupload.exception.CustomException;
import com.silverlineIt.courseupload.secutity.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenUtil jwtTokenUtil;

    public UserResponseDTO register(UserRegisterDTO dto) {
        if(userRepository.findByUsername(dto.getUsername()).isPresent()) {
            throw new CustomException("Username already exists");
        }

        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setRole(dto.getRole() != null ? dto.getRole() : user.getRole());

        user = userRepository.save(user);

        return userMapper(user);
    }


    public UserResponseDTO userMapper(User user) {
        UserResponseDTO dto = new UserResponseDTO();

        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setRole(user.getRole());

        return dto;
    }

    public String login(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException("Invalid credentials"));

        if(!passwordEncoder.matches(password, user.getPassword())) {
            throw new CustomException("Invalid credentials");
        }

        return jwtTokenUtil.generateToken(user.getUsername());
    }
}
