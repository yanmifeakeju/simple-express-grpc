// Original file: proto/auth.proto

import type { Data as _authPackage_Data, Data__Output as _authPackage_Data__Output } from '../authPackage/Data';

export interface loginUserResponse {
  'success'?: (boolean);
  'message'?: (string);
  'data'?: (_authPackage_Data | null);
}

export interface loginUserResponse__Output {
  'success'?: (boolean);
  'message'?: (string);
  'data'?: (_authPackage_Data__Output);
}
