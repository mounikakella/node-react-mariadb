export default {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "backend",
    description: "backend api",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:3000",
  basePath: "/",
  tags: [
    {
      name: "Users",
      description: "API for users in the system",
    },
  ],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/users": {
      get: {
        tags: ["Users"],
        summary: "Get all users in system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
    },
    "/users/{id}": {
      get: {
        tags: ["Users"],
        summary: "Get a user by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            schema: {
              type: "integer",
            },
            required: true,
            description: "Numeric ID of the user to get",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
    },
  },
  definitions: {
    User: {
      required: ["name"],
      properties: {
        id: {
          type: "integer",
          uniqueItems: true,
        },
        name: {
          type: "string",
        },
        email: {
          type: "string",
        },
        password: {
          type: "string",
        },
        role: {
          type: "string",
        },
      },
    },
    Users: {
      type: "array",
      $ref: "#/definitions/User",
    },
  },
};
