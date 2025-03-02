import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/album.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: any[] = []; 

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => this.albums = data, 
      error: (err) => console.error('Error fetching albums:', err),
    });
  }

  viewAlbum(albumId: number) {
    window.location.href = `/albums/${albumId}`;
  }

  deleteAlbum(albumId: number) {
    this.albums = this.albums.filter(album => album.id !== albumId);
  }
}





