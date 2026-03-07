import { test, expect } from '../fixtures/baseTest'
import { signUpData } from '../Test-Data/Data'

test('User Signup Flow', async ({ page, homePage, emailPage, profilePage, membershipPage }) => {

await page.goto('/')

await homePage.closePromotionPopup()
await homePage.clickSignInBtn()

await emailPage.enterEmail(signUpData.emailaddress)
await emailPage.clickGetStartedBtn()
await emailPage.waitForLoader()

await profilePage.createProfile(
signUpData.firstname,
signUpData.lastName,
signUpData.password,
signUpData.birthday
)

await profilePage.clickcreateProfilebtn()

await membershipPage.createMembership(
signUpData.fullName,
signUpData.cardNumber,
signUpData.exp_date,
signUpData.cvc,
signUpData.zip_code,
signUpData.phone_no
)

await membershipPage.clickacceptPolicyCheckbox()
await membershipPage.clickcreateMembershipbtn()

})