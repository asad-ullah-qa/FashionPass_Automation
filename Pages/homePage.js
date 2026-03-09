import { expect } from '@playwright/test'

export class Homepage {
    constructor(page) {
        this.page = page
        this.promotionPopClose = page.locator('.klaviyo-close-form')
        this.cookiePopup = page.locator('.cookie-popup_close_button__WEPXH')
        this.SignInBtn = page.locator('.try_now_btn_container')
        this.signUpBtn = page.locator('.header_logincomp_loginBtn')
    }

    async closePromotionPopup() {
        await this.promotionPopClose.click()
    }

    async closeCookiePopup() {
        await this.cookiePopup.click()
    }

    async clickSignInBtn() {
        await this.SignInBtn.click()
    }

    async clickOnsignUpBtn() {
        await this.signUpBtn.click()
    }
}