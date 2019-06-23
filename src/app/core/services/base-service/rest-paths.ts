import { environment } from '../../../../environments/environment';
import { PathModel } from '../../models/path.model';

const baseUrl = new PathModel(environment.baseUrl);

export const REST_PATH = Object.freeze({
  core: {
    example: {
      findAll: baseUrl.create('/example'),
    },
  }
});
