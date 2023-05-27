import Features from "../components/Features";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Story from "../components/Story";
import article1Img from "/src/assets/1.jpg";
import article2Img from "/src/assets/3.jpg";
import article3Img from "/src/assets/2.jpg";
import article4Img from "/src/assets/4.jpg";
import article5Img from "/src/assets/5.jpg";
import article6Img from "/src/assets/7.jpg";
import article7Img from "/src/assets/9.jpg";
import article8Img from "/src/assets/6.jpg";
import article9Img from "/src/assets/8.jpg";
import article10Img from "/src/assets/10.jpg";
import author from "/src/assets/avatar.jpeg";
import more from "/src/assets/more.png";

const Stories = () => {
  const features = [
    {
      img: article1Img,
      imgAlt: "article-img",
      title: "We're living some strange times",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Mary",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
    {
      img: article2Img,
      imgAlt: "article-img",
      title: "The beauty of this world is in your heart",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Jane",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
    {
      img: article3Img,
      imgAlt: "article-img",
      title: "San Francisco at its best view in all seasons",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Steve",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
    {
      img: article4Img,
      imgAlt: "article-img",
      title: "We're living some strange times",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
  ];
  const storie = [
    {
      img: article5Img,
      imgAlt: "article-img",
      title: "Autumn doesn't have to be nostalgic, you know?",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
    {
      img: article6Img,
      imgAlt: "article-img",
      title: "Thinking outside the box can help you prosper",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
    {
      img: article7Img,
      imgAlt: "article-img",
      title: "10 Things you should know about choosing your house",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
    {
      img: article8Img,
      imgAlt: "article-img",
      title: "Best galleries in the world with photos",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
    {
      img: article9Img,
      imgAlt: "article-img",
      title: "Thinking outside the box can help you prosper",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
    {
      img: article10Img,
      imgAlt: "article-img",
      title: "Visiting the world means learning cultures",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      authorPic: author,
      authorPicAlt: "authorPic",
      authorName: "Sal",
      ReadIcon: more,
      ReadAlt: "more-icon",
    },
  ];
  return (
    <div>
      <Navigation />
      <div className="stories">
        <h1 className="righteous text-3xl pt-28 mx-32">Mediumish</h1>
        <h2 className="border-noir righteous text-2xl pb-2 pt-6 mx-32">
          Featured
        </h2>
        <hr className=" mx-32" />
        <div className="articles_features mt-7 mx-32">
          {features.map((feature, index) => {
            return <Features key={index} {...feature} />;
          })}
        </div>
        <h2 className="border-noirAll righteous text-2xl mt-10 pb-2 pt-6 mx-32">
          All Stories
        </h2>
        <hr className=" mx-32" />
        <div className="articles_storie mt-7 mb-20 mx-32">
          {storie.map((story, index) => {
            return <Story key={index} {...story} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stories;
