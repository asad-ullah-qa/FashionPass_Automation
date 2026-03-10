import { expect } from '@playwright/test'

export class collections {
    constructor(page) {
        this.page = page
        // select collection and rent order
        this.OnboardingPopup1 = page.locator('button').filter({ hasText: 'Next' }).first()
        this.OnboardingPopup2 = page.getByText('Done', { exact: true })
        this.selectProduct = page.locator('div.product-outer-main:visible').nth(1)
    }

    // open All Clothing Collection
    async closeOnboardingPopup1() {
        await this.OnboardingPopup1.click()
    }

    async closeOnboardingPopup2() {
        await this.OnboardingPopup2.click()
    }

    async clickOnProduct() {
        await this.selectProduct.click()
    }

}