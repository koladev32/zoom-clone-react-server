export interface UserResponse {
  user: {
    public_id: string;
    username: string;
    is_active: string;
    created: Date;
    updated: Date;
  };
}
