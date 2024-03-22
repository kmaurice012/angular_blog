import { Component, Input } from '@angular/core';
import { DesignSystemComponent } from '../design-system/design-system.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [DesignSystemComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
})
export class BlogPostComponent {
  @Input() title!: string;
  @Input() author!: string;
  @Input() content!: string;
}
