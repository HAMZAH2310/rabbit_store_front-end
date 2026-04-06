import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/features/books/api";
import { Loader2, AlertCircle } from "lucide-react";

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image_url: string;
}

// Reusable individual Card component
export function BookCard({ book }: { book: Book }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(addToCart({
            id: book.id,
            name: book.title,
            price: book.price,
            quantity: 1,
            image: book.image_url || ""
        }));
    };

    return (
        <div
            className="group bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer w-full min-w-[280px]"
            onClick={() => navigate(`/books/${book.id}`)}
        >
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-slate-100">
                <img
                    src={book.image_url || "https://via.placeholder.com/150"}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-orange-600 text-white text-[10px] font-black rounded-full shadow-lg shadow-orange-600/30 tracking-wider font-sans">
                    HOT
                </div>
            </div>

            <div className="mt-5 space-y-2">
                <h3 className="font-extrabold text-slate-800 line-clamp-1 group-hover:text-orange-600 transition-colors text-lg">
                    {book.title}
                </h3>
                <p className="text-sm text-slate-500 font-semibold tracking-wide">
                    by <span className="text-slate-700">{book.author}</span>
                </p>
            </div>

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

// Main List component with TanStack Query
export default function BookList({ layout = "grid" }: { layout?: "grid" | "carousel" }) {
    const { data: books, isLoading, error } = useQuery<Book[]>({
        queryKey: ["books"],
        queryFn: getBooks,
    });

    if (isLoading) {
        return (
            <div className={`gap-6 ${layout === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "flex overflow-x-auto pb-8 no-scrollbar"}`}>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`${layout === "grid" ? "" : "min-w-[280px]"} h-[420px] bg-white border border-slate-100 rounded-3xl animate-pulse flex flex-col p-5 space-y-4`}>
                        <div className="w-full h-2/3 bg-slate-100 rounded-2xl flex items-center justify-center"><Loader2 className="animate-spin text-slate-300" /></div>
                        <div className="h-6 w-3/4 bg-slate-100 rounded-full" />
                        <div className="h-4 w-1/2 bg-slate-100 rounded-full mt-auto" />
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-red-50 rounded-[2.5rem] border border-red-100 text-red-600 space-y-4 shadow-sm h-full">
                <AlertCircle size={48} className="animate-bounce" />
                <div className="text-center">
                    <h3 className="text-xl font-bold">Error Loading Collection</h3>
                    <p className="font-medium opacity-80">Make sure your backend is running at http://localhost:5000</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`gap-6 ${layout === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "flex overflow-x-auto pb-8 no-scrollbar h-full"}`}>
            {books?.map((book) => (
                <div key={book.id} className={`${layout === "grid" ? "" : "flex-shrink-0 min-w-[280px]"}`}>
                    <BookCard book={book} />
                </div>
            ))}
        </div>
    );
}
