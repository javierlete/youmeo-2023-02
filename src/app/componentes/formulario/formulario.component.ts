import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/modelos/video';
import { VideoService } from 'src/app/servicios/video.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  video: Video = {
    id: 0,
    titulo: '',
    descripcion: '',
    url: '',
    miniatura: ''
  };
  urlSaneada?: SafeResourceUrl;
  
  constructor(private videoService: VideoService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.videoService.obtenerPorId(id).subscribe(video => {
        this.video = video;
        this.urlSaneada = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
      });
  }
}
