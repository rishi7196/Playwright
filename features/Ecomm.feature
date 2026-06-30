Feature: Ecommerce Validation

    Scenario: :Placing the Order
    Given a login to Ecommerce application with "rishi7196@gmail.com" and "rishi1234"    
    When Add "zara coat 3" to the cart
    Then  Verify "zara coat 3" is displayed in the cart
    When Enter valid details and place the Order
    Then  Verify order in present in the order history



