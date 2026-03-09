import { expect } from '@playwright/test'

export class EmailPage {
    constructor(page) {
        this.page = page
        this.emailField = page.getByRole('textbox', { name: 'Email' })
        this.getStartedBtn = page.getByRole('button', { name: 'GET STARTED' })
        // this.loader = page.locator('.mainLoader')
    }

    async enterEmail(email) {
        await expect(this.emailField).toBeVisible()
        await this.emailField.fill(email)
    }

    async clickGetStartedBtn() {
        await expect(this.getStartedBtn).toBeEnabled()
        await this.getStartedBtn.click()
    }

    // async waitForLoader() {
    //     await expect(this.loader).toBeVisible()
    //     await expect(this.loader).toBeHidden({ timeout: 10000 })
    // }

}