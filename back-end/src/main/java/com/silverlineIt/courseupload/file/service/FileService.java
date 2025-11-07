package com.silverlineIt.courseupload.file.service;

import com.silverlineIt.courseupload.auth.dto.UserResponseDTO;
import com.silverlineIt.courseupload.auth.model.User;
import com.silverlineIt.courseupload.exception.CustomException;
import com.silverlineIt.courseupload.file.dto.FileResponseDTO;
import com.silverlineIt.courseupload.file.model.CourseContent;
import com.silverlineIt.courseupload.file.repository.CourseContentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
@RequiredArgsConstructor
public class FileService {

    private final CourseContentRepository contentRepository;
    private final String UPLOAD_DIR = "./uploads";

    public FileResponseDTO uploadFile(MultipartFile file, String username){
        if(file.isEmpty()) throw new CustomException("File is empty");

        String contentType = file.getContentType();
        if (!("application/pdf".equals(contentType) ||
                "video/mp4".equals(contentType) ||
                "image/jpeg".equals(contentType) ||
                "image/png".equals(contentType))) {
            throw new CustomException("File type not allowed");
        }

        long MAX_SIZE = 50 * 1024 * 1024;
        if (file.getSize() > MAX_SIZE) throw new CustomException("File too large");

        try {
            File dir = new File(UPLOAD_DIR);
            if(!dir.exists()) dir.mkdirs();

            String filePath = UPLOAD_DIR + "/" + file.getOriginalFilename();
            file.transferTo(new File(filePath));

            CourseContent content = new CourseContent();
            content.setFileName(file.getOriginalFilename());
            content.setFileType(file.getContentType());
            content.setFileSize(file.getSize());
            content.setFileUrl(filePath);
            content.setOwnerUsername(username);

            contentRepository.save(content);
            return fileMapper(content);
        } catch(IOException e){
            throw new CustomException("File upload failed");
        }
    }

    public FileResponseDTO fileMapper(CourseContent content) {
        FileResponseDTO dto = new FileResponseDTO();

        dto.setId(content.getId());
        dto.setFileName(content.getFileName());
        dto.setFileType(content.getFileType());
        dto.setFileSize(content.getFileSize());
        dto.setFileUrl(content.getFileUrl());
        dto.setOwnerUsername(content.getOwnerUsername());
        dto.setUploadedAt(content.getUploadedAt());
        return dto;
    }


}
