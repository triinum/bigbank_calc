Feature: Loan modal


  @TEST_2 @API
  Scenario Outline: verify UI elements and calculations
    Given User has opened Bigbank main page
    Then User navigates to loan modal
    When User inputs '<amount>' as loan amount
    Then User inputs '<months>' as duration of loan period
    Then Monthly amount is '700' EUR

    Examples: 
      | amount               | months                  |
      | 6000                 | 10                      |
      | 10000                | 9                       |


