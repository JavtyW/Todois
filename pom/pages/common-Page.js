import { Selector } from "testcafe"

class CommonPage{
    constructor(){
        this.GoToLogin = Selector('._2q_cf').withText('Log in')
    }
}

export default new CommonPage