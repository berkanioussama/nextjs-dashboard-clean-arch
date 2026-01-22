import { Quote } from "@/modules/quote/domain/quote.entity";
import QuoteCard from "@/modules/quote/presentation/components/quote-card";

const Quotes = ({quotes}: {quotes: Quote[]}) => {
    return (
        <section>
            <h3 className="text-3xl font-bold mb-4">Quotes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quotes.map((quote) => (
                    <QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </section>
    );
}
 
export default Quotes;