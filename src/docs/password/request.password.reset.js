export default {
    post: {
        tags: ["Password operations"],
        description: "Request Password Reset",
        operationId: "requestPasswordReset",
        parameters:[],
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                  schema: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                        },
                    }
                  },
                },
            },
        },
        responses: {
            202: {
                description: "An email has been sent to you with a link to reset your password",
            },
            422: {
                description: "Invalid input",
            },
            500: {
                description: "Internal server error",
            },
        },
    },
  };