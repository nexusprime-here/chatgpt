import { Configuration, OpenAIApi } from "openai";
import { MessageData } from "../screens/Chat";

const openAI = new OpenAIApi(
    new Configuration({
        apiKey: "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"
    })
)

class GPT_3 {
    #cache = '';

    injectContext(context: Array<MessageData>) {
        if(this.#cache.length > 0) {
            throw new Error('Context already injected');
        }
        
        this.#cache += context.map(m => `${m.author}: ${m.value}\n`);
        this.#cache += `gpt:`;

    }
    async sendResponse() {
        const response = await openAI.createCompletion({
            model: "text-davinci-003",
            prompt: this.#cache,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        let responseText = response.data.choices[0].text?.trimStart();
        
        this.sendMethod({ author: 'gpt', value: responseText } as MessageData);
    }

    constructor(
        private sendMethod: (...args: any[]) => any
    ) {}
}

export default GPT_3;