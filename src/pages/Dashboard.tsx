import Navbar from "@/components/ui/layout/Navbar";
import BookCard from "./Books/List";
import { mockBooks } from "@/features/books/mock";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Dashboard() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen bg-slate-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                {/* Hero / Welcome */}
                <div className="bg-orange-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-orange-600/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10 space-y-4 max-w-2xl">
                        <h1 className="text-5xl font-black leading-tight">
                            Find Your Next <br /> 
                            <span className="text-orange-200">Great Adventure.</span>
                        </h1>
                        <p className="text-orange-100 text-lg font-medium">
                            Browse our curated collection of books and hop into a new story today.
                        </p>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-black text-slate-800">Featured Books</h2>
                            <p className="text-slate-500 font-bold">Handpicked for you</p>
                        </div>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => scroll("left")}
                                className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:bg-orange-600 hover:text-white transition-all active:scale-95 group"
                            >
                                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => scroll("right")}
                                className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:bg-orange-600 hover:text-white transition-all active:scale-95 group"
                            >
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div 
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {mockBooks.map((book) => (
                            <div key={book.id} className="snap-center min-w-full sm:min-w-[40%] md:min-w-[30%] lg:min-w-[23%] flex-shrink-0">
                                <BookCard book={book} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
}