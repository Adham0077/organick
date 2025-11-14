export const Button = ({
    text,
    bgcolor = "bg-main",
    textcolor = "text-white",
    classname = ""
}) => {
    return (
        <button
            className={`flex items-center justify-center px-9 py-7 rounded-2xl font-semibold text-[20px] cursor-pointer ${bgcolor} ${textcolor} ${classname}`}
        >
            {text}
        </button>
    );
};