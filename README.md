
### UI ja API testid

Cypress, Cucumber ja Allure raportid

- UI: Bigbanga väikelaenu kalkulaatorile navigeerimine ja kalkulatsioonid
- API: basic testid veendumaks, et vastus sisadab korrektset sisu



### Testide jooksutamine
1. Cypress GUI läheb käima`npm run cy:ui` käsuga
2. Teste saab käivitada ka `yarn cy:headless` käsuga
3. Raportid tekivad `yarn cy:allure` ja nende avamine `yarn allure:open` käsuga. Raportid tekivad `allure-results` kausta.
