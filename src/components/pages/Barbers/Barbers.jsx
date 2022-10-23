import './Barbers.css';
import React, { useContext, useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import SearchFilter from 'react-filter-search';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

function Barbers() {
  const [arrow, setArrow] = useState(
    'https://media.baamboozle.com/uploads/images/472614/1652055757_15929_gif-url.gif'
  );
  const [searchInput, setSearchInput] = useState('');
  const [searchSelect, setSearchSelect] = useState('');
  const [productData, setProductData] = useState([]);
  let [loading, setLoading] = useState(
    <div className="d-flex justify-content-center">
      <img src={arrow} alt="" />
    </div>
  );
  const [visible, setVisible] = useState(3);

  async function getResponse() {
    try {
      const res = await fetch(
        'https://my-json-server.typicode.com/shimonzhion/jsonBarber/barbers'
      ).then((res) => res.json());
      setProductData(await res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading();
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getResponse();
    }, 2000);
  }, []);
  const showMoreItems = (showLess) => {
    if (visible == 18) {
      return setArrow('');
    } else if (visible > 18) {
      return setVisible(3);
    }
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="div-c d-flex justify-content-center bg-black">
      <div className="div-barbers">
        <div className="d-flex">
          <InputGroup className="search-input-barbers ">
            <InputGroup.Text className={' bg-light text-light-primary'}>
              <BiSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={' text-black '}
            />
          </InputGroup>
          <div>
            <select
              className="select-filter"
              // aria-label="Default select example"
              onChange={(e) => setSearchSelect(e.target.value)}
            >
              <option value="">select city</option>
              <option value={'Rishon Lzion'}>Rishon Lzion</option>
              <option value="Tel Aviv-Yafo">Tel Aviv-Yafo</option>
              <option value="Beer Sheva">Beer Sheva</option>
            </select>
          </div>
        </div>
        {loading}
        <div className="d-flex flex-wrap justify-content-center justify-content-around ">
          <SearchFilter
            value={searchInput || searchSelect}
            data={productData}
            renderResults={(results) =>
              results?.slice(0, visible).map((Item) => {
                return (
                  <Card className="card bg-dark mt-5  bg-opacity-50 text-light">
                    <CardMedia
                      className="img-card"
                      component="img"
                      image={Item.img}
                      alt="barber-Img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {Item.title}
                      </Typography>
                      <Typography
                        className="text-light"
                        variant=""
                        color="text.secondary"
                      >
                        {Item.location}
                      </Typography>
                      <Typography
                        className="text-warning"
                        variant="h6"
                        color="text.secondary"
                      >
                        <GradeTwoToneIcon className="bg-dark bg-opacity-50 text-warning" />{' '}
                        {Item.stars}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <a href={`teal:${Item}`}>
                        <Button size="small">{Item.phone}</Button>
                      </a>
                    </CardActions>
                  </Card>
                );
              })
            }
          />
        </div>

        {visible < 13 ? (
          <div className="div-load-more d-flex flex-column align-items-center">
            <img
              className="arrow-gif"
              src="/images/bb7d714a-next-arrow_02g02g02g02g000000.gif"
              alt="arrow-gif"
            />
            <Button
              className="btn-shoeMore "
              variant="contained"
              disableElevation
              onClick={showMoreItems}
            >
              {visible <= 18 ? 'Load more' : showMoreItems(visible)}
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Barbers;
