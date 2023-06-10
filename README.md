<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Natours</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#faq">Faq</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Natours is a full-stack web application built with Node.js, Express.js, and MongoDB. It provides users with the ability to register, login, navigate tours, review tours, book tours, and make payments. This documentation aims to guide you through the installation, configuration, and usage of the Natours application.

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

List of technologies and dependecies used in the project.

<!-- make them links directed to official website -->
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Stripe](https://stripe.com/)
* [Mailtrap](https://mailtrap.io/)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
* [helmet](https://www.npmjs.com/package/helmet)
* [hpp](https://www.npmjs.com/package/hpp)
* [xss-clean](https://www.npmjs.com/package/xss-clean)
* [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
* [nodemailer](https://nodemailer.com/about/)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [slugify](https://www.npmjs.com/package/slugify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Before proceeding with the installation, ensure that your system meets the following requirements:

* Node.js v14 or higher
* npm
* MongoDB

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a look on the [api documentation](###) to get a better understanding of the application.

2. Clone the repo
   ```sh
   git clone https://github.com/barakadanny/Natours-Nodejs-Express.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
5. Create a `config.env` file in the root directory and add the following environment variables:
   ```sh
    NODE_ENV=development
    PORT=3000
    DATABASE_PASSWORD= ***
    DATABASE= ***

    JWT_SECRET= ***
    JWT_EXPIRES_IN=90d
    JWT_COOKIE_EXPIRES_IN=90

    EMAIL_USERNAME= ***
    EMAIL_PASSWORD= ***
    EMAIL_HOST=sandbox.smtp.mailtrap.io
    EMAIL_PORT=25
   ```

5. Start the server
    for development:
   ```sh
   npm run dev
   ```
   or 
    for production:
    ```sh
    npm run prod
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Natours provides various functionalities/features to users through its backend API. Let's explore of them.

- Authentication
    - Register
    - Login
    - Logout
    - Forgot Password
    - Reset Password
    - Update Password
    - Update User Data
    - Delete User
- Tours
    - Get All Tours
    - Get Tour
    - Create Tour
    - Update Tour
    - Delete Tour
    - Get Tour Stats
    - Get Monthly Plan
    - Get Tours Within
    - Get Distances
- Bookings
    - Get All Bookings
    - Get Booking
    - Create Booking
    - Update Booking
    - Delete Booking
- Reviews
    - Get All Reviews
    - Get Review
    - Create Review
    - Update Review
    - Delete Review

_Note: The API documentation is available [here](###) for all the endpoints._

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Future Features

- [ ] Save tours to wishlist
- [ ] Offer discount coupons
- [ ] Add more payment methods
- [ ] Add more authentication methods (e.g. Google, Facebook, etc.)
- [ ] Add social media login options
- [ ] Add social media sharing options

Have a feature in mind? [open issues](https://github.com/barakadanny/Natours-Nodejs-Express/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

👨‍💻 **Baraka Danny**

- GitHub: [@barakadan](https://github.com/barakadanny)
- LinkedIn: [danny baraka](https://www.linkedin.com/in/danny-baraka-589156169/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ  <a name="faq"></a>

#### What is the purpose of this project?

This project is a part of my portfolio. It was created to showcase a full backend API built with Node.js, Express, MongoDB, and Mongoose.

#### Can I contribute to this project?

Yes, you can. Just fork the repository, make your changes and create a pull request. Your pull request will be reviewed and merged if it adds value to the project.

#### Who can I talk to if I have questions?

If you have any questions regarding this project, feel free to reach out to me at _barakadan421@gmail.com_

#### I found a bug/issue, what do I do?

Report it in the issues section and I will look into it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
