# InitProjet Angular With Angular material & json Server

## Angular Material
> https://material.angular.io/guide/getting-started

Install Angular Material

    ng add @angular/material
...
   
## JSON Server
>https://www.npmjs.com/package/json-server
### Getting started
Install JSON Server

    npm install -g json-server
    
Create a db.json file with some data

    {
      "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
      ],
      "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
      ],
      "profile": { "name": "typicode" }
    }

Start JSON Server

    json-server --watch db.json
    
Now if you go to http://localhost:3000/posts/1, you'll get

    { "id": 1, "title": "json-server", "author": "typicode" }

...

## Angular cli
> https://angular.io/cli/generate

\<schematic>

- ng generate
- ng g

\<name or directory> 

- [name]
- [directory] / [directory] / [name]
    
    
    <schematic>                     <name or directory>
                ng g app-shell
                ng g application
                ng g class
                ng g component
                ng g directive
                ng g enum
                ng g guard
                ng g interceptor
                ng g interface
                ng g library
                ng g module
                ng g pipe
                ng g resolver
                ng g service
                ng g service-worker
                ng g web-worker
...
