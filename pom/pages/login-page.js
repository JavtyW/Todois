import { Selector, t } from "testcafe"

class LoginPage{
    constructor(){
        this.usernameInput = Selector('#email')
        this.userpasswordInput = Selector('#password')
        this.loginButton = Selector('[class="submit_btn ist_button ist_button_red sel_login"]')
        this.InvalidMessage = Selector ('.error_msg > span')
        this.HomeMessage = Selector ('.empty-state-header').withText('Get a clear view of the day ahead')
 
    }

    async submitLoginForm(username, password){
        if(username) {
            await t.typeText(this.usernameInput, username)
        } 
        if(password) {
            await t.typeText(this.userpasswordInput, password)
        }
        await t.click(this.loginButton)
    }
}


export default new LoginPage