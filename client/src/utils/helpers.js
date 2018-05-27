export const getStyle = (type, activity, profilePicture) =>
  activity
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
      }
    : type === "myStyle"
      ? profilePicture
        ? {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${profilePicture})`
          }
        : {
            backgroundImage: `linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.71)),url(/images/logo.png)`
          }
      : profilePicture
        ? { backgroundImage: `url(${profilePicture})` }
        : {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .71))`
          };

export const formatString = _ => {
  let str = _.toLowerCase(),
    ans;
  if (str.split(" ").length > 1) {
    ans = str
      .split(" ")
      .map(val => formatString(val))
      .join(" ");
  } else ans = str.charAt(0).toUpperCase() + str.slice(1);
  return ans;
};

export const firstLetter = _ => _.charAt(0).toUpperCase();

export default {
  mybio: `It is a long established fact that a reader will be distracted by the readable content of
a page when looking at its layout. The point of using Lorem Ipsum is that it has a
more-or-less normal distribution of letters, as opposed to using 'Content here, content
here', making it look like readable English. Many desktop publishing packages`
};

export const PHOTO_SET = [
  {
    src: "/images/gallery/1.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/2.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/3.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/4.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/5.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/6.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/7.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/8.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/9.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/10.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/12.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/13.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/14.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/15.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/16.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/17.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/18.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/19.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/20.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/21.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/22.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/23.png",
    width: 3.7,
    height: 2.8
  },
  {
    src: "/images/gallery/24.png",
    width: 3.7,
    height: 2.8
  }
];

export const VIDEO_SET = [
  "https://www.youtube.com/embed/5J69oiaLUN0",
  "https://www.youtube.com/embed/ZgzRQUQV35M",
  "https://www.youtube.com/embed/PIdZfqNaq_Q",
  "https://www.youtube.com/embed/oynB0sGUsBU"
];
