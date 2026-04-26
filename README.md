# 📌 Quotes-public-api-web-server

A simple Node.js + Express web server that provides quote data through API endpoints.

This project was my attempt to build a **better understanding of APIs, API calls, routing, and backend data handling**.

---

# 🚀 What this project does

This API serves quotes from a dataset and allows users to:

- Get random quotes  
- Filter quotes by author  
- Filter quotes by category  
- Combine filters for more specific results  

---

# 📡 API Endpoints

## 🎲 Get a random quote


GET http://localhost:3000/

Returns a random quote from the dataset.

---

## 👤 Get all authors

GET http://localhost:3000/authors


Returns a list of all authors available in the dataset.

---

## 🏷️ Get all categories

GET http://localhost:3000/categorys


Returns all available quote categories.

---

## 🔍 Search quotes by category

GET http://localhost:3000/querry/search?category=barack-obama


Returns a random quote related to the given category.

---

## 🔍 Search quotes by author

GET http://localhost:3000/querry/search?author=Lady%20Gaga


Returns a random quote from the specified author.

---

## 🎯 Combined search (author + category)

GET http://localhost:3000/querry/search?author=Lady%20Gaga&category=love


Returns a random quote filtered by both author and category.

---

# 📊 Dataset Setup (IMPORTANT)

Due to GitHub file size limitations, the dataset is **not included in this repository**.

### ⚠️ You must manually download it:

📦 Dataset source:
https://www.kaggle.com/datasets/manann/quotes-500k

---

### 📁 Setup instructions

1. Download the dataset from Kaggle  
2. Extract the ZIP file  
3. Locate the CSV file  
4. Rename it to:


quotes.csv


5. Place it inside:


/quotes/quotes.csv


---

# 🧠 What I learned from this project

This project helped me understand:

- How REST APIs work  
- Express routing system  
- Handling large datasets in backend apps  
- Filtering and querying data dynamically  
- Working with CSV files in Node.js  
- Basic API architecture  

---

# ⚙️ Tech Stack

- Node.js  
- Express.js  
- CSV Parser  
- Axios  

---

# 💡 Future Improvements

Ideas to improve this project:

- Add pagination for large responses  
- Convert CSV → database (MongoDB / Supabase)  
- Add caching for faster responses  
- Deploy API publicly (Render / Railway)  
- Add API key authentication system  
- Add rate limiting to prevent abuse  
- Improve search (fuzzy matching / better filtering)  

---

# ⚠️ Notes

This project is for **learning purposes** and is not optimized for production-scale usage.

---

# ⭐ Support

If you like this project:
- Fork it  
- Improve it  
- Build your own version  

---

# 🧑‍💻 Author

Built as a learning project to understand APIs, backend development, and data ha
