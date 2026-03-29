import {expect, test} from "@playwright/test";
import {LoginPage} from "../pages/login.page";

test.describe("Login", () => {
    test('[PC] Login Success', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(page).toHaveURL(/secure/); //untuk memastikan setelah login sampai di url /secure
    });

    test('[NC] Login Failed', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('test', 'test!');
        await expect(await loginPage.getMessageSuccess()).toContainText('Your username is invalid!');
    });
});