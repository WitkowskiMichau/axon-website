import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Securely load the API key from .env
});

/**
 * Generate AI-powered sales tips based on processed data.
 * @param processedData Processed data object.
 * @returns Array of actionable tips with title and description.
 */
export const generateTips = async (
    processedData: {
        averageSourceValue: Record<string, number>;
        conversionEfficiency: Record<string, number>;
        revenueOverTime: { date: string; leadSource: string; revenue: number; description: string }[];
    }
): Promise<{ title: string; description: string, data: string }[]> => {
    if (!processedData || Object.keys(processedData).length === 0) {
        throw new Error("Processed data is invalid or empty.");
    }

    // Craft the prompt to request valid JSON output
    const prompt = `
You are a highly advanced AI trained to analyze sales performance data and provide actionable insights for sales professionals to maximize revenue and optimize their strategies.

### Data for Analysis:
- **Average Source Value (USD)**:
${JSON.stringify(processedData.averageSourceValue, null, 2)}
- **Conversion Efficiency (%)**:
${JSON.stringify(processedData.conversionEfficiency, null, 2)}
- **Revenue Over Time**:
${processedData.revenueOverTime.map(
        (item) =>
            `Date: ${item.date}, Source: ${item.leadSource}, Revenue: ${item.revenue}, Description: ${item.description}`
    ).join("\n")}

### Task:
Analyze the provided data and generate **14 to 16 tips** that offer actionable insights tailored for sales professionals. Ensure tips are concise, actionable, and data-driven. Organize tips into the following **categories**:
1. **High-Performing Sources**: Recommendations to scale successful channels.
2. **Underperforming Sources**: Strategies to improve low-performing channels.
3. **Trends and Opportunities**: Insights on seasonal patterns, emerging trends, or missed opportunities.
4. **Cost-Effectiveness Strategies**: Guidance on improving ROI or optimizing resource allocation.
5. highlighted the worst performing source search the web and propose improvements or suggest resigning from actions related to that data source

### Requirements:
- Each tip must include:
  - A **title** summarizing the insight and have a number mentioned in description if possible (4-8 words) .
  - A **description** with clear, actionable advice (max 2 sentences).
  - A **data** Every tip should be based on data strictly from the file dot should refer to data and show specific number which it refers to.
- Output the response **strictly as a valid JSON array** in the following format:
[
  { "title": "Tip Title", "description": "Tip Description", "data": "Data Reference" },
  { "title": "Tip Title", "description": "Tip Description", "data": "Data Reference" }
]
`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant specializing in sales strategy and data-driven insights."
                },
                {role: "user", content: prompt},
            ],
            max_tokens: 1000, // Adjust for expected response length
            temperature: 0.7, // Balance creativity and precision
        });

        const rawText = response.choices[0]?.message?.content;

        if (!rawText) {
            throw new Error("OpenAI response is empty or invalid.");
        }

        // Log the raw response for debugging
        console.log("Raw OpenAI response:", rawText);

        // Validate and parse the response
        try {
            const tips = JSON.parse(rawText.trim());

            if (!Array.isArray(tips)) {
                throw new Error("Response is not a valid JSON array.");
            }

            return tips.map((tip: any) => ({
                title: tip.title,
                description: tip.description,
                data: tip.data,
            }));
        } catch (parseError) {
            console.error("Error parsing OpenAI response:", parseError);
            console.error("Raw OpenAI response:", rawText);

            // Return fallback tips if parsing fails
            return [
                {
                    title: "Parsing Error",
                    description: "Failed to parse the AI response. Please try again later or contact support.",
                    data: ''
                },
            ];
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error generating AI tips:", error.message);
            return [
                {
                    title: "Error Generating Tips",
                    description: "There was an issue generating tips. Please try again later.",
                    data: ''
                },
            ];
        } else {
            console.error("Unexpected error:", error);
            return [
                {
                    title: "Unexpected Error",
                    description: "An unknown error occurred. Please contact support.",
                    data: ''
                },
            ];
        }
    }
};

export default generateTips;
