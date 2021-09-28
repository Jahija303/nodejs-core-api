export default {
    delete: {
        tags: ["User operations"],
        description: "Delete user",
        operationId: "deleteUser",
        parameters:[],
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                  schema: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        }
                    }
                  },
                },
            },
        },
        responses: {
            200: {
                description: "User deleted successfully",
            },
            404: {
                description: "User not found",
            },
            403: {
                description: "You need to log in first",
            },
            422: {
                description: "Please provide a valid user ID"
            },
            500: {
                description: "Internal server error",
            }
        },
    },
  };