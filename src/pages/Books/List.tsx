import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
}

export default function BookCard({ book }: { book: Book }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(addToCart({
            id: book.id,
            name: book.title,
            price: book.price,
            quantity: 1,
            image: book.image || ""
        }));
    };

    return (
        <div
            className="group bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer w-full min-w-[280px]"
            onClick={() => navigate(`/books/${book.id}`)}
        >
            {/* Cover with Overlay */}
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-slate-100">
                <img
                    src={book.image || "https://via.placeholder.com/150"}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-orange-600 text-white text-[10px] font-black rounded-full shadow-lg shadow-orange-600/30 tracking-wider">
                    HOT
                </div>
            </div>

            {/* Info */}
            <div className="mt-5 space-y-2">
                <h3 className="font-extrabold text-slate-800 line-clamp-1 group-hover:text-orange-600 transition-colors text-lg">
                    {book.title}
                </h3>
                <p className="text-sm text-slate-500 font-semibold tracking-wide">
                    by <span className="text-slate-700">{book.author}</span>
                </p>
            </div>

            {/* Bottom Section */}
            <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between">
                <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Price</p>
                    <p className="font-black text-xl text-orange-600">
                        Rp {book.price.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>

            <button
                className="mt-6 w-full bg-slate-900 group-hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-slate-900/10 group-hover:shadow-orange-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                onClick={handleAddToCart}
            >
                <span>Add to Cart</span>
            </button>
        </div>
    );
}