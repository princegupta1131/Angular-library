import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { JsonFormControls} from './sb-filters.model';
import {FilterType,ButtonType} from './models'

@Component({
  selector: 'lib-sb-filters',
  templateUrl: './sb-filters.component.html',
  styleUrls: ['./sb-filters.component.scss']
})
export class SbFiltersComponent implements OnChanges {

  jsonFormData: any;
  constructor(private fb: FormBuilder,private translate: TranslateService) {}
  @Input() configJsonData: JsonFormControls[];
  @Input() searchFilterInfo: any;
  @Input() languageKey: string
  @Input() languageJsonData: any;
  @Output() onChangeFilter: EventEmitter<any> = new EventEmitter();
  public formGroupData: FormGroup = this.fb.group({});
  get FilterType() { return FilterType; }
  get ButtonType() { return ButtonType; }

  ngOnChanges(changes: SimpleChanges) {
    this.languageKey = this.languageKey === "" || this.languageKey === undefined ? FilterType.DEFAULT_LANG_KEY : this.languageKey; // if langugae key is empty
    // if (!changes['configJsonData']?.firstChange) {
      this.createForm(this.configJsonData);
      if(this.languageJsonData !== undefined) {
        this.translate.setTranslation(this.languageKey,this.languageJsonData[0][this.languageKey], true);
        this.translate.use(this.languageKey);
      }
    // }
    
  }
  createForm(controls: JsonFormControls[]) { 
    if (controls && controls.length) {
      for (const control of controls) {
        const validatorsToAdd = [];
        for (const [key, value] of Object.entries(control.validators)) { // to check form level validation
          switch (key) {
            case 'min':
              validatorsToAdd.push(Validators.min(value));
              break;
            case 'max':
              validatorsToAdd.push(Validators.max(value));
              break;
            case 'required':
              if (value) {
                validatorsToAdd.push(Validators.required);
              }
              break;
            case 'requiredTrue':
              if (value) {
                validatorsToAdd.push(Validators.requiredTrue);
              }
              break;
            case 'email':
              if (value) {
                validatorsToAdd.push(Validators.email);
              }
              break;
            case 'minLength':
              validatorsToAdd.push(Validators.minLength(value));
              break;
            case 'maxLength':
              validatorsToAdd.push(Validators.maxLength(value));
              break;
            case 'pattern':
              validatorsToAdd.push(Validators.pattern(value));
              break;
            case 'nullValidator':
              if (value) {
                validatorsToAdd.push(Validators.nullValidator);
              }
              break;
            default:
              break;
          }
        }
        if (control?.type.toLowerCase() === FilterType.CHECKBOX) { 
          this.formGroupData.addControl(control.formControlName, this.fb.group({}));
          control.dataList.forEach((ele) => {
            // @ts-ignore
          (this.formGroupData.controls[control.formControlName] as FormArray).addControl(ele.value,new FormControl(ele.preSelectedValue))
          })
        } else  {
          this.formGroupData.addControl(control.formControlName,this.fb.control(control.preSelectedValue, validatorsToAdd));
        }
      }
    }
  }
  onSubmit() { // to submit the form details
    this.onChangeFilter.emit({ data: this.formGroupData.value });
  }
  resetFormData() { // to reset the form data
    this.formGroupData.reset();
    this.onChangeFilter.emit({ data: this.formGroupData.value });
  }
  onSelected($:any) { // on selction change
    if (this.formGroupData.valid) {
      console.log(this.formGroupData.value);
    this.onChangeFilter.emit({ data: this.formGroupData.value });
    }
  }
  onItemChange($:any,formControl:string) { // on radio button change
    if (this.formGroupData.valid) {
    this.formGroupData.controls[formControl].setValue($.value)
    console.log(this.formGroupData.value);
    this.onChangeFilter.emit({ data: this.formGroupData.value });
    }
  }
  onCheckedItem($:any) { // on checkbox change
    if (this.formGroupData.valid) {
      console.log(this.formGroupData.value);
    this.onChangeFilter.emit({ data: this.formGroupData.value });
    }
  }
  onKeyup($:any) 
  {
    if(this.formGroupData.valid)
    {
      this.onChangeFilter.emit({data: this.formGroupData.value})
    }
  }

}
