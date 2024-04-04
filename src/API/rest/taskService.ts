import makeRequest from "API/makeRequest.ts";

import { TTaskCreate } from "types/entities/TTask.ts";
import { GetTaskResponse, GetTasksResponse } from "types/API/TTaskResponse.ts";

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

  async create(projectId: number, task: TTaskCreate) {
    return await makeRequest<GetTaskResponse>({
      url: `api/projects/${projectId}/tasks`,
      method: 'post',
      hasAuthToken: true,
      data: task
    })
  }
}

export default new TaskService()