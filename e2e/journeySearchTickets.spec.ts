import test from "@playwright/test";
import MainPage from "./page-objects/MainPage";

test.describe('Search tickets', () => {
    test('Should search tickets one way only', async ({page}) => {
        const mainPage = new MainPage(page);
        
        await mainPage.visit();
        await mainPage.defineOneWayOnly();
        await mainPage.OpenModalPassengers();
        await mainPage.defineAdultPassengers(3);
        await mainPage.defineKidsPassengers(1);
        await mainPage.defineBabyPassengers(1);
        await mainPage.CloseModalPassengers();
        await mainPage.defineOneWayandDestination('minas gerais', 'rio de janeiro');
        await mainPage.defineData(new Date);
        await mainPage.searchTickets();
        await mainPage.isShowingTicket('Somente ida', 'Minas Gerais', 'Rio de Janeiro')
    })
})