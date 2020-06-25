import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Router from "next/router";

/* components */
import Layout from "../../components/layout/Layout";

function User(props) {
  const { user, url, referer } = props;
  const [titlePage, setTitlePage] = useState("Profile");

  useEffect(() => {
    if (url === "/user/logout") {
      Cookies.remove("token");
      Router.push({ pathname: "/", query: {} }, "/");
    }
    if (url === "/user/login") {
      setTitlePage("Login");
    }
    if (url === "/user/register") {
      setTitlePage("Register");
    }
  }, []);

  return (
    <Layout title={`Next.js with Sequelize | User Page - ${titlePage}`}>
      <div className="container">
        <main className="content-detail">
          <Link
            href={{
              pathname: "/user",
            }}
          >
            <a>&larr; Back</a>
          </Link>
          {user.data && (
            <>
              <h1>
                {user.data.firstName || ""} {user.data.lastName || ""} @
                {user.data.username}
              </h1>
              <h3 className="sub-title">
                {user.data.email}
                <small
                  style={{
                    display: "block",
                    fontWeight: "normal",
                    marginTop: ".75rem",
                  }}
                >
                  Member since {user.data.createdAt}
                </small>
              </h3>
              {user.data.posts.length && (
                <div className="grid">
                  <h2>Latest Posts</h2>
                  {user.data.posts.map((post, m) => {
                    return (
                      <Link
                        key={m}
                        href={{
                          pathname: `/post/${post.slug}`,
                          query: {},
                        }}
                      >
                        <a className="card">
                          <h4>{post.title}</h4>
                          <span>{post.createdAt}</span>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              )}
              {user.data.jobs.length && (
                <div className="grid">
                  <h2>Latest Jobs</h2>
                  {user.data.jobs.map((job, m) => {
                    return (
                      <Link
                        key={m}
                        href={{
                          pathname: `/job/${job.slug}`,
                          query: {},
                        }}
                      >
                        <a className="card">
                          <h4>{job.title}</h4>
                          <span>
                            <small>{job.content}</small>
                          </span>
                          <span>
                            <small>{job.reportManager}</small>
                          </span>
                          <span>
                            <small>{job.emailTo}</small>
                          </span>
                          <span>
                            <span>{job.createdAt}</span>
                          </span>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}
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
  const { url } = req;
  const referer = req.headers.referer || "";

  const host = process.env.NODE_ENV === "production" ? "https://" : "http://";
  const baseApiUrl = `${host}${req.headers.host}/api`;

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  let user = {};
  if (url !== "/user/logout" && req.method !== "POST") {
    const userApi = await fetch(`${baseApiUrl}/user/${query.slug}`);
    user = await userApi.json();
  }
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      user,
      url,
      referer,
    },
  };
}

export default User;
