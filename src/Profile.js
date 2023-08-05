export default function Profile({ showInfo, profilepicurl, name, id, followers, following, bio, repocount, repositories, handleSortChange }) {
    if (showInfo) {
        return (
            <section className="max-w-sm md:max-w-lg lg:max-w-3xl w-full mx-auto flex flex-col gap-6 justify-evenly sm:gap-7 xl:gap-4 mt-4 p-6 sm:p-10 border-2 border-[#00ff33]">
                <div className="flex gap-8 mb-2 sm:mb-0 relative">
                    <img className="w-20 h-20 sm:w-28 sm:h-28 rounded-full lg:absolute lg:left-0" src={profilepicurl} alt={`Profile of ${id}`} />
                    <div className="flex flex-col gap-2 w-full lg:ml-36">
                        <h2 className="text-base font-bold sm:text-2xl">{name}</h2>
                        <a href={`https://github.com/${id}`} target="_blank" rel="noopener noreferrer" className="underline text-sm sm:text-base">@{id}</a>
                        <div className="flex flex-col md:flex-row gap-2">
                            <p className="text-xs sm:text-sm"><span className="font-bold">{followers}</span> Followers</p>
                            <p className="text-xs sm:text-sm"><span className="font-bold">{following}</span> Following</p>
                        </div>
                    </div>
                </div>

                <div className={`${bio ? '' : 'hidden'} lg:ml-36`}>
                    <p className="mb-8 text-sm sm:text-base">{bio}</p>
                </div>

                <div className="pt-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-base font-bold sm:text-2xl">Repositories</h1>
                            <p className="text-sm md:text-base">{repocount} Repository</p>
                        </div>
                        <div>
                            <select className="w-full px-4 py-2 bg-[#00ff33] text-black focus:outline-none" onChange={handleSortChange}
                            >
                                <option value="" disabled className="text-black">Sort By</option>
                                <option value="stars" className="text-black">Stars</option>
                                <option value="forks" className="text-black">Forks</option>
                            </select>
                        </div>
                    </div>
                    <div className="repocards gap-4">
                        {repositories.map((repo) => (
                            <div key={repo.id} className="group block p-4 sm:p-6 hover:bg-[#00ff33] border-t-2 border-t-[#00ff33]">
                                <div className="group flex flex-col lg:flex-row lg:justify-between lg:items-center">
                                    <h2 className="text-xl font-semibold group-hover:text-black"><a href={`https://github.com/${id}/${repo.name}`}>{repo.name}</a></h2>
                                    <div className="flex flex-row gap-2">
                                        <p className="text-sm group-hover:text-black"><span className="font-bold group-hover:text-black">{repo.stars}</span> Stars</p>
                                        <span>•</span>
                                        <p className="text-sm group-hover:text-black"><span className="font-bold group-hover:text-black">{repo.forks}</span> Forks</p>
                                    </div>
                                </div>
                                <p className="my-2 text-sm sm:text-base group-hover:text-black">{repo.description || ''}</p>
                                <p className={`p-2 inline-block bg-[#00ff33] text-black group-hover:bg-black group-hover:text-[#00ff33] text-xs ${repo.language ? '' : 'hidden'}`}>{repo.language}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="max-w-sm md:max-w-lg lg:max-w-3xl w-full mx-auto mt-4 p-6 sm:p-10 border-2 border-[#00ff33]">
                <p className="text-center">Search someone's profile to see !magic</p>
            </section>
        )
    }
}