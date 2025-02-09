# FeedLink - Food Redistribution & Waste Management System

<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
    </style>
</head>
<body>

## 📌 Problem Statement
Food wastage is a significant issue where surplus food from individuals and organizations goes unused while many people suffer from hunger. Additionally, leftover food waste could be repurposed for biofuel instead of being discarded.

## ✅ Solution Statement
FeedLink is a **food-link system** that connects donors with recipients, enabling food redistribution. It also allows organizations to sell leftover food waste to biofuel companies, reducing waste and promoting sustainability.

## ⚙️ Technical Details
### Technologies/Components Used:
- **Frontend:** React Native
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth
- **Maps & Geolocation:** Google Maps API
- **Hosting & Deployment:** AWS / Firebase Hosting
- **Recaptcha:** Google Recaptcha for bot protection

### Software Used:
- **VS Code** (Development)
- **Postman** (API Testing)
- **GitHub** (Version Control)
- **MongoDB Atlas** (Cloud Database)

## 🚀 How to Run
```bash
# Clone the repository
git clone https://github.com/your-repo/feedlink.git
cd feedlink

# Install dependencies
npm install

# Start the development server
npm start
```
> Ensure MongoDB and Firebase credentials are configured properly before running.

## 📜 Project Documentation
### 🏠 Home Page
- Displays **app name "FeedLink"** with a background **map**
- **Swipe up** to move to the **Login/Sign Up page**

### 🔑 Authentication
- **Login:** Requires **Username/Email & Password**
- **Sign Up:** Choose between:
  - **Individual Registration** (Username, Phone, Email, Address)
  - **Organization Registration** (Organization Name, Address, Contact, Official Email)
- **Enable Location Access** (Mandatory)
- **Complete reCAPTCHA & Continue**

### 🛠️ User Role Selection
- Choose **Donor** or **Recipient**
- Choose between:
  - **Donate/Receive Food**
  - **Sell Leftover Food for Biofuel** (Organizations Only)

### 🍛 Food Donation & Receiving Process
1. **Donor** selects **Vegetarian/Non-Vegetarian** and enters available food details.
2. **Recipient** selects preference and gets a **list of nearby donors** (sorted by proximity).
3. **Automated Matching System** pairs donor and recipient.
4. **Geolocation Tracking** displays real-time coordinates, distance, and ETA.
5. **Recipient confirms food received** to complete the process.

### 🔄 Selling Leftover Food for Biofuel
1. **Organizations only** can list leftover food waste.
2. Matched with **registered biofuel companies**.
3. **Automated Matching System** connects them for further processing.

## 👥 Team Contributions
| Member Name | Role | Contributions |
|------------|------|--------------|
| Member 1 | Frontend Developer | Designed UI & User Flow |
| Member 2 | Backend Developer | API Development & Database Management |
| Member 3 | DevOps Engineer | Deployment & Infrastructure Setup |
| Member 4 | Data Analyst | Optimized Matching Algorithm |

</body>
</html>
