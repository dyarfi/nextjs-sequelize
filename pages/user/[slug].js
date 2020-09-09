import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import Link from 'next/link';
import Router, { useRouter } from 'next/router';

/* utils */
import { absoluteUrl } from '../../middleware/utils';

/* components */
import Layout from '../../components/layout/Layout';

function User(props) {
  const router = useRouter();
  const { origin, referer, user } = props;
  const [titlePage, setTitlePage] = useState('Profile');

  useEffect(() => {
    switch (router.asPath) {
      case '/user/logout':
        Cookies.remove('token');
        Router.push({ pathname: '/', query: {} }, '/');
        break;
      case '/user/login':
        setTitlePage('Login');
        break;
      case '/user/register':
        setTitlePage('Register');
        break;
    }
  }, []);

  return (
    <Layout
      title={`Next.js with Sequelize | User Page - ${titlePage}`}
      url={`${origin}${router.asPath}`}
      origin={origin}
    >
      <div className="container">
        <main className="content-detail">
          <Link
            href={{
              pathname: '/user',
            }}
          >
            <a>&larr; Back</a>
          </Link>
          {user.data && (
            <>
              <h1>
                {user.data.firstName || ''} {user.data.lastName || ''} @
                {user.data.username}
              </h1>
              <h3 className="sub-title">
                {user.data.email}
                <small
                  style={{
                    display: 'block',
                    fontWeight: 'normal',
                    marginTop: '.75rem',
                  }}
                >
                  Member since {user.data.createdAt}
                </small>
              </h3>
              {(user.data.posts.length > 0 && (
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
              )) || <small style={{ color: '#999999' }}>No latest posts</small>}
              {(user.data.jobs.length > 0 && (
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
              )) || (
                <small style={{ marginLeft: '.5rem', color: '#999999' }}>
                  No latest jobs
                </small>
              )}
            </>
          )}
        </main>
      </div>
    </Layout>
  );
}

/* getServerSideProps */
export async function getServerSideProps(context) {
  const { query, req } = context;
  const { origin } = absoluteUrl(req);

  const referer = req.headers.referer || '';
  const baseApiUrl = `${origin}/api`;

  let user = {};

  if (query.slug !== 'logout') {
    const userApi = await fetch(`${baseApiUrl}/user/${query.slug}`);
    user = await userApi.json();
  }

  return {
    props: {
      origin,
      referer,
      user,
    },
  };
}

export default User;
