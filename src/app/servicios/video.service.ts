import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../modelos/video';

const URL: string = "http://localhost:3000/videos/";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Video[]> {
    return this.http.get<Video[]>(URL);
  }

  obtenerPorId(id: number): Observable<Video> {
    return this.http.get<Video>(URL + id);
  }

  insertar(video: Video): Observable<Video> {
    return this.http.post<Video>(URL, video);
  }

  modificar(video: Video): Observable<Video> {
    return this.http.put<Video>(URL + video.id, video);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete<any>(URL + id);
  }
}
