import { expect } from '@playwright/test'

export class loginPopupPage {
    constructor(page) {
        this.page = page
        this.joinNow = page.locator('')
    }

    async clickCreateAccount() {
        await this.joinNow.click()
    }

}