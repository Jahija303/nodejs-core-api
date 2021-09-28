export default {
    get: {
        tags: ["User operations"],
        description: "Get user",
        operationId: "getUser",
        parameters: [],
        responses: {
            200: {
                description: "User fetch successful",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Users",
                        },
                    },
                },
            },
            403: {
                description: "You need to log in first",
            },
            500: {
                description: "Internal server error",
            }
        },
    },
  };