---
title: valkyrie-js-entities-page
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index) &gt; [valkyrie-js](./valkyrie-js) &gt; [entities](./valkyrie-js.entities) &gt; [Page](./valkyrie-js.entities.page)

## entities.Page type

**Signature:**

```typescript
export declare type Page = {
	id: ID;
	createdAt: DateString;
	updatedAt: DateString;
	userId: User["id"];
	user: User;
	content: Record<string, any>[];
	variables: Record<string, any>[];
	title: string;
	name: string;
	summary: string | null;
	hideTitleWhenPinned: boolean;
	alignCenter: boolean;
	font: string;
	script: string;
	eyeCatchingImageId: DriveFile["id"] | null;
	eyeCatchingImage: DriveFile | null;
	attachedFiles: any;
	likedCount: number;
	isLiked?: boolean;
};
```
**References:** [ID](./valkyrie-js.entities.id)<!-- -->, [DateString](./valkyrie-js.entities.datestring)<!-- -->, [User](./valkyrie-js.entities.user)<!-- -->, [DriveFile](./valkyrie-js.entities.drivefile)

