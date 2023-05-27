import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PostArticle from "../components/PostArticle";
import authorPic from "/src/assets/avatar.jpeg";
import article1Img from "/src/assets/9.jpg";
import article2Img from "/src/assets/6.jpg";
import article3Img from "/src/assets/8.jpg";
import { NavLink } from "react-router-dom";

const Post = () => {
  const postArticle = [
    {
      img: article1Img,
      imgAlt: "article-img",
      title: "10 Things you should know about choosing your house",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: "/src/assets/avatar.jpeg",
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: "/src/assets/more.png",
      ReadAlt: "more-icon",
    },
    {
      img: article2Img,
      imgAlt: "article-img",
      title: "Best galleries in the world with photos",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: "/src/assets/avatar.jpeg",
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: "/src/assets/more.png",
      ReadAlt: "more-icon",
    },
    {
      img: article3Img,
      imgAlt: "article-img",
      title: "Thinking outside the box can help you prosper",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: "/src/assets/avatar.jpeg",
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: "/src/assets/more.png",
      ReadAlt: "more-icon",
    },
  ];
  return (
    <div className="">
      <Navigation />
      <div className="all pt-28 mx-80">
        <div className="flex gap-6 items-center">
          <div>
            <NavLink to="#">
              <img
                className="w-44 h-20 rounded-50"
                src={authorPic}
                alt="authorPic"
              />
            </NavLink>
          </div>
          <div className="text-xs text-gray-500 flex flex-col gap-1">
            <div>
              <NavLink className="text-black text-lg hover:underline" to="#">
                Sal
              </NavLink>
              <NavLink
                className="text-green-800 rounded-2xl border-1 px-2 py-1 ml-8"
                to="#"
              >
                Follow
              </NavLink>
            </div>
            <p className="text-lg">
              Founder of WowThemes.net and creator of{" "}
              <span className="font-bold">"Mediumish"</span> theme that you're
              currently previewing. Developing professional premium themes,
              templates, plugins, scripts since 2012.
            </p>
            <span>22 July 2017 ~ 6 min read</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold my-10">
          18 Things You Should Learn Before Moving Into a New Home
        </h1>
        <img src="/src/assets/10.jpg" alt="article-image" />
        <div className="text-xl">
          <p className="my-6">
            Holy grail funding non-disclosure agreement advisor ramen
            bootstrapping ecosystem. Beta crowdfunding iteration assets business
            plan paradigm shift stealth mass market seed money rockstar niche
            market marketing buzz market.{" "}
          </p>
          <p className="mb-6">
            Burn rate release facebook termsheet equity technology. Interaction
            design rockstar network effects handshake creative startup direct
            mailing. Technology influencer direct mailing deployment return on
            investment seed round.{" "}
          </p>
          <p>
            Termsheet business model canvas user experience churn rate low
            hanging fruit backing iteration buyer seed money. Virality release
            launch party channels validation learning curve paradigm shift
            hypotheses conversion. Stealth leverage freemium venture startup
            business-to-business accelerator market.
          </p>
          <aside className="border-left text-gray-500 my-6 pl-5">
            Gen-z strategy long tail churn rate seed money channels user
            experience incubator startup partner network low hanging fruit
            direct mailing. Client backing success startup assets responsive web
            design burn rate A/B testing metrics first mover advantage
            conversion.
          </aside>
          <p>
            Freemium non-disclosure agreement lean startup bootstrapping holy
            grail ramen MVP iteration accelerator. Strategy market ramen
            leverage paradigm shift seed round entrepreneur crowdfunding social
            proof angel investor partner network virality.
          </p>
        </div>
      </div>
      <div className="articles_post mt-7 mb-20 px-32 py-6 bg-gray-50">
        {postArticle.map((post, index) => {
          return <PostArticle key={index} {...post} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Post;
