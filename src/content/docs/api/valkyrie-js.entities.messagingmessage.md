---
title: valkyrie-js-entities-messagingmessage
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index) &gt; [valkyrie-js](./valkyrie-js) &gt; [entities](./valkyrie-js.entities) &gt; [MessagingMessage](./valkyrie-js.entities.messagingmessage)

## entities.MessagingMessage type

**Signature:**

```typescript
export declare type MessagingMessage = {
	id: ID;
	createdAt: DateString;
	file: DriveFile | null;
	fileId: DriveFile["id"] | null;
	isRead: boolean;
	reads: User["id"][];
	text: string | null;
	user: User;
	userId: User["id"];
	recipient?: User | null;
	recipientId: User["id"] | null;
	group?: UserGroup | null;
	groupId: UserGroup["id"] | null;
};
```
**References:** [ID](./valkyrie-js.entities.id)<!-- -->, [DateString](./valkyrie-js.entities.datestring)<!-- -->, [DriveFile](./valkyrie-js.entities.drivefile)<!-- -->, [User](./valkyrie-js.entities.user)<!-- -->, [UserGroup](./valkyrie-js.entities.usergroup)

