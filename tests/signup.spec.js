import { test } from '../fixtures/baseTest'
import { UserDetails } from '../Test-Data/Data'

test('User Signup Flow', async ({ page, homePage, emailPage, profilePage, membershipPage }) => {

    // Open home Page , close promotional popup , Navigate to Email Page
    await page.goto('/')
    await homePage.closeCookiePopup()
    await homePage.closePromotionPopup()
    await homePage.clickSignInBtn()

    // Enter Email for Creating new account
    await emailPage.enterEmail(UserDetails.emailaddress)
    await emailPage.clickGetStartedBtn()

    // Create profile Page
    await profilePage.createProfile(
        UserDetails.firstname,
        UserDetails.lastName,
        UserDetails.password,
        UserDetails.birthday
    )

    await profilePage.clickcreateProfilebtn()

    // Create Membership Page
    await membershipPage.createMembership(
        UserDetails.fullName,
        UserDetails.cardNumber,
        UserDetails.exp_date,
        UserDetails.cvc,
        UserDetails.zip_code,
        UserDetails.phone_no
    )

    await membershipPage.clickacceptPolicyCheckbox()
    await membershipPage.clickcreateMembershipbtn()

})


