import { useRef, useEffect } from "react";
import "./syntax.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Bull() {
  // Refs for all sections
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const container5Ref = useRef(null);
  const container6Ref = useRef(null);
  const container7Ref = useRef(null);
  const h5Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'visible' class to the element when it enters the viewport
            entry.target.classList.add("visible");

            // If the target is .container-2, also add 'visible' to its h3 child
            if (entry.target === containerRef.current) {
              const h3Element = entry.target.querySelector("h3");
              if (h3Element) {
                h3Element.classList.add("visible");
              }
            }

            observer.unobserve(entry.target); // Stop observing after the animation
          }
        });
      },
      {
        threshold: 0.5, // 50% of the element needs to be visible for the animation to trigger
      }
    );

    // Array of all elements to observe
    const elementsToObserve = [
      containerRef.current,
      ...cardRefs.current,
      container5Ref.current,
      container6Ref.current,
      container7Ref.current,
      h5Ref.current,
    ].filter(Boolean); // Filter out null/undefined refs

    // Observe all elements
    elementsToObserve.forEach((element) => observer.observe(element));

    // Cleanup the observer when the component unmounts
    return () => {
      elementsToObserve.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="image-container">
        <Image className="img-1" src="image-1.jpg" alt="Background Image" />
        <h1 className="overlay-text">
          Welcome to the Visionary Hub of MrBigBull007 - Where the Future of
          Finance Takes Shape!
        </h1>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-top">Twitter!</Tooltip>}
        >
          <a
            href="https://x.com/MrBigBull007?t=cCpmQ3Pr1Lid0CnyxagVJg&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="Button-1" variant="warning">
              <img src="twitter.png" alt="Twitter" />
            </Button>
          </a>
        </OverlayTrigger>
      </div>

      <div className="container-2" ref={containerRef}>
        <h3>
          Step into a digital ecosystem where the past, present, and future of
          cryptocurrency converge. Here at MrBigBull007, we&apos;re not just
          observers of the meteoric rise of Bitcoin from $0.25 to $98,200;
          we&apos;re pioneers shaping the narrative of tomorrow&apos;s economy.
        </h3>
      </div>

      <h1 className="h-1">Why Invest with Us? </h1>
      <br />
      <br />

      <div>
        <Container className="container-3">
          <Row className="gap-5">
            <Col className="text-1">
              <Card
                style={{ width: "18rem", height: "350px" }}
                ref={(el) => (cardRefs.current[0] = el)}
              >
                <Card.Body>
                  <Card.Title>Proven Track Record</Card.Title>
                  <Card.Text>
                    Witness the journey of Bitcoin through the years - we’ve
                    been part of this evolution, understanding the market’s
                    pulse. Innovative Collaborations: Our platform is a nexus of
                    creativity and technology. We’ve initiated collaborations
                    that fuse cutting-edge AI with financial foresight, aiming
                    to redefine what’s possible in the blockchain space.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="text-2">
              <Card
                style={{ width: "18rem", height: "350px" }}
                ref={(el) => (cardRefs.current[1] = el)}
              >
                <Card.Body>
                  <Card.Title>Community and Growth</Card.Title>
                  <Card.Text>
                    Our community is vibrant, engaged, and forward-thinking.
                    We’re not just building projects; we’re building a movement
                    where every member can make it together. Strategic Vision:
                    From envisioning the next viral tech to pioneering new ways
                    to leverage blockchain, we’re committed to breaking
                    boundaries and setting new standards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "18rem", height: "350px" }}
                ref={(el) => (cardRefs.current[2] = el)}
              >
                <Card.Body>
                  <Card.Title>Strategic Vision</Card.Title>
                  <Card.Text>
                    From envisioning the next viral tech to pioneering new ways
                    to leverage blockchain, we’re committed to breaking
                    boundaries and setting new standards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <h1 className="h-2">Investment Opportunities</h1>
      <div>
        <Container className="container-5" ref={container5Ref}>
          <Row>
            {/* Text on the left */}
            <Col md={6} className="join-1 text-left">
              <br />
              <br />
              <br />
              <p>
                <strong>Early Access to Groundbreaking Projects:</strong> Be at
                the forefront of revolutionary tech and finance integrations.
              </p>
              <p>
                <strong>Exclusive Insights and Analyses:</strong> Leverage our
                deep market knowledge and innovative approaches to stay ahead of
                the curve.
              </p>
              <p>
                <strong>Shared Success:</strong> Our model is built on the
                principle that <q>WILL MAKE IT</q> We - together. Your
                investment grows with our collective success.
              </p>
            </Col>

            {/* Image on the right */}
            <Col md={6} className="join-1 d-flex justify-content-end">
              <Image
                className="img-1"
                src="image-2.jpg"
                alt="Background Image"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>

      <h1 className="h-3">Join Us on This Journey</h1>
      <br />
      <br />
      <div>
        <Container className="container-6" ref={container6Ref}>
          <Row>
            <Col md={6} className="new-1">
              <strong> Explore:</strong> Dive into our portfolio of past
              successes and upcoming ventures. Engage: Become part of a
              community where your voice contributes to our next big leap.
              Invest: Secure your stake in the future of finance. Let &apis; not
              just watch the market; let&apis;s lead it.
            </Col>

            <Col className="join-2">
              <Image
                className="img-2"
                src="image-3.jpg"
                alt="Background Image"
                fluid
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <h1 className="h-4">ARE YOU READY?</h1>

      <div>
        <Container className="container-7" ref={container7Ref}>
          <Row>
            <Col md={6} className="new-2">
              At
              <a
                href="https://x.com/MrBigBull007?t=cCpmQ3Pr1Lid0CnyxagVJg&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                MrBigBull007,
              </a>{" "}
              we&apos;re crafting more than just technology; we&apos;re crafting
              the future. Are you ready to be part of something phenomenal?
              Let&apos;s make history together.
            </Col>
            <Col className="join-6">
              <Image
                className="img-4"
                src="image-4.png"
                alt="Background Image"
                fluid
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <h5 className="h-5" ref={h5Ref}>
          This introduction aims to capture the essence of your online presence
          and the ambitious spirit evident in your posts, promising investors a
          chance to be part of a transformative journey in the world of
          cryptocurrency and beyond.
        </h5>
      </div>
    </>
  );
}

export default Bull;
