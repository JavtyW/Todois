import { Selector, t } from "testcafe"
import TodayPage from "../pages/today-page"
import { CREDENTIALS, URLS, LABELS } from "../data/Constants"
import loginPage from "../pages/login-page"
import { STANDARD_USER } from '../data/roles'
import CommonPage from "../pages/common-Page"


fixture ('Today feature test')
    .page `${URLS.LOGIN_URL}`



test.only('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t
        .useRole(STANDARD_USER)
        .click('.empty-state-button')
        .typeText('.task_editor__description_field no-focus-marker', 'Title: Create Task Test'  )
        .typeText('.public-DraftStyleDefault-block public-DraftStyleDefault-ltr', 'Working in progress')
    })
