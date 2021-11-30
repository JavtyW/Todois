import { Selector } from "testcafe"

class TodayPage{
    constructor(){
        this.todayLink = Selector('.skiplink').withText('Skip to task list: Todoist')
    }
}
export default new TodayPage