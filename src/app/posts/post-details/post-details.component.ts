import { Component, Input } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  @Input() selectedPost: any;
  constructor() {
    this.selectedPost = {} as any; 
  }
  
}
