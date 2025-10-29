# FLEEK

## Purpose

A social media platform created as a portfolio project to demonstrate my skills in full-stack development.

---

## Tech Stack

- **Frontend:** React JS, React Router, React Hook Form, Yup, Axios
- **Backend:** Node JS, Express JS, Nodemailer, Pug Template Engine, Multer
- **Database:** MongoDB
- **Authentication:** JWT
- **Image Processing:** Sharp
- **Error Logs: ** Winston

---

## Features

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

## Backend Folder Structure

├── └──

├──controllers
├──cronJobs
├──error_handler
├──logs
├──middlewares
├──models
├──routes
├──uploads
├──utils
├──views

## Backend Architecture and Practices

The backend is built with **Express.js** and follows a modular architecture with clear separation of concerns — controllers, routes, middlewares, and utilities.

### Key Backend Highlights

- **Centralized Error Handling:**
  All errors are caught and processed through a global error handler for consistent responses and easier debugging.

- **Error Logging:**
  Implemented using **Winston** logging library. Errors are recorded with timestamps, stack traces, and request metadata.

- **File Uploads (Multer):**
  Efficient handling of profile and cover image uploads. Images are renamed dynamically with user IDs for uniqueness.

- **Image Compression (Sharp):**
  Uploaded images are automatically resized and converted to modern **WebP** format before storage, optimizing performance and bandwidth.

- **Static File Serving:**
  Uploaded images are served securely through Express’s static middleware.

- **Scalable Folder Structure:**
  The backend codebase is organized into distinct folders for controllers, routes, models, middlewares, and utilities, ensuring clarity and maintainability.

---

This architecture demonstrates production-level patterns such as **middleware layering, data validation, error resilience, and image optimization**, making it both educational and deployment-ready.
