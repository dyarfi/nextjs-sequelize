import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/* Middleware utils */
import { getAppCookies } from "../../middleware/utils";

/* components */
import Layout from "../../components/layout/Layout";
import FormPost from "../../components/form/FormPost";

/* post schemas */
const FORM_DATA_POST = {
  title: {
    value: "",
    label: "Title",
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: "Please insert valid Title",
    },
  },
  content: {
    value: "",
    label: "Content",
    min: 6,
    max: 1500,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: "Please insert valid Content",
    },
  },
};

function Post(props) {
  const router = useRouter();

  const { user, post, url, token } = props;

  const { baseApiUrl } = props;

  const [stateFormData, setStateFormData] = useState(FORM_DATA_POST);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormMessage, setStateFormMessage] = useState({});
  const [stateFormValid, setStateFormValid] = useState(false);

  async function onSubmitHandler(e) {
    e.preventDefault();

    let data = { ...stateFormData };

    /* email */
    data = { ...data, title: data.title.value || "" };
    /* content */
    data = { ...data, content: data.content.value || "" };

    /* validation handler */
    const isValid = validationHandler(stateFormData);

    if (isValid) {
      // Call an external API endpoint to get posts.
      // You can use any data fetching library
      const postApi = await fetch(`${baseApiUrl}/post/[slug]`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token || "",
        },
        body: JSON.stringify(data),
      });

      let result = await postApi.json();
      if (result.message && result.data && result.message === "done") {
        router.push({
          pathname: result.data.slug ? `/post/${result.data.slug}` : "/post",
        });
      } else {
        setStateFormMessage(result);
      }
    }
  }

  function onChangeHandler(e) {
    const { name, value } = e.currentTarget;

    setStateFormData({
      ...stateFormData,
      [name]: {
        ...stateFormData[name],
        value,
      },
    });

    /* validation handler */
    validationHandler(stateFormData, e);
  }

  function validationHandler(states, e) {
    const input = (e && e.target.name) || "";
    const errors = [];
    let isValid = true;

    if (input) {
      if (states[input].required) {
        if (!states[input].value) {
          errors[input] = {
            hint: `${states[e.target.name].label} required`,
            isInvalid: true,
          };
          isValid = false;
        }
      }
      if (
        states[input].value &&
        states[input].min > states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} min ${states[input].min}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].value &&
        states[input].max < states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} max ${states[input].max}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].validator !== null &&
        typeof states[input].validator === "object"
      ) {
        if (
          states[input].value &&
          !states[input].validator.regEx.test(states[input].value)
        ) {
          errors[input] = {
            hint: states[input].validator.error,
            isInvalid: true,
          };
          isValid = false;
        }
      }
    } else {
      Object.entries(states).forEach((item) => {
        item.forEach((field) => {
          errors[item[0]] = "";
          if (field.required) {
            if (!field.value) {
              errors[item[0]] = {
                hint: `${field.label} required`,
                isInvalid: true,
              };
              isValid = false;
            }
          }
          if (field.value && field.min >= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} min ${field.min}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.value && field.max <= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} max ${field.max}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.validator !== null && typeof field.validator === "object") {
            if (field.value && !field.validator.regEx.test(field.value)) {
              errors[item[0]] = {
                hint: field.validator.error,
                isInvalid: true,
              };
              isValid = false;
            }
          }
        });
      });
    }
    if (isValid) {
      setStateFormValid(isValid);
    }
    setStateFormError({
      ...errors,
    });
    return isValid;
  }

  function renderPostForm() {
    return (
      <>
        <Link
          href={{
            pathname: "/post",
          }}
        >
          <a>&larr; Back</a>
        </Link>
        <FormPost
          onSubmit={onSubmitHandler}
          onChange={onChangeHandler}
          stateFormData={stateFormData}
          stateFormError={stateFormError}
          stateFormValid={stateFormValid}
          stateFormMessage={stateFormMessage}
        />
      </>
    );
  }

  function renderPostList() {
    return post.data ? (
      <div className="card">
        <Link
          href={{
            pathname: "/post",
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
          {post.data.title}
          <small
            style={{
              display: "block",
              fontWeight: "normal",
              marginTop: ".75rem",
            }}
          >
            Posted: {post.data.createdAt}
          </small>
        </h2>
        <p>{post.data.content}</p>
        <hr />
        By: {post.data.user.firstName || ""} {post.data.user.lastName || ""}
      </div>
    ) : (
      <div className="container">
        <div class="card">Data Not Found</div>
      </div>
    );
  }

  return (
    <Layout title="Next.js with Sequelize | Post Page - Detail">
      <div className="container">
        <main className="content-detail">
          {url === "/post/add" ? renderPostForm() : renderPostList()}
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
  const token = getAppCookies(req).token || "";

  const host = process.env.NODE_ENV === "production" ? "https://" : "http://";
  const baseApiUrl = `${host}${req.headers.host}/api`;

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const postApi = await fetch(`${baseApiUrl}/post/${query.slug}`);
  const post = await postApi.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      baseApiUrl,
      post,
      url,
      token,
    },
  };
}

export default Post;
