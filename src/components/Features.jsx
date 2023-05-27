import { NavLink } from "react-router-dom";

const Features = ({
  img,
  imgAlt,
  title,
  text,
  authorPic,
  authorPicAlt,
  authorName,
  ReadIcon,
  ReadAlt,
}) => {
  return (
    <article className="features flex gap-6">
      <div className="left w-48">
        <NavLink to="#">
          <img className="object-cover w-48 h-64" src={img} alt={imgAlt} />
        </NavLink>
      </div>
      <div className="right w-80 pt-5">
        <NavLink to="#" className="text-xl font-bold hover:text-gray-600">
          {title}
        </NavLink>
        <p className="text-gray-500 my-4 text-sm">{text}</p>
        <div>
          <div className="flex gap-6 items-center">
            <div>
              <NavLink to="#">
                <img
                  className="authorPic w-12 h-12 rounded-3xl"
                  src={authorPic}
                  alt={authorPicAlt}
                />
              </NavLink>
            </div>
            <div className="text-xs text-gray-500 flex flex-col gap-2">
              <NavLink className="text-black hover:underline" to="#">
                {authorName}
              </NavLink>
              <span>22 July 2017 ~ 6 min read</span>
            </div>
            <NavLink className="ml-8" to="#">
              <img src={ReadIcon} alt={ReadAlt} />
            </NavLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Features;
