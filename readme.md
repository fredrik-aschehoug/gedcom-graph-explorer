# GEDCOM Graph Explorer
A web application for rendering an interactive graph of GEDCOM files.
Currently, the graph will only include direct parent/children relationships.

The soultion is built to run on [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview).
The frontend is written in Typescript and React.
An Azure Function with Python code converts GEDCOM files to JSON documents recognized by Cytoscape.

## Demo page
A copy of this web application is hosted [here](https://lemon-smoke-00c5b3403.azurestaticapps.net/).
