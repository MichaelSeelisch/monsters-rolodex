Run:

$ npm start

http://localhost:4000/

GraphQL Query:

mutation newPhoto {
    postPhoto(name: "sample photo")
}

OR 3x:

mutation newPhoto($name: String!, $description: String) {
    postPhoto(name: $name, description: $description) {
        id
        name
        description
    }
}

and in the lower left corner of the Playground (QUERY VARIABLES)
{
    "name": "sample photo A",
    "description": "A sample photo for our dataset"
}

and then query all photos:
query listPhotos {
    allPhotos {
        id
        name
        description
        url
    }
}
