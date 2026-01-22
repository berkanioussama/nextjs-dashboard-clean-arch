import { Quote } from "@/modules/quote/domain/quote.entity";

const QuoteCard = ({quote}: {quote: Quote}) => {
    return (
        <div className="border border-gray-200 bg-sidebar rounded-xl p-4 text-center shadow-xs">
            <p className="text-2xl italic text-gray-500 mb-2">{quote.description}</p>
            <p className="font-bold">{quote.author}</p>
        </div>
    );
}
 
export default QuoteCard;