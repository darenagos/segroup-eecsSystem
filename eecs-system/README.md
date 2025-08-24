# EECS System: Extenuating Circumstances Submission Portal

This project is a university web application designed to manage Extenuating Circumstances (ECs) for students. Extenuating Circumstances are situations where students can apply for extensions or adjustments to deadlines due to unforeseen or difficult personal circumstances.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [User Roles & Flow](#user-roles--flow)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [License](#license)

## Project Overview

- **Students** can submit EC requests through the portal, providing details and supporting information for their case.
- **Admins** review submitted ECs and have the authority to approve or disapprove each request.
- The system also includes features for managing service status, FAQs, and support tickets.

## Features

- **Student EC Submission:**

  - Students can fill out and submit a form to request deadline extensions or adjustments, providing details and uploading supporting evidence.
  - Students can view the status of their submitted ECs and see outcomes once reviewed.

- **Admin Dashboard:**

  - Admins can view, filter, and manage all submitted ECs.
  - Admins can approve or disapprove EC requests, and update the status of each case.

- **Ticketing System:**

  - Students and users can raise support tickets for technical or process-related issues.
  - Technicians can view, respond to, and close tickets.

- **Service Status Monitoring:**

  - Displays the current status of key system services (e.g., IT Service Desk System, Library Systems) to all users.

- **FAQ Management:**

  - Frequently Asked Questions are available for students and staff.
  - Technicians can update and manage FAQ content.

- **User-Specific Homepages and Navigation:**
  - Different dashboards and navigation menus for students, admins, and technicians, tailored to their roles and permissions.

## User Roles & Flow

- **Students:**
  - Log in to the portal, submit ECs, view their EC history and outcomes, and raise tickets.
- **Admins:**
  - Access the admin dashboard to review and process ECs.
- **Technicians:**
  - Update service statuses, and manage FAQs and tickets.

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

<!-- Student View screenshots -->

![Student Homepage](images/Screenshot%202025-08-24%20102148.png)
![EC Submission Form](images/Screenshot%202025-08-24%20101659.png)
![View Pending ECs](images/Screenshot%202025-08-24%20101815.png)
![Service Status Page](images/Screenshot%202025-08-24%20101935.png)
![FAQ Page](images/Screenshot%202025-08-24%20102009.png)

<!-- Admin View screenshots -->

![Admin Homepage](images/Screenshot%202025-08-24%20102045.png)
![ECs Management Page](images/Screenshot%202025-08-24%20102105.png)

<!-- Technician View screenshots -->

![Technician: Update FAQ](images/Screenshot%202025-08-24%20104027.png)
![Technician: Update Services](images/Screenshot%202025-08-24%20104053.png)

## License

This project is for educational purposes as part of a university assignment.
