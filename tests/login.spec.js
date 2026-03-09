import { test } from '../fixtures/baseTest'
import { UserDetails } from '../Test-Data/Data'

test('User Signup Flow', async ({ page, homePage, LoginPopup }) => {

    // Open home Page , close promotional popup , open loginPoup
    await page.goto('/')
    await homePage.closeCookiePopup()
    await homePage.closePromotionPopup()
    await homePage.clickOnsignUpBtn()

    // User Login
    await LoginPopup.enterLoginDetails(
        UserDetails.loginEmailAdress,
        UserDetails.loginPassword
    )

    await LoginPopup.clickOnLoginBtn()
})

