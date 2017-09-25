// import axios from "axios";
import { actions } from "mirrorx";

const SESSION_KEY = "loggedInUser";

class AuthApi {
  constructor() {
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.setSession = this.setSession.bind(this);
    this.getSession = this.getSession.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login({ email, password }) {
    const user = {
      id: "1",
      name: "Sample User",
      email,
      provider: "password",
      providerId: "",
      token: "asdasdasdasd"
    };
    this.setSession(user);
    actions.routing.push("/");
  }

  signup({ name, email, password, retypePassword }) {
    const user = {
      id: "1",
      name,
      email,
      provider: "password",
      providerId: "",
      token: "asdasdasdasd"
    };
    this.setSession(user);
    actions.routing.push("/");
  }

  setSession(user) {
    const jsonStr = JSON.stringify(user);
    localStorage.setItem(SESSION_KEY, jsonStr);
  }

  getSession() {
    const jsonStr = localStorage.getItem(SESSION_KEY);
    if (!jsonStr) return null;
    try {
      const user = JSON.parse(jsonStr);
      return user;
    } catch (error) {
      return null;
    }
  }

  logout() {
    localStorage.removeItem(SESSION_KEY);
    actions.routing.push("/login");
  }

  isAuthenticated() {
    return !!this.getSession();
  }
}

const auth = new AuthApi();

export default auth;
