import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  // @Input() will pass data to another component
  // @Input('otherNameForElement to be seen outsine of this component')
  @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit(): void {
  }

}
