const myClasses = {
    btn : 'px-3 py1 bg-blue-400 rounded-full shadow',
    input: '',
    header: {
        block: 'mx-auto p-5 bg-gray-800 w-full h-full'
    },
    searchBox: {
        mainBlock: ' w-full md:w-1/4 mx-auto flex relative items-center my-10',
        searchBtn: 'transition-all duration-500 absolute right-2 h-full my-auto text-2xl text-white hover:text-blue-500 ',
        input: 'text-white w-full transition-all duration-500 rounded-full outline-0 border p-2 bg-transparent border-2 border-white-2px focus:border-blue-500'
    },
    card: {
        main: 'shadow rounded w-60 mx-2 text-white overflow-hidden relative my-5',
        details: 'bg-gray-600 p-3 absolute w-full bottom-0',
        img: 'w-full h-80 object-cover',
        title: 'text-capitalize text-white text-md',
    },
    badge: {
        success: 'inline-block rounded-full text-sm text-white bg-green-500 font-medium w-20'
    }

}

export default myClasses;