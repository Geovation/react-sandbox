import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState } from "react";
import faker from "faker";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function InfiniteScrollList() {
  const data = new Array(1000).fill().map((value, id) => ({
    id: id,
    title: faker.lorem.words(5),
    body: faker.lorem.sentences(8)
  }));

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)));
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }));
  };

  return (
    <div style={{ maxWidth: "85vw" }}>
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        height={"80vh"}
        loader={<h4>Loading...</h4>}
      >
        {current &&
          current.map((item, index) => (
            <div key={index}>
              <Box pt={3}>
                <Card>
                  <div style={{ backgroundColor: "#CCFFCC" }}>
                    <CardContent>
                      <h3>{`${item.title}-${item.id}`}</h3>
                      <p>{item.body}</p>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </div>
                </Card>
              </Box>
            </div>
          ))}
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScrollList;
