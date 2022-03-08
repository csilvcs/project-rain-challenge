Feature: Access Contact site

    Scenario: Access Rain

        Given I access site Rain
        And I click on Contact
        And fill in my name "Carlos"
        And fill my last "Silva"
        And fill my email "carlinhos.costa92@gmail.com"
        And fill my phone "1191018609"
        And fill my company "SA"
        When fill my job "Quality Assurance"
        Then I see messagem with success 
        # faile on return at api. Delay more than 3s for request

    Scenario: Validate message "Please complete this required field"

        Given I access site Rain
        And I click on Contact
        And fill in my name "Carlos"
        And fill my last "Silva"
        And fill my email "carlinhos.costa92@gmail.com"
        And fill my phone "1991018609"
        When fill my company "SA"
        Then I see messagem for complete


# Scenario: Validate value minimum

#     Given I access app rain
#     When select value minimum
#     Then the button disable with success

# Scenario: Validate value card number

#     Given I access app rain
#     And select value maximum
#     When I input value invalid card
#     Then I recive messagem card invalid with success

# Scenario: Validate value Expiration date

#     Given I access app rain
#     And select value
#     When I input value invalid card
#     Then I recive messagem card invalid with success

# Scenario: Validate value CVV

#     Given I access app rain
#     And select value
#     When I input value invalid cvv
#     Then I recive messagem card invalid with success

# Scenario: Validate button continue (expiration date)

#     Given I access app rain
#     And select value
#     And I input value card number
#     And I don't input value expiration date
#     When I click on button continue
#     Then the button disable with success

# Scenario: Validate button continue (card number)

#     Given I access app rain
#     And select value
#     And I don't input value card number
#     And I input value expiration date
#     When I click on button continue
#     Then the button disable with success

# Scenario: Validate button continue (cvv)

#     Given I access app rain
#     And select value
#     And I input value card number
#     And I input value expiration date
#     And I don't input value cvv
#     When I click on button continue
#     Then the button disable with success

# Scenario: Validate confirm Withdraw

#     Given I access app rain
#     When I input debit card
#     Then I confirm with success my money


