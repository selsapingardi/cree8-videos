import { Component } from '@angular/core';
@Component({
  selector: 'app-overflow-button',
  standalone: true,
  imports: [],
  templateUrl: './overflow-button.component.html',
  styleUrl: './overflow-button.component.scss',
})
export class OverflowButtonComponent {
  buttons = [
    {
      label: 'Share',
      icon: 'ios_share',
    },
    {
      label: 'Rename',
      icon: 'edit',
    },
    {
      label: 'Delete',
      icon: 'delete_forever',
    },
  ];
}
