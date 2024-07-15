import test from "@playwright/test";
import LoginPage from "./page-objects/LoginPage";

test.describe("Login page", () => {
    test("should do login with valid e-mail and password.", async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.visit();
    })
})