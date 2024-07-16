import { test } from "./page-objects/LoginPage";

test.describe("Login page", () => {
    test("should do login with valid e-mail and password.", async ({ loginPage }) => {    
        await loginPage.visit();
        await loginPage.doLogin('teste@teste.com', '123');
        await loginPage.loginSuccess();
    })
    test("Shouldn't do login with invalid e-mail", async ({loginPage}) => {         
        await loginPage.visit();
        await loginPage.doLogin('erradoteste@teste.com', '123');
        await loginPage.showingErrorMessage('Você não está autorizado a acessar este recurso');
    })
    
    test("Shouldn't do login with incorrect format e-mail", async ({loginPage}) => {     
        await loginPage.visit();
        await loginPage.checkEmail('testeteste.com')
        await loginPage.showingErrorMessage("E-mail inválido")

    })
    test("Shouldn't do login with empty fields", async ({loginPage}) => {  
        await loginPage.visit();
        await loginPage.checkEmptyFields('', '');
        await loginPage.showingErrorMessage("E-mail é obrigatório");
        await loginPage.showingErrorMessage("Senha é obrigatória");
    })

})
