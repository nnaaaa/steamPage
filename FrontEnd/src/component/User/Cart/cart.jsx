import { useContext } from 'react'
import { Link } from "react-router-dom";

import List from './list'
import { DataConsumer } from '../../../data/data'
export default function Cart() {
    const { Price, user, userCart, setUserCart, updateUserCart } = useContext(DataConsumer)
    const deleteCart = (index) => {
        const newCart = userCart.filter((cart, curIndex) => curIndex !== index)
        setUserCart(newCart)
        const newUser = {
            ...user,
            cart: newCart
        }
        updateUserCart(newUser)
    }
    return (
        <section className='cart'>
            {userCart.length !== 0 ?
                <table>
                    <thead>
                        <td>Product</td>
                        <td></td>
                        <td>Sale</td>
                        <td>Price</td>
                        <td></td>
                    </thead>
                    <tbody>
                        {userCart.map((item, index) =>
                            <List info={item} onClick={deleteCart} index={index} />
                        )}
                    </tbody>
                    <thead>
                        <td colspan='2'>Total</td>
                        <td colspan='3' className='total-price'>
                            {Price(String(
                                (userCart.reduce((accumulate, item) =>
                                    accumulate + parseInt(item.price)
                                    * ((100 - item.sale) / 100), 0)))
                            )}
                        </td>
                    </thead>
                </table> :
                <table>
                    <thead>
                        <td>
                            <p>Empty Cart</p>
                            <Link to='/store'>Go to store</Link>
                        </td>
                    </thead>
                </table>
            }

        </section >
    )
}