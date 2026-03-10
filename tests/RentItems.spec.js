import { test } from '../fixtures/baseTest'
import { UserDetails } from '../Test-Data/Data'

test.describe('Rent Items FLow', () => {

    test.beforeEach(async ({ page, homePage, Login }) => {

        // open website
        await page.goto('/')

        // close popups
        await homePage.closeCookiePopup()
        await homePage.closePromotionPopup()

        // open login popup
        await homePage.clickOnsignUpBtn()

        // login
        await Login.enterLoginDetails(
            UserDetails.loginEmailAdress,
            UserDetails.loginPassword
        )

        await Login.clickOnLoginBtn()
        await page.pause()
    })


    test('Rent Items', async ({ Navbar, collections, ProductPage }) => {
        // example action
        await Navbar.HoverOnClothing()
        await Navbar.clickrOnAllClothing()
        // await collections.closeOnboardingPopup1()
        // await collections.closeOnboardingPopup2()
        // await collections.clickOnProduct()
        // await ProductPage.selectsmallsize()
        // await page.waitForTimeout(10000)
    })


    test.afterEach(async ({ MyAccount }) => {

        // open my account sidebar
        await MyAccount.clickOnmyAccountBtn()

        // logout
        await MyAccount.clickOnLogoutBtn()

    })

})

