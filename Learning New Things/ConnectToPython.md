# Connecting Front End, Back End (Express.js), and Python Script

## Overview
This document outlines the key concepts in setting up a web application where the front end interacts with an Express.js back end, which in turn communicates with a Python script.

## Front End
- **Responsibilities**: The front end is responsible for presenting the user interface and handling user inputs.
- **Implementation**: It is typically implemented using HTML, CSS, and JavaScript. In this scenario, it collects user inputs and makes HTTP requests to the back end.
- **Key Interactions**:
  - Sends requests to the back end (Express.js server) using JavaScript's `fetch` API.
  - Receives and processes responses from the back end.

## Back End (Express.js)
- **Framework Used**: Express.js, a web application framework for Node.js.
- **Routing**:
  - Routes define URL endpoints and logic to process requests.
  - Example: `app.use("/calculator", calculatorRoutes);`
- **Controllers**:
  - Handle the logic for each route.
  - Example: `calculatorController.js` handles the calculation logic.
- **Interaction with Python**:
  - Uses the `child_process` module to spawn Python scripts.
  - Example: `spawn('python', [scriptPath, num1, num2])` in `calculatorController.js`.

## Python Script
- **Purpose**: Performs specific backend tasks or calculations.
- **Execution**: Invoked by the back end using Node.js's `child_process` module.
- **Communication**: Receives input from the back end and sends output back to be relayed to the front end.
- **Example**: A script that takes command-line arguments to perform a calculation and prints the result.

## Data Flow
1. **User Interaction**: User inputs data on the front-end interface.
2. **Request to Back End**: The front end sends an HTTP request to the Express.js server with the input data.
3. **Server Processing**: The Express.js server processes the request, invoking the Python script with the necessary parameters.
4. **Python Script Execution**: The Python script performs its task and returns the result.
5. **Response to Front End**: The back end sends the Python script's output back to the front end.
6. **Display Result**: The front end displays the result to the user.
