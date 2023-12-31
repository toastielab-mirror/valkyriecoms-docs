---
title: valkyrie-js-stream
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index) &gt; [valkyrie-js](./valkyrie-js) &gt; [Stream](./valkyrie-js.stream)

## Stream class

**Signature:**

```typescript
export default class Stream extends EventEmitter<StreamEvents> 
```
**Extends:** EventEmitter&lt;StreamEvents&gt;

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(origin, user, options)](./valkyrie-js.stream._constructor_) |  | Constructs a new instance of the <code>Stream</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [state](./valkyrie-js.stream.state) |  | "initializing" \| "reconnecting" \| "connected" |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [close()](./valkyrie-js.stream.close) |  |  |
|  [disconnectToChannel(connection)](./valkyrie-js.stream.disconnecttochannel) |  |  |
|  [removeSharedConnection(connection)](./valkyrie-js.stream.removesharedconnection) |  |  |
|  [removeSharedConnectionPool(pool)](./valkyrie-js.stream.removesharedconnectionpool) |  |  |
|  [send(typeOrPayload, payload)](./valkyrie-js.stream.send) |  |  |
|  [useChannel(channel, params, name)](./valkyrie-js.stream.usechannel) |  |  |

