import { expect } from '@playwright/test'

export class ProductPage {
    constructor(page) {
        this.page = page
        this.selectsize = page.locator('label.swatch_sku_BB304-1.swatchedSelected.bis_tooltipContainer:visible')
    }

    async selectsmallsize() {
        await this.selectsize.click()
    }

}