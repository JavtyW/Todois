import { Selector, t } from "testcafe"
import TodayPage from "../pages/today-page"
import { CREDENTIALS, URLS, LABELS } from "../data/Constants"
import loginPage from "../pages/login-page"
import { STANDARD_USER } from '../data/roles'
import CommonPage from "../pages/common-Page"


fixture ('Login feature test')
    .page `${URLS.LOGIN_URL}`
    .beforeEach( async t => {
        await t.click(CommonPage.GoToLogin)
    })


test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(loginPage.HomeMessage.exists).ok
    })



test.skip('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    //await t.expect(TodayPage.todayLink.innerText).ok()
    })

test('As a user, I should not be able to log in successfully by providing invalid Email', async t => {
        await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.EMAIL, CREDENTIALS.STANDARD_USER.PASSWORD)   
        await t.expect(loginPage.InvalidMessage.innerText).contains(LABELS.TYPEOFERROR.INVALIDEMAIL)
})

test('As a user, I should not be able to log in successfully by providing invalid Password', async t => {
        await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)   
        await t.expect(loginPage.InvalidMessage.innerText).contains(LABELS.TYPEOFERROR.INVALIDPASSWORD)
})

test('As a user, I should not be able to log in successfully by providing empty info', async t => {
    await t
        .click(loginPage.loginButton)
        .expect(loginPage.InvalidMessage.innerText).contains(LABELS.TYPEOFERROR.EMPTYPASSWORD)
})



        
