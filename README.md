# Frontend Template Description
A frontend template using webpack, preconfigured with babel, sass, and file loaders. A description on the usages of each directory within this template

## Build
The directory containing all compiled and bundled files for production.

### Build/Scripts
The directory containing all compiled and bundled JavaScript, CoffeeScript, TypeScript, and JSX files for production.

### Build/Assets
The directory containing all static assets used in the website, such as images, SVGs, Gifs, Videos, &c.

## Src
The directory containing all development files, such as scripts, SASS styles, &c.

### Src/Scripts
The directory containing all JavaScript, CoffeeScript, TypeScript, and JSX files.

### Src/Scripts/Global
All utilities, tools, and components used throughout the website globally.

### Src/Scripts/{directory}
For specific utilities, tools, and components for specific pages. This array of scripts will
be bundled for use of specific pages, aside from being used globally. 

### Src/Styles
The directory containg all SASS files. 

#### Src/Styles/Components
Specific UI components. This is where a majority of the works takes place and the UI components are often composed of Objects and Components.

#### Src/Styles/Elements
Styling for bare HTML elements (such as h1, h2, a, img, &c). These come with default styling from the browser, therefore redefinitions of these elements will be written here.

#### Src/Styles/Settings
Contains global definitions for minor but important variables. Such as color definitions, font, &c.

#### Src/Styles/Tools
Globally used mixins and functions. Not used to output CSS. 

#### Src/Styles/Utilities
Utilities and helper classes with the ability to override anything which goes before in triangle.

(All references from the ITCSS model.)