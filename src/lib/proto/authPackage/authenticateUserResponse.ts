// Original file: proto/auth.proto

import type { Data as _authPackage_Data, Data__Output as _authPackage_Data__Output } from '../authPackage/Data';

export interface authenticateUserResponse {
  'success'?: (boolean);
  'message'?: (string);
  'data'?: (_authPackage_Data | null);
}

export interface authenticateUserResponse__Output {
  'success'?: (boolean);
  'message'?: (string);
  'data'?: (_authPackage_Data__Output);
}
