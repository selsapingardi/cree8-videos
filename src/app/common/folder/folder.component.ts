import { Component, Input } from '@angular/core';
import { OverflowButtonComponent } from '../overflow-button/overflow-button.component';
import { Post } from '../../data.service';
import { TitleCasePipe } from '@angular/common';
import { TruncatePipe } from '../../util/truncate.pipe';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [OverflowButtonComponent, TitleCasePipe, TruncatePipe],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss',
})
export class FolderComponent {
  @Input() post: Post = {} as Post;
}
