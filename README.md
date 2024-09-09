# SMS Notification Service

This project allows you to send bulk SMS messages using the Eskiz.uz SMS API.

## Prerequisites

Make sure you have the following installed:
- Node.js
- NPM (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://your-repo-link.git
cd your-repo-directory
```

2. Install required dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:
```bash
ESKIZ_UZ_EMAIL=your_eskiz_email
ESKIZ_UZ_PASSWORD=your_eskiz_password
```
## Usage

To send SMS messages:

1. Open `index.js` (or the file where the code resides).
2. Add the phone numbers to the `numbers` array in the `sendSms` function.
3. Modify the `message` variable with the message you want to send.
4. Run the script:

```bash
node index.js
```
The script will send the SMS messages to the specified numbers and log the response or errors to the console.

# Functions Breakdown
### `getSMSProviderToken`

This function handles obtaining the JWT token for authenticating with the Eskiz.uz SMS API. It checks if a token is already present and valid, or requests a new one using your email and password.

### `sendMessage`
This function sends an SMS message to a given phone number. It formats the phone number (adds the Uzbekistan country code) and submits the message via the Eskiz API.

### `sendSms`
This function loops through a list of phone numbers and sends each one the same SMS message using the `sendMessage` function.

# Dependencies
`axios`: HTTP client to make API requests.
`form-data`: Library to handle form data in API requests.
`dotenv`: To load environment variables from the .env file.

# Error Handling
If the script encounters an error while sending the SMS, it will log the error to the console.

