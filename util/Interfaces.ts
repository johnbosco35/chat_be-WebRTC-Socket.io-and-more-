export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
}

export interface IMessage {
    _id: string;
    sender: string;
    content: string;
    roomId: string;
    timestamp: Date;
    attachmentUrl?: string;
}

export interface IVoiceNote {
    sender: string;
    roomId: string;
    audioUrl: string;
    timestamp: Date;
}

export interface ICall {
    _id: string;
    caller: string;
    receiver: string;
    startTime: Date;
    endTime?: Date;
    callType: `audio` | `video`;
}