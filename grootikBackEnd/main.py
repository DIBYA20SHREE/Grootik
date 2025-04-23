import os
import requests
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# Define the endpoint and headers
url = "https://api.openai.com/v1/images/generations"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

# Define the payload
data = {
    "model": "dall-e-3",
    "prompt": "a white siamese cat",
    "n": 1,
    "size": "1024x1024"
}

# Make the POST request
response = requests.post(url, headers=headers, json=data)

# Parse and print the response
if response.status_code == 200:
    image_url = response.json()['data'][0]['url']
    print("Generated Image URL:", image_url)
else:
    print("Error:", response.status_code)
    print(response.text)

