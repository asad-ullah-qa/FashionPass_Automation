import { expect } from '@playwright/test'

export class onBoardingPages {
  constructor(page) {
    this.page = page

    this.firstCheckbox = page.getByRole('checkbox')
    this.UnderstandBtn1 = page.getByRole('img').nth(2)
    this.UnderstandBtn2 = page.getByRole('button', { name: 'START RENTING' })
  }

  async clickOncheckbox() {
    await this.firstCheckbox.check()
  }

  async clickOnUnderstandBtn1() {
    await this.UnderstandBtn1.click()
  }

  async clickOnUnderstandBtn2() {
    await this.UnderstandBtn2.click()
  }

}

