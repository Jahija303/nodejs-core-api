export default {
    put: {
        tags: ["User operations"],
        description: "Edit user",
        operationId: "editUser",
        parameters:[],
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                  schema: {
                    type: "object",
                    properties: {
                        firstName: {
                            type: "string",
                        },
                        lastName: {
                            type: "string",
                        },
                        email: {
                            type: "string",

                        },
                        password: {
                            type: "string",
                        },
                    }
                  },
                },
            },
        },
        responses: {
            200: {
                description: "User updated successfully",
            },
            403: {
                description: "You need to log in first",
            },
            500: {
                description: "Internal server error",
            },
            422: {
                description: "Invalid input",
            }
        },
    },
  };