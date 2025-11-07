package com.silverlineIt.courseupload.auth.controller;

import com.silverlineIt.courseupload.auth.dto.UserRegisterDTO;
import com.silverlineIt.courseupload.auth.dto.UserResponseDTO;
import com.silverlineIt.courseupload.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> register(@RequestBody UserRegisterDTO dto) {
        return ResponseEntity.ok(authService.register(dto));
    }

}
