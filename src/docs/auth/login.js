export default {
    post: {
        tags: ["Auth operations"],
        description: "Login",
        operationId: "loginUser",
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
                description: "User logged in successfully",
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