import { Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  availableColors = [
    { name: 'teste 001', color: 'primary' },
    { name: 'teste 002', color: 'primary' },
    { name: 'teste 003', color: 'primary' },
    { name: 'teste 004', color: 'primary' },
    { name: 'teste 005', color: 'primary' },
    { name: 'teste 006', color: 'primary' },
    { name: 'teste 007', color: 'primary' },
    { name: 'teste 008', color: 'primary' },
    { name: 'teste 009', color: 'primary' },
    { name: 'teste 010', color: 'primary' },
    { name: 'teste 011', color: 'primary' },
    { name: 'teste 012', color: 'primary' },
    { name: 'teste 013', color: 'primary' },
    { name: 'teste 014', color: 'primary' }
  ];
   openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
  constructor(private dragulaService: DragulaService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer,
    http: HttpModule, public dialog: MdDialog, private renderer: Renderer) {
    dragulaService.setOptions('first-bag', {
       copy: function (el, source) {
        // To copy only elements in left container, the right container can still be sorted
          return source.id === 'left';
        },
        copySortSource: false,
        accepts: function(el, target, source, sibling) {
          // To avoid draggin from right to left container
          console.log(el);
          console.log(sibling);
          return target.id !== 'left';
        },
        removeOnSpill : function (el, target, source, sibling){
          return target.id !== 'left';
        }
    });
    renderer.listen('body', 'click', (event) => {
        console.log(event.target.onclick);
    });
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}

@Component({
  templateUrl: 'example-dialog.html',
})
export class DialogOverviewExampleDialog {}

