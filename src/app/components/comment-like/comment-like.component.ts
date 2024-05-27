import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { LikeService } from '../../services/like.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-like',
  templateUrl: './comment-like.component.html',
  styleUrls: ['./comment-like.component.scss'],
  imports: [FormsModule],
  standalone: true
})
export class CommentLikeComponent implements OnInit {
  comments: { text: string }[] = [];
  newComment: string = '';
  likes: number = 0;
  liked: boolean = false;

  constructor(private commentService: CommentService, private likeService: LikeService) { }

  ngOnInit(): void {
    this.loadComments();
    this.loadLikes();
  }

  loadComments(): void {
    this.comments = this.commentService.getComments();
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.commentService.addComment(this.newComment);
      this.newComment = '';
      this.loadComments();
    }
  }

  loadLikes(): void {
    this.likes = this.likeService.getLikes();
    this.liked = this.likeService.isLiked();
  }

  toggleLike(): void {
    if (this.liked) {
      this.likeService.removeLike();
    } else {
      this.likeService.addLike();
    }
    this.loadLikes();
  }
}
