import { NgModule } from '@angular/core';
import { SbFiltersComponent } from './sb-filters.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SortByOrderPipe } from './sort-by-order.pipe';
// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export const translateModule = TranslateModule.forRoot();
@NgModule({
  declarations: [SbFiltersComponent,SortByOrderPipe],
  imports: [
    // BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    // HttpClientModule,
    CommonModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     // useClass: TranslationService,
    //     useFactory: httpTranslateLoader,
    //     deps: [HttpClient]
    //   }
    // })  
    translateModule
  ],
  exports: [SbFiltersComponent]
})
export class SbFiltersModule { }
// AOT compilation support
export function httpTranslateLoader(HttpClient: HttpClient) {
  return new TranslateHttpLoader(HttpClient);
}
