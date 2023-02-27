import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/modelos/video';
import { VideoService } from 'src/app/servicios/video.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  video?: Video;
  
  constructor(private videoService: VideoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.videoService.obtenerPorId(id).subscribe(video => this.video = video)
  }
}
