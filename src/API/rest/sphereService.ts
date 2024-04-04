import makeRequest from "API/makeRequest.ts";

import { GetSpheresResponse } from "types/API/TSphereResponse.ts";

class TaskService {
  async getAll(projectId: number) {
    return await makeRequest<GetSpheresResponse>({
      url: `api/projects/${projectId}/spheres`,
      hasAuthToken: true
    })
  }
}

export default new TaskService()