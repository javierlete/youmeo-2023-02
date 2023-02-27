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
}
