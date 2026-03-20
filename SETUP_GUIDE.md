# THRONET-LMS Setup Guide

## Deployment Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/thronetltd/THRONET-LMS.git
   cd THRONET-LMS
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```plaintext
     DATABASE_URL=your_database_url
     API_KEY=your_api_key
     PORT=3000
     ```
4. Run database migrations:
   ```bash
   npm run migrate
   ```
5. Start the application:
   ```bash
   npm start
   ```

## Configuration Steps
- Update the configuration files as necessary:
  - `config/default.json` for default settings.
  - `config/production.json` for production-specific settings.
- Ensure permissions are correctly set for the various services required by the application.

## Troubleshooting Guide
- **Application doesn't start:**
  - Check if all environment variables are set correctly in the `.env` file.
  - Ensure all required services are running.

- **Database connection errors:**
  - Verify the `DATABASE_URL` in the `.env` file.
  - Check if the database server is up and accessible.

- **API key issues:**
  - Make sure the API key is correctly set in the `.env` file.
  - Confirm the key has not expired or been revoked.

For further assistance, refer to the [GitHub Issues](https://github.com/thronetltd/THRONET-LMS/issues).