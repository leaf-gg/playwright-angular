import test from "@playwright/test";
import MainPage from "./page-objects/MainPage";

test.describe('Search tickets', () => {
    test('Should search tickets one way only', async ({page}) => {
        const mainPage = new MainPage(page);
        
        await mainPage.visit();
    })
})