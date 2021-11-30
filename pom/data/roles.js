import { Role } from "testcafe";
import { URLS, CREDENTIALS } from "./constants";
import loginPage from "../pages/login-page";

export const STANDARD_USER = Role(URLS.LOGIN_URL_LANDPAGE, async() => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, {preserveUrl: true})