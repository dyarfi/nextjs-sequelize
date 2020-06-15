import Link from "next/link";

/* components */
import Layout from "../components/layout/Layout";

function Post({ posts }) {
  function renderPosts() {
    return posts.data.map((post, j) => {
      return (
        <Link key={j} href="/post/[slug]" as={`/post/${post.slug}`}>
          <a className="card">
            <h3 className="headline">{post.title}</h3>
            <div>
              <small>{post.createdAt}</small>
            </div>
            <div>
              <small>
                Post by: {post.user.firstName || ""} {post.user.lastName || ""}
              </small>
            </div>
            <p>{post.content}</p>
          </a>
        </Link>
      );
    });
  }

  return (
    <Layout title="Next.js with Sequelize | User Page">
      <div className="container">
        <main>
          <h1 className="title">
            Sequelize &amp; <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className="description">
            <img
              src="/sequelize.svg"
              alt="Sequelize"
              height="120"
              style={{ marginRight: "1rem" }}
            />
            <img src="/nextjs.svg" alt="Next.js" width="160" />
          </p>
          <p className="account">
            Have an Account?
            <Link href={{ pathname: "/user/login" }}>
              <a>Login</a>
            </Link>
            or
            <Link href={{ pathname: "/user/register" }}>
              <a>Register</a>
            </Link>
          </p>
          <h2>
            {" "}
            <Link
              href={{
                pathname: "/",
              }}
            >
              <a>&larr; </a>
            </Link>
            Latest Posts
          </h2>
          <div className="grid">
            <small
              style={{
                textAlign: "center",
                marginTop: "0rem",
                marginBottom: "1rem",
              }}
            >
              <Link href="/post/add">
                <a>+ Add Post</a>
              </Link>
            </small>
            {posts.data.length && renderPosts()}
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
  const host = process.env.NODE_ENV === "production" ? "https://" : "http://";

  const baseApiUrl = `${host}${req.headers.host}/api`;

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const postsApi = await fetch(`${baseApiUrl}/post`);
  const posts = await postsApi.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Post;
