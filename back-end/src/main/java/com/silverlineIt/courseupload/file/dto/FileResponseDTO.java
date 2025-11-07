package com.silverlineIt.courseupload.file.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FileResponseDTO {
    private Long id;
    private String fileName;
    private String fileType;
    private Long fileSize;
    private String fileUrl;
    private String ownerUsername;
    private LocalDateTime uploadedAt;
}
