import Searchdefault from '@/assets/icon_24/Search_default.svg?react';

const Search = () => {
    return (
        <div className="flex justify-center items-center w-full max-w-[580px] h-[38px] border-b border-b-[#FA451E]">
            <Searchdefault />
            <input
                className="w-full border-none bg-[#F7F6F4] focus:outline-none placeholder-[#FA451E4D]"
                placeholder="요리나 재료를 검색하세요" />
        </div>
    )
}

export default Search;