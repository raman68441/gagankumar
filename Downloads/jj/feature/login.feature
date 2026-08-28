Feature: E-commerce Login Functionality

  As a registered customer
  I want to login to the e-commerce application
  So that I can access my account

  Background:
    Given I am on the e-commerce login page

  @smoke
  Scenario: Successful login with valid credentials
    When I enter valid username "standard_user"
    And I enter valid password "secret_sauce"
    And I click on the Login button
    Then I should be successfully logged into the application

  @negative
  Scenario: Login with invalid credentials
    When I enter valid username "standard_user"
    And I enter invalid password "wrong_password"
    And I click on the Login button
    Then I should see an invalid login error message