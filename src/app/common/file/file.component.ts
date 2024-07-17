import { Component, Input } from '@angular/core';
import { OverflowButtonComponent } from '../overflow-button/overflow-button.component';
import { TitleCasePipe } from '@angular/common';
import { TruncatePipe } from '../../util/truncate.pipe';
import { Album } from '../../data.service';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [OverflowButtonComponent, TitleCasePipe, TruncatePipe],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss',
})
export class FileComponent {
  @Input() album: Album = {} as Album;
}
