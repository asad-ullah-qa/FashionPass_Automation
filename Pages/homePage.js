import { expect } from '@playwright/test'

export class Homepage {
    constructor(page) {
        this.page = page
        this.promotionPopClose = page.locator('.klaviyo-close-form')
        this.cookiePopup = page.locator('.cookie-popup_close_button__WEPXH')
        this.SignInBtn = page.locator('.try_now_btn_container')
        this.signUpBtn = page.locator('.header_logincomp_loginBtn')
    }

    // close promotional popup
    async closePromotionPopup() {
        await this.promotionPopClose.click()
    }

    // close cookie popup
    async closeCookiePopup() {
        await this.cookiePopup.click()
    }

    // to create account
    async clickSignInBtn() {
        await this.SignInBtn.click()
    }

    // open login popup
    async clickOnsignUpBtn() {
        await this.signUpBtn.click()
    }


}