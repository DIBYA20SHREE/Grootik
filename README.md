 **GenAI Text-to-Image Backend with FastAPI, LangChain, and OpenAI**:

---

###  Grootik GenAI Image Generator (Backend)

This is the backend of a GenAI-powered text-to-image generator using **FastAPI**, **LangChain (GPT-4)**, and **OpenAI DALL·E 3 API**. It takes user prompts, refines them using GPT-4, and generates detailed images with DALL·E.

---

###  Features

-  Refines raw prompts using **LangChain + GPT-4**
-  Generates high-quality images via **OpenAI DALL·E 3**
-  FastAPI-powered REST API
-  Secure API key usage with `.env`

---

###  Technologies Used

- Python 3.10+
- FastAPI
- OpenAI API (DALL·E 3)
- LangChain (ChatOpenAI)
- python-dotenv
- Uvicorn

---

###  Setup & Run

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/grootikBackEnd.git
   cd grootikBackEnd
   ```

2. **Create a `.env` file** and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server**:
   ```bash
   uvicorn main:app --reload
   ```

---

###  API Endpoint

**POST** `/generate-image`

**Request Body**:
```json
{
  "prompt": "a white siamese cat flying through space"
}
```

**Response**:
```json
{
  "imageUrl": "https://image-link-generated-by-dalle3"
}
```

---

###  Todo

- [ ] Add input validation
- [ ] Add logging and error handling
- [ ] Dockerize the backend
- [ ] Frontend integration

---




