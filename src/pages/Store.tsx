import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import Box from "components/common/Box";
import { Flex, FlexColumn } from "components/common/flex";

import coin from "assets/icons/coin.svg";
import knife from "assets/images/knife.png";

const Header = () => {
  return (
    <Box mb="35px">
      <Typography variant="h4" fontWeight="600">
        Filters
      </Typography>
      <Flex>
        <Flex>
          <Box>
            <img src="" alt="" />
          </Box>
          <Box>
            <img src="" alt="" />
          </Box>
        </Flex>
        <Flex>
          <Flex>
            <Typography>From</Typography>
            <TextField />
          </Flex>
          <Flex>
            <Typography>To</Typography>
            <TextField />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const Card = ({ title, imageUrl, brand, description, price }: any) => {
  return (
    <FlexColumn
      style={{
        padding: 22,
        background: "linear-gradient(180deg, #3F3574 0%, #221C3F 100%)",
        borderRadius: 11,
      }}
      gap="4px"
    >
      <img src={imageUrl} alt={title} />
      <Typography
        fontSize="10px"
        fontWeight="600"
        style={{ textTransform: "uppercase" }}
      >
        {title}
      </Typography>
      <Typography fontSize="9px" fontWeight="600" color="#A0A6B2">
        {brand}
      </Typography>
      <Typography fontSize="9px" fontWeight="600" color="#A0A6B2">
        {description}
      </Typography>
      <Flex gap="7px">
        <img src={coin} alt="Coin" />
        <Typography fontSize="14px" fontWeight="600" color="#8268E6">
          {price}
        </Typography>
      </Flex>
    </FlexColumn>
  );
};

const ProductsList = ({ products }: { products: any[] }) => {
  return (
    <Flex flexWrap="wrap" gap="34px">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </Flex>
  );
};

interface Props {}

const Store = (props: Props) => {
  return (
    <Box p="47px 83px">
      {/* <Header /> */}
      <ProductsList
        products={[
          {
            id: "1",
            imageUrl: knife,
            title: "Knife",
            brand: "Autotronika",
            description: "MW",
            price: 5000,
          },
          {
            id: "2",
            imageUrl: knife,
            title: "Knife 2",
            brand: "Autotronika",
            description: "MW",
            price: 5000,
          },
          {
            id: "3",
            imageUrl: knife,
            title: "Knife",
            brand: "Autotronika",
            description: "MW",
            price: 5000,
          },
          {
            id: "4",
            imageUrl: knife,
            title: "Knife 2",
            brand: "Autotronika",
            description: "MW",
            price: 5000,
          },
        ]}
      />
    </Box>
  );
};

export default Store;
