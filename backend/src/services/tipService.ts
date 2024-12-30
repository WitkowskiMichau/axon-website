import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is loaded via dotenv
});

/**
 * Generate AI-powered tips based on processed data.
 * @param processedData Processed data object.
 * @returns Array of actionable tips.
 */
const generateTips = async (processedData: any): Promise<string[]> => {
    if (!processedData || Object.keys(processedData).length === 0) {
        throw new Error("Processed data is invalid or empty.");
    }

    const prompt = `
    Analyze the following lead source performance data:
    ${JSON.stringify(processedData)}

    Provide three actionable growth tips tailored for sales teams:
    - Prioritize high-performing channels based on ROI and performance.
    - Suggest how to optimize spending on top-performing channels.
    - Identify seasonal trends or missed opportunities.
    `;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "developer", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: "Write a haiku about recursion in programming.",
                },
            ],
        });

        const rawText = response.choices[0]?.message?.content;
        if (!rawText) {
            throw new Error("OpenAI response is empty or invalid.");
        }

        // Parse and filter tips from the response
        return rawText
            .trim()
            .split("\n")
            .map((tip) => tip.trim())
            .filter((tip) => tip.length > 0);
    } catch (error) {
        // @ts-ignore
        console.error("Error generating AI tips:", error.message);
        throw new Error("Failed to generate AI tips. Please try again later.");
    }
};

export default generateTips;
