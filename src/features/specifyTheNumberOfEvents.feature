Feature: Specify the number of events

Scenario: When a user hasn’t specified a number, 32 is the default number
Given that the user has not selected a number for the number of events shown
When the list of events is displayed
Then the number of event entries shown will be 32

Scenario: Users can change the number of events they want to see
Given the event data exists
When the user enters a number in the number of events text box
Then the event list will show that number of events
