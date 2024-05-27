import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private likes: number = 0;
  private liked: boolean = false;

  constructor() { }

  getLikes(): number {
    return this.likes;
  }

  isLiked(): boolean {
    return this.liked;
  }

  addLike(): void {
    if (!this.liked) {
      this.likes++;
      this.liked = true;
    }
  }

  removeLike(): void {
    if (this.liked) {
      this.likes--;
      this.liked = false;
    }
  }
}

