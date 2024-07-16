import { Page, Locator } from "@playwright/test";

export default class MainPage {
    private readonly page: Page;
    private readonly DropdownFieldOrigin: Locator;
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


    constructor(page: Page){
        this.page = page;
        this.DropdownFieldOrigin = page
            .getByTestId('campo-dropdown-origem')
            .getByLabel('Origin');

        this.btnOneWay = page.getByTestId('botao-somente-ida');
        this.btnModalPassengers = page.getByTestId('abrir-modal-passageiros');
        this.btnAddAdult = page.getByTestId('selector-passageiro-adultos');   
        this.btnAddKids = page.getByTestId('seletor-passageiro-criancas')
        this.btnAddBaby = page.getByTestId('seletor-passageiro-bebes')
        this.btnCloseModalPassengers = page.getByTestId('fechar-modal-passageiros');
        this.btnOriginState = page.getByTestId('campo-dropdown-origem');
        this.btnDestinationState = page.getByTestId('campo-dropdown-destino');
        this.btnSearchTickets = page.getByTestId('botao-buscar-passagem');
        this.fieldOriginState = page.getByTestId('campo-dropdown-origem');
        this.fieldDestinationState = page.getByTestId('campo-dropdown-estado');
        this.fieldDepartureDay = page.getByTestId('campo-data-ida');

    }        

    async visit(){
        await this.page.goto('/')
    }
}