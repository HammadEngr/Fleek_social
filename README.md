# FLEEK

## Purpose

A minimal social media app created as a portfolio project to demonstrate my skills in full-stack development.

---

## Tech Stack

- **Frontend:** React JS, React Router, React Hook Form, Yup, Axios
- **Backend:** Node JS, Express JS, Nodemailer, Pug Template Engine, Multer
- **Database:** MongoDB
- **Authentication:** JWT
- **Image Processing:** Sharp
- **Error Logs:** Winston
- **Docker**

## Features

- **UI Features**

  - color mode (dark/light)
  - language (english/deutsch)

- **Operational Features**

  - **User Authentication**
    - Signup / Sign In
    - Password Recovery
  - **User Profile**
    - Posts
    - Feed
    - Settings
    - User Details
  - **Media Uploads**
    - Image Uploads (with compression and WebP format)
    - Video Uploads
  - **Post Creation**

---

## BACKEND

### Architecture and Practices

- Built with: **Express.js**
- Modular architecture
- separation of concerns — controllers, routes, middlewares, and utilities.

### Key Highlights

- **Centralized Error Handling:** for consistent responses and easier debugging.

- **Error Logging:** **Winston** logging library. Recorded with timestamps, stack traces, and request metadata.

- **File Uploads (Multer):** Images are renamed dynamically with user IDs for uniqueness.

- **Image Compression (Sharp):** Automatically resized and converted to **WebP** format before storage.

- **Static File Serving:**

- **Scalable Folder Structure:** Distinct folders for controllers, routes, models, middlewares, and utilities, ensuring clarity and maintainability.

### Data Modelling (MongoDB)

Only relationship details are presented here. For details of each model please check the individual model definitions in /models

- **User**
  - Posts (ObjectID(ref:Post))
  - UserDetails (ObjectID(ref:UserDetails))
- **Posts**
  - Author (ObjectID(ref:User))
- UserDetails
  - User (ObjectID(ref:User))

### Libraries

- **Encryption:** bcrypt
- **Tokens:** JWT
- **ODM:** Mongoose
- **FilesUpload:** Multer
- **Image Processing:** Sharp
- **Sending Emails:** Nodemailer
- **Template Engine:** Pug
- **Error Logs:** winston

### Folder Structure

- controllers
- cronJobs
- error_handler
- logs
- middlewares
- models
- routes
- uploads
- utils
- views

---

## FRONTEND

### Libraries

- **Forms:** React Hook Forms
- **Validation:** Yup
- **API:** AXIOS
- **Components:** antd
- **Icons:** lucide-react
- **Routing:** react-router 6

### Styling Approach

I have tried my best to make it scalable, easy to understand and reusable by maintaining separation of concerns.

- Ant Design for components
- css modules for custom styling
- globalStyles
  - colors.css
  - dimensions.css
  - colortheme.css
  - antd_modifications.css
- Custom reuseable components

### Contexts

- Theme context: used for themes switching
- User context: users frequently used information like id, name etc.

### Folder Structure

- pubic
- src

  - assets
  - components
  - config
  - contexts
  - globalStyles
  - Layout
  - pages
  - sharedComponents
  - ui
  - utils

- App.jsx
- App.module.css
- index.css
- main.jsx
- eslint.config.js
- index.html
- package-lock.json
- package.json
- README.md
- vite.config.js
- .gitignore
