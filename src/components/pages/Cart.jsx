import React from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

import { BsCartCheck, BsCartX } from 'react-icons/bs';

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <div className="bg-black">
      <Container className="py-4 mt-3 bg-white" style={{ minHeight: '100vh' }}>
        <h1 className={` 'text-l light-primary'} my-5  text-center`}>
          {isEmpty ? (
            <div>
              <h1>Your Cart is Empty</h1>{' '}
              <img
                className="gif-cart mt-5"
                src="images/empty.gif"
                style={{ width: '40%' }}
                alt=""
              />
            </div>
          ) : (
            ''
          )}
        </h1>
        <Row className="justify-content-center">
          <Table responsive="sm" striped bordered hover className="mb-5">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div
                        style={{
                          background: 'white',
                          height: '6rem',
                          overflow: 'hidden',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <img
                            src={item.image}
                            style={{ width: '3rem' }}
                            alt={item.title}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="td-cart">
                      <h6
                        style={{
                          whiteSpace: 'nowrap',
                          width: '7rem',
                          overflow: 'hidden',
                          textOverFlow: 'ellipsis',
                        }}
                      >
                        {item.title}
                      </h6>
                    </td>
                    <td className="td-cart">$ {item.price}</td>
                    <td className="td-cart">Quantity ({item.quantity})</td>
                    <td className="td-cart">
                      <Button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="ms-1"
                      >
                        -
                      </Button>
                      <Button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="ms-1"
                      >
                        +
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => removeItem(item.id)}
                        className="ms-1"
                      >
                        Remove Item
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {!isEmpty && (
            <Row
              style={{ position: 'fixed', bottom: 0 }}
              className={'bg-light text-balck d-flex justify-content-center '}
            >
              <Col className="py-2">
                <h4>Total Price: $ {cartTotal}</h4>
              </Col>
              <Col className="p-0" md={4}>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => emptyCart()}
                >
                  <BsCartX size="1.7rem" />
                  Clear Cart
                </Button>
                <Button variant="success" className="m-2">
                  <BsCartCheck size="1.7rem" />
                 Pay
                </Button>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
