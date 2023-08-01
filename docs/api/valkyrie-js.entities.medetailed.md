<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index) &gt; [valkyrie-js](./valkyrie-js) &gt; [entities](./valkyrie-js.entities) &gt; [MeDetailed](./valkyrie-js.entities.medetailed)

## entities.MeDetailed type

**Signature:**

```typescript
export declare type MeDetailed = UserDetailed & {
	avatarId: DriveFile["id"];
	bannerId: DriveFile["id"];
	autoAcceptFollowed: boolean;
	alwaysMarkNsfw: boolean;
	carefulBot: boolean;
	emailNotificationTypes: string[];
	hasPendingReceivedFollowRequest: boolean;
	hasUnreadAnnouncement: boolean;
	hasUnreadAntenna: boolean;
	hasUnreadChannel: boolean;
	hasUnreadMentions: boolean;
	hasUnreadMessagingMessage: boolean;
	hasUnreadNotification: boolean;
	hasUnreadSpecifiedNotes: boolean;
	hideOnlineStatus: boolean;
	injectFeaturedNote: boolean;
	integrations: Record<string, any>;
	isDeleted: boolean;
	isExplorable: boolean;
	mutedWords: string[][];
	mutingNotificationTypes: string[];
	noCrawle: boolean;
	preventAiLearning: boolean;
	receiveAnnouncementEmail: boolean;
	usePasswordLessLogin: boolean;
	[other: string]: any;
};
```
**References:** [UserDetailed](./valkyrie-js.entities.userdetailed)<!-- -->, [DriveFile](./valkyrie-js.entities.drivefile)
