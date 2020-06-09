import Link from "next/link";

/* components */
import Layout from "../components/layout/Layout";

function Job({ jobs }) {
  function renderJobs() {
    return jobs.data.map((job, j) => {
      return (
        <Link key={j} href={`/job/${job.slug}`}>
          <a className="card">
            <h3 className="headline">{job.title}</h3>
            <div>
              <small>Posted: {job.createdAt}</small>
              <small style={{ float: "right" }}>
                Job by: {job.user.firstName || ""} {job.user.lastName || ""}
              </small>
            </div>
            {/* <p className="description">{job.content}</p> */}
            <small style={{ display: "block" }}>Email: {job.emailTo}</small>
            <small style={{ display: "block" }}>
              Report to: {job.reportManager}
            </small>
            <small style={{ display: "block" }}>Limit :{job.dateLimit}</small>
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
            <Link
              href={{
                pathname: "/",
              }}
            >
              <a>&larr; </a>
            </Link>
            Latest Jobs
          </h2>
          <div className="grid">{jobs.data.length && renderJobs()}</div>
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
  const jobsApi = await fetch(`${baseApiUrl}/job`);
  const jobs = await jobsApi.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      jobs,
    },
  };
}

export default Job;
