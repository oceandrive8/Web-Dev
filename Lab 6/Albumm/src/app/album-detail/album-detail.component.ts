import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/album.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: any | null = null;
  updatedTitle: string = '';

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.albumsService.getAlbumById(albumId).subscribe({
      next: (album) => {
        if (album) {
          this.album = album;
          this.updatedTitle = album.title;
        }
      },
      error: (err) => console.error('Error loading:', err)
    });
  }

  updateTitle(): void {
    if (this.album) {
      this.album.title = this.updatedTitle;
      alert('Title of album is updated!');
    }
  }
  

  navBack(): void {
    window.history.back();
  }
}






