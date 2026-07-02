# Currency Converter

A lightweight, clean, and responsive web application that performs real-time currency conversion using live exchange rate data.

## Features

- **Live Conversion Rates:** Fetches up-to-the-minute exchange rates dynamically.
- **Dynamic Country Flags:** Automatically updates the flag icon corresponding to the selected currency.
- **Robust Validation:** Validates input amounts, defaulting to 1 in case of empty or invalid entries.
- **Error Handling:** Gracefully handles API downtime or network issues by displaying user-friendly messages.
- **Responsive Design:** A centered, mobile-friendly card layout built with modern CSS styling.

## Technologies Used

- **HTML5:** Semantic markup structure.
- **CSS3:** Responsive layout utilizing Flexbox, custom typography, and modern button animations.
- **JavaScript (ES6):** Asynchronous API integration via `fetch`, dynamic DOM updates, and custom event listeners.
- **External APIs & Libraries:**
  - [ExchangeRate-API](https://www.exchangerate-api.com/) (via `https://open.er-api.com/v6/latest/`) for currency exchange data.
  - [FlagsAPI](https://flagsapi.com/) for country flags.
  - [FontAwesome](https://fontawesome.com/) for UI icons.

## File Structure

```
├── index.html   # Main application window and form
├── style.css    # Layout and design definitions
├── app.js       # App logic, event listeners, and API integration
└── codes.js     # Currency-to-country mapping data dictionary
```

## How to Run

1. Clone or download this repository to your local machine.
2. Open `index.html` in any modern web browser.
3. Enter the desired amount, select your target currencies, and click **Get Exchange Rate** to perform the conversion.
