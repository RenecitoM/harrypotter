import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: { text: string }[] = [];

  constructor() { }

  getComments(): { text: string }[] {
    return this.comments;
  }

  addComment(text: string): void {
    this.comments.push({ text });
  }
}
