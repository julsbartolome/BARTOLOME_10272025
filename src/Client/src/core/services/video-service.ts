import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { VideoUpload } from '../../models/video-upload';
import { Observable } from 'rxjs';
import { Video } from '../../models/video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = `${environment.apiUrl}/api/videos`
  /**
   *
   */
  constructor(private http:HttpClient) {
    
  }

  uploadVideo(videoUpload: VideoUpload): Observable<Video> {
    const formData = new FormData();
    formData.append('title', videoUpload.title);
    formData.append('description', videoUpload.description);
    videoUpload.categories.forEach(category => {
      formData.append('categories', category);
    });
    formData.append('VideoFile', videoUpload.videoFile);

    return this.http.post<Video>(`${this.apiUrl}`, formData);
  }
  
}
