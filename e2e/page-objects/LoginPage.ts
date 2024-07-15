import { Locator, Page, expect } from "@playwright/test";

export default class LoginPage {
    private readonly page: Page;
    private readonly btnLogin: Locator;
    private readonly inputPass: Locator;
    private readonly inputEmail: Locator;
    private readonly btnAccessAccount: Locator;

    constructor(page: Page){
        this.page = page
        this.btnLogin = page.getByTestId('botao-login');
        this.inputEmail = page.getByTestId('input-email');
        this.inputPass = page.getByTestId('input-senha');
        this.btnAccessAccount = page.getByTestId('botao-acessar-conta');
    }


    async visit(){
        await this.page.goto("/");
        await this.btnLogin.click();
        await expect(this.page).toHaveURL("/auth/login");
    }

    async doLogin(email: string, pass: string){
        await this.inputEmail.fill(email);
        await this.inputPass.fill(pass);
        await this.btnAccessAccount.click();
    }

    async checkEmail(email: string){
        await this.inputEmail.fill(email);
        await this.inputEmail.blur();
    }

    async checkEmptyFields(email: string, pass: string){
        await this.inputEmail.fill(email);
        await this.inputEmail.blur();
        await this.inputPass.fill(pass);
        await this.inputPass.blur();
    }

    async loginSuccess(){
        await expect(this.page).toHaveURL('/home');
    }

    async showingErrorMessage(message: string){
        const errorEl = this.page.getByText(message);
        await expect(errorEl).toBeVisible();
    }

}