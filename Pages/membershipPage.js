import { expect } from '@playwright/test'

export class membershipPage {
    constructor(page) {
        this.page = page
        this.full_name = page.locator('#card-name')
        this.card_num = page.locator('#card_number')
        this.exp_num = page.locator('#card_expiry')
        this.cvc_num = page.locator('#card_cvc')
        this.zipcode = page.locator('#zip-code')
        this.phone_no = page.locator('#mobile-number')
        this.acceptPolicy = page.locator("//label[@for='waitlistTerms2']//*[name()='svg']")
        this.createMembershipbtn = page.getByRole('button', { name: 'CREATE MEMBERSHIP' })
    }

    async createMembership(fname, cnum, cexp, cvc, zip, pnum) {
        await this.full_name.fill(fname)
        await this.card_num.fill(cnum)
        await this.exp_num.fill(cexp)
        await this.cvc_num.fill(cvc)
        await this.zipcode.fill(zip)
        await this.phone_no.fill(pnum)
    }

    async clickacceptPolicyCheckbox() {
        await this.acceptPolicy.click()
    }

    async clickcreateMembershipbtn() {
        await this.createMembershipbtn.click()
    }




}