export default {
    get: {
        tags: ["User operations"],
        description: "Get users",
        operationId: "getUsers",
        parameters: [],
        responses: {
            200: {
                description: "User fetch successful",
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