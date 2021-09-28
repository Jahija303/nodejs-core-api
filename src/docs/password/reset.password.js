export default {
    post: {
        tags: ["Password operations"],
        description: "Reset Password",
        operationId: "resetPassword",
        parameters: [
            {
                in: "path",
                name: "userId",
                type: "integer",
                required: true,
                description: "Numeric ID of the user",
            },
            {
                in: "path",
                name: "token",
                type: "string",
                required: true,
                description: "Single use token which ensures the identity of the account owner"
            }
        ],
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                  schema: {
                    type: "object",
                    properties: {
                        password: {
                            type: "string",
                        },
                        confirmPassword: {
                            type: "string",
                        },
                    }
                  },
                },
            },
        },
        responses: {
            200: {
                description: "Your password has been successfully reset",
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