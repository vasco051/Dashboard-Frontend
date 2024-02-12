import makeRequest from "API/makeRequest.ts";

import {GetTaskResponse, GetTasksResponse} from "types/API/TTaskResponse.ts";

class TaskService {
  async getAll(projectId: number) {
    return await makeRequest<GetTasksResponse>({
      url: `api/projects/${projectId}/tasks`,
      hasAuthToken: true
    })
  }

  async getOne(projectId: number, taskId: number) {
    return await makeRequest<GetTaskResponse>({
      url: `api/projects/${projectId}/tasks/${taskId}`,
      hasAuthToken: true
    })
  }
}

export default new TaskService()