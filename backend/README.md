# Backend (Express + MongoDB)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root of `backend/` (see below).
3. Start the server:
   ```bash
   npm run dev
   ```
   (or `node src/server.js` for production)

## .env Example
```
PORT=3033
MONGO_URI=mongodb://localhost:27017/portfolio
```

## Endpoints
- `POST /api/cv/upload` (upload PDF)
- `GET /api/cv/download` (download PDF)
- `DELETE /api/cv/delete` (delete PDF)
- `GET /api/skills` (skills list)
- `GET /api/projects` (projects list)
- `GET /api/github?username=USERNAME` (GitHub history)

## CV Storage
- Uploaded CVs are stored in `backend/uploads/` as `resume.pdf`.

---

**Built with Express, MongoDB, and modern Node.js tooling.** 