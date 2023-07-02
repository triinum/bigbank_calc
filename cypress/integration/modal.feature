Feature: Loan modal


  @TEST_2 @API
  Scenario Outline: UI verifications
    Given User has opened Bigbank main page
    Then User navigates to loan modal
    When User inputs '<amount>' as loan amount
    Then User inputs '<months>' as duration of loan period
    Then Monthly amount is '120' EUR
    And User presses Jätka button

    Examples: 
      | amount               | months                  |
      | 900000               | 23                      |
      | 90                   | 6000                    |


