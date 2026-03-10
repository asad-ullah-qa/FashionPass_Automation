import { expect } from '@playwright/test'

export class Login {
  constructor(page) {
    this.page = page
    this.loginEmail = page.locator("//input[@id='email']")
    this.loginPassword = page.locator("//input[@id='password']")
    this.loginBtn = page.locator('.login-btn')
  }

  async enterLoginDetails(email, password) {
    await this.loginEmail.fill(email)
    await this.loginPassword.fill(password)
  }

  async clickOnLoginBtn() {
    await this.loginBtn.click()
  }

}