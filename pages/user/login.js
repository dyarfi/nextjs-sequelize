import Link from "next/link";

/* components */
import Layout from "../../components/layout/Layout";
import FormLogin from "../../components/form/FormLogin";

function Login({ props }) {
  return (
    <Layout title="Next.js with Sequelize | Login page">
      <div className="container">
        <main className="content-detail">
          <Link
            href={{
              pathname: "/user",
            }}
          >
            <a>&larr; Back</a>
          </Link>
          <FormLogin />
        </main>
      </div>
    </Layout>
  );
}

export default Login;
