Feature: Flipkart login

  Scenario: Open the login form
    Given I am on the Flipkart home page
    When I open the login page
    Then I should see the login form
