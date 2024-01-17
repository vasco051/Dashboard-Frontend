import makeRequest from "API/makeRequest.ts";

import {GetProjectsResponse} from "types/API/TProjectResponse.ts";

class ProjectService {
  async getAll() {
    return await makeRequest<GetProjectsResponse>({
      url: 'api/projects',
      hasAuthToken: true
    })
  }
}

export default new ProjectService()