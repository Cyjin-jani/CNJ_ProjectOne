import Layout from 'components/Layout';
import axios from 'axios';
import { useState } from 'react';

const DEFAULT_DATA = {
  title: '',
  description: '',
  link: '',
  priority: '2',
  timeToFinish: 60,
};

const ResourceCreate = () => {
  const [form, setForm] = useState(DEFAULT_DATA);

  const submitForm = (e) => {
    // alert(JSON.stringify(form));
    e.preventDefault();
    axios.post('/api/resources', form);
  };

  const resetForm = () => {
    setForm(DEFAULT_DATA);
  };

  const handleChange = (e) => {
    // const name = e.currentTarget.name;
    // const value = e.currentTarget.value;
    const { name, value } = e.currentTarget;
    console.log('name: ', e.currentTarget.name);
    setForm({ ...form, [name]: value });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Learn nextjs and Sanity IO"
                      value={form.title}
                      onChange={handleChange}
                      name="title"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Learn these technologies because they are very popular and enable better SEO"
                      value={form.description}
                      onChange={handleChange}
                      name="description"
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="https://academy.eincode.com"
                      value={form.link}
                      onChange={handleChange}
                      name="link"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={form.priority}
                        onChange={handleChange}
                        name="priority"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="60"
                      value={form.timeToFinish}
                      onChange={handleChange}
                      name="timeToFinish"
                    />
                  </div>
                  <p className="help">Time is in minutes</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link" onClick={submitForm}>
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      className="button is-link is-light"
                      type="button"
                      onClick={resetForm}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
