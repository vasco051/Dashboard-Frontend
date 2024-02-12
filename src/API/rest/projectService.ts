import makeRequest from "API/makeRequest.ts";

import {GetProjectResponse, GetProjectsResponse} from "types/API/TProjectResponse.ts";

class ProjectService {
  async getAll() {
    return await makeRequest<GetProjectsResponse>({
      url: 'api/projects',
      hasAuthToken: true
    })
  }

  async getOne(id: number) {
    return await makeRequest<GetProjectResponse>({
      url: `api/projects/${id}`,
      hasAuthToken: true
    })
  }
}

export default new ProjectService()