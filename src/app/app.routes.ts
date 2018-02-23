import { HomeComponent } from "./home/home.component";
import { ChatroomComponent } from "./chatroom/chatroom.component";

export const APP_ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'chatroom/:chatroomId', component: ChatroomComponent }
];
