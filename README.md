# Article Hub - Frontend

Article Hub is a platform to **create, manage, and consume articles** as a service. The goal is to provide users with an easy-to-use system, featuring subscription plans, a public API, and AI tools to enhance content creation.

<img width="1901" height="858" alt="image" src="https://github.com/user-attachments/assets/404bf8d6-9b4d-48e4-8735-894f58e0a630" />

## Features

- **Authentication**
  - **Login**
    - [x] Login with email
    - [x] Login with Google
  - **Register**
    - [x] Register with Google
    - [ ] Register with email
    - [ ] Verify email
    - [x] Validation inputs
  - **Sessions**
    - [x] List (bug: multiple sessions are created)
    - [ ] Delete
  - [x] Logout
  - [x] Add multiple login methods (email & google simultaneously)
  - [ ] 2FA
- **Profile**
  - [x] Update avatar
  - [x] Update username (bug: when update username, the avatar is not rendered)
- **Workbenchs**
  - [x] List
  - [x] Create (only name & description)
  - [ ] Update
  - [x] Delete (no confirmation modal)
  - **Validations**
    - [x] Create
    - [ ] Update
- **Articles**
  - [x] List
  - [x] Create (only title, content, slug & summary)
  - [x] Update (only title, content, slug & summary)
  - [x] Delete (no confirmation modal)
  - **Validations**
    - [x] Create
    - [x] Update
- **Notifications**
  - [x] Realtime
  - [x] List
  - [x] Mark as read (all when open dropdown)
  - [x] Delete
  - [x] Create (when article is created, deleted or updated)
- **Admin Blog**
  - [ ] List
  - [ ] Create
  - [ ] Update
  - [ ] Delete
- **Subscriptions**
  - [x] List (price page)
  - [ ] Create
  - [ ] Update
  - [ ] Delete
  - [ ] Cancel
  - [ ] Suscribe
- **Routing**
  - [x] Admin guard
  - [x] User guard
  - [x] Public guard

## todo

- [x] form validations
- [ ] cuando se elimina un workspace no se actualiza el dom (global store)
- [x] cuando se entra al workspace deberia mostrar los posts de ese workspace y no todos
- [ ] cuando se hace update del nombre de usuario, se borra la imagen del dom

## Prerequisites

- Node.js ≥ 18
- npm or pnpm
- Google Cloud account for authentication

---

## How to Start

### 1. Clone the repository

```bash
cd your_folder

# https
git clone https://github.com/TomasSorgetti/blog-saas-front.git
# ssh
git clone git@github.com:TomasSorgetti/blog-saas-front.git

cd blog-saas-front

```

### 2. Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Google OAuth 2.0 API is enabled by default
4. Create credentials → OAuth Client ID
   - Type: Web application
   - Application name: Article Hub
   - Authorized origins: http://localhost:5173
   - Redirect URIs: http://localhost:5173 # if you use @react-oauth/google don't add this
5. Copy the Client ID into the .env file
6. The Client Secret is required for backend authentication
7. Add the script to the index.html file or use @react-oauth/google (need to change auth logic)

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

### Create environment file

```bash
# .env
VITE_API_URI=http://localhost
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

IMPORTANT: Variables must start with VITE\_ to be accessible in the frontend.

### Install dependencies & run the app

```bash
npm install
npm run dev
```

The app will be available at: http://localhost:5173

---
