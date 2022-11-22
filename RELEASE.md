### Features Completed
1. Filters should take any type of element rendering - Dropdown, multi select, radio, checkbox
2. Configurable payload - Each element should be configured for label, placeholder etc 
3. Filter should be able to mark pre selected values - Separate payload for pre selected values
4. Reset filters - Filters should discard all pre selected values
5. Plugin should be switchable for submit button method and also on element change as default behaviour 
6. Demo project should have input JSON and also output JSON for community purpose
7. ngx transaltion using custom json
8. based on index-no html element should be prioritize
9. Instead of filter module path in parent use filter package name in package.json(ng build-> yarn link)
10. Orientation  (vertical/horizontal based on user input)



### Features Planned
1. FIlters should also take values from URL string - any url params matches the filter criterial should auto select
2. Remove URL Query Parms - Filters should discard  selected query filter values
3. instead of passing all json language pass only selcted language json data to avoid looping at plugin side
4. plugin should accept type of button(chip)
5. submit & reset button have flexibilty to position (top/bottom)
6. Chips with input for multiple dropwon
7. Plugin should be able to get dataList items from URL specified in input JSON


### Known Issues

- On language change reflection delay - portal