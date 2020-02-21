import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StarComponent } from './components/star/star.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    PageNotFoundComponent,
    ConvertToSpacesPipe
  ],
  exports: [
    StarComponent,
    PageNotFoundComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})

export class SharedModule { }
