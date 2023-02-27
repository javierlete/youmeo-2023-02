import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/modelos/video';
import { VideoService } from 'src/app/servicios/video.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  videos: Video[] = [];
  
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
      this.videoService.obtenerTodos().subscribe(videos => this.videos = videos);
  }
}
