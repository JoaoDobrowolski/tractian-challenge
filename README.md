## Tree View Application

This project is part of a technical challenge to build a tree view application that visualizes companies' assets, components, and locations. The application provides filtering options for energy sensors and critical components and includes a search functionality to find any node while maintaining the hierarchy.

### Video Demonstration

A video showcasing the application's features, including switching companies and applying filters, is included as required.

https://youtu.be/ZL--BOvMX6M

### Development Timeline

I worked on this project over four days, dedicating a few hours each day. If I had worked full-time (8 hours a day), I estimate the completion time would have been 2-3 days.

- Day 1 -
  Initial project setup.
  Installed and configured the necessary tools and libraries.
- Day 2 -
  Integrated the API endpoints.
  Implemented the header component to display company information.
- Day 3 -
  Started building the tree structure with assets, components, and locations.
  Implemented basic filters for energy sensors and critical components.
- Day 4 -
  Finalized the tree and filter logic.
  Developed the component container to display detailed information about the selected component.

### Potential Improvements

Given more time, I would focus on the following improvements:

1. Eliminate Prop Drilling
   Refactor parts of the project to use a more efficient state management solution, such as React Context or Zustand, to avoid prop drilling.

2. Search and Filter via URL Parameters
   Make the search term and selected filters part of the URL, enabling users to share filtered views or bookmarked searches.

3. Enhanced Responsiveness
   Further improve responsiveness by incorporating fluid font sizes and refining styles for smaller screens. Additionally, reduce class names to optimize CSS.

### Features

- Tree View: Visualizes locations, assets, and components in a hierarchical structure.
- Filters: Allows users to filter nodes by energy sensors or critical status.
- Search: Enables users to search for any node and view its complete hierarchy.
- Collapsible Nodes: Users can expand or collapse tree branches to explore details.
- Component Details: Displays detailed information about the selected component.
