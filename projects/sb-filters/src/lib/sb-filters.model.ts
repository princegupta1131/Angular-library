export interface JsonFormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
    nullValidator?: boolean;
  }
   export interface JsonFormControlOptions {
    min?: string;
    max?: string;
    step?: string;
    icon?: string;
  }
  export interface dataList  
  {
    id:number,
    value:string,
    displayName:string
  }
  export interface label {
    en:string,
    hn: string,
    kn: string
  }
   export interface JsonFormControls {
    formControlName: string;
    label: string;
    preSelectedValue: string;
    type: string;
    options?: JsonFormControlOptions;
    required: boolean;
    validators: JsonFormValidators;
    dataList:dataList[];
    placeholder: string;
  }
 