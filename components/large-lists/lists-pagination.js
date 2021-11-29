import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function ListsPagination() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  return (
    currentPosts.length > 0 && (
      <Stack spacing={2} alignItems="center">
        <Box style={{ maxHeight: "80vh", overflow: "auto" }}>
          {currentPosts.map((item, index) => (
            <div key={index}>
              <Box pt={3}>
                <Card>
                  <div style={{ backgroundColor: "#99CCFF" }}>
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
        </Box>
        <Pagination count={10} page={currentPage} onChange={handleChange} />
      </Stack>
    )
  );
}

export default ListsPagination;
