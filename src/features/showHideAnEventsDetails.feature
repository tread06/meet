Feature: Show/hide an event’s details

Scenario: An event element is collapsed by default
Given that events have been listed
When each event is first shown
Then the event panel will hide additional details by being collapsed by default

Scenario: Users can expand an event to see its details
Given that events have been listed and the event is collapsed
When the user clicks on the “show details” button
Then the event should expand revealing the additional details

Scenario: Users can collapse an event to hide its details
Given that events have been listed and the event is expanded
When the user clicks on the “hide details” button
Then the event should collapse hiding the additional details