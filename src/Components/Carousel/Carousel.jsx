

const Carousel = () => {


     return (

          <div>
               <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full md:h-[500px]">
                         <img
                              src="https://i.ibb.co.com/qW95gMt/29b45941879a893e9bfaa4a923ffbebf.jpg"
                              className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full md:h-[500px]">
                         <img
                              src="https://i.ibb.co.com/CHdfnzz/nopparuj-lamaikul-l-Ar6o-Op-Xv-A-unsplash.jpg"
                              className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full md:h-[500px]">
                         <img
                              src="https://i.ibb.co.com/dBHsZmz/herry-sutanto-p-TTe-Qm-Ne-HPM-unsplash.jpg"
                              className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full md:h-[500px]">
                         <img
                              src="https://i.ibb.co.com/c6m3gSd/pexels-allphoto-bangkok-1628521-3226403.jpg"
                              className="w-full" />
                    </div>
               </div>
               <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
               </div>
          </div>
     );

};



export default Carousel;




