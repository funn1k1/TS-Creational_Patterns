class User {
  githubToken: string;
  jwtToken: string;
  facebookToken: string;
  googleToken: string;
}

interface AuthStrategy { 
  auth(user: User): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  authUser(user: User): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}

class GithubStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.githubToken) {
      return true;
    }
    return false;
  }
}

class GoogleStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.googleToken) {
      return true;
    }
    return false;
  }
}

class FacebookStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.facebookToken) {
      return true;
    }
    return false;
  }
}

const user = new User();
user.googleToken = 'some token';
const auth = new Auth(new GoogleStrategy);
console.log(auth.authUser(user));
auth.setStrategy(new FacebookStrategy());
user.facebookToken = 'some token';
console.log(auth.authUser(user)) ;