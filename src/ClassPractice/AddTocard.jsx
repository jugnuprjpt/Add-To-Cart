import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const card = [
  {
    id: 1,
    image: "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
    name: "Virat Kohli",
    price: 50000,
    descrption:
      "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for the Delhi in Indian domestic cricket.",
  },
  {
    id: 2,
    image:
      "https://static.toiimg.com/thumb/msid-99683552,width-1280,resizemode-4/99683552.jpg",
    name: "MS Dhoni",
    price: 50000,
    descrption:
      "Mahendra Singh Dhoni, commonly known as MS Dhoni, is a former Indian cricketer and captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014, who plays as a Wicket-keeper-Batsman",
  },
  {
    id: 3,
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/12/31/2563804-ronaldo-100.jpg",
    name: "Cristiano Ronaldo",
    price: 50,
    descrption:
      "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Professional League..",
  },
  {
    id: 4,
    image:
      "https://c8.alamy.com/comp/2GBXE04/file-photo-dated-03-10-2018-of-barcelonas-lionel-messi-as-he-celebrates-scoring-his-sides-third-goal-issue-date-thursday-august-5-2021-2GBXE04.jpg",
    name: "Lionel Messi",
    price: 10,
    descrption:
      "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team",
  },
];

function AddTocard() {
  const [cardAdded, setCardAdded] = useState([]);
  

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cardAdded'));
    if (storedData) {
      setCardAdded(storedData);
    }
  }, []);

  useEffect(() => {
    if(cardAdded.length > 0)
    localStorage.setItem('cardAdded', JSON.stringify(cardAdded));
  }, [cardAdded]);


  const handleClick = (data) => {
    //  const newUser = [...cardAdded,data]
    //  setCardAdded(newUser)
    //console.log(data)
    setCardAdded((prev) => [...prev, data]);
  };
  const priceList = cardAdded.reduce((acc, curr) => acc + curr.price, 0);
  const handleDelete = (id) => {
    const sampleUsers = cardAdded.filter((product,index) => index !== id);
    setCardAdded(sampleUsers);
 
  };

  return (
    <>
      <p>card Price:- {priceList}</p>
      <div
        className="pd-2"
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-around",
        }}
      >
        {card.map((item, id) => (
          <div key={item.id}>
            <Card key={item.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.descrption}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => handleClick(item)}
                  size="medium"
                  variant="contained"
                  color="success"
                >
                  Click
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>

      <div
        className="pd-2"
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-around",
        }}
      >
        {cardAdded.map((product, index) => (
          <div key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image={product.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.descrption}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => handleDelete(index)}
                  size="medium"
                  variant="contained"
                  color="success"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddTocard;
