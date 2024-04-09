import React, { useState } from "react";
import { Carousel, Button, Form, Input } from "antd";

export default function App() {
  const [tracks, setTracks] = useState([]);

  const carouselStyles = {
    width: "640px",
    border: "solid 1px #000",
    margin: "auto",
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    fetchData(values.searchTerm, values.limit);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  async function fetchData(searchTerm, limit) {
    const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";
    const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    setTracks(data);
  }

  function embedded(id) {
    return `https://open.spotify.com/embed/track/${id}?utm_source=generator`;
  }

  function trackToJSX(trackJSON) {
    const embedURL = embedded(trackJSON.id);
    return (
      <iframe
        key={trackJSON.id}
        src={embedURL}
        width="100%"
        border="0"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    );
  }

  return (
    <>
      <header>
        <h1>Spotify Demo</h1>
      </header>
      <main>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Search Term:"
            name="searchTerm"
            initialValue={"Built To Spill"}
            rules={[
              {
                required: true,
                message: "Please input a search term!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Limit:"
            name="limit"
            initialValue={5}
            rules={[
              {
                required: true,
                message: "Please input a number of tracks to display!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div style={carouselStyles}>
          <Carousel dotPosition="top">{tracks.map(trackToJSX)}</Carousel>
        </div>
      </main>
    </>
  );
}
