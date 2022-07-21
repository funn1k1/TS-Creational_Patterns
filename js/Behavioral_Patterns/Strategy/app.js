"use strict";
class User {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    auth(user) {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}
class GithubStrategy {
    auth(user) {
        if (user.githubToken) {
            return true;
        }
        return false;
    }
}
class GoogleStrategy {
    auth(user) {
        if (user.googleToken) {
            return true;
        }
        return false;
    }
}
class FacebookStrategy {
    auth(user) {
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
console.log(auth.authUser(user));
