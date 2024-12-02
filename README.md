# 🚲 Markus Bike Shop

**Markus Bike Shop** is a web application designed to manage a bicycle business. The only feature available is the bike configurator. This repository includes both the frontend and backend of the application.

---

## 📑 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Available Scripts](#available-scripts)
4. [How to Run](#how-to-run)
5. [Testing](#testing)
6. [How the Application Works](#how-the-application-works)
7. [Areas for Improvement](#areas-for-improvement)

---

## 🛠 Prerequisites

Before installing the project, make sure you have the following installed:

- Node.js >= 18
- npm >= 9 (bundled with Node.js)
- Git >= 2.0

---

## ⚙️ Installation

Clone this repository and follow the steps below to install both the frontend and backend.

### 1. Clone the Repository

```bash
git clone https://github.com/projectmarcobravo/markus-bike-shop.git
cd markus-bike-shop
```

### 2. Backend

```bash
cd server
npm install
```

### 3. Frontend

```bash
cd client
npm install
```

---

## Available Scripts

### Backend

| Script | Description                            |
| ------ | -------------------------------------- |
| `dev`  | Starts the server in development mode. |
| `test` | Runs Jest unit tests.                  |

### Frontend

| Script    | Description                              |
| --------- | ---------------------------------------- |
| `dev`     | Starts the development server with Vite. |
| `build`   | Builds the project for production.       |
| `lint`    | Runs ESLint to check code quality.       |
| `preview` | Serves the built application locally.    |

---

## 🚀 How to Run

### Backend

```bash
npm run dev
```

The server will start at http://localhost:3000

### Frontend

```bash
npm run dev
```

The server will start at http://localhost:5173

## 🧪 Testing

### Backend

To run the backend unit tests, use the following command:

```bash
cd server
npm run test
```

## ⚙️ How the Application Works

The **Markus Bike Shop** application is designed to help customers and salespeople configure custom-made bicycles, calculate the price, and ensure compatibility between various components. The goal is to provide a seamless, flexible, and dynamic system where users can select from different bike parts and instantly get a total price based on their configuration.

### Key Features

1. **Customizable Components**:

   - Users can configure a bike by selecting parts from the following categories:
     - **Frame Type**: Full-suspension, diamond, or step-through.
     - **Frame Finish**: Matte or shiny.
     - **Wheels**: Road wheels, mountain wheels, or fat bike wheels.
     - **Rim Color**: Red, black, or blue.
     - **Chain**: Single-speed or 8-speed.

2. **Dynamic Price Calculation**:

   - Each component has a base price, and the final price of the bike is calculated by adding up the prices of the selected parts.
     - Example base prices:
       - Full-suspension frame = 130 EUR
       - Shiny frame finish = 30 EUR
       - Road wheels = 80 EUR
       - Rim color (blue) = 20 EUR
       - Chain (single-speed) = 43 EUR
     - The final price in this example would be 130 + 30 + 80 + 20 + 43 = **303 EUR**.
   - Additionally, certain combinations of parts can affect the price. For example, a **shiny frame finish** may cost differently depending on the **frame type** selected.

3. **Price Modifiers**:

   - Some combinations of parts might incur additional costs:
     - For instance, if a **full-suspension frame** is selected with a **shiny frame finish**, an extra cost of 10 EUR is added.
     - If **fat bike wheels** are chosen with a **blue rim color**, an extra cost of 5 EUR is applied.

4. **Validation of Configuration**:
   - The system ensures that users cannot make incompatible selections. If an invalid combination is selected (e.g., mountain wheels without a full-suspension frame), the application will throw an error and display an appropriate message to inform the user.
   - The validation is performed dynamically based on the rules defined in the system.

### ✅ What the Application Can Do

#### **Can Do**:

- **Component Selection**: Users can select from various options for each part of the bike (frame, wheels, etc.).
- **Price Calculation**: Once the configuration is complete, the app calculates the total price based on the selected components.
- **Compatibility Checking**: The system ensures that all selected parts are compatible, preventing invalid combinations.
- **Dynamic Price Adjustment**: The price dynamically updates based on the chosen components and their compatibility with other parts.

## Areas for Improvement

1. **Add more test suites**: Currently, unit tests cover only parts of the backend. These should be expanded to include more layers.
2. **Add integration tests**: Ensure endpoints and interactions between the frontend and backend function correctly.
3. **Implement frontend tests**: Test React components and validate user interactions.
4. **Improve error handling**: Now the error handler is a basic error throwing error. Customize errors.
5. **Improving UX/UI**: The design is quite basic. There are many things that can be improved, from how we show errors, to the colors, to accessibility...
