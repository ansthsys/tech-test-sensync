import {
  Breadcrumb,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Path } from "../../routes/pathConstants";
import Page404Error from "../error/Page404Error"
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch"

export default function BookCreatePage() {
  const { id } = useParams();
  const { data, error } = useFetch(`/api/books/${id}`)
  const [book, setBook] = useState({});
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handlerChange(e) {
    const { name, value } = e.target;

    setBook((prev) => {
      return {
        ...prev,
        [name]: value !== '' ? value : '',
      };
    });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    fetch(`/api/books/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data && res.message) {
          alert("Success update book");
          window.location.reload();
        } else {
          setErrors((prev) => {
            return {
              ...prev,
              ...res,
            };
          });

          throw new Error("Failed update book");
        }
      })
      .catch((err) => {
        alert(err ?? "Something went wrong");
      })
      .finally(() => {
        setValidated(true);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (data) {
      setBook((prev) => {
        return {
          title: data.title,
          author: data.author,
          year: data.year,
        }
      })
    }
  }, [data])

  if (error) {
    return <Page404Error error={error} />
  }

  return (
    <Container className="my-5">
      <Stack direction="horizontal">
        <h3 className="me-auto">Edit Book</h3>

        <Breadcrumb className="mt-2">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Edit</Breadcrumb.Item>
        </Breadcrumb>
      </Stack>

      <hr />

      <Stack direction="horizontal">
        <Link to={Path.BOOK.INDEX} className="btn btn-primary ms-auto mb-3">
          Back
        </Link>
      </Stack>

      <Row>
        <Col xs={11} md={8} lg={6} className="mx-auto">
          <Card body>
            <Form noValidate validated={validated} onSubmit={handlerSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Title"
                  name="title"
                  defaultValue={book.title}
                  onChange={handlerChange}
                  type="text"
                  required
                />
                {errors?.title &&
                  errors?.title?.map((i, idx) => {
                    return (
                      <Form.Control.Feedback key={idx} type="invalid">
                        {i}
                      </Form.Control.Feedback>
                    );
                  })}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  placeholder="Author"
                  name="author"
                  defaultValue={book.author}
                  onChange={handlerChange}
                  type="text"
                  required
                />
                {errors?.author &&
                  errors?.author?.map((i, idx) => {
                    return (
                      <Form.Control.Feedback key={idx} type="invalid">
                        {i}
                      </Form.Control.Feedback>
                    );
                  })}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Release Year</Form.Label>
                <Form.Control
                  placeholder="Release Year"
                  defaultValue={book.year}
                  onChange={handlerChange}
                  type="number"
                  id="year"
                  name="year"
                  min="1900"
                  max="2100"
                  required
                />
                {errors?.year &&
                  errors?.year?.map((i, idx) => {
                    return (
                      <Form.Control.Feedback key={idx} type="invalid">
                        {i}
                      </Form.Control.Feedback>
                    );
                  })}
              </Form.Group>

              <Form.Group className="mb-3 d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  Save
                </button>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
