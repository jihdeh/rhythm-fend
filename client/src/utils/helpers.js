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
    src:
      "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2017/04/concert-truths-featured-040417.jpg",
    width: 4,
    height: 2.8
  },
  {
    src:
      "https://www.telegraph.co.uk/content/dam/news/2016/04/20/rexfeatures_RESTRCTED-ADELE_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450",
    width: 4,
    height: 2.8
  },
  {
    src:
      "https://static1.squarespace.com/static/5537e36fe4b08042f031cccb/t/56f2c121f8508203ebe32d1b/1458749733556/Worship-Background_crop1.jpg?format=1500w",
    width: 4,
    height: 2.8
  },
  {
    src:
      "https://media.newyorker.com/photos/59c919daca68b438f0435294/master/w_727,c_limit/Petrusich-Courage-Soul-Singer-Charles-Bradley.jpg",
    width: 4,
    height: 2.8
  },
  {
    src:
      "https://i.amz.mshcdn.com/cqmQmotDq-a1oTLigqcxzqHiync=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F290843%2FAP_344699431569.jpg",
    width: 4,
    height: 2.8
  },
  {
    src:
      "https://static1.squarespace.com/static/5537e36fe4b08042f031cccb/t/56f2c121f8508203ebe32d1b/1458749733556/Worship-Background_crop1.jpg?format=1500w",
    width: 4,
    height: 2.8
  },
  {
    src:
      "https://static1.squarespace.com/static/5537e36fe4b08042f031cccb/t/56f2c121f8508203ebe32d1b/1458749733556/Worship-Background_crop1.jpg?format=1500w",
    width: 4,
    height: 2.8
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 2.8
  }
];

export const VIDEO_SET = [
  "https://www.youtube.com/embed/5J69oiaLUN0",
  "https://www.youtube.com/embed/ZgzRQUQV35M",
  "https://www.youtube.com/embed/PIdZfqNaq_Q",
  "https://www.youtube.com/embed/oynB0sGUsBU"
];
