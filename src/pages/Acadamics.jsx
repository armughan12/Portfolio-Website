function Academics() {
    return (
        <div style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
            <section class="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1] flex-col">
                <div>
                    <h1 className="mt-12 underline font-bold text-3xl text-yellow-500">My Academics Records</h1>
                </div>
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-yellow-300 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                                <img alt="ideo" class="flex-shrink-0 w-50 h-50 rounded object-cover object-center sm:mb-0 mb-4" src="images/ideo.png" />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="title-font text-yellow-500 mb-1 text-xl font-bold">Full Stack Website Development</h2>
                                <p class="leading-relaxed text-black">Full Stack Website Development from Ideoversity Trainging Institute (Arfa Karim Software Technology Park), Lahore</p>
                                <span class="font-bold text-yellow-500">Status: Ongoing</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-yellow-300 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                                <img alt="ideo" class="flex-shrink-0 w-51 h-51 rounded object-cover object-center sm:mb-0 mb-4" src="images/ucp.jpg" />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-bold title-font text-yellow-500 mb-1 text-xl">Bachelors of Science (Software Engineering)</h2>
                                <p class="leading-relaxed text-black">BS Software Engineering from Univerity of Central Punjab, Lahore</p>
                                <span class="font-bold text-yellow-500">Status: Ongoing</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-yellow-300 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                                <img alt="ideo" class="flex-shrink-0 w-50 h-50 rounded object-cover object-center sm:mb-0 mb-4" src="images/pgc.png" />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-bold title-font text-yellow-500 mb-1 text-xl">Intermediate of Computer Science</h2>
                                <p class="leading-relaxed text-black">Intermediate of Computer Science (ICS) from Punjab College of Information Technology, Muslim Town (Main Campus), Lahore</p>
                                <span class="font-bold text-yellow-500">Status: Completed</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-yellow-300 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                                <img alt="ideo" class="flex-shrink-0 w-50 h-50 rounded object-cover object-center sm:mb-0 mb-4" src="images/fgs.jpeg" />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-bold title-font text-yellow-500 mb-1 text-xl">Matric</h2>
                                <p class="leading-relaxed text-black">Matric in Computer Science from Freedom Grammar School (Illama Iqbal Road, Garhi Shahu, Lahore)</p>
                                <span class="font-bold text-yellow-500">Status: Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Academics;