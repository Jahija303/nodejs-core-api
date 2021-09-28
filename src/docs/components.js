export default {
    components: {
      schemas: {
            Users: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        description: "User identification number",
                        example: 16,
                    },
                    firstName: {
                        type: "string",
                        description: "User's first name",
                        example: "James",
                    },
                    lastName: {
                        type: "string",
                        description: "User's last name",
                        example: "Franco",
                    },
                    email: {
                        type: "string",
                        description: "User's email address",
                        example: "james.franco@gmail.com"
                    },
                    password: {
                        type: "string",
                        description: "User's password hash",
                        example: "$10$hWx7Um0x8EtWNs6fWZ/0DOvh8cxh1bFFbASguQJgN5Yv9AzTAWMh2"
                    },
                    active: {
                        type: "boolean",
                        description: "User's activity status",
                        example: true,
                    },
                    createdAt: {
                        type: "dateTime",
                        description: "Date of creating",
                        example: "2021-06-11 02:00:00",
                    },
                    updatedAt: {
                        type: "dateTime",
                        description: "Date of creating",
                        example: "2021-06-11 02:00:00",
                    },
                },
            },
            UserAddresses: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        description: "User's adress identification number",
                        example: 2,
                    },
                    userId: {
                        type: "integer",
                        description: "User's identification number",
                        example: 16,
                    },
                    firstName: {
                        type: "string",
                        description: "User's first name",
                        example: "James",
                    },
                    lastName: {
                        type: "string",
                        description: "User's last name",
                        example: "Franco",
                    },
                    address1: {
                        type: "string",
                        description: "User's first address",
                        example: "123 Test Street",
                    },
                    address2: {
                        type: "string",
                        description: "User's second address",
                        example: "Apt 7",
                    },
                    city: {
                        type: "string",
                        description: "City",
                        example: "Detroit",
                    },
                    city: {
                        type: "string",
                        description: "State",
                        example: "MI",
                    },
                    country: {
                        type: "string",
                        description: "Country",
                        example: "US",
                    },
                    postal: {
                        type: "string",
                        description: "Postal code",
                        example: "495889",
                    },
                    active: {
                        type: "boolean",
                        description: "User's adress activity status",
                        example: true,
                    },
                    type: {
                        type: "string",
                        description: "Type of address",
                        example: "RESIDENTIAL",
                    },
                    deliverySignature: {
                        type: "string",
                        description: "Delivery signature",
                        example: "SPQR",
                    },
                    createdAt: {
                        type: "dateTime",
                        description: "Date of creating",
                        example: "2021-06-11 02:00:00",
                    },
                    updatedAt: {
                        type: "dateTime",
                        description: "Date of updating",
                        example: "2021-06-11 02:00:00",
                    },
                }
            },
            Roles: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        description: "Role identification number",
                        example: 16,
                    },
                    name: {
                        type: "string",
                        description: "Role name",
                        example: "admin",
                    },
                    createdAt: {
                        type: "dateTime",
                        description: "Date of creating",
                        example: "2021-06-11 02:00:00",
                    },
                    updatedAt: {
                        type: "dateTime",
                        description: "Date of updating",
                        example: "2021-06-11 02:00:00",
                    },
                }
            },
            UserRoles: {
                type: "object",
                properties: {
                    roleId: {
                        type: "integer",
                        description: "Role identification number",
                        example: 1,
                    },
                    userId: {
                        type: "integer",
                        description: "User identification number",
                        example: 12,
                    },
                    createdAt: {
                        type: "dateTime",
                        description: "Date of creating",
                        example: "2021-06-11 02:00:00",
                    },
                    updatedAt: {
                        type: "dateTime",
                        description: "Date of updating",
                        example: "2021-06-11 02:00:00",
                    },
                }
            },
        },
        securitySchemes: {
            jwt: {
              type: "http",
              scheme: "bearer",
              in: "header",
              bearerFormat: "JWT"
            },
        }
    },
    security: [{
        jwt: []
    }]
};