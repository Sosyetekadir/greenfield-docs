---
title: Challenge Object Data
order: 4
---

# ChallengeObjectData

## RESTful API Description

This API is used to challenge object data.

## HTTP Request Format

| Desscription | Definition                     |
| ------------ | ------------------------------ |
| Host         | gnfd-testnet-sp-*.bnbchain.org |
| Path         | /greenfield/admin/v1/challenge |
| Method       | GET                            |
| Accept       | application/xml                |

## HTTP Request Header

| ParameterName           | Type   | Required | Description                                                                |
| ----------------------- | ------ | -------- | -------------------------------------------------------------------------- |
| X-Gnfd-Object-ID        | string | yes      | Object ID of the challenged object.                                        |
| X-Gnfd-Redundancy-Index | string | yes      | Redundancy Index of the challenged object which is used to specify the SP. |
| X-Gnfd-Piece-Index      | string | yes      | Piece Index is used to specify the object's piece data.                    |
| Authorization           | string | yes      | The authorization string of the HTTP request.                              |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

The request does not have a query parameter.

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET /greenfield/admin/v1/challenge HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org
X-Gnfd-Object-ID: ObjectID
X-Gnfd-Redundancy-Index: RedundancyIndex
X-Gnfd-Piece-Index: PieceIndex
Authorization: Authorization
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName         | Type   | Description                           |
| --------------------- | ------ | ------------------------------------- |
| X-Gnfd-Request-ID     | string | defines trace id, trace request in sp |
| X-Gnfd-Integrity-Hash | string | defines integrity hash                |
| X-Gnfd-Piece-Hash     | string | defines piece hash list               |

## HTTP Response Parameter

### Response Body

If you challenge object data successfully, you will get piece data in response body which could be 4M or 16M.

If you failed to send request to get approval, you will get error response body in [XML](./common/error.md#sp-error-response-parameter).

## Response Syntax

```HTTP
HTTP/1.1 200
X-Gnfd-Request-ID: RequestID
X-Gnfd-Integrity-Hash: IntegrityHash
X-Gnfd-Piece-Hash: PieceHashList

Body
```

## Examples

### Example 1: Challenge object data

```HTTP
GET /greenfield/admin/v1/challenge HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
X-Gnfd-Object-ID: 1010
X-Gnfd-Redundancy-Index: 1
X-Gnfd-Piece-Index: 2
```

### Sample Response: Challenge object data successfully

```HTTP
HTTP/1.1 200 OK
X-Gnfd-Request-ID: 4208447844380058399
Date: Fri, 31 March 2023 17:32:10 GMT
X-Gnfd-Integrity-Hash: a0592983278dddb854287ff081511b0a98ee44c4bb0cd594dda0e91812153f37
X-Gnfd-Piece-Hash: 66f7fac3161b6982f2cebb86a756c03d28e1e8464bb48c50347a6b0fbed16d7a79caf47f90d6b4b9a6e118082cdbab0af4a42458a3059069a2fb5dba9a84fe6001

[4194304 bytes of object data]
```
