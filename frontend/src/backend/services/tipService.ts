import OpenAI from "openai";
import {Tips} from "@/types/types";

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '', // Ensure API key is set
});

/**
 * Generate AI-powered sales tips based on processed data.
 * @param processedData Processed data object.
 * @returns Array of actionable tips with title, description, and data reference.
 */
export const generateTips = async (
    processedData: any
): Promise<Tips[]> => {
    if (!processedData || Object.keys(processedData).length === 0) {
        throw new Error("Processed data is invalid or empty.");
    }

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

### Requirements:
- Each tip must include:
  - A **title** summarizing the insight.
  - A **description** with clear, actionable advice.
  - A **data** reference tied to the input data.

- Output the response **strictly as a valid JSON array** in the following format:
[
  { "title": "Tip Title", "description": "Tip Description", "data": "Data Reference" }
]
`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful assistant specializing in sales strategy and data-driven insights." },
                { role: "user", content: prompt },
            ],
            max_tokens: 2000, // Adjust for larger responses
            temperature: 0.7, // Balance creativity and precision
        });

        const rawText = response.choices[0]?.message?.content;

        if (!rawText) {
            throw new Error("OpenAI response is empty or invalid.");
        }

        const tips = JSON.parse(rawText.trim());

        if (!Array.isArray(tips)) {
            throw new Error("Response is not a valid JSON array.");
        }

        return tips.map((tip: any) => ({
            title: tip.title,
            description: tip.description,
            data: tip.data,
        }));
    } catch (error) {
        console.error("Error generating AI tips:", error);
        throw new Error("Failed to generate tips. Please try again later.");
    }
};

export default generateTips;
