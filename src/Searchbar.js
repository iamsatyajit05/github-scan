export default function Searchbar({ searchUsername, onSearchChange, onSearchClick, isLoading }) {
    return (
        <section className="max-w-sm md:max-w-lg lg:max-w-3xl w-full mx-auto flex justify-between items-center gap-2">
            <input type="search" placeholder="Enter an address" id="input" className="w-full px-6 py-3 placeholder:text-[#00ff33ac] bg-transparent border-2 border-[#00ff33] focus:outline-none text-sm sm:text-base" value={searchUsername} onChange={onSearchChange} />
            <button type="submit" className="px-6 py-3 text-black bg-[#00ff33] hover:bg-[#00ff33bb] selection:text-[#00ff33] selection:bg-black border-2 border-transparent hover:border-transparent text-sm sm:text-base outline-none font-bold active:scale-95 transition-all duration-300" onClick={onSearchClick} isLoading={isLoading} disabled={isLoading}>
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </section>
    )
}