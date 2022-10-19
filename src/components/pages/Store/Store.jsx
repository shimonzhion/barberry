import "./Store.css";
import React, {useEffect, useState} from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../../features/ProductCard';

function Store() {
  
  const [searchInput, setSearchInput] = useState('');
  const [productData, setProductData] = useState([]);

  async function getResponse(){
      const res = await fetch('https://fakestoreapi.com/products')
                        .then(res=> res.json());
                        setProductData(await res);
  }

  useEffect(()=>{
      getResponse();
  },[]);


  return (
    <Container className="py-4">
    <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
            <h1 className={'text-black my-5'}>Search products</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text className={ 'bg-light text-light-primary'}>
                    <BiSearch size="2rem" />
                </InputGroup.Text>
                <FormControl 
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                    className={'bg-light text-black'}
                />
            </InputGroup>
        </Col>
        <SearchFilter 
            value={searchInput}
            data={productData}
            renderResults={results =>(
                <Row className="justify-content-center">
                    {results.map((item, i)=>(
                        <ProductCard data={item} key={i} />
                    ))}
                </Row>
            )}
        />
        
    </Row>
</Container>
);
};

export default Store ;
