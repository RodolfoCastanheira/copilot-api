import { countTokens } from "gpt-tokenizer/model/gpt-4o"

import type { Message } from "~/services/copilot/create-chat-completions"

/**
 * Count tokens for a list of chat messages following OpenAI's guidelines.
 * See https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb
 */
export const getTokenCount = (messages: Array<Message>) => countTokens(messages)
