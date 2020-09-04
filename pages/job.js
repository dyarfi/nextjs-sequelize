import React, { useEffect } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

/* utils */
import { absoluteUrl, getAppCookies } from '../middleware/utils';

/* components */
import Layout from '../components/layout/Layout';
import UserNav from '../components/navigation/User';

function Job(props) {
  const router = useRouter();
  const { origin, user, jobs } = props;

  function renderJobs() {
    return jobs.data.map((job, j) => {
      return (
        <Link key={j} href="/job/[slug]" as={`/job/${job.slug}`}>
          <a className="card">
            <h3 className="headline">{job.title}</h3>
            <div>
              <small>Posted: {job.createdAt}</small>
              <small style={{ float: 'right' }}>
                Job by: {job.user.firstName || ''} {job.user.lastName || ''}
              </small>
            </div>
            {/* <p className="description">{job.content}</p> */}
            <small style={{ display: 'block' }}>Email: {job.emailTo}</small>
            <small style={{ display: 'block' }}>
              Report to: {job.reportManager}
            </small>
            <small style={{ display: 'block' }}>Limit :{job.dateLimit}</small>
          </a>
        </Link>
      );
    });
  }

  async function loadMoreClick(e) {
    await Router.push({
      pathname: '/job',
      query: {
        nextPage: jobs.nextPage ? jobs.nextPage : 5,
      },
    });
  }

  return (
    <Layout
      title="Next.js with Sequelize | Job Page"
      url={`${origin}${router.asPath}`}
      origin={origin}
    >
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
              style={{ marginRight: '1rem' }}
            />
            <img src="/nextjs.svg" alt="Next.js" width="160" />
          </p>
          <UserNav props={{ user: user }} />
          <h2>
            <Link
              href={{
                pathname: '/',
              }}
            >
              <a>&larr; </a>
            </Link>
            Latest Jobs
          </h2>
          <div className="grid">
            <small
              style={{
                textAlign: 'center',
                marginTop: '0rem',
                marginBottom: '1rem',
              }}
            >
              <Link href="/job/add">
                <a>+ Add Job</a>
              </Link>
            </small>
            {jobs.status === 'success' ? (
              jobs.data.length && renderJobs()
            ) : (
              <h3
                style={{
                  textAlign: 'center',
                  marginTop: '0rem',
                  marginBottom: '1rem',
                  display: 'inline-block',
                  width: '100%',
                }}
              >
                {jobs.error}
              </h3>
            )}

            {jobs.status === 'success' && (
              <>
                {jobs.nextPage < jobs.total &&
                jobs.data.length !== jobs.total ? (
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
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
}

/* getServerSideProps */
export async function getServerSideProps(context) {
  const { query, req } = context;
  const { nextPage } = query;
  const { origin } = absoluteUrl(req);

  const token = getAppCookies(req).token || '';
  const referer = req.headers.referer || '';

  const nextPageUrl = !isNaN(nextPage) ? `?nextPage=${nextPage}` : '';
  const baseApiUrl = `${origin}/api`;

  const jobsApi = await fetch(`${baseApiUrl}/job${nextPageUrl}`, {
    headers: {
      authorization: token || '',
    },
  });

  const jobs = await jobsApi.json();

  return {
    props: {
      origin,
      referer,
      token,
      jobs,
    },
  };
}

export default Job;
