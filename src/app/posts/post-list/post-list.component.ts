import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: '1', title: 'Publicación 1', content: 'Contenido de la publicación 1' },
    { id: '2', title: 'Publicación 2', content: 'Contenido de la publicación 2' },
    { id: '3', title: 'Publicación 3', content: 'Contenido de la publicación 3' }
  ];

  selectedPost: any;

  @Output() postSelected: EventEmitter<any> = new EventEmitter<any>();

  onPostSelected(post: any) {
    this.selectedPost = post;
    this.postSelected.emit(post);
  }
}
