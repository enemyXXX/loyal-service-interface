
export interface ChatSender {
    id: string;
    photo: string;
    name: string;
}

export interface ChatItem {
    id: string;
    text: string;
    date: Date;
    sender: ChatSender;
    received: boolean;
    receiverId: string;
}

export interface ChatInfo {
    id: string;
    active: boolean;
    master: string;
    newCount: number;
    user: ChatSender;
    lastMessage: ChatItem;
}
