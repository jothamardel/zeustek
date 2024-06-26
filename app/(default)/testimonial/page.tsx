// "use client";
// import { useEffect } from "react";
// import image from "@/public/images/img 4.jpg";

export default function Testimonial() {
  return (
    <div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* <!-- Page header --> */}
            <div className="max-w-3xl pb-12 md:pb-20 md:text-left text-center">
              <h2 className="h2">Trainees Testimonies</h2>
            </div>
            {/* <!-- Articles list --> */}
            <div className="max-w-sm mx-auto md:max-w-none">
              {/* <!-- Articles container --> */}
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {/* <!-- 1st article --> */}
                <article className="flex flex-col h-full" data-aos="zoom-y-out">
                  <header>
                    <a className="block mb-6" href="blog-post.html">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <video
                          id="explainer-video"
                          className="w-full h-full absolute top-0 left-0 herobackground object-cover "
                        ></video>
                      </figure>
                    </a>
                    <div>
                      <video
                        className="w-full h-full top-5 left-0"
                        //autoPlay={true}
                        loop
                        muted
                        controls
                        src="https://res.cloudinary.com/draxf5wop/video/upload/v1714741031/testimony_b51s9d.mp4"
                      ></video>
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                      <a className="hover:underline" href="blog-post.html">
                        Learnt Digital Marketing to aid in Digitalizing my
                        Business.
                      </a>
                    </h3>
                  </header>
                  <p className="text-gray-600 grow">
                    Before now, I don't know the importance of record keeping, I
                    just spend and use money without any record. But with this
                    training, I learnt how to record my businnes proceeds
                    digitally with tools like Ms Excel.
                  </p>
                  <footer className="text-sm flex items-center mt-4">
                    <div className="flex shrink-0 mr-3">
                      <a className="relative" href="#0">
                        <span
                          className="absolute inset-0 -m-px"
                          aria-hidden="true"
                        >
                          <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                        </span>
                      </a>
                      <a className="relative -ml-2" href="#0">
                        <span
                          className="absolute inset-0 -m-px"
                          aria-hidden="true"
                        >
                          <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                        </span>
                      </a>
                    </div>
                    <div>
                      <span className="text-black">By </span>
                      <a className="font-medium hover:underline" href="#0">
                        Dorcas Bright
                      </a>
                    </div>
                  </footer>
                </article>

                {/* <!-- 2nd article --> */}
                <article
                  className="flex flex-col h-full"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  <header>
                    <a className="block mb-6" href="blog-post.html">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="./images/tutorial-02.jpg"
                          width="352"
                          height="198"
                          alt="News 02"
                        />
                      </figure>
                    </a>
                    <div>
                      <img className="w-full h-full  top-0 left-0 src=@/public/images/img 4.jpg" />
                    </div>
                    <div>
                      <video
                        className="w-full h-full  top-0 left-0"
                        // //autoPlay={true}
                        loop
                        muted
                        controls
                        src="https://res.cloudinary.com/dnrsomsds/video/upload/v1714848741/ir1ph2h8t3msrgycn3mx.mp4"
                      ></video>
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                      <a className="hover:underline" href="blog-post.html">
                        Using Digital Technologies to up scale Business
                      </a>
                    </h3>
                  </header>
                  <p className="text-gray-600 grow">
                    I have been able to upfront my social media pressence and
                    also generate leads to boost my Business. Indeed Social
                    Media makes things easier especially the Business aspect.
                  </p>
                  <footer className="text-sm flex items-center mt-4">
                    <div className="flex shrink-0 mr-3">
                      <a className="relative" href="#0">
                        <span
                          className="absolute inset-0 -m-px"
                          aria-hidden="true"
                        >
                          <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                        </span>
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-600">By </span>
                      <a className="font-medium hover:underline" href="#0">
                        Mrs Awazi A.
                      </a>
                    </div>
                  </footer>
                </article>

                {/* <!-- 3rd article --> */}
                <article
                  className="flex flex-col h-full"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <header>
                    <a className="block mb-6" href="blog-post.html">
                      {/* <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                                                <img className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="./images/tutorial-03.jpg" width="352" height="198" alt="News 03" />
                                            </figure> */}
                    </a>
                    {/* <div className="mb-3">
                                            <ul className="flex flex-wrap text-xs font-medium -m-1">
                                                <li className="m-1">
                                                    <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Guides</a>
                                                </li>
                                                <li className="m-1">
                                                    <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">Intermediate</a>
                                                </li>
                                                <li className="m-1">
                                                    <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">7 min read</span>
                                                </li>
                                            </ul>
                                        </div> */}
                    <div>
                      <video
                        className="w-full h-full  top-0 left-0"
                        //autoPlay={true}
                        loop
                        muted
                        controls
                        src="https://res.cloudinary.com/dnrsomsds/video/upload/v1714849430/gvehidaxaaglahxi9jt2.mp4"
                      ></video>
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                      <a className="hover:underline" href="blog-post.html">
                        Empowering the women through Trainning.
                      </a>
                    </h3>
                  </header>
                  <p className="font-200 text-gray-600 grow">
                    The women are exicted to learn and eager to apply the
                    knowledge to their businesses. It motivates them to learn,
                    know more and apply the knowledge.
                  </p>
                  <footer className="text-sm flex items-center mt-4">
                    {/* <div className="flex shrink-0 mr-3">
                                            <a className="relative" href="#0">
                                                <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                                                <img className="relative rounded-full" src="./images/news-author-01.jpg" width="32" height="32" alt="Author 01" />
                                            </a>
                                        </div> */}
                    <div>
                      <span className="text-gray-600">By </span>
                      <a className="font-medium hover:underline" href="#0">
                        Benita Ikerabi (Trainer)
                      </a>
                    </div>
                  </footer>
                </article>

                {/* <!-- 4th article --> */}
                <article className="flex flex-col h-full" data-aos="zoom-y-out">
                  <header>
                    <a className="block mb-6" href="blog-post.html">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="./images/tutorial-04.jpg"
                          width="352"
                          height="198"
                          alt="News 04"
                        />
                      </figure>
                    </a>
                    {/* <div className="mb-3">
                                            <ul className="flex flex-wrap text-xs font-medium -m-1">
                                                <li className="m-1">
                                                    <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Free ebooks</a>
                                                </li>
                                            </ul>
                                        </div> */}
                    <div>
                      <video
                        className="w-full h-full  top-0 left-0"
                        //autoPlay={true}
                        loop
                        muted
                        controls
                        src="https://res.cloudinary.com/dnrsomsds/video/upload/v1714849292/hvalaeybfj7i1y8zehwl.mp4"
                      ></video>
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                      <a className="hover:underline" href="blog-post.html">
                        Effectiveness of Digital Tool
                      </a>
                    </h3>
                  </header>
                  <p className="text-gray-600 grow">
                    Firstly, I was able to connect with like minds. I learnt how
                    to multitask effectively with digital tools without having
                    one to suffer.
                  </p>
                  <footer className="text-sm flex items-center mt-4">
                    {/* <div className="flex shrink-0 mr-3">
                                            <a className="relative" href="#0">
                                                <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                                                <img className="relative rounded-full" src="./images/news-author-04.jpg" width="32" height="32" alt="Author 04" />
                                            </a>
                                        </div> */}
                    <div>
                      <span className="text-gray-600">By </span>
                      <a className="font-medium hover:underline" href="#0">
                        Lilybeth Tamnar
                      </a>
                    </div>
                  </footer>
                </article>

                {/* <!-- 5th article --> */}
                <article
                  className="flex flex-col h-full"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  <header>
                    <a className="block mb-6" href="blog-post.html">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="./images/tutorial-05.jpg"
                          width="352"
                          height="198"
                          alt="News 05"
                        />
                      </figure>
                    </a>
                    {/* <div className="mb-3">
                                            <ul className="flex flex-wrap text-xs font-medium -m-1">
                                                <li className="m-1">
                                                    <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Tips & Tricks</a>
                                                </li>
                                            </ul>
                                        </div> */}
                    <div>
                      <video
                        className="w-full h-full  top-0 left-0"
                        //autoPlay={true}
                        loop
                        muted
                        controls
                        src="https://res.cloudinary.com/dnrsomsds/video/upload/v1714849255/fee5xn17fq4yfiit9egr.mp4"
                      ></video>
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                      <a className="hover:underline" href="blog-post.html">
                        Better Brand Awareness
                      </a>
                    </h3>
                  </header>
                  <p className="text-gray-600 grow">
                    I have been a novice to the online space and as a result of
                    this training, i gain exposure and I am able to transact my
                    business globally.
                  </p>
                  <footer className="text-sm flex items-center mt-4">
                    {/* <div className="flex shrink-0 mr-3">
                                            <a className="relative" href="#0">
                                                <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                                                <img className="relative rounded-full" src="./images/news-author-03.jpg" width="32" height="32" alt="Author 03" />
                                            </a>
                                        </div> */}
                    <div>
                      <span className="text-gray-600">By </span>
                      <a className="font-medium hover:underline" href="#0">
                        Eunice Nanko Nimyel
                      </a>
                    </div>
                  </footer>
                </article>

                {/* <!-- 6th article --> */}
                <article
                  className="flex flex-col h-full"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <header>
                    <a className="block mb-6" href="blog-post.html">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="./images/tutorial-06.jpg"
                          width="352"
                          height="198"
                          alt="News 06"
                        />
                      </figure>
                    </a>
                    {/* <div className="mb-3">
                                            <ul className="flex flex-wrap text-xs font-medium -m-1">
                                                <li className="m-1">
                                                    <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Guides</a>
                                                </li>
                                                <li className="m-1">
                                                    <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">Beginner</a>
                                                </li>
                                                <li className="m-1">
                                                    <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">6 min read</span>
                                                </li>
                                            </ul>
                                        </div> */}
                    <div>
                      <video
                        className="w-full h-full  top-0 left-0"
                        //autoPlay={true}
                        loop
                        muted
                        controls
                        src="https://res.cloudinary.com/draxf5wop/video/upload/v1714741031/testimony_b51s9d.mp4"
                      ></video>
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                      <a className="hover:underline" href="blog-post.html">
                        Improved Social Media Engagement
                      </a>
                    </h3>
                  </header>
                  <p className="text-gray-600 grow">
                    We were struggling to connect with our audience on social
                    media until we applied digital marketing.It has helped us
                    develop engaging content and now our social media engagement
                    has tripled.
                  </p>
                  <footer className="text-sm flex items-center mt-4">
                    {/* <div className="flex shrink-0 mr-3">
                                            <a className="relative" href="#0">
                                                <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                                                <img className="relative rounded-full" src="./images/news-author-05.jpg" width="32" height="32" alt="Author 05" />
                                            </a>
                                            <a className="relative -ml-2" href="#0">
                                                <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                                                <img className="relative rounded-full" src="./images/news-author-01.jpg" width="32" height="32" alt="Author 01" />
                                            </a>
                                        </div> */}
                    <div>
                      <span className="text-gray-600">By </span>
                      <a className="font-medium hover:underline" href="#0">
                        Angela Pam
                      </a>{" "}
                      &{" "}
                      <a className="font-medium hover:underline" href="#0">
                        Lisa John
                      </a>
                    </div>
                  </footer>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
         
    </div>
  );
}
