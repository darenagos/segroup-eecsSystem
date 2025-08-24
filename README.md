# EECS System: Extenuating Circumstances Submission Portal

This is a university project in which the brief was to design an application that manages Extenuating Circumstances (ECs) for students. Extenuating Circumstances are situations where students can apply for extensions or adjustments to deadlines due to unforeseen or difficult personal circumstances.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [License](#license)

## Tech Stack

- **Frontend:** React (JavaScript, JSX, CSS)
- **State Management:** Custom singleton managers and registries (object-oriented JavaScript)
- **Styling:** CSS modules
- **Package Management:** npm
- **Build Tool:** Create React App

## Project Overview

This system allows:

- **Students** to submit EC requests through the portal, providing details and supporting evidence, view the status and outcomes of their ECs, and raise support tickets for technical issues.
- **Admins** to review, filter, and manage all submitted ECs, approve or disapprove requests and update their status.
- **Technicians** to view, respond to, and close tickets, update and manage FAQ content, and monitor the status of key system services (e.g., IT Service Desk System, Library Systems).

The application features user-specific homepages and navigation, with dashboards tailored to students, admins, and technicians.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Open a terminal and navigate to the `eecs-system` directory:
   ```sh
   cd eecs-system
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

Start the development server:

```sh
npm start
```

This will open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Folder Structure

- `src/Components/` - React components (user-specific and non-user-specific)
- `src/Managers/` - Logic for managing users, ECs, tickets, services, and FAQs
- `public/` - Static assets and HTML template

## Screenshots

Below are screenshots demonstrating various parts of the system:

Student View screenshots:

![Student Homepage](eecs-system/images/Screenshot%202025-08-24%20102148.png)
![EC Submission Form](eecs-system/images/Screenshot%202025-08-24%20101659.png)
![View Pending ECs](eecs-system/images/Screenshot%202025-08-24%20101815.png)
![Service Status Page](eecs-system/images/Screenshot%202025-08-24%20101935.png)
![FAQ Page](eecs-system/images/Screenshot%202025-08-24%20102009.png)

Admin View screenshots:

![Admin Homepage](eecs-system/images/Screenshot%202025-08-24%20102045.png)
![ECs Management Page](eecs-system/images/Screenshot%202025-08-24%20102105.png)

Technician View screenshots:

![Technician: Update FAQ](eecs-system/images/Screenshot%202025-08-24%20104027.png)
![Technician: Update Services](eecs-system/images/Screenshot%202025-08-24%20104053.png)

## License

This project is for educational purposes as part of a university assignment.
