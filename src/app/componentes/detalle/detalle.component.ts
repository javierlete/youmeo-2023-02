import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/modelos/video';
import { VideoService } from 'src/app/servicios/video.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  video?: Video;
  urlSaneada?: SafeResourceUrl;
  
  constructor(private videoService: VideoService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.videoService.obtenerPorId(id).subscribe(video => {
        this.video = video;
        this.urlSaneada = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
      });
  }

  borrar(id: number): void {
    this.videoService.borrar(id).subscribe(_ => this.router.navigateByUrl('/listado'));
  }
}
