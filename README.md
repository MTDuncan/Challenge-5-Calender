# Dynamic Calendar App

## Description

This is a simple calendar app for scheduling your work day. The app is powered by HTML and CSS, and uses jQuery and day.js for dynamic functionality.

## Features

* Displays the current date and time at the top of the calendar.
* Generates time blocks for standard business hours (9AM to 5PM).
* Allows users to enter and save events for each time block.
* Color-codes the time blocks based on whether they are in the past, present, or future.

## User Story

As an employee with a busy schedule, I want to add important events to a daily planner so that I can manage my time effectively.

## Acceptance Criteria

Given I am using a daily planner to create a schedule, when I open the planner:

* The current day is displayed at the top of the calendar.
* When I scroll down:
  * I am presented with time blocks for standard business hours.
* When I view the time blocks for that day:
  * Each time block is color-coded to indicate whether it is in the past, present, or future.
* When I click into a time block:
  * I can enter an event.
* When I click the save button for that time block:
  * The text for that event is saved in local storage.
* When I refresh the page:
  * The saved events persist.

## Usage

To use the app, simply open the `index.html` file in your web browser. The app will automatically display the current date and time, and generate time blocks for the standard business hours.

To enter and save events, simply click on the text area for the desired time block, enter your event, and click the "save" button. Your event will be saved to local storage and will remain on the calendar until you delete it.

The time blocks will be color-coded based on whether they are in the past, present, or future, making it easy to see at a glance which events are coming up.

## Dependencies

The app requires the following dependencies:

* jQuery v3.4.1
* day.js v1.11.3

Both of these dependencies are included in the scripts directory and are automatically loaded when you open the app in your web browser.

## Acknowledgments

This app was created as a project for a web development course, and was inspired by similar calendar apps found online.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
