# KUserApi

All URIs are relative to *http://localhost:4010*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](KUserApi.md#createuser) | **POST** /user | Create user
[**createUsersWithArrayInput**](KUserApi.md#createuserswitharrayinput) | **POST** /user/createWithArray | Creates list of users with given input array
[**createUsersWithListInput**](KUserApi.md#createuserswithlistinput) | **POST** /user/createWithList | Creates list of users with given input array
[**deleteUser**](KUserApi.md#deleteuser) | **DELETE** /user/{username} | Delete user
[**getUserByName**](KUserApi.md#getuserbyname) | **GET** /user/{username} | Get user by user name
[**loginUser**](KUserApi.md#loginuser) | **GET** /user/login | Logs user into the system
[**logoutUser**](KUserApi.md#logoutuser) | **GET** /user/logout | Logs out current logged in user session
[**updateUser**](KUserApi.md#updateuser) | **PUT** /user/{username} | Updated user


# **createUser**
```objc
-(NSURLSessionTask*) createUserWithUser: (KUser*) user
        completionHandler: (void (^)(NSError* error)) handler;
```

Create user

This can only be done by the logged in user.

### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: api_key)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"api_key"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"api_key"];


KUser* user = [[KUser alloc] init]; // Created user object

KUserApi*apiInstance = [[KUserApi alloc] init];

// Create user
[apiInstance createUserWithUser:user
          completionHandler: ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KUserApi->createUser: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**KUser***](KUser.md)| Created user object | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUsersWithArrayInput**
```objc
-(NSURLSessionTask*) createUsersWithArrayInputWithUser: (NSArray<KUser>*) user
        completionHandler: (void (^)(NSError* error)) handler;
```

Creates list of users with given input array



### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: api_key)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"api_key"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"api_key"];


NSArray<KUser>* user = @[[[KUser alloc] init]]; // List of user object

KUserApi*apiInstance = [[KUserApi alloc] init];

// Creates list of users with given input array
[apiInstance createUsersWithArrayInputWithUser:user
          completionHandler: ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KUserApi->createUsersWithArrayInput: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**NSArray&lt;KUser&gt;***](KUser.md)| List of user object | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUsersWithListInput**
```objc
-(NSURLSessionTask*) createUsersWithListInputWithUser: (NSArray<KUser>*) user
        completionHandler: (void (^)(NSError* error)) handler;
```

Creates list of users with given input array



### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: api_key)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"api_key"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"api_key"];


NSArray<KUser>* user = @[[[KUser alloc] init]]; // List of user object

KUserApi*apiInstance = [[KUserApi alloc] init];

// Creates list of users with given input array
[apiInstance createUsersWithListInputWithUser:user
          completionHandler: ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KUserApi->createUsersWithListInput: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**NSArray&lt;KUser&gt;***](KUser.md)| List of user object | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
```objc
-(NSURLSessionTask*) deleteUserWithUsername: (NSString*) username
        completionHandler: (void (^)(NSError* error)) handler;
```

Delete user

This can only be done by the logged in user.

### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: api_key)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"api_key"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"api_key"];


NSString* username = @"username_example"; // The name that needs to be deleted

KUserApi*apiInstance = [[KUserApi alloc] init];

// Delete user
[apiInstance deleteUserWithUsername:username
          completionHandler: ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KUserApi->deleteUser: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **NSString***| The name that needs to be deleted | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserByName**
```objc
-(NSURLSessionTask*) getUserByNameWithUsername: (NSString*) username
        completionHandler: (void (^)(KUser* output, NSError* error)) handler;
```

Get user by user name



### Example
```objc

NSString* username = @"username_example"; // The name that needs to be fetched. Use user1 for testing.

KUserApi*apiInstance = [[KUserApi alloc] init];

// Get user by user name
[apiInstance getUserByNameWithUsername:username
          completionHandler: ^(KUser* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KUserApi->getUserByName: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **NSString***| The name that needs to be fetched. Use user1 for testing. | 

### Return type

[**KUser***](KUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loginUser**
```objc
-(NSURLSessionTask*) loginUserWithUsername: (NSString*) username
    password: (NSString*) password
        completionHandler: (void (^)(NSString* output, NSError* error)) handler;
```

Logs user into the system



### Example
```objc

NSString* username = @"username_example"; // The user name for login
NSString* password = @"password_example"; // The password for login in clear text

KUserApi*apiInstance = [[KUserApi alloc] init];

// Logs user into the system
[apiInstance loginUserWithUsername:username
              password:password
          completionHandler: ^(NSString* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KUserApi->loginUser: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **NSString***| The user name for login | 
 **password** | **NSString***| The password for login in clear text | 

### Return type

**NSString***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logoutUser**
```objc
-(NSURLSessionTask*) logoutUserWithCompletionHandler: 
        (void (^)(NSError* error)) handler;
```

Logs out current logged in user session



### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: api_key)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"api_key"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"api_key"];



KUserApi*apiInstance = [[KUserApi alloc] init];

// Logs out current logged in user session
[apiInstance logoutUserWithCompletionHandler: 
          ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KUserApi->logoutUser: %@", error);
                        }
                    }];
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
```objc
-(NSURLSessionTask*) updateUserWithUsername: (NSString*) username
    user: (KUser*) user
        completionHandler: (void (^)(NSError* error)) handler;
```

Updated user

This can only be done by the logged in user.

### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: api_key)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"api_key"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"api_key"];


NSString* username = @"username_example"; // name that need to be deleted
KUser* user = [[KUser alloc] init]; // Updated user object

KUserApi*apiInstance = [[KUserApi alloc] init];

// Updated user
[apiInstance updateUserWithUsername:username
              user:user
          completionHandler: ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KUserApi->updateUser: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **NSString***| name that need to be deleted | 
 **user** | [**KUser***](KUser.md)| Updated user object | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

