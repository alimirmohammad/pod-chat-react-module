import {
  contactAddingReducer,
  contactGetListReducer,
  contactAdd,
  contactBlockReducer,
  contactListShowingReducer,
  contactModalCreateGroupShowingReducer,
  contactChattingReducer, contactGetListPartialReducer,
} from "./contactReducer";
import {
  threadNotificationReducer,
  threadUnreadMentionedMessageListReducer,
  threadMessageListReducer,
  threadMessageListPartialReducer,
  threadParticipantListReducer,
  threadParticipantListPartialReducer,
  threadCreateReducer,
  threadsReducer,
  threadsPartialReducer,
  threadModalListShowingReducer,
  threadModalThreadInfoShowingReducer,
  threadFilesToUploadReducer,
  threadParticipantAddReducer,
  threadModalMedialShowingReducer,
  threadShowingReducer,
  threadLeftAsideShowingReducer,
  threadIsSendingMessageReducer,
  threadSearchMessageReducer,
  threadImagesToCaptionReducer,
  threadModalImageCaptionShowingReducer,
  threadGoToMessageIdReducer,
  threadGetMessageListByMessageIdReducer,
  threadSelectMessageShowingReducer,
  threadCheckedMessageListReducer,
  threadEmojiShowingReducer,
  threadAdminListReducer
} from "./threadReducer";
import {
  messageNewReducer,
  messagePinnedReducer,
  messageEditingReducer
} from "./messageReducer";
import {
  chatSmallVersionReducer,
  chatNotificationReducer,
  chatNotificationClickHookReducer,
  chatSelectParticipantForCallShowingReducer,
  chatInstanceReducer,
  chatAudioPlayerReducer,
  chatStateReducer,
  chatModalPromptReducer,
  chatRouterLessReducer,
  chatSearchResultReducer,
  chatSearchShowReducer,
  chatRetryHookReducer,
  chatSignOutHookReducer,
  chatAudioRecorderReducer,
  chatSupportModeReducer,
  chatSupportModuleBadgeShowingReducer,
  chatCallBoxShowingReducer,
  chatCallStatusReducer,
  chatCallParticipantListReducer,
  chatCallGroupSettingsShowingReducer,
  chatCallGroupVideoViewModeReducer
} from "./chatReducer";
import userReducer from "./userReducer";

const rootReducer = {
  chatInstance: chatInstanceReducer,
  chatState: chatStateReducer,
  chatModalPrompt: chatModalPromptReducer,
  chatSmallVersion: chatSmallVersionReducer,
  chatRouterLess: chatRouterLessReducer,
  chatSearchResult: chatSearchResultReducer,
  chatSearchShow: chatSearchShowReducer,
  chatNotification: chatNotificationReducer,
  chatNotificationClickHook: chatNotificationClickHookReducer,
  chatRetryHook: chatRetryHookReducer,
  chatSignOutHook: chatSignOutHookReducer,
  chatAudioPlayer: chatAudioPlayerReducer,
  chatAudioRecorder: chatAudioRecorderReducer,
  chatSupportMode: chatSupportModeReducer,
  chatSupportModuleBadgeShowing: chatSupportModuleBadgeShowingReducer,
  chatCallBoxShowing: chatCallBoxShowingReducer,
  chatCallStatus: chatCallStatusReducer,
  chatCallParticipantList: chatCallParticipantListReducer,
  chatCallGroupSettingsShowing: chatCallGroupSettingsShowingReducer,
  chatCallGroupVideoViewMode: chatCallGroupVideoViewModeReducer,
  contactGetList: contactGetListReducer,
  contactGetListPartial: contactGetListPartialReducer,
  contactListShowing: contactListShowingReducer,
  contactModalCreateGroupShowing: contactModalCreateGroupShowingReducer,
  chatSelectParticipantForCallShowing: chatSelectParticipantForCallShowingReducer,
  contactAdding: contactAddingReducer,
  contactAdd: contactAdd,
  contactBlock: contactBlockReducer,
  contactChatting: contactChattingReducer,
  thread: threadCreateReducer,
  threadNotification: threadNotificationReducer,
  threadMessages: threadMessageListReducer,
  threadUnreadMentionedMessages: threadUnreadMentionedMessageListReducer,
  threadEmojiShowing: threadEmojiShowingReducer,
  threadMessagesPartial: threadMessageListPartialReducer,
  threadModalListShowing: threadModalListShowingReducer,
  threadModalThreadInfoShowing: threadModalThreadInfoShowingReducer,
  threadModalMedialShowing: threadModalMedialShowingReducer,
  threadModalImageCaptionShowing: threadModalImageCaptionShowingReducer,
  threads: threadsReducer,
  threadsPartial: threadsPartialReducer,
  threadParticipantList: threadParticipantListReducer,
  threadParticipantListPartial: threadParticipantListPartialReducer,
  threadParticipantAdd: threadParticipantAddReducer,
  threadFilesToUpload: threadFilesToUploadReducer,
  threadImagesToCaption: threadImagesToCaptionReducer,
  threadShowing: threadShowingReducer,
  threadLeftAsideShowing: threadLeftAsideShowingReducer,
  threadIsSendingMessage: threadIsSendingMessageReducer,
  threadSelectMessageShowing: threadSelectMessageShowingReducer,
  threadSearchMessage: threadSearchMessageReducer,
  threadGoToMessageId: threadGoToMessageIdReducer,
  threadGetMessageListByMessageId: threadGetMessageListByMessageIdReducer,
  threadCheckedMessageList: threadCheckedMessageListReducer,
  threadAdminList: threadAdminListReducer,
  messageNew: messageNewReducer,
  messagePinned: messagePinnedReducer,
  messageEditing: messageEditingReducer,
  user: userReducer,
};

export default rootReducer;