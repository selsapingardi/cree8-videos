import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;
  name: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getAlbums() {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getAlbumsWithUsers(): Observable<any[]> {
    return forkJoin({
      users: this.getUsers(),
      albums: this.getAlbums(),
    }).pipe(
      map(({ albums, users }) => {
        return albums.map((album: Album) => ({
          ...album,
          name:
            users.find((user: User) => user.id === album.userId)?.name ||
            'Unknown',
        }));
      })
    );
  }
}
