import makeRequest from "API/makeRequest.ts";

import { TTaskCreate } from "types/entities/TTask.ts";
import { GetTaskResponse } from "types/API/TTaskResponse.ts";

class TaskService {
  async create(projectId: number, sphereId: number, task: TTaskCreate) {
    return await makeRequest<GetTaskResponse>({
      url: `api/projects/${projectId}/spheres/${sphereId}/tasks`,
      method: 'post',
      hasAuthToken: true,
      data: task
    })
  }

  async delete(projectId: number, sphereId: number, taskId: number) {
    return await makeRequest<never>({
      url: `api/projects/${projectId}/spheres/${sphereId}/tasks/${taskId}`,
      method: 'delete',
      hasAuthToken: true,
    })
  }
}

export default new TaskService()