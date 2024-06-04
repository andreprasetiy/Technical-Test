# Technical Test Project at PT. Lautan Natural Krimerindo

![Lautan Natural Krimerindo Logo](https://lautan-natural-krimerindo.com/wp-content/uploads/2020/09/non-dairy-creamer-toll-manufacturing-lautan-natural-krimerindo-logo-lnk.png)

## Introduction

This is a technical test project using Cypress, a tool for end-to-end testing of web applications. This project is designed to help you understand and automatically test web applications at PT. Lautan Natural Krimerindo.

## Requirements

- Node.js (latest version recommended)
- npm or yarn
- Cypress

## Installation

1. **Clone the Repository**:

    ```sh
    git clone https://github.com/andreprasetiy/Technical-Test.git
    cd Technical-Test
    ```

2. **Install Dependencies**:

    Using npm:

    ```sh
    npm install
    ```

    Using yarn:

    ```sh
    yarn install
    ```

## Usage

1. **Running Cypress**:

    To open the Cypress Test Runner, use the command:

    ```sh
    npx cypress open
    ```

    To run all tests in headless mode, use the command:

    ```sh
    npx cypress run
    ```

2. **Running Individual Tests**:

    You can run individual tests by selecting them from the Cypress Test Runner.

## Project Structure

The basic structure of this project includes the following directories:

- `cypress`: Contains all Cypress tests and configuration.
  - `downloads`: Stores files downloaded during tests.
  - `e2e`: Contains end-to-end tests.
  - `fixtures`: Stores static files used as test inputs.
  - `support`: Contains support files like custom commands and additional configuration.

- `node_modules`: This directory contains all installed dependencies.

## Contributing

We welcome contributions from everyone. If you want to contribute, please follow these steps:

1. Fork this repository.
2. Create a new feature branch (`git checkout -b your-feature`).
3. Commit your changes (`git commit -am 'Add feature ABC'`).
4. Push to the branch (`git push o
