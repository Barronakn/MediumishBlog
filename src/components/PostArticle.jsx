import { NavLink } from "react-router-dom";

const PostArticle = ({
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
    <article className="post w-84 flex flex-col gap-6 bg-white">
      <div className="top w-84">
        <NavLink to="#">
          <img
            className="object-cover w-84 h-48"
            src={img}
            alt={imgAlt}
            loading="lazy"
          />
        </NavLink>
      </div>
      <div className="bottom w-80 pt-5 mx-3">
        <NavLink to="#" className="text-xl font-bold hover:text-gray-600">
          {title}
        </NavLink>
        <p className="text-gray-500 my-4 text-sm">{text}</p>
        <div>
          <div className="flex gap-6 items-center">
            <div>
              <NavLink to="#">
                <img
                  className="w-12 h-12 rounded-3xl"
                  src={authorPic}
                  alt={authorPicAlt}
                  loading="lazy"
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
              <img src={ReadIcon} alt={ReadAlt} loading="lazy" />
            </NavLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostArticle;
