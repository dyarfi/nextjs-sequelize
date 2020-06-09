import Link from "next/link";

/* components */
import Layout from "../../components/layout/Layout";
import FormRegister from "../../components/form/FormRegister";

function Register({ props }) {
  return (
    <Layout title="Next.js with Sequelize | Register page">
      <div className="container">
        <main className="content-detail">
          <Link
            href={{
              pathname: "/user",
            }}
          >
            <a>&larr; Back</a>
          </Link>
          <FormRegister />
        </main>
      </div>
    </Layout>
  );
}

export default Register;
