import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function main(messageText) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: messageText }],
    model: "gpt-3.5-turbo",

  });

  return(completion.choices[0].message.content);
}

