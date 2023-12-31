---
title: valkyrie-js-entities-userlite
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index) &gt; [valkyrie-js](./valkyrie-js) &gt; [entities](./valkyrie-js.entities) &gt; [UserLite](./valkyrie-js.entities.userlite)

## entities.UserLite type

**Signature:**

```typescript
export declare type UserLite = {
	id: ID;
	username: string;
	host: string | null;
	name: string;
	onlineStatus: "online" | "active" | "offline" | "unknown";
	avatarUrl: string;
	avatarBlurhash: string;
	alsoKnownAs: string[];
	movedToUri: any;
	emojis: {
		name: string;
		url: string;
	}[];
	instance?: {
		name: Instance["name"];
		softwareName: Instance["softwareName"];
		softwareVersion: Instance["softwareVersion"];
		iconUrl: Instance["iconUrl"];
		faviconUrl: Instance["faviconUrl"];
		themeColor: Instance["themeColor"];
	};
};
```
**References:** [ID](./valkyrie-js.entities.id)<!-- -->, [Instance](./valkyrie-js.entities.instance)

