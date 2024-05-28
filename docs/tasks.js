module.exports = {
    paths: {
      "/create": {
        post: {
          tags: ["POST"],
          description: "creates a task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Got tasks successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/": {
        get: {
          tags: ["GET"],
          description: "get all tasks",
          operationId: "getTasks",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Got all tasks",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/id/{_id}": {
        put: {
          tags: ["PUT"],
          description: "updates a task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/Task/properties/_id",
              },
              description: "Id of task to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: {
            200: { description: "Task updated successfully" },
            500: { description: "Server error" },
          },
        },
        delete: {
          tags: ["DELETE"],
          description: "deletes a task",
          operationId: "deleteTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/Task/properties/_id",
              },
              description: "Id of task to be deleted",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: {
            200: { description: "Task deleted successfully" },
            500: { description: "Server error" },
          },
        },
      },
    },
  };
  

  