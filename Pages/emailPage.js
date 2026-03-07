import { expect } from '@playwright/test'

export class EmailPage {
    constructor(page) {
        this.page = page
        this.emailField = page.getByRole('textbox', { name: 'Email' })
        this.getStartedBtn = page.getByRole('button', { name: 'GET STARTED' })
        this.loader = page.locator('.mainLoader')
    }

    async enterEmail(email) {
        await this.emailField.fill(email)
    }

    async clickGetStartedBtn() {
        await this.getStartedBtn.click()
    }


    async waitForLoader() {

        // loader visible
        await expect(this.loader).toBeVisible()

        // loader disappear
        await expect(this.loader).toBeHidden()


    }

}