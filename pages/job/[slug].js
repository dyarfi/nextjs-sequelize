import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* utils */
import { absoluteUrl, getAppCookies } from '../../middleware/utils';

/* components */
import Layout from '../../components/layout/Layout';
import FormJob from '../../components/form/FormJob';

/* post schemas */
const FORM_DATA_JOB = {
  title: {
    value: '',
    label: 'Title',
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid Title',
    },
  },
  content: {
    value: '',
    label: 'Content',
    min: 6,
    max: 1500,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid Content',
    },
  },
  reportManager: {
    value: '',
    label: 'Content',
    min: 6,
    max: 1500,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid Report Manager',
    },
  },
  dateLimit: {
    value: '',
    label: 'Date',
    min: 6,
    max: 24,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid Date limit',
    },
  },
};

function Job(props) {
  const router = useRouter();

  const { origin, job, token } = props;

  const { baseApiUrl } = props;
  const [loading, setLoading] = useState(false);

  const [stateFormData, setStateFormData] = useState(FORM_DATA_JOB);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormMessage, setStateFormMessage] = useState({});
  const [stateFormValid, setStateFormValid] = useState(false);

  async function onSubmitHandler(e) {
    e.preventDefault();

    let data = { ...stateFormData };

    /* title */
    data = { ...data, title: data.title.value || '' };
    /* content */
    data = { ...data, content: data.content.value || '' };
    /* reportManager */
    data = { ...data, reportManager: data.reportManager.value || '' };
    /* dateLimit */
    data = { ...data, dateLimit: data.dateLimit.value || '' };

    /* validation handler */
    const isValid = validationHandler(stateFormData);

    if (isValid) {
      // Call an external API endpoint to get posts.
      // You can use any data fetching library
      setLoading(!loading);
      const jobApi = await fetch(`${baseApiUrl}/job/[slug]`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: token || '',
        },
        body: JSON.stringify(data),
      });

      let result = await jobApi.json();
      if (
        result.status === 'success' &&
        result.message &&
        result.message === 'done' &&
        result.data
      ) {
        router.push({
          pathname: result.data.slug ? `/job/${result.data.slug}` : '/job',
        });
      } else {
        setStateFormMessage(result);
      }
      setLoading(false);
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
    const input = (e && e.target.name) || '';
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
        typeof states[input].validator === 'object'
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
      Object.entries(states).forEach(item => {
        item.forEach(field => {
          errors[item[0]] = '';
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
          if (field.validator !== null && typeof field.validator === 'object') {
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

  function renderJobForm() {
    return (
      <>
        <Link
          href={{
            pathname: '/job',
          }}
        >
          <a>&larr; Back</a>
        </Link>
        <FormJob
          onSubmit={onSubmitHandler}
          onChange={onChangeHandler}
          loading={loading}
          stateFormData={stateFormData}
          stateFormError={stateFormError}
          stateFormValid={stateFormValid}
          stateFormMessage={stateFormMessage}
        />
      </>
    );
  }

  function renderJobList() {
    return (
      <div className="card">
        <Link
          href={{
            pathname: '/job',
          }}
        >
          <a>&larr; Back</a>
        </Link>
        <h2
          className="sub-title"
          style={{
            display: 'block',
            marginTop: '.75rem',
          }}
        >
          {job.data.title}
          <small
            style={{
              display: 'block',
              fontWeight: 'normal',
              marginTop: '.75rem',
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
        By: {job.data.user.firstName || ''} {job.data.user.lastName || ''}
      </div>
    );
  }

  return (
    <Layout
      title={`Next.js with Sequelize | Job Page - ${job.data &&
        job.data.title}`}
      url={`${origin}${router.asPath}`}
      origin={origin}
    >
      <div className="container">
        <main className="content-detail">
          {router.asPath === '/job/add' ? renderJobForm() : renderJobList()}
        </main>
      </div>
    </Layout>
  );
}

/* getServerSideProps */
export async function getServerSideProps(context) {
  const { query, req } = context;
  const { origin } = absoluteUrl(req);

  const token = getAppCookies(req).token || '';
  const baseApiUrl = `${origin}/api`;

  let job = {};

  if (query.slug !== 'add') {
    const jobApi = await fetch(`${baseApiUrl}/job/${query.slug}`);
    job = await jobApi.json();
  }

  return {
    props: {
      origin,
      baseApiUrl,
      job,
      token,
    },
  };
}

export default Job;
