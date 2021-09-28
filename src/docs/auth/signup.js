export default {
    post: {
        tags: ["Auth operations"],
        description: "Signup",
        operationId: "signupUser",
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
                description: "User registered successfully",
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