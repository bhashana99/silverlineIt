package com.silverlineIt.courseupload.auth.dto;

import com.silverlineIt.courseupload.auth.model.Role;
import lombok.Data;

@Data
public class UserResponseDTO {
    private Long id;
    private String username;
    private Role role;
}
