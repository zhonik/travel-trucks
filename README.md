# 🚐 Travel Tracks

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Travel Tracks** is a web application for renting campers in Ukraine. Users can browse available campers, view details, and make online bookings.

---

## 📸 Screenshots

**Home Page**  
![Home Page](/public/screenshots/Screenshot_HomePage.webp)

**Catalog Page**  
![Catalog Page](/public/screenshots/Screenshot_CatalogPage.webp)

**Camper Details Page**  
![Camper Details](/public/screenshots/Screenshot_CatalogDetailsPage.webp)

---

## ⚡ Features

- **Home Page**: full-screen camper image with a **View now** button → redirects to Catalog.
- **Catalog Page**: list of campers with filters; **Show more** button → Camper Details.
- **Camper Details Page**:
  - full information and photos of the camper;
  - **Features** and **Reviews** sections (Reviews open on click);
  - booking form: name, email, date range, and comment.

---

## 🛠 Technologies

- **Frontend**: React + Vite  
- **State management**: Redux + Redux Persist  
- **Routing**: React Router  
- **HTTP requests**: Axios  
- **Styling**: CSS Modules

---

## 🗂 Project Structure

public/ # Images and other resources
src/
├─ components/ # React components
├─ helpers/ # Support functions
├─ pages/ # Pages (HomePage, CatalogPage, CamperDetailsPage, NotFoundPage)
├─ redux/ # Redux store and slices
├─ services/ # API settings
├─ App.jsx # Main component
└─ main.jsx  # Entry point

---

## 🚀 Running Locally

1. Clone the repository:

```bash
git clone https://github.com/zhonik/travel-trucks.git
```

2.	Install dependencies:

```bash
npm install
```

3.	Start the development server:

```bash
npm run dev
```

4.	Open the application in your browser:

http://localhost:5173

---

## 💡 Implementation Highlights
•	Reusable Components: All major UI parts (buttons, cards, filters) are reusable for easier scalability.
•	Redux State Management: Persisted Redux store to save user preferences.
•	Dynamic Routing: React Router v6 with nested routes for Camper Details and Reviews.
•	Booking Form Validation: User inputs validated before submission.

---
	
## 🔮 Future Improvements
•	Add user authentication for saved bookings and personal profiles.
•	Implement backend integration for live camper availability and booking confirmations.
•	Enhance reviews system with ratings and image uploads.
•	Add advanced filters (price range, amenities).
•	Include payment gateway integration for seamless online booking.

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/zhonik/travel-trucks/blob/main/LICENSE).

---

## 📬 Contact

•	Email: zhonik92@gmail.com
•	GitHub: github.com/zhonik
