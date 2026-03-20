# Complete Setup Guide for THRONET-LMS

## Table of Contents
1. [Windows Setup](#windows-setup)
2. [macOS Setup](#macos-setup)
3. [Linux Setup](#linux-setup)
4. [Database Configuration](#database-configuration)
5. [Payment Gateway Setup](#payment-gateway-setup)
6. [Troubleshooting Guide](#troubleshooting-guide)

## Windows Setup
1. Download and install [Node.js](https://nodejs.org/en/download/) (LTS version).
2. Clone the repository:
   ```bash
   git clone https://github.com/thronetltd/THRONET-LMS.git
   ```
3. Navigate to the project directory:
   ```bash
   cd THRONET-LMS
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the application:
   ```bash
   npm start
   ```

## macOS Setup
1. Install [Homebrew](https://brew.sh/) if not already installed.
2. Use Homebrew to install Node.js:
   ```bash
   brew install node
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/thronetltd/THRONET-LMS.git
   ```
4. Navigate to the project directory:
   ```bash
   cd THRONET-LMS
   ```
5. Install dependencies:
   ```bash
   npm install
   ```
6. Start the application:
   ```bash
   npm start
   ```

## Linux Setup
1. Update your system:
   ```bash
   sudo apt update
   ```
2. Install Node.js (using the NodeSource repository for the latest LTS):
   ```bash
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   sudo apt install -y nodejs
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/thronetltd/THRONET-LMS.git
   ```
4. Navigate to the project directory:
   ```bash
   cd THRONET-LMS
   ```
5. Install dependencies:
   ```bash
   npm install
   ```
6. Start the application:
   ```bash
   npm start
   ```

## Database Configuration
1. Install your preferred database (MySQL, PostgreSQL, etc.).
2. Create a new database for THRONET-LMS:
   ```sql
   CREATE DATABASE thronet_lms;
   ```
3. Configure your database settings in the `.env` file:
   ```
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=thronet_lms
   ```
4. Run database migrations (if applicable):
   ```bash
   npm run migrate
   ```

## Payment Gateway Setup
1. Choose a payment gateway (Stripe, PayPal, etc.).
2. Create an account with your chosen payment gateway.
3. Obtain your API keys and configure them in the `.env` file:
   ```
   PAYMENT_GATEWAY_API_KEY=your_api_key
   PAYMENT_GATEWAY_SECRET_KEY=your_secret_key
   ```
4. Follow the integration instructions provided by the payment gateway in your application code.

## Troubleshooting Guide
- **Common Issues:**
  - If you encounter issues starting the application, ensure all dependencies are installed correctly.
  - Check the database connection settings if you face any database-related errors.
  - Review logs for any errors that can guide you to the issue.

- **Getting Help:**
  - Check the [GitHub Issues](https://github.com/thronetltd/THRONET-LMS/issues) page for similar problems.
  - Create a new issue if your problem is not resolved.