import { test as base } from '@playwright/test'
import { Homepage } from '../pages/HomePage'
import { EmailPage } from '../pages/EmailPage'
import { createProfile } from '../pages/CreateProfilePage'
import { membershipPage } from '../pages/MembershipPage'
import { Login } from '../Pages/login'
import { MyAccount } from '../Pages/SideMenu'
import { HeaderNavBar } from '../Pages/navBar'
import { collections } from '../Pages/collection'
import { ProductPage } from '../Pages/productPage'

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

    Login: async ({ page }, use) => {
        await use(new Login(page))
    },

    MyAccount: async ({ page }, use) => {
        await use(new MyAccount(page))
    },

    Navbar: async ({ page }, use) => {
        await use(new HeaderNavBar(page))
    },

    collections: async ({ page }, use) => {
        await use(new collections(page))
    },

    ProductPage: async ({ page }, use) => {
        await use(new ProductPage(page))
    }

})

export { expect } from '@playwright/test'