import { expect } from '@playwright/test'

export class HeaderNavBar {
  constructor(page) {
    this.page = page
      // select collection and rent order
        this.hoverOnBrowser = page.locator("//label[normalize-space()='Browse']")
        this.clicOnAllClothing = page.getByRole('link', { name: 'All Clothing' })
  }

  
    // open All Clothing Collection
    async HoverOnClothing() {
        await this.hoverOnBrowser.hover()
    }

        async clickrOnAllClothing() {
        await this.clicOnAllClothing.click()
    }

}