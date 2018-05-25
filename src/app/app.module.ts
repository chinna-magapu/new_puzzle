import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';


import { MagicComponent } from './magic-component/magic.component';
import { DraggableDirective } from './magic-component/draggable.directive';
import { DropTargetDirective } from './magic-component/drop-target.directive';
import { DragService } from './magic-component/drag.service';

@NgModule({
  declarations: [
    AppComponent,
    MagicComponent,
    DraggableDirective, DropTargetDirective
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [ DragService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
