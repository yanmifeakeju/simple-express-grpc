// Original file: proto/auth.proto

import type { User as _authPackage_User, User__Output as _authPackage_User__Output } from '../authPackage/User';

export interface _authPackage_validateTokenResponse_obj {
  'user'?: (_authPackage_User | null);
}

export interface _authPackage_validateTokenResponse_obj__Output {
  'user'?: (_authPackage_User__Output);
}

export interface validateTokenResponse {
  'success'?: (boolean);
  'message'?: (string);
  'data'?: (_authPackage_validateTokenResponse_obj | null);
}

export interface validateTokenResponse__Output {
  'success'?: (boolean);
  'message'?: (string);
  'data'?: (_authPackage_validateTokenResponse_obj__Output);
}
