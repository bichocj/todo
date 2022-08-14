import { useQuery, useMutation } from "react-query";
import { GraphQLClient } from "graphql-request";

const API_URL = `https://syn-api-prod.herokuapp.com/graphql`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNTZmMTAxOWVjYWQyIiwicHJvamVjdElkIjoiNjQ2ZDdiMWUtNzliYS00YWU1LWI2MGYtZTYzODNhMjM4Yzg3IiwiZnVsbE5hbWUiOiJKYXZpZXIgQ2FybG9zIEd1dGnDqXJyZXoiLCJlbWFpbCI6ImpjLmd1dGllcnJlei44OEBnbWFpbC5jb20iLCJpYXQiOjE2NTk5ODg0NTN9.qEtzevncEoxoneJdogyycu6isImSzRf1y5U13PgRxiw`
  }
});

export function useGetTasks() {
  const query = `
      query {
        tasks(input: {  }) {
            id
            name
            position
            pointEstimate
            createdAt
            dueDate
            status
            tags
            assignee {
                avatar
                fullName
            }
        }
      }
    `;
  return useQuery("get-tasks", async () => {
    return graphQLClient.request(query);
  });
}


export function useGetUsers() {
  const query = `
  query users {
    users {
      id
      avatar
      fullName
    }
  }
  `;
  return useQuery("get-users", async () => {
    return graphQLClient.request(query);
  });
}

export function useCreateTask() {
  const mutation = `
  mutation createTask($input: CreateTaskInput!) { 
    createTask(
      input: $input
    ) {    
      id
    }
  }
  `;
  return useMutation(async (data) => {
    return graphQLClient.request(mutation, data);
  });
}

export function useUpdateTask() {
  const mutation = `
  mutation updateTask($input: UpdateTaskInput!) { 
    updateTask(
      input: $input
    ) {    
      id
    }
  }
  `;
  return useMutation(async (data) => {
    return graphQLClient.request(mutation, data);
  });
}

export function useDeleteTask() {
  const mutation = `
  mutation deleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      id
    }
  }
  `;
  return useMutation(async (data) => {
    return graphQLClient.request(mutation, data);
  });
}