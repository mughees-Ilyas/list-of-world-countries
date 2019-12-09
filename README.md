# Angular test app

steps to run the project.
1) clone the project.
2) run npm install to install dependencieis.
3)run npm start.


## routes
we have   

/countries for countries list view

/country/:id to view specific country.

##search
the sarch bar persist with the sorting. if you search for something and search return N number of countries, you can still sort them using population/name. if you empty the search box the application return to initial state.
Search works with enter key.

## project retrospective.

the map works but the boundies are not well defined on it. was not able to mark the boundry by country but was able to put a circle on its latitute and longitude. also when clicked on the bordering coutires the map doesnt work as we dont have the lat long to pass to component.

search bar could have worked without the enter key and just on key press but the constant searching would means having a debounce function in place as well so went with pressing enter to search method.
