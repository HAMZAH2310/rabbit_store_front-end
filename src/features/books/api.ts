export const getBooks = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/books`)

    if (!res.ok) {
        throw new Error("Failed to get books")
    }

    return res.json()
}