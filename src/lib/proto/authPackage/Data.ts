// Original file: proto/auth.proto

import type { User as _authPackage_User, User__Output as _authPackage_User__Output } from '../authPackage/User';

export interface Data {
  'token'?: (string);
  'user'?: (_authPackage_User | null);
}

export interface Data__Output {
  'token'?: (string);
  'user'?: (_authPackage_User__Output);
}
