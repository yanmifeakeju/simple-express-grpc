// Original file: proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { loginUserRequest as _authPackage_loginUserRequest, loginUserRequest__Output as _authPackage_loginUserRequest__Output } from '../authPackage/loginUserRequest';
import type { loginUserResponse as _authPackage_loginUserResponse, loginUserResponse__Output as _authPackage_loginUserResponse__Output } from '../authPackage/loginUserResponse';
import type { validateTokenRequest as _authPackage_validateTokenRequest, validateTokenRequest__Output as _authPackage_validateTokenRequest__Output } from '../authPackage/validateTokenRequest';
import type { validateTokenResponse as _authPackage_validateTokenResponse, validateTokenResponse__Output as _authPackage_validateTokenResponse__Output } from '../authPackage/validateTokenResponse';

export interface AuthClient extends grpc.Client {
  loginUser(argument: _authPackage_loginUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _authPackage_loginUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _authPackage_loginUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _authPackage_loginUserRequest, callback: grpc.requestCallback<_authPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _authPackage_loginUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _authPackage_loginUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _authPackage_loginUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _authPackage_loginUserRequest, callback: grpc.requestCallback<_authPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
  
  validateToken(argument: _authPackage_validateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_validateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _authPackage_validateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authPackage_validateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _authPackage_validateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_validateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _authPackage_validateTokenRequest, callback: grpc.requestCallback<_authPackage_validateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _authPackage_validateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_validateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _authPackage_validateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authPackage_validateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _authPackage_validateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_validateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _authPackage_validateTokenRequest, callback: grpc.requestCallback<_authPackage_validateTokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthHandlers extends grpc.UntypedServiceImplementation {
  loginUser: grpc.handleUnaryCall<_authPackage_loginUserRequest__Output, _authPackage_loginUserResponse>;
  
  validateToken: grpc.handleUnaryCall<_authPackage_validateTokenRequest__Output, _authPackage_validateTokenResponse>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  loginUser: MethodDefinition<_authPackage_loginUserRequest, _authPackage_loginUserResponse, _authPackage_loginUserRequest__Output, _authPackage_loginUserResponse__Output>
  validateToken: MethodDefinition<_authPackage_validateTokenRequest, _authPackage_validateTokenResponse, _authPackage_validateTokenRequest__Output, _authPackage_validateTokenResponse__Output>
}
