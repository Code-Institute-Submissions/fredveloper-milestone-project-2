# Vincent Van Gogh - Art Locator
Milestone Project 2: Interactive Frontend Development - Code Institute

This website is dedicated to Vincent Van Gogh fans, art lovers and people in general, interested in learning more about the painter's work. 

The site has a dynamic search table that provides detailed information about Van Gogh's work.

It also has a map that shows the exact location of the paintings and provides direct links to the relevant museums and galleries.

## Demo
A live demo can be found [here](https://fredveloper.github.io/milestone-project2/).

Github repository: https://github.com/fredveloper/milestone-project2/

## UX
My goal in the design was to create a user-friendly, dynamic, and responsive interface for all type of users. The site consists of three sections (search area, data table area, map area) that allow the users to navigate and find specific details about Vincent Van Gogh paintings.

The initial designed was done with [Moqups](https://moqups.com/). See mockups [here](https://github.com/fredveloper/milestone-project-2/assets/images/mockups).

The famous "Almond Blossoms" painting inspired the scheme colour selection.

## Technologies

1. HTML
2. CSS
3. Javascript
4. JQuery Datatables
5. Bootstrap (v4.3.1)
7. Google Maps API

## Features

The colour scheme gives the website a classic and elegant look.
The search bar allows users to browse using keywords: painting name, place, city, country, etc.

The website has responsive elements. The search area, the data table and the map would adapt their size to mobile and desktop devices.

A data table is presented as an intuitive, flexible and fast tool in this website. Actions like sorting, filtering, paging and scrolling will allow the users to get the most from the information contained in the artwork dataset. 

The map displays the pins for all the museums that host Van Gogh's paintings. The users can zoom in and out, click on the markers to find information about the museums/galleries.

### Features left to implement

In the near future, I would like to incorporate more features to this project: clickable rows to display the markers dynamically on the map, and also a pie chart to display the number of paintings in each country.

## Testing

The users can access all the sections of the website from mobile and desktop devices.

All the data is loading correctly through the data table, 856 entries in total. 

All links were manually tested to guarantee they are pointing to the correct destination. The attribute “target=_blank” is present in the links, so they will always open in a new tab of the default browser.

Markers are correctly generated and placed in the exact locations.

## Deployment

The project was created using Visual Studio Code for inicial workplace, files and folders.
External repository was created in Github.
Then, the local repository was linked to the Github repository.
Regular commits were done to save the progress of the project.

To deploy the website to Github pages, the below steps were followed:
1. Milestone-project2 selected from Github dashboard.
2. 'Settings' option selected from menu bar.
3. Navigated to the 'Source' section within the Githubs Pages section, selected master branch and clicked save.

## Credits

### Content

The artwork dataset was constructed by me. The details were obtained from multiple sources:

1. [Wikipedia](https://www.wikipedia.org/)
2. [Wikimedia](https://commons.wikimedia.org/wiki/Main_Page)
3. [Van Gogh Museum](https://www.vangoghmuseum.nl/en)
1. [Van Gogh Gallery](https://www.vangoghgallery.com/)

### Media
All images (URL links) on this website belong to https://www.wikimedia.org/

### Acknowledgements

Features taken as a reference from the below sources were customised by me to meet the requirements:

Datatable: [DataTable.net](https://datatables.net/examples/data_sources/js_array.html)

Adding multiple custom markers to a google map using an array: [StackOverflow](https://stackoverflow.com/questions/33241379/adding-multiple-custom-markers-to-a-google-map-using-an-array?noredirect=1&lq=1)

This is ONLY for educational use.