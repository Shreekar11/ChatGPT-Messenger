export type UserData = {
    name: string | null;
    email: string | null;
    profilePic: string | null;
    uid: string | null;
  };
  
  export type GoogleCredential = {
    token: string;
    user: {
      name: string;
      email: string;
      profilePic: string;
      uid: string;
    };
  };
  
  export type UserCredential = {
    user: UserData;
  };
  
  export type AuthContextType = {
    authState: UserCredential;
    setUserAuthInfo: (data: UserCredential) => void;
    isUserAuthenticated: () => boolean;
  };
  