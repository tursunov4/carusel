'use client'

const HeadingComponent = ({size, children, top='20'}: { size: 'h1' | 'h2' | 'h3', top?: '0' | '10' | '20', children: string }) => {

    const bg = 'orange-500'

    switch (size) {
        case "h1":
            return (
                <div className={`${top === '20' ? 'mt-20' : top === '10' ? 'mt-10' : 'mt-0'} mb-10 relative w-fit`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative z-10 px-1">
                        <span className="relative z-10">{children}</span>

                        {/* Подложка-параллелепипед */}
                        {/*<span*/}
                        {/*    className={`absolute left-0 bottom-1 w-full h-4 bg-${bg} rounded-sm z-0 translate-y-2 skew-x-[-10deg]`}*/}
                        {/*    aria-hidden="true"*/}
                        {/*></span>*/}
                    </h1>
                </div>
            )
        case "h2":
            return (
                <div className={`mt-${top} mb-10 relative w-fit`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white relative z-10 px-1">
                        <span className="relative z-10">{children}</span>

                        {/* Подложка-параллелепипед */}
                        {/*<span*/}
                        {/*    className={`absolute left-0 bottom-2 w-full h-3 bg-${bg} rounded-sm z-0 translate-y-2 skew-x-[-10deg]`}*/}
                        {/*    aria-hidden="true"*/}
                        {/*></span>*/}
                    </h2>
                </div>
            )
        case "h3":
            return (
                <div className="mb-3 relative w-fit">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white relative z-10 px-1">
                        <span className="relative z-10">{children}</span>

                        {/* Подложка-параллелепипед */}
                        {/*<span*/}
                        {/*    className={`absolute left-0 bottom-2 w-full h-2 bg-${bg} rounded-sm z-0 translate-y-2 skew-x-[-10deg]`}*/}
                        {/*    aria-hidden="true"*/}
                        {/*></span>*/}
                    </h3>
                </div>
            )
        default:
            return (
                <div className={`mt-${top} mb-10 relative w-fit`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white relative z-10 px-1">
                        <span className="relative z-10">{children}</span>

                        {/* Подложка-параллелепипед */}
                        {/*<span*/}
                        {/*    className="absolute left-0 bottom-1 w-full h-4 bg-${bg rounded-sm z-0 translate-y-2 skew-x-[-10deg]"*/}
                        {/*    aria-hidden="true"*/}
                        {/*></span>*/}
                    </h2>
                </div>
            )
    }

};

export default HeadingComponent;