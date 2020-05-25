import React from "react";
import { Link } from "react-router-dom";
import { Button, Heading } from "@chakra-ui/core";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className="home">
      <Heading>Visualize Sorting Algorithms...</Heading>
      <ul className="home-alog-list">
        <li>
          <Link to="/merge-sort">
            <Button size="md" variantColor="cyan">
              Merge sort
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/quick-sort">
            <Button size="md" variantColor="cyan">
              Quick sort
            </Button>
          </Link>
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default Home;
