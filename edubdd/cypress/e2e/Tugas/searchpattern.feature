Feature:Search a content 

    Feature Description
    As a user
    I want to Search a content 
    Using search bar

    Scenario: Searching content
        Given I click search bar
        When I type bank And I click enter
        Then I see bank content
        