import { test as base } from '@playwright/test'
import { Homepage } from '../pages/HomePage'
import { EmailPage } from '../pages/EmailPage'
import { createProfile } from '../pages/CreateProfilePage'
import { membershipPage } from '../pages/MembershipPage'
import { LoginPopup } from '../Pages/loginPopup'

export const test = base.extend({

    homePage: async ({ page }, use) => {
        await use(new Homepage(page))
    },

    emailPage: async ({ page }, use) => {
        await use(new EmailPage(page))
    },

    profilePage: async ({ page }, use) => {
        await use(new createProfile(page))
    },

    membershipPage: async ({ page }, use) => {
        await use(new membershipPage(page))
    },

    LoginPopup: async ({ page }, use) => {
        await use(new LoginPopup(page))
    }



})

export { expect } from '@playwright/test'