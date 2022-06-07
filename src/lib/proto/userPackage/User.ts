// Original file: proto/users.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { createUserRequest as _userPackage_createUserRequest, createUserRequest__Output as _userPackage_createUserRequest__Output } from '../userPackage/createUserRequest';
import type { createUserResponse as _userPackage_createUserResponse, createUserResponse__Output as _userPackage_createUserResponse__Output } from '../userPackage/createUserResponse';

export interface UserClient extends grpc.Client {
  createUser(argument: _userPackage_createUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_createUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_createUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_createUserRequest, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_createUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_createUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_createUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_createUserRequest, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  createUser: grpc.handleUnaryCall<_userPackage_createUserRequest__Output, _userPackage_createUserResponse>;
  
}

export interface UserDefinition extends grpc.ServiceDefinition {
  createUser: MethodDefinition<_userPackage_createUserRequest, _userPackage_createUserResponse, _userPackage_createUserRequest__Output, _userPackage_createUserResponse__Output>
}
