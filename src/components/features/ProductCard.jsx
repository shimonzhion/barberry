import React from 'react';
import { Button, Card} from 'react-bootstrap';

import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';

const ProductCard = (props) => {
    let { image, price, title,title2} = props.data;
    // const [theme] = useThemeHook();
    const { addItem } = useCart();
console.log(props.data);
    const addToCart = () =>{
        addItem(props.data);
    }
    return (
        <Card 
            style={{ width: '18rem', height: 'auto' }}
            className={' text-black text-center p-0 overflow-hidden shadow mx-auto mb-4'}
        >
            <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
            justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                <div style={{ width: '9rem'}}>
                    <Card.Img variant="top" src={image} className="img-fluid" />
                </div>
            </div>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {title2}
                </Card.Title>
                <span>{title}</span>
                <Card.Title>
                    $ <span className="h3">{price}</span>
                </Card.Title>
                <Button
                    onClick={()=> addToCart()}
                    className={`bg-light-primary d-flex align-item-center m-auto border-0`}
                >
                    <BsCartPlus size="1.8rem" />
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;