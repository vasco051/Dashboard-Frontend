import makeRequest from "API/makeRequest.ts";

import { GetColorsResponse } from "types/API/TColorResponse.ts";

class ColorService {
  async getAll() {
    return await makeRequest<GetColorsResponse>({
      url: 'api/colors',
      hasAuthToken: true
    })
  }
}

export default new ColorService()