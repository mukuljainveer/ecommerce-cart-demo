import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Home() {
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([
    {
      name: "Sweater",
      description: "Highly effective winter apparel which works even in Alaska",
      price: "250",
      quantity: 1,
    },
    {
      name: "Sweater1",
      description: "effective winter apparel which works even in Alaska",
      price: "350",
      quantity: 2,
    },
  ]);

  useEffect(() => {
    let total = 0;

    products.map((item) => {
      total += item.price * item.quantity;
    });

    setCartTotal(total);
  }, [products]);

  return (
    <DefaultLayout>
      <Box textAlign="center" fontWeight="bold" fontSize="24px" padding={2}>
        Products
      </Box>
      <Box margin="0px 20px">
        <table style={{ width: "100%" }}>
          <thead>
            <tr
              style={{
                paddingBottom: "30px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <td style={{ paddingBottom: "10px" }}>Name</td>
              <td>Price</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>
                  {" "}
                  <Box display="flex" alignItems="center">
                    <img
                      style={{ borderRadius: "5px" }}
                      height="100px"
                      width="100px"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    />
                    <Box ml={2} flexDirection="column" display="flex">
                      <Box fontSize="20px" mb={1}>
                        {item.name}
                      </Box>
                      <Box>{item.description}</Box>
                    </Box>
                  </Box>
                </td>
                <td>{item.price}</td>
                <td>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      onClick={() => {
                        if (item.quantity > 1) item.quantity -= 1;
                        setProducts([...products]);
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Box>{item.quantity}</Box>
                    <IconButton
                      onClick={() => {
                        item.quantity += 1;
                        setProducts([...products]);
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </td>
              </tr>
            ))}
            <tr
              style={{
                paddingBottom: "30px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <td style={{ paddingBottom: "10px" }}></td>
              <td>Total</td>
              <td style={{ paddingLeft: "25px" }}>{cartTotal}</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </DefaultLayout>
  );
}

export default Home;
