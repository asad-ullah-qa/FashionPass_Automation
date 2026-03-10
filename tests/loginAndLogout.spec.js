import { test } from '../fixtures/baseTest'
import { UserDetails } from '../Test-Data/Data'

test('User Login And Logout Flow', async ({ page, homePage , MyAccount , Login  }) => {

    // Open home Page , close promotional popup , open loginPoup
    await page.goto('/')
    await homePage.closeCookiePopup()
    await homePage.closePromotionPopup()
    await homePage.clickOnsignUpBtn()

    // User Login
    await Login.enterLoginDetails(
        UserDetails.loginEmailAdress,
        UserDetails.loginPassword
    )

    await Login.clickOnLoginBtn()

     // open My account side bar
    await MyAccount.clickOnmyAccountBtn()

    // logout user
    await MyAccount.clickOnLogoutBtn()
})

