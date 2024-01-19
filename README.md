# Project Name : Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

# OneTimeStep:
Before running this project you have to install the Node Modules. You can install it by using the command 'npm i' or if there is some dependency issue because of node or angular versions then you can also try to run an alternate command 'npm i --force'.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.  
or 
you can also connect with me directly at shivamrathore0897@gmail.com.


## Description

This project utilizes a JSON file to create and customize  mega menu with a versatile and hierarchical structure. It facilitates seamless navigation and organization of menu items, catering to the needs of large-scale applications.


### Warning: Make sure the structure of the JSON file remains the same.


## Table of Contents

- [JSON Structure Documentation](#json-structure-documentation)

## JSON Structure Documentation

### megaMenuData (Array):

- **Description:** The main array containing individual menu items and their details.
- **Type:** Array of Objects.

### MenuItem Object:

- **displayName (String):**
  - **Description:** The display name of the menu item.
  - **Type:** String.

- **iconName (String, Optional):**
  - **Description:** An optional icon name associated with the menu item.
  - **Type:** String.

- **route (String, Optional):**
  - **Description:** The route associated with the menu item for navigation.
  - **Type:** String.

- **children (Array, Optional):**
  - **Description:** An array containing child menu items, forming a hierarchical structure.
  - **Type:** Array of MenuItem Objects.

- **isOpen (Boolean, Optional):**
  - **Description:** A boolean indicating whether the menu item is open or closed. Used for UI purposes.
  - **Type:** Boolean.

- **heading (String, Optional):**
  - **Description:** A heading associated with the menu item, usually used for grouping related items.
  - **Type:** String.

- **additionalItems (Array, Optional):**
  - **Description:** An additional array containing more menu items related to the main item.
  - **Type:** Array of MenuItem Objects.

- **additionalHeading (String, Optional):**
  - **Description:** A heading associated with the additional items.
  - **Type:** String.

### Example:

```json
{
  "megaMenuData": [
    {
      "displayName": "Home",
      "iconName": "keyboard_arrow_down",
      "children": [
        {
          "displayName": "Speakers",
          "children": [
            // ... (Child menu items)
          ]
        },
        {
          "displayName": "Sessions",
          "children": [
            // ... (Child menu items)
          ]
        },
        {
          "displayName": "Feedback",
          "route": "feedback"
        }
      ]
    },
    {
      "displayName": "Store",
      "iconName": "keyboard_arrow_down",
      "children": [
        // ... (Similar structure as Home)
      ]
    },
    // ... (Additional menu items)
  ]
}


