import React from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import routes from "routes";

function ShoppingList() {
  const location = useLocation();

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

	return (
    <>
    	<Container fluid>
        <h1>{getBrandText()}</h1>
			</Container>
		</>
	);
}

export default ShoppingList;