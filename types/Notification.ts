export interface CreateNotification {
  title: string;
  text: string;
  image: File | null;
}

export interface Notification {
  id: number;
  title: string;
  text: string;
  image: string;
}
