import { Quote, AddQuote, EditQuote } from "./quote.entity"

export interface IQuoteRepo {
    add(addQuote: AddQuote): Promise<Quote>
    edit(editQuote: EditQuote): Promise<Quote>
    findAll(): Promise<Quote[]>
    findById(id: string): Promise<Quote>
    findByUserId(): Promise<Quote[]>
    remove(id: string): Promise<void>
}