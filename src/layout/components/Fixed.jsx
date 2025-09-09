import Bookmark from "@/assets/Button_66/Bookmark.svg?react";
import Pencil from "@/assets/Button_66/Pencil.svg?react";

const BookmarkBtn = () => {
    return (
        <div className = "fixed bottom-[5%] right-[5%] flex flex-col">
            <button className="border-0 bg-transparent p-0 m-0">
                <Pencil className="cursor-pointer w-[4vw] min-w-[30px] h-auto" />
            </button>
            <button className="border-0 bg-transparent p-0 m-0">
                <Bookmark className="cursor-pointer w-[4vw] min-w-[30px] h-auto" />
            </button>
        </div>
    )
}

export default BookmarkBtn;