

export default function Button(){
    return(
        <>
            <div className="h-48">
                <span></span>
                <div className="h-28 flex items-center justify-center gap-14">
                    <button className="h-12 w-28 bg-[#c6c6c6] text-[#3F3F3F] font-medium rounded">Default</button>
                    <button className="h-12 w-28 bg-[#c6c6c6] text-[#3F3F3F] hover:bg-[#AEAEAE] font-medium rounded">Default</button>
                </div>
            </div>

            <div className="h-48">
                <span>asdfsd</span>
                <div className="h-28 flex items-center justify-center gap-14">
                    <button className="h-12 w-28 border-solid border border-[#3D5AFE] text-[#3D5AFE] rounded">Default</button>
                    <button className="h-12 w-28 border-solid border border-[#3D5AFE] text-[#3D5AFE] hover:bg-[#2962FF] hover:bg-opacity-10 rounded">Default</button>
                </div>
            </div>

            <div className="h-48">
                <span>asdfsd</span>
                <div className="h-28 flex items-center justify-center gap-14">
                    <button className="h-12 w-28 text-[#3D5AFE]">Default</button>
                    <button className="h-12 w-28 border-[#3D5AFE] text-[#3D5AFE] hover:bg-[#2962FF] hover:bg-opacity-10 rounded">Default</button>
                </div>
            </div>

            <div className="h-48">
                <span>asdfsd</span>
                <div className="h-28 flex items-center justify-center gap-14">
                    <button className="h-12 w-28 border-[#3D5AFE] bg-[#3D5AFE] text-white rounded">Default</button>
                </div>
            </div>

            <div className="h-48">
                <span>button disabled</span>
                <div className="h-28 flex items-center justify-center gap-14">
                    <button className="h-12 w-28 bg-[#E0E0E0] text-[#9E9E9E] font-semibold rounded">Disabled</button>
                    <button className="h-12 w-28 text-[#9E9E9E] rounded">Disabled</button>
                </div>
            </div>

            <div className="h-48">
                <span>button car</span>
                <div className="h-28 flex items-center justify-center gap-14">
                    <button className="h-12 w-48 flex items-center justify-center gap-2 border-[#3D5AFE] bg-[#3D5AFE] text-white rounded"><img src="src\assets\car.svg" alt="" />Default</button>
                    <button className="h-12 w-48 flex items-center justify-center gap-2 border-[#3D5AFE] bg-[#3D5AFE] text-white rounded">Default<img src="src\assets\car.svg" alt="" /></button>
                </div>
            </div>

            <div className="h-48">
                <span>asdfsd</span>
                <div className="h-28  flex items-center justify-center gap-14 ">
                    <button className="h-12 w-28 border-[#3D5AFE] bg-[#3D5AFE] font-medium text-white rounded">Default</button>
                    <button className="h-14 w-32 border-[#3D5AFE] bg-[#3D5AFE] font-medium text-white rounded">Default</button>
                    <button className="h-16 w-36 border-[#3D5AFE] bg-[#3D5AFE] font-medium text-white rounded">Default</button>
                </div>
            </div>

            <div className="h-48">
                <span>asdfsd</span>
                <div className="h-28  flex items-center justify-center gap-14 ">
                    <button className="h-12 w-28 bg-[#c6c6c6] text-[#3F3F3F] font-medium rounded">Default</button>
                    <button className="h-14 w-32 border-[#3D5AFE] bg-[#3D5AFE] font-medium text-white rounded">Default</button>
                    <button className="h-14 w-36 border-[#3D5AFE] bg-[#455A64] font-medium text-white rounded">Secondary</button>
                </div>
            </div>

            <div className="h-48">
                <span>asdfsd</span>
                <div className="h-28  flex items-center justify-center gap-14 ">
                    <button className="h-12 w-28 bg-[#c6c6c6] hover:bg-[#AEAEAE] text-[#3F3F3F] font-medium rounded">Default</button>
                    <button className="h-14 w-32 bg-[#3D5AFE] hover:bg-[#0039CB] font-medium text-white rounded">Default</button>
                    <button className="h-14 w-36 bg-[#455A64] hover:bg-[#1C313A] font-medium text-white rounded">Secondary</button>
                </div>
            </div>


            
        </>
    )
}