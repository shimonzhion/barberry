import './Store.css';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../../features/ProductCard';

function Store() {
  const [searchInput, setSearchInput] = useState('');
  const [productData, setProductData] = useState([]);

  async function getResponse() {
    const res = await fetch(
      'https://my-json-server.typicode.com/shimonzhion/JSONHairProducts2/HairProducts'
    ).then((res) => res.json());
    setProductData(await res);
  }

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="bg-black">
      <Container className="py-4 bg-dark" style={{ minHeight: '100vh' }}>
        <Row className="justify-content-center">
          <Col
            xs={10}
            md={7}
            lg={6}
            xl={4}
            className="mb-3 mx-auto text-center"
          >
            <InputGroup className="mb-3 mt-5">
              <InputGroup.Text className={'bg-light text-light-primary'}>
                <BiSearch size="2rem" />
              </InputGroup.Text>
              <FormControl
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className={'bg-dark text-black text-white'}
              />
            </InputGroup>
          </Col>
          <SearchFilter
            value={searchInput}
            data={productData}
            renderResults={(results) => (
              <Row className="justify-content-center">
                {results.map((item, i) => (
                  <ProductCard data={item} key={i} />
                ))}
              </Row>
            )}
          />
        </Row>
      </Container>
    </div>
  );
}

export default Store;
