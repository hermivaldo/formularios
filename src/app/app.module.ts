

// Itens angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// itens pessoal
import { AppComponent } from './app.component';
import { DialogOverviewExampleDialog } from './app.component';
import { DialogInput } from './app.component';

/// Itens de terceiros
import { DragulaModule } from 'ng2-dragula';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { MdChipsModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    DialogInput
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdGridListModule,
    MdIconModule,
    MdButtonModule,
    HttpModule,
    MdChipsModule,
    MdDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [DialogOverviewExampleDialog,
  DialogInput],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
