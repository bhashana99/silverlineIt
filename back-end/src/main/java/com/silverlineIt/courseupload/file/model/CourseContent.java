package com.silverlineIt.courseupload.file.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name="course_content")
@Data
public class CourseContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;
    private String fileType;
    private Long fileSize;
    private LocalDateTime uploadDate = LocalDateTime.now();
    private String fileUrl;

    private String ownerUsername;
    private LocalDateTime uploadedAt = LocalDateTime.now();
}
