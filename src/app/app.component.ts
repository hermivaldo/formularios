import { Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { NgForm } from '@angular/forms';
import { MdSelectModule } from '@angular/material';
import { Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  objetosFormulario: any = new Map();

  availableColors = [
    { name: 'teste 001', color: 'accent' , tipo: 'select'},
    { name: 'teste 002', color: 'accent' , tipo: 'input'},
    { name: 'teste 003', color: 'accent' , tipo: 'text'}
  ];
   openDialog(e) {

    if (e.target.parentElement.id == "right"){
      let idEvento = e.target.id;
      let objetoModal = this.objetosFormulario.get(idEvento);
      let dialogRef;
      if (idEvento.indexOf("select") !== -1){
          dialogRef = this.dialog.open(DialogOverviewExampleDialog, {height: '650px', width: '900px',  data: { opcoes: objetoModal} });
      }else if (idEvento.indexOf("text") !== -1){
              dialogRef = this.dialog.open(DialogInput, {height: '650px', width: '900px',  data: { opcoes: objetoModal} });
      }

      dialogRef.afterClosed().subscribe(result => {
        if (result != null || result != undefined){
          this.objetosFormulario.set(idEvento, result);
          console.log(this.objetosFormulario);
        }
      });
    }

  }
  constructor(private dragulaService: DragulaService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer,
    http: HttpModule, public dialog: MdDialog, private renderer: Renderer) {
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.setOptions('first-bag', {
       copy: function (el, source) {

          return source.id === 'left';
        },
        copySortSource: false,
        accepts: function(el, target, source, sibling) {
          let status:boolean = target.id !== 'left';
          return status;
        },
        removeOnSpill : function (el, target, source, sibling){
          return target.id !== 'left';
        }
    });
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  private onDrop(args) {
    let [e, el] = args;
    let conteudo = document.getElementById("right");

    if (e.id == "select"){
      e.id = "select" + (conteudo.childNodes.length - 1);
    }else if (e.id == "text"){
      e.id = "text" + (conteudo.childNodes.length - 1);
    }
    console.log(e.id);
  }

}

@Component({
  templateUrl: 'text-dialog.html'
})
export class DialogInput {
   private names: string = "";

  constructor(public dialogRef: MdDialogRef<DialogInput>, @Inject(MD_DIALOG_DATA) data: any) {

      if (data.opcoes != null || data.opcoes != undefined){
        this.names = data.opcoes.replace(/,/g, '\n');
        //this.adicionarTexto(data.opcoes.replace(/,/g, '\n'));
      }

  }
  
  // private opcoesArray : string[] = [];
  // private selecionado : string = "";

   //adicionarTexto(e){
   //   this.opcoesArray = e.split('\n');
   //}
}


@Component({
  templateUrl: 'example-dialog.html'
})
export class DialogOverviewExampleDialog {

  constructor(public dialogRef: MdDialogRef<DialogOverviewExampleDialog>, @Inject(MD_DIALOG_DATA) data: any) {

      if (data.opcoes != null || data.opcoes != undefined){
        this.names = data.opcoes.replace(/,/g, '\n');
        this.criarArray(data.opcoes.replace(/,/g, '\n'));
      }

  }
   private names: string[] = [];
   private opcoesArray : string[] = [];
   private selecionado : string = "";

   criarArray(e){
      this.opcoesArray = e.split('\n');
   }
}



