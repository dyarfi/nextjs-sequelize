import Link from "next/link";

/* components */
import Layout from "../../components/layout/Layout";

function Post({ post }) {
  return (
    <Layout title="Next.js with Sequelize | Post Page - Detail">
      <div className="container">
        <main className="content-detail">
          <div className="card">
            <Link
              href={{
                pathname: "/post",
              }}
            >
              <a>&larr; Back</a>
            </Link>
            <h2
              className="sub-title"
              style={{
                display: "block",
                marginTop: ".75rem",
              }}
            >
              {post.data.title}
              <small
                style={{
                  display: "block",
                  fontWeight: "normal",
                  marginTop: ".75rem",
                }}
              >
                Posted: {post.data.createdAt}
              </small>
            </h2>
            <p>{post.data.content}</p>
            <hr />
            By: {post.data.user.firstName || ""} {post.data.user.lastName || ""}
          </div>
        </main>
      </div>
    </Layout>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps(context) {
  const { query, req, res, headers } = context;
  const host = process.env.NODE_ENV === "production" ? "http://" : "http://";
  const baseApiUrl = `${host}${req.headers.host}/api`;

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const postApi = await fetch(`${baseApiUrl}/post/${query.id}`);
  const post = await postApi.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  };
}

export default Post;
