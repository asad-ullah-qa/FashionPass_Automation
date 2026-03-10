import { expect } from '@playwright/test'

export class MyAccount {
  constructor(page) {
    this.page = page
    this.myAccount = page.getByRole('button', { name: 'Hi Test!' })
    this.logOut = page.getByText('Sign Out')
  }

   async clickOnmyAccountBtn() {
    await this.myAccount.click()
  }

  async clickOnLogoutBtn() {
    await this.logOut.click()
  }



}