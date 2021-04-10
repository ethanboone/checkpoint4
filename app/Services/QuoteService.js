import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js";

class QuoteService {
    async getQuote() {
        let res = await sandboxApi.get('Quotes')
        console.log(res.data)
        ProxyState.quote = new Quote(res.data)
    }
}

export const quoteService = new QuoteService();