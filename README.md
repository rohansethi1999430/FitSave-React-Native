Based on the information provided in your resume, here is a README file for the FitSave Mobile App:

---

# FitSave Mobile App

## Overview
FitSave is a mobile application designed to help users find and compare gym membership prices from various websites. By leveraging advanced web crawling and data processing techniques, FitSave provides a consolidated and ranked list of gym memberships, making it easier for users to choose the best option based on their preferences and budget.

## Features
- **Web Crawling and Data Extraction**: Utilizes Selenium and JSoup to efficiently crawl and extract membership data from three different websites.
- **Fast and Efficient Processing**: The app processes and consolidates data within 20 seconds, providing users with quick access to the latest gym membership information.
- **Optimized Search and Ranking**: Implements advanced data structures like Tries for inverted indexing and Priority Queues to deliver ranked search results, improving performance by 30%.
- **Cross-Platform Compatibility**: Built with React Native, ensuring a seamless experience across both iOS and Android devices.

## Technologies Used
- **Backend**: Java, Spring Boot, Maven
- **Web Crawling**: JSoup, Selenium
- **Data Structures and Algorithms**: Utilized for efficient data processing and search ranking.
- **Frontend**: React Native for a responsive and user-friendly interface.

## Getting Started

### Prerequisites
- **Java Development Kit (JDK)**
- **Node.js and npm**
- **Maven** for Java dependency management
- **React Native CLI** for mobile app development

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rohansethi1999430/FitSave-Mobile-App.git
   cd FitSave-Mobile-App
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   mvn clean install
   ```

3. **Run the Backend Server**
   ```bash
   mvn spring-boot:run
   ```

4. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Run the Mobile App**
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Usage
After setting up the app and backend server, users can start exploring gym memberships by entering their location and preferred search criteria. The app will display a consolidated list of memberships along with prices, allowing users to easily compare and select the best option.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, please contact:

- **Rohan Sethi**  
  Email: [sethi83@uwindsor.ca](mailto:sethi83@uwindsor.ca)  
  LinkedIn: [linkedin.com/in/rohansethi](https://linkedin.com/in/rohansethi)  
  GitHub: [github.com/rohansethi1999430](https://github.com/rohansethi1999430)

---

Feel free to customize this README further based on your specific requirements or additional features of the FitSave Mobile App!
