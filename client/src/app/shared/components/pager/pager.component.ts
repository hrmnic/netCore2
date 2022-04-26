import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number; //parent>child data gönderimi (input)
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter<number>(); //parent>anasayfa data gönderimi (output)

  constructor() {}

  ngOnInit(): void {}
  onPagerChanged(event: any) {
    this.pageChanged.emit(event.page);
  }
}
