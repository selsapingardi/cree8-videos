import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileComponent } from './common/file/file.component';
import { FolderComponent } from './common/folder/folder.component';
import { Album, DataService, Post } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FolderComponent, FileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cree8-videos';
  buttons = [
    {
      label: 'Favourites',
      icon: 'star',
    },
    {
      label: 'Shared files',
      icon: 'group',
    },
    {
      label: 'Status',
      icon: 'schedule',
    },
  ];
  dataService = inject(DataService);
  posts: Post[] = [];
  albums: Album[] = [];

  ngOnInit() {
    this.dataService.getPosts().subscribe((response) => {
      this.posts = response.slice(0, 5);
    });
    this.dataService.getAlbumsWithUsers().subscribe((response) => {
      this.albums = response;
    });
  }
}
