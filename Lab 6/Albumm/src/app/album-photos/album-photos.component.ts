import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  albumId!: number;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchPhotos();
  }

  private fetchPhotos(): void {
    this.albumsService.getPhotosByAlbumId(this.albumId).subscribe({
      next: (photos) => this.photos = photos,
      error: (err) => console.error('Failed to load photos:', err),
    });
  }

  navBack(): void {
    window.history.back();
  }
}





