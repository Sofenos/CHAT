document.addEventListener("DOMContentLoaded", function () {
    const generateForm = document.getElementById("generate-form");
    const generatedContent = document.getElementById("generated-content");

    generateForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const topicInput = document.getElementById("topic").value;

        try {
            const response = await fetch("/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ topic: topicInput }),
            });

            const data = await response.json();
            generatedContent.innerText = data.generated_content;
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
console.log("Topic input:", topicInput);

