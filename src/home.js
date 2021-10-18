import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Navbar,
  Row,
  Button,
  Image,
  Form,
  Card,
} from "react-bootstrap";
import { Link } from "react-scroll";
import { BackgrounHome, LikeIcon, LinkIcon, ResponsiveIcon } from "./assets";
import { useDispatch, useSelector } from "react-redux";
import { setShort } from "./config/Redux/Action";
import CopyToClipboard from "react-copy-to-clipboard";

const Home = () => {
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const { data, loading, urlasli } = useSelector((state) => state.shortReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(data).length === 1) {
      setShow(true);
    } else {
      setShow(false);
      dispatch({
        type: "UPDATE_URL",
        payload: "",
      });
    }
  }, [data, loading, dispatch, url]);

  const Short = (e) => {
    e.preventDefault();
    dispatch(setShort(url));
  };

  return (
    <div>
      <Navbar className="shadow-sm">
        <Container>
          <Row className="w-100 my-1">
            <Col>
              <p className="mt-1 mb-2"></p>
            </Col>
            <Col className="text-center judul">
              <Navbar.Brand
                href="/"
                className="m-0"
                style={{ fontSize: "24px" }}>
                ShortLink
              </Navbar.Brand>
            </Col>
            <Col>
              <p className="text-end mt-1 mb-2"></p>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container>
        <div>
          <div className="text-center">
            <h1 className="mt-5 mb-0" style={{ fontWeight: "bold" }}>
              Short links, big results
            </h1>
            <p style={{ fontWeight: "lighter" }}>
              A URL shortener built with powerful tools to help you grow and
              protect your brand.
            </p>
            <Link to="short">
              <Button
                variant="light"
                size="lg"
                className="border-0 text-white w-10"
                style={{ backgroundColor: "#fd6a29" }}>
                Get started
              </Button>
            </Link>
            <Col sm="12" md="10" lg="9">
              <Image
                className="mt-5 w-100"
                // style={{ width: "90%" }}
                src={BackgrounHome}
              />
            </Col>
          </div>
        </div>
      </Container>
      <div id="short" style={{ backgroundColor: "#282c34" }}>
        <Container className="text-white py-4">
          <Form onSubmit={Short}>
            <p className="text-danger m-0">{data.errormessage}</p>
            <Row>
              <Col md="8" lg="9" className="my-1">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Shorten your link"
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </Col>
              <Col className="my-1">
                <Button
                  variant="light"
                  size="lg"
                  className={
                    loading
                      ? `border-0 text-white w-100 disabled`
                      : `border-0 text-white w-100`
                  }
                  style={{ backgroundColor: "#fd6a29" }}
                  type="submit">
                  Shorten
                </Button>
              </Col>
            </Row>
          </Form>
          <p
            className="text-center mb-2"
            style={{ fontWeight: "lighter", fontSize: "14px" }}>
            By clicking SHORTEN, you are agreeing to v.gd’s Terms of Service and
            Privacy Policy
          </p>
          {show ? (
            <Card className="text-dark" style={{ fontSize: "24px" }}>
              <Container className="py-2">
                <Row>
                  <Col md="6" lg="7" className="my-1">
                    <p className="m-0" style={{ fontWeight: "lighter" }}>
                      {urlasli}
                    </p>
                  </Col>
                  <Col md="4" lg="3" className="my-1">
                    <p className="text-primary m-0">{data.shorturl}</p>
                  </Col>
                  <Col md="2" lg="2" className="my-1">
                    <CopyToClipboard text={data.shorturl}>
                      <Button variant="outline-dark" className="w-100">
                        Copy
                      </Button>
                    </CopyToClipboard>
                  </Col>
                </Row>
              </Container>
            </Card>
          ) : null}
        </Container>
      </div>
      <Container className="text-center my-4">
        <Row xs="1" md="3">
          <Col>
            <Row xs="1">
              <Col>
                <Image src={LikeIcon} />
              </Col>
              <Col>
                <h4 style={{ fontWeight: "bold" }}>Easy</h4>
              </Col>
              <Col>
                <p>
                  ShortURL is easy and fast, enter the long link to get your
                  shortened link
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xs="1">
              <Col>
                <Image src={LinkIcon} />
              </Col>
              <Col>
                <h4 style={{ fontWeight: "bold" }}>Shortened</h4>
              </Col>
              <Col>
                <p>
                  Use any link, no matter what size, ShortURL always shortens
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xs="1">
              <Col>
                <Image src={ResponsiveIcon} />
              </Col>
              <Col>
                <h4 style={{ fontWeight: "bold" }}>Devices</h4>
              </Col>
              <Col>
                <p>Compatible with smartphones, tablets and desktop</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <a
          href="https://is.gd/index.php"
          className=" link-dark"
          target="_blank"
          rel="noreferrer">
          https://is.gd/index.php
        </a>
      </Container>
      <Navbar className=" border-top">
        <p className="m-auto mb-2" style={{ fontWeight: "lighter" }}>
          Made With Love
        </p>
      </Navbar>
    </div>
  );
};

export default Home;
