# Kalkulaatori testpaan

Riskid:


### UI ja API testid

Cypress, Cucumber ja Allure raportid

- UI: Bigbanga väikelaenu kalkulaatorile navigeerimine ja kalkulatsioonid
- API: basic testid veendumaks, et vastus sisadab korrektset sisu

### Testide jooksutamine
1. You can use Cypress GUI with `npm run cy:ui` käsuga
2. As well, you can start test suite with `yarn cy:headless` käsuga
3. Raportid tekivad `yarn cy:allure` ja nende avamine `yarn allure:open` käsuga. Raportid tekivad `allure-results` kausta.
