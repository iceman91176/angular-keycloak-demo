import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleUserInfoComponent } from './components/simple-user-info/simple-user-info.component';
import {UserVisibleAttributeFilterPipe} from './pipes/user-visible-attribute-filter.pipe';
import {SplTranslatePipe} from './pipes/spl-translate.pipe';
export {UserVisibleAttributeFilterPipe} from './pipes/user-visible-attribute-filter.pipe';
export {SplTranslatePipe} from './pipes/spl-translate.pipe';


@NgModule({
  declarations: [SimpleUserInfoComponent,UserVisibleAttributeFilterPipe,SplTranslatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleUserInfoComponent,
    UserVisibleAttributeFilterPipe,
    SplTranslatePipe,
    CommonModule, FormsModule
  ]
})
export class SharedModule { }
