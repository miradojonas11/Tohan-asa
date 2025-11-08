import google.generativeai as genai

# Remplace ici avec ta nouvelle clé
genai.configure(api_key="AIzaSyA3G4mYrkeVNjLqLWILrZGptqQ0FQQQTCs")

model = genai.GenerativeModel('models/gemini-1.5-flash')
response = model.generate_content("Bonjour ! Que peux-tu faire ?")
print(response.candidates[0].content.parts[0].text)
