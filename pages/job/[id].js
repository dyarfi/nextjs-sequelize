import Link from "next/link";

/* components */
import Layout from "../../components/layout/Layout";

function Job({ job }) {
  return (
    <Layout title="Next.js with Sequelize | Post Page - Detail">
      <div className="container">
        <main className="content-detail">
          <div className="card">
            <Link
              href={{
                pathname: "/job",
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
              {job.data.title}
              <small
                style={{
                  display: "block",
                  fontWeight: "normal",
                  marginTop: ".75rem",
                }}
              >
                Posted: {job.data.createdAt}
              </small>
            </h2>
            <p>{job.data.content}</p>
            <p>Email: {job.data.emailTo}</p>
            <p>Report to: {job.data.reportManager}</p>
            <p>Limit :{job.data.dateLimit}</p>
            <hr />
            By: {job.data.user.firstName || ""} {job.data.user.lastName || ""}
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
  const jobApi = await fetch(`${baseApiUrl}/job/${query.id}`);
  const job = await jobApi.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      job,
    },
  };
}

export default Job;
