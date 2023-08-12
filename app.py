from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key here
openai.api_key = "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"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    topic = request.form["topic"]
    
    # Call the OpenAI API to generate content
    response = openai.Completion.create(
        engine="davinci",  # You can experiment with different engines
        prompt=f"Write a blog post about {topic}",
        max_tokens=200
    )
    
    generated_content = response.choices[0].text.strip()
    
    return jsonify({"content": generated_content})

if __name__ == "__main__":
    app.run(debug=True)


def generate_blog_post(topic):
    prompt = f"Write a blog post about {topic}. Include key points and relevant information."

    response = openai.Completion.create(
        engine="text-davinci-003",  # Choose the appropriate GPT-3 engine
        prompt=prompt,
        max_tokens=500  # Adjust the max tokens as needed
    )

    generated_content = response.choices[0].text.strip()
    return generated_content
print("Received topic:", topic)

