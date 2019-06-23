import { environment } from '../../../../environments/environment';
import { PathModel } from '../../models/path.model';

const baseUrl = new PathModel(environment.baseUrl);

export const REST_PATH = Object.freeze({
  exampleLayouts: {
    findAll: baseUrl.create('/example'),
  }
});
