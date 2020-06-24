import React from "react";

import Link from "next/link";
import Router from "next/router";

/* components */
import Layout from "../components/layout/Layout";
import UserNav from "../components/navigation/User";

function User(props) {
  const { url, user, users } = props;

  function renderUsers(users) {
    return users.data.map((user, i) => {
      return (
        <Link key={i} href="/user/[slug]" as={`/user/${user.id}`}>
          <a className="card">
            <h3 className="headline">
              {/* {user.firstName} {user.lastName} */}
              {user.username}
            </h3>
            <p>{user.email}</p>
            <small>Posts: {user.posts.length}</small>{" "}
            <small>Jobs: {user.jobs.length}</small>
          </a>
        </Link>
      );
    });
  }

  async function loadMoreClick(e) {
    await Router.push({
      pathname: "/user",
      query: {
        nextPage: users.nextPage ? users.nextPage : 5,
      },
    });
  }
  // console.log(user);

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
          <UserNav props={{ user: user }} />
          <h2>
            <Link
              href={{
                pathname: "/",
              }}
            >
              <a>&larr; </a>
            </Link>
            Recent Users
          </h2>
          <div className="grid">
            {users.status === "success" ? (
              users.data.length && renderUsers(users)
            ) : (
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "0rem",
                  marginBottom: "1rem",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                {users.error}
              </h3>
            )}
            {/* {users.data.length && (
              <>
                {renderUsers(users)}
                {users.nextPage < users.total &&
                users.data.length !== users.total ? (
                  <button onClick={loadMoreClick}>Next</button>
                ) : (
                  <span className="span-info">no page left</span>
                )}
                <style jsx>
                  {`
                    button,
                    .span-info {
                      margin: 1rem auto;
                      padding: 0.5rem 1rem;
                      border: 1px solid #cecece;
                      background-color: #fffcfc;
                      color: #7b7b7b;
                      outline: none;
                    }
                  `}
                </style>
              </>
            )} */}
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
  const host = process.env.NODE_ENV === "production" ? "https://" : "http://";

  const { query, req, res } = context;
  const { nextPage } = query;
  const { url } = req;
  const referer = req.headers.referer || "";

  const nextPageUrl = !isNaN(nextPage) ? `?nextPage=${nextPage}` : "";

  const baseApiUrl = `${host}${req.headers.host}/api`;

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const usersApi = await fetch(`${baseApiUrl}/user${nextPageUrl}`);
  const users = await usersApi.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
      referer,
      url,
    },
  };
}

export default User;
