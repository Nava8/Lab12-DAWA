import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostContainerComponent } from './post-container/post-container.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    PostContainerComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  exports: [
    PostListComponent,
    PostDetailsComponent
  ]
})
export class PostsModule { }
