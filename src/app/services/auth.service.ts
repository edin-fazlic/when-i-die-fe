export class AuthService {
    // Dummy credentials 
    private dummyCredentials: { [key: string]: string } = {
      'user1': 'password1',
      'user2': 'password2'
    };
  
    constructor() { }
  
    login(username: string, password: string): boolean {
      // Check if the provided credentials match the stored ones
      
      if (this.dummyCredentials.hasOwnProperty(username) && this.dummyCredentials[username] === password) {
        // Authentication successful
        return true;
      } else {
        // Authentication failed
        return false;
      }
    }
  }