import Link from "next/link";

/* components */
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout title="Next.js with Sequelize | Home Page">
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

          <div className="grid">
            <Link href="/user">
              <a className="card">
                <h3>Users &rarr;</h3>
                <p>Listed users of this web application.</p>
              </a>
            </Link>

            <Link href="/post">
              <a className="card">
                <h3>Posts &rarr;</h3>
                <p>Post collection from users of this web application.</p>
              </a>
            </Link>

            <Link href="/job">
              <a className="card">
                <h3>Jobs &rarr;</h3>
                <p>Job Post collection from users of this web application.</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
}
