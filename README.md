# Backend Action Plan Generator.

As an action plan creator I need an `API` to save the generated data of my action plans.

<div align="center">
<a href="#tech">Tech Stack |</a>
<a href="#dev">Dev launch |</a>
<a href="#docker">Docker launch |</a>
<a href="#swagger">Swagger documentation |</a>
<a href="#folder">Folder structure |</a>
<a href="#launch">Launch workflow |</a>
<a href="#endpoint">Endpoint flow </a>
</div>


<div id="tech"></div>

## Tech Stack

* Typecript
* Express
* MySQL
* Swagger
* Jest
* Docker


<div id="dev"></div>

## Dev launch

To launch the proyect as developer use the following command: 
1. Install the dependencies `npm i`
2. Start the server `npm start`

By doing this the server will be launched on the port `9000`
Be sure that the `.env` variables file exist on the proyect folder


<div id="docker"></div>

## Docker launch

This step is optional, the proyect can be launched in an docker container, for this we need have docker desktop installed and follow the next steps:

1. Initialize docker desktop
2. Execute the following command to generate the image 
    ```
    docker build -f "Dockerfile" -t backend_image:latest "." 
    ```
3. Execute the following command to launch the image 
    ``` 
    docker run -d -p 8000:8000 --name backend_container backend_image
    ```

4. Verify that the API is running on: `http://localhost:9000`

<div id="swagger"></div>

## Swagger documentation

The swagger documentation is configured on the proyect, to check the available endpoints after launch the proyect go to the following direction: `http://localhost:9000/api/v1/docs/`


<div id="folder"></div>

## Folder structure

1. Rest: Contains `.rest` files to test the endpoints
2. Sql: Contains the `.sql` files to initialize the database
3. Src: Contains the main code of the `API`
       3.1. Config: Configuration files for the server
       3.2. Controllers: Controllers where the logic is executed
       3.3. Core: Main base clases like controllers, routers and services that will be inherited
       3.4. Models: Object models
       3.5. Routes: Routes of the API
       3.6. Services: Services to handle the DB data
       3.7. Tests: Unit tests
       3.8. Validators: Middlewares to validate the data

<div id="launch"></div>

## Launch workflow

This is the flow that is followed by the `app` on the first launch.

1. The main `app.ts` is started.
2. The main `app.ts` initialize and launch the server.
3. The server initialize the express app
4. The server initialize the middlewares
5. The server set up the routes

<div id="enpoint"></div>

## Endpoint flow

All the endpoints enter via the server.ts in the routes function, if a new router must be configured must be added to this function.
All the routers has two or three parts:
    1. Route: The route of the endpoint
    2. Middlewares: All the validation middlewares before the controller execution `(optional)`
    3. Controller: Call of the function in the controller

After the request pass the middlewares and enter to the controller the data will be fetched if is necesary using the endpoint service and the data will be returned.

