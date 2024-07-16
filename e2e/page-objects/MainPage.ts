import { Page, Locator, expect } from "@playwright/test";

export default class MainPage {
    private readonly page: Page;
    private readonly containerOrigin: Locator;
    private readonly containerDestination: Locator;
    private readonly btnOneWay: Locator;
    private readonly btnModalPassengers: Locator;
    private readonly btnAddAdult: Locator;
    private readonly btnAddKids: Locator;
    private readonly btnAddBaby: Locator;
    private readonly btnCloseModalPassengers: Locator;
    private readonly btnOriginState: Locator;
    private readonly btnDestinationState: Locator;
    private readonly btnSearchTickets: Locator;
    private readonly fieldOriginState: Locator;
    private readonly fieldDestinationState: Locator;
    private readonly fieldDepartureDay: Locator;  
    private readonly textWayBack: Locator;  
    private readonly btnBuy: Locator;

    constructor(page: Page){
        this.page = page;
      
        this.btnOneWay = page.getByTestId('botao-somente-ida');
        this.btnModalPassengers = page.getByTestId('abrir-modal-passageiros');
        this.btnAddAdult = page.getByTestId('seletor-passageiro-adultos').getByRole('button', { name: 'adição' });   
        this.btnAddKids = page.getByTestId('seletor-passageiro-criancas').getByRole('button', { name: 'adição' });
        this.btnAddBaby = page.getByTestId('seletor-passageiro-bebes').getByRole('button', { name: 'adição' });;
        this.btnCloseModalPassengers = page.getByTestId('fechar-modal-passageiros');
        this.btnOriginState = page.getByTestId('campo-dropdown-origem');
        this.btnDestinationState = page.getByTestId('campo-dropdown-destino');
        this.btnSearchTickets = page.getByTestId('botao-buscar-passagens');
        this.btnBuy = page.getByTestId('botao-comprar');
        this.fieldOriginState = page.getByTestId('campo-dropdown-origem').getByLabel('Origem');
        this.fieldDestinationState = page.getByTestId('campo-dropdown-destino').getByLabel('Destino');;
        this.fieldDepartureDay = page.getByTestId('campo-data-ida');
        this.textWayBack = page.getByTestId('texto-ida-volta');
        this.containerOrigin = page.getByTestId('container-origem');
        this.containerDestination = page.getByTestId('container-destino');

    }        

    async visit(){
        await this.page.goto('/')
    }

    async defineOneWayOnly(){
        await this.btnOneWay.click();
    }

    async OpenModalPassengers(){
        await this.btnModalPassengers.click();
    }

    async defineAdultPassengers(quantity: number){
        for (let i = 1; i < quantity; i++) {
           await this.btnAddAdult.click();            
        }
    }

    async defineKidsPassengers(quantity: number){
        for (let i = 0; i < quantity; i++) {
            await this.btnAddKids.click();            
         }
    }
    
    async defineBabyPassengers(quantity: number){
        for (let i = 0; i < quantity; i++) {
            await this.btnAddBaby.click();            
         }
    }

    async CloseModalPassengers(){
        await this.btnCloseModalPassengers.click();
    }

    async defineOneWayandDestination(origin: string, destination: string){
        await this.fieldOriginState.fill(origin);
        await this.fieldOriginState.press('Enter');

        await this.fieldDestinationState.fill(destination);
        await this.fieldDestinationState.press('Enter');
    }

    async defineData(data: Date){
        const formattedData = data.toLocaleString('en-US', { dateStyle: 'short'});
        await this.fieldDepartureDay.fill(formattedData);
    }

    async searchTickets(){
        await this.btnSearchTickets.click();
    }

    async isShowingTicket(
        typeWay: 'Somente ida' | 'Ida e volta',
        origin: string,
        destination: string
    ){
        await expect(this.textWayBack).toHaveText(typeWay);
        await expect(this.containerOrigin).toContainText(origin);
        await expect(this.containerDestination).toContainText(destination);
        await expect(this.btnBuy).toBeVisible();
    }
}