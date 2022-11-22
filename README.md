# Sb-Search-filter
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.
## SbSearchfilter angular components for Sunbird !
Contains Search filter components powered by angular. These components are designed to be used in sunbird consumption. Filters library should take any type of element rendering based on JSON data. 

## Getting Started
For help getting started with a new Angular app, check out the Angular CLI.
For existing apps, follow these steps to begin using .

## Step 1: Install the package

    npm install sb-filters --save
    npm install @angular/material @angular/cdk @angular/animations --save  
    ng add @angular/material  

## Step 2: Import the modules and components
Import the NgModule for each component you want to use:
       
import {SbFiltersModule} from 'sb-filters'
    
    @NgModule({
	    ...
	    
	    imports: [SbFiltersModule],
	    
	    ...
    })

  
    export class TestAppModule { }

## Step 3: Include the library selector in view( Eg .HTML file)

 <lib-sb-filters
            [configJsonData] = "formJsonData"
            [searchFilterInfo] = "filterTitleInfo"
            (onChangeFilter) = onFilterChange($event)
            [languageKey] = "langValue"
            [languageJsonData] = "languageJsonData">
</lib-sb-filters>
## Sample Json Data
### @Input 
1. formJsonData : {
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

2. filterTitleInfo : {
    title: 'Search Filters', // title
    subTitle: 'Search filters sub-title...', // sub title
    submit: "Submit", // button name
    clear: "Reset" , // button name
    styling:{
      orientation:"column", // row || column
    },
    isButtonReq: true 
}
3. langValue : 'en'...  // selected global language key

4. languageJsonData: [{ // language transalated json data
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

### @output 
5. onFilterChange($event) // search-filter  component emits values on every input , To get value include event callbacks