import { expect } from '@playwright/test'

export class createProfile {
    constructor(page) {
        this.page = page
        this.first_name = page.locator('#first_name')
        this.last_name = page.locator('#last_name')
        this.password = page.locator('#password')
        this.birthday = page.locator('#birthday')
        this.createProfilebtn = page.getByRole('button', { name: 'CREATE PROFILE' })
        
    }

    async createProfile(first, last, pass, dob) {
        await this.first_name.fill(first)
        await this.last_name.fill(last)
        await this.password.fill(pass)
        await this.birthday.fill(dob)
    }

       async clickcreateProfilebtn() {
        await this.createProfilebtn.click()
    }

}