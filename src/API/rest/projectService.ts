import makeRequest from "API/makeRequest.ts";

import { GetProjectResponse, GetProjectsResponse } from "types/API/TProjectResponse.ts";
import { TProjectCreate } from "types/entities/TProject.ts";

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

  async create(project: TProjectCreate) {
    return await makeRequest<GetProjectResponse>({
      url: `api/projects`,
      method: 'post',
      hasAuthToken: true,
      data: project
    })
  }
}

export default new ProjectService()