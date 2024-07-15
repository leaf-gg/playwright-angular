import test, { expect } from "@playwright/test";

test.describe("Initial page", () => {
    test("should visit homepage", async ({page}) => {
        await page.goto("/"); // action
        await expect(page).toHaveTitle("Jornada Milhas"); // assertion
     
        const titlePromo = page.getByTestId('titulo-promocoes');
        const titleDepo = page.getByTestId('titulo-depoimentos');
        
        await expect(titlePromo).toBeVisible();
        await expect(titleDepo).toBeVisible();

        // const titlePassage = page.getByTestId('titulo-passagens');
        // await expect(titlePassage).toBeVisible();

        const titlePassage = page.getByRole('heading', { name: 'Passagens'});
        await expect(titlePassage).toBeVisible();

    })
})