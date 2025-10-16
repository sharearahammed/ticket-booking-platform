import { ArrowRight, Calendar, Clock, Star } from "lucide-react";

// Ticket Card Component
const TicketCard = ({ ticket, onSelect }) => (
  <div
    onClick={onSelect}
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer group"
  >
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-40 flex items-center justify-center text-6xl overflow-hidden">
      {ticket.image}
    </div>

    <div className="p-4">
      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {ticket.title}
      </h3>

      <div className="flex items-center gap-2 mb-3">
        <Star size={16} className="text-amber-400 fill-amber-400" />
        <span className="text-sm font-semibold text-gray-700">{ticket.rating}</span>
      </div>

      {ticket.duration && (
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          <Clock size={14} />
          {ticket.duration}
        </div>
      )}

      {ticket.date && (
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          <Calendar size={14} />
          {ticket.date}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-3">
        <span className="text-2xl font-bold text-blue-600">${ticket.price}</span>
        <ArrowRight size={20} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

export default TicketCard