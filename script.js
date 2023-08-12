document.addEventListener("DOMContentLoaded", function () {
    const generateForm = document.getElementById("generate-form");
    const generatedContent = document.getElementById("generated-content");

    generateForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const topicInput = document.getElementById("topic").value;
        console.log("Topic input:", topicInput);

        try {
            const response = await fetch("http://localhost:5000/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ topic: topicInput }),
            });
            
            console.log("Fetch URL:", "http://localhost:5000/generate");
            
            const data = await response.json();
            console.log("Response:", data);
            generatedContent.innerText = data.generated_content;
        } catch (error) {
            console.error("Error:", error);
        }
    });
});

