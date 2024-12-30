import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Securely load the API key from .env
});

/**
 * Generate AI-powered sales tips based on processed data.
 * @param processedData Processed data object.
 * @returns Array of actionable tips.
 */
export const generateTips = async (processedData: any): Promise<string[]> => {
    if (!processedData || Object.keys(processedData).length === 0) {
        throw new Error("Processed data is invalid or empty.");
    }

    // Craft the best possible prompt for OpenAI
    const prompt = `
You are a highly advanced AI trained to analyze business performance data and provide actionable insights that empower sales teams and decision-makers to maximize revenue and optimize strategies.

### Here is the performance data for analysis:
- **Average Source Value (USD)**:
${JSON.stringify(processedData.averageSourceValue, null, 2)}

- **Conversion Efficiency (%)**:
${JSON.stringify(processedData.conversionEfficiency, null, 2)}

- **Revenue Over Time**:
${processedData.revenueOverTime.map(
        (item: any) =>
            `Date: ${item.date}, Source: ${item.leadSource}, Revenue: ${item.revenue}, Description: ${item.description}`
    ).join("\n")}

### Task:
Using the provided data, generate actionable growth strategies tailored for sales teams. Focus on:
1. Identifying and prioritizing the highest-performing lead sources and recommending strategies to enhance their success further.
2. Suggesting specific improvements or optimizations for underperforming lead sources to maximize ROI.
3. Highlighting potential patterns, seasonal trends, or missed opportunities that could be leveraged for growth.
4. Identifying underutilized channels or emerging trends that may yield untapped potential.

### Requirements:
- Provide **three to five actionable tips** in the following format:
  - Tip 1: [A concise and specific recommendation.]
  - Tip 2: [A strategy or insight with actionable guidance.]
  - Tip 3: [An observation, trend, or opportunity.]
  - Tip 4 (optional): [A suggestion for leveraging untapped or emerging lead sources.]
  - Tip 5 (optional): [A recommendation for improving cost-effectiveness or efficiency.]

**Each tip must be:**
- Clear, actionable, and relevant to sales and business stakeholders.
- No more than two sentences.
- Based entirely on the data provided.
`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful assistant for sales optimization." },
                { role: "user", content: prompt },
            ],
            max_tokens: 500, // Increased token limit for more detailed responses
            temperature: 0.7, // Balance between creativity and focus
        });

        const rawText = response.choices[0]?.message?.content;

        if (!rawText) {
            throw new Error("OpenAI response is empty or invalid.");
        }

        // Extract tips from the response
        return rawText
            .split("\n")
            .map((tip) => tip.trim())
            .filter((tip) => tip.toLowerCase().startsWith("tip")); // Ensure proper formatting
    } catch (error) {
        console.error("Error generating AI tips:", error);
        throw new Error("Failed to generate AI tips. Please try again later.");
    }
};

export default generateTips;
