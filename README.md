# Sb-Search-filter
Angular Version: 11.1.2.
---
[![NPM version](https://img.shields.io/npm/v/sb-filters.svg?flat&logo=npm)](https://img.shields.io/npm/v/sb-filters.svg?style=for-the-badge&logo=npm)
---
## SbSearchfilter angular components for Sunbird !
Contains Search filter components powered by angular. These components are designed to take any type of element rendering based on JSON data. 

## Getting Started
For help getting started with a new Angular app, check out the Angular CLI.
For existing apps, follow these steps to begin using .

## Step 1: Install the Required package !
```
    npm install sb-filters --save
```
```
    npm install @angular/material @angular/cdk @angular/animations --save 
```
``` 
    ng add @angular/material
```

## Step 2: Import the modules and components !

Import the NgModule for each component you want to use:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SbFiltersModule} from 'sb-filters'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SbFiltersModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Step 3: Include the library selector in view( Eg .HTML file !

```
 <lib-sb-filters
            [configJsonData] = "formJsonData"
            [searchFilterInfo] = "filterTitleInfo"
            (onChangeFilter) = onFilterChange($event)
            [languageKey] = "langValue"
            [languageJsonData] = "languageJsonData">
</lib-sb-filters>

```

### Options !
  - `formJsonData`: Array of form objects.

      ```javascript
    index: number
    formControlName: string;
    label: string;
    preSelectedValue: string;
    type: string;
    placeholder: string;
    dataList: dataList[
        id:number,
        value:string,
        displayName?:string

    ];
    validators?: JsonFormValidators[
        min?: number;
        max?: number;
        required?: boolean;
        requiredTrue?: boolean;
        email?: boolean;
        minLength?: boolean;
        maxLength?: boolean;
        pattern?: string;
        nullValidator?: boolean;
    ];
    options?: JsonFormControlOptions[
        min?: string;
        max?: string;
        step?: string;
        icon?: string;
    ];
      ```

  - `filterTitleInfo`: Object of title,button/name & CSS configuration.
  - `langValue`: string of selected language key (en,hi,kn..)
  - `languageJsonData`: Array of language objects.
  - `(onChangeFilter)`: component emits values on every input , To get value include event callbacks
## Sample Json Data !
``` 
    formJsonData : {
      "index": 1, // to define the position of html elements
      "type": "dropdown", // it will accept these type to create HTML elements -> [Dropdown, Multipledropdown,Checkbox,  Radio, Text, Number, Email, Tel, Textarea, password] 
      "label": "Board", 
      "placeholder": "Select Board",
      "formControlName": "Board",
      "preSelectedValue": "CBSE/NCERT", // by default values
      "validators": {"required": true}, // if any forms validation
      "dataList": [
        { "id": 1, "value": "ICSE" },
        { "id": 2, "value": "CBSE/NCERT" },
        { "id": 3, "value": "IGOT-Health" },
        { "id": 4, "value": "State (Andhra Pradesh)" },
        { "id": 5, "value": "State (Chandigarh)" },
        { "id": 6, "value": "State (Chhattisgarh)" },
        { "id": 7, "value": "State (Delhi)" }
      ] //  it is used to display the dropdown values

    } ....

 ``` 
    filterTitleInfo : {
    title: 'Search Filters', // title
    subTitle: 'Search filters sub-title...', // sub title
    submit: "Submit", // button name
    clear: "Reset" , // button name
    isButtonReq: true,
    styling:{ orientation:"column" }, // row || column
    } ```

```
 langValue : 'en'...  // selected global language key

```
```
languageJsonData: [{ // language transalated json data
    en:
        {
        "Board": "Board",
        "Medium": "Medium",
        "Grade": "Grade",
        "Subject": "Subject"
        },
    hi: 
        { 
            "Board": "बोर्ड",
            "Medium": "माध्यम",
            "Grade": "श्रेणी",
            "Subject": "विषय"
        },

    kn: 
        {
            "Board": "ಮಂಡಳಿ/ವಿಶ್ವವಿದ್ಯಾಲಯ",
            "Medium": "ಮಾಧ್ಯಮ",
            "Grade": "ಗ್ರೇಡ್",
            "Subject": "ವಿಷಯ"
        } .....
}]
```

### @output !
 - `onFilterChange($event)` : search-filter  component emits values on every input , To get value include event callbacks